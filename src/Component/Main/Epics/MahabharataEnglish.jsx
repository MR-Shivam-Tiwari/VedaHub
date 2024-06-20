import React, { useState, useRef, useCallback, useEffect } from "react";
import { EpubView } from "react-reader";
import mahabharataEpub from "./EpubFile/KMGMB 18  VOL.epub";

function MahabharataEnglish() {
  const [epubFile, setEpubFile] = useState(mahabharataEpub);
  const [location, setLocation] = useState(null);
  const [books, setBooks] = useState([]);
  const [selectedBookIndex, setSelectedBookIndex] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const renditionRef = useRef(null);
  const drawerRef = useRef(null);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
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
    <div
      className="bg-gray-200 h-[100%] lg:p-[20px]"
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
        className="z-20 lg:flex lg:static lg:z-auto bg-gray-200"
        style={drawerStyle}
      >
        <div className="flex  justify-end">
          <button
            className="lg:hidden  px-2 font-bold text-white text-lg bg-gray-500  m-2 rounded "
            onClick={toggleDrawer}
            // style={closeButtonStyle}
          >
            Close
          </button>
        </div>
        <h3 className="font-bold mb-1">Select Parva</h3>
        <div
          className="flex-shrink-0 mt-1 lg:block"
          style={{
            flex: "0 0 250px",
            // borderRight: "1px solid gray",
            padding: "10px",
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
                  background: index === selectedBookIndex ? "black" : "",
                  color: index === selectedBookIndex ? "white" : "black",
                }}
                className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 justify-start gap-2 text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                </svg>
                {book.label}
              </button>
            ))}
          </ul>
        </div>
      </div>

      {epubFile ? (
        <>
          <div style={{ flex: "1", display: "flex", width: "100%" }}>
            <div
              className="hidden lg:block"
              style={{
                flex: "0 0 250px",
                borderRight: "1px solid gray",
                padding: "10px",
                textAlign: "left",
                maxHeight: "calc(100vh - 100px)",
                overflowY: "auto",
              }}
            >
              <h3 className="font-bold mb-1"> Select Book</h3>
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
                      fontWeight:
                        index === selectedBookIndex ? "bold" : "normal",
                      background: index === selectedBookIndex ? "black" : "",
                      color: index === selectedBookIndex ? "white" : "black",
                    }}
                    className="inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 justify-start gap-2 text-black"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-5 h-5"
                    >
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                    </svg>
                    {book.label}
                  </button>
                ))}
              </ul>
            </div>

            <div
              className="w-[100%] h-[75vh] lg:h-[80vh] rounded mx-1"
              style={{
                flex: "1",
                overflowY: "auto",
                overflowX: "hidden",
                display: "flex",
                background: "#f0d1a2",
              }}
            >
              <EpubView
                url={epubFile}
                location={location}
                locationChanged={onLocationChanged}
                tocChanged={onTocLoaded}
                epubOptions={{ flow: "scrolled" }} // Ensure content is scrollable
                ref={renditionRef}
                getRendition={handleRendition}
                style={{ flex: "1", overflowX: "hidden" }} // Add this if EpubView accepts style props
              />
            </div>
          </div>
          <div
            className="w-[100%] justify-center lg:gap-[30%] lg:ml-40 items-center flex h-[50px] gap-4 mt-2  lg:mt-[-30px] "
            style={{}}
          >
            <button className="bg-gray-400 p-2  rounded" onClick={prevPage}>
              Previous Page
            </button>
            <button
              className="bg-blue-600 font-bold text-white  p-2 rounded"
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
  );
}

export default MahabharataEnglish;
