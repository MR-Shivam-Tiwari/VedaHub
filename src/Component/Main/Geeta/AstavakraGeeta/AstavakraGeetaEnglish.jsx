import React, { useState, useRef, useCallback, useEffect } from "react";
import { EpubView } from "react-reader";
import mahabharataEpub from "../AstvakraGita.epub";

function AstavakraGeetaEnglish() {
  const [epubFile, setEpubFile] = useState(mahabharataEpub);
  const [location, setLocation] = useState(null);
  const [books, setBooks] = useState([]);
  const [selectedBookIndex, setSelectedBookIndex] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const renditionRef = useRef(null);
  const drawerRef = useRef(null);
  const [pageNumberFilter, setPageNumberFilter] = useState(null);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const goToPage = (pageNumber) => {
    if (renditionRef.current && pageNumber) {
      renditionRef.current.display(pageNumber);
    }
  };

  const drawerStyle = {
    position: "fixed",
    top: 0,
    left: isDrawerOpen ? 0 : "-250px",
    width: "250px",
    height: "100%",
    backgroundColor: "#fff",
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.2)",
    transition: "left 0.3s ease",
  };

  const menuButtonStyle = {
    color: "black",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    readFile(file);
  };

  const readFile = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      setEpubFile(event.target.result);
    };
    reader.onerror = (error) => {
      console.error("Error reading file", error);
    };
    reader.readAsArrayBuffer(file);
  };

  const onLocationChanged = (loc) => {
    setLocation(loc);
  };

  const onTocLoaded = (toc) => {
    const books = toc.map((item, index) => ({
      label: item.label,
      href: item.href,
      index: index,
    }));
    setBooks(books);
    setSelectedBookIndex(0);
  };

  const handleRendition = useCallback((rendition) => {
    renditionRef.current = rendition;
    renditionRef.current.on("relocated", (location) => {
      console.log("Relocated to:", location);
    });
    renditionRef.current.on("displayError", (error) => {
      console.error("Display Error:", error);
    });
    renditionRef.current.on("rendered", () => {
      setLoading(false); // EPUB file is rendered, stop loading
    });
  }, []);

  const nextPage = () => {
    if (renditionRef.current) {
      renditionRef.current.next();
    }
  };

  const prevPage = () => {
    if (renditionRef.current) {
      renditionRef.current.prev();
    }
  };

  const goToBook = (index) => {
    const book = books[index];
    if (book) {
      setLocation(book.href);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target) &&
        isDrawerOpen
      ) {
        setIsDrawerOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDrawerOpen]);

  return (
    <>
      <div className="hidden bg-gray-200 lg:block">
        <div className="flex gap-5 p-2 px- justify-end items-center">
          <div className="flex items-center">
            {/* Text search input and button commented out */}
          </div>

          <div className="flex gap-4 items-center">
            <input
              type="number"
              placeholder="Enter page number"
              value={pageNumberFilter || ""}
              onChange={(e) => setPageNumberFilter(e.target.value)}
              id="first_name"
              className="bg-gray-50 h-10 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
            <button
              onClick={() => goToPage(pageNumberFilter)}
              style={{ cursor: "pointer" }}
              className="bg-[#8b4513] font-bold text-white px-4 p-2 rounded"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div
        className="bg-gray-200 h-[92vh] lg:h-[95vh]  lg:px-[20px]"
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div className="flex justify-start items-center gap-2 lg:hidden">
          <button
            className="flex w-[340px] bg-gray-400 h-9 my-2 items-center font-bold"
            onClick={toggleDrawer}
            style={menuButtonStyle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              style={{ color: "black", fontWeight: "bold" }}
              className="bi bi-list-ul"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
              />
            </svg>
            <span className="mb-1" style={{ marginLeft: "5px" }}>
              Menu
            </span>
          </button>
        </div>

        <div
          ref={drawerRef}
          className="z-20 lg:flex lg:static lg:hidden lg:z-auto bg-gray-200"
          style={drawerStyle}
        >
          <div className="flex pt-2 px-2 justify-end">
            <button
              className="lg:hidden font-bold p-2 text-white text-lg bg-gray-400 rounded"
              onClick={toggleDrawer}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </button>
          </div>
          <h3 className="font-bold mb-1">Select Parva</h3>
          <div
            className="flex-shrink-0 px-5 lg:px-0 lg:block"
            style={{
              flex: "0 0 250px",
              textAlign: "left",
              maxHeight: "calc(100vh - 100px)",
              overflowY: "auto",
            }}
          >
            <ul className="mb-3">
              {books.map((book, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setSelectedBookIndex(index);
                    goToBook(index);
                  }}
                  style={{
                    cursor: "pointer",
                    fontWeight: index === selectedBookIndex ? "bold" : "normal",
                    background: index === selectedBookIndex ? "#8b4513" : "",
                    color: index === selectedBookIndex ? "white" : "black",
                  }}
                  className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 justify-start gap-2 text-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-file-earmark"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" />
                  </svg>
                  {book.label}
                </button>
              ))}
            </ul>
          </div>
        </div>

        {epubFile ? (
          <>
            {loading && (
              <div className="w-full h-1 bg-gray-200">
                <div
                  className="h-full bg-blue-500"
                  style={{ width: "100%", transition: "width 1s" }}
                ></div>
              </div>
            )}

            <div style={{ width: "100%" }}>
              <div
                className="hidden lg:block"
                style={{
                  flex: "0 0 250px",
                  textAlign: "left",
                  overflowY: "auto",
                }}
              >
                <h3 className="font-bold mb-1"> Select Chapter</h3>
                <ul className="mb-3 flex justify-center">
                  {books.map((book, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedBookIndex(index);
                        goToBook(index);
                      }}
                      style={{
                        cursor: "pointer",
                        fontWeight:
                          index === selectedBookIndex ? "bold" : "normal",
                        background:
                          index === selectedBookIndex ? "#8b4513" : "",
                        color: index === selectedBookIndex ? "white" : "black",
                      }}
                      className="inline-flex items-center  rounded-md text-sm  h-10 px-4 border gap-4  bg-orange-100 py-2 mx-1 shadow  text-black"
                    >
                     {book.label.replace(/Chapter|- | – /g, '')}
                    </button>
                  ))}
                </ul>
              </div>

              <div
                className="w-[100%] h-[75vh] lg:h-[80vh] rounded bg-white"
                style={{
                  flex: "1",
                  overflowY: "auto",
                  overflowX: "hidden",
                  display: "flex",
                }}
              >
                <EpubView
                  url={epubFile}
                  location={location}
                  locationChanged={onLocationChanged}
                  tocChanged={onTocLoaded}
                  epubOptions={{ flow: "scrolled" }}
                  ref={renditionRef}
                  getRendition={handleRendition}
                  style={{ flex: "1", overflowX: "hidden" }}
                />
              </div>
            </div>
            <div className="w-[100%] justify-center lg:gap-[30%] lg:ml-40 items-center flex h-[50px] gap-4">
              <button
                className="bg-gray-700 p-2 font-bold text-white px-4 lg:mb-[130px] rounded"
                onClick={prevPage}
              >
                Previous Page
              </button>
              <button
                className="bg-[#8b4513] font-bold text-white lg:mb-[130px] px-4 p-2 rounded"
                onClick={nextPage}
              >
                Next Page
              </button>
            </div>
          </>
        ) : (
          <div>
            <h3>Upload an EPUB file to read</h3>
            <input type="file" accept=".epub" onChange={handleFileUpload} />
          </div>
        )}
      </div>
    </>
  );
}

export default AstavakraGeetaEnglish;
