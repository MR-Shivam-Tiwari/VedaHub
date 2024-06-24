import React, { useState, useRef, useCallback, useEffect } from "react";
import { EpubView } from "react-reader";
import mahabharataEpub from "./EpubFile/MB.epub";
function MahabharataHindi() {
  const [epubFile, setEpubFile] = useState(mahabharataEpub);
  const [location, setLocation] = useState(null);
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [parvs, setParvs] = useState([]);
  const [selectedParv, setSelectedParv] = useState(null);
  const [uparvs, setUparvs] = useState([]);
  const [selectedUparv, setSelectedUparv] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const renditionRef = useRef(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [pageNumberFilter, setPageNumberFilter] = useState(null);
  const [loading, setLoading] = useState(true);

  const onTocLoaded = (toc) => {
    // Assuming each top-level item in the TOC is a book
    const books = toc.map((item, index) => ({
      label: item.label,
      href: item.href,
      parvs: item.subitems || [],
      index: index,
    }));
    setBooks(books);
    setSelectedBook(null);
    setParvs([]);
    setSelectedParv(null);
    setUparvs([]);
    setSelectedUparv(null);
    setChapters([]);
  };

  const handleBookChange = (event) => {
    const selectedBookLabel = event.target.value;
    const book = books.find((book) => book.label === selectedBookLabel);
    if (book) {
      setSelectedBook(book);
      // Call selectBook if it's needed
      selectBook(book);
    }
  };
  const goToPage = (pageNumber) => {
    if (renditionRef.current && pageNumber) {
      renditionRef.current.display(pageNumber);
    }
  };

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const drawerStyle = {
    position: "fixed",
    top: 0,
    left: isDrawerOpen ? 0 : "-250px", // Slide in from the left if isOpen is true
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

  const closeButtonStyle = {
    bottom: "20px",
    width: "100%",
    marginTop: "10px",
    left: "20px",
    padding: "10px",
    border: "none",
    cursor: "pointer",
  };
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    readFile(file);
  };

  const readFile = (file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      console.log("File read successfully", event.target.result);
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

  const selectBook = (book) => {
    setSelectedBook(book);
    setParvs(book.parvs);
    setSelectedParv(null);
    setUparvs([]);
    setSelectedUparv(null);
    setChapters([]);
    goToChapter(book.href);
  };

  const selectParv = (event) => {
    const href = event.target.value;
    const parv = parvs.find((p) => p.href === href);
    setSelectedParv(parv);
    if (parv && parv.subitems && parv.subitems.length > 0) {
      setUparvs(parv.subitems);
      setSelectedUparv(null);
      setChapters([]);
    } else {
      setUparvs([]);
      setSelectedUparv(null);
      setChapters(parv ? parv.subitems || [] : []);
    }
    goToChapter(href);
  };

  const selectUparv = (event) => {
    const href = event.target.value;
    const uparv = uparvs.find((up) => up.href === href);
    setSelectedUparv(uparv);
    setChapters(uparv ? uparv.subitems || [] : []);
    goToChapter(href);
  };

  const selectChapter = (event) => {
    const href = event.target.value;
    setSelectedChapter(href);
    goToChapter(href);
  };

  const goToChapter = (href) => {
    console.log("Navigating to chapter:", href);
    setLocation(href);
  };

  const ChapterList = ({ chapters }) => {
    if (chapters.length === 0) {
      return null; // Hide the ChapterList if there are no chapters
    }
    return (
      <>
        <select
          className="  border-gray-400"
          value={selectedChapter}
          onChange={selectChapter}
          style={{ width: "100%", padding: "5px", fontSize: "14px" }}
        >
          <option value="" disabled>
            Select Chapter
          </option>
          {chapters.map((chapter, index) => (
            <option key={index} value={chapter.href}>
              {chapter.label}
            </option>
          ))}
        </select>
      </>
    );
  };
  const drawerRef = useRef(null);

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

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return Math.min(prevProgress + 0.5, 100); // Increment by 0.5
        } else {
          clearInterval(interval);
          setLoading(false); // Optionally, set loading to false when done
          return prevProgress;
        }
      });
    }, 100); // 100ms interval for slower progress

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#f0d1a2]">
      <div
        className="bg-gray-200 min-h-screen"
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div className="flex px-2 items-center justify-between lg:hidden">
          <div>
            <button
              className="flex bg-gray-400 h-9 my-2 items-center font-bold"
              onClick={toggleDrawer}
              style={menuButtonStyle}
            >
              <span className="mb-1" style={{ marginLeft: "5px" }}>
                Select Parva
              </span>
            </button> 
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="number"
              placeholder="Search By page number"
              value={pageNumberFilter || ""}
              onChange={(e) => setPageNumberFilter(e.target.value)}
              id="first_name"
              className="bg-gray-50 w-[175px] h-10 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block px-2 py-2.5"
            />
            <button
              onClick={() => goToPage(pageNumberFilter)}
              style={{ cursor: "pointer" }}
              className="bg-[#8b4513] font-bold text-white p-2 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={drawerRef}
          className="z-20  lg:hidden lg:static lg:z-auto bg-gray-200"
          style={drawerStyle}
        >
          <div className="flex justify-end pt-2 px-2 ">
            <button
              className="lg:hidden  font-bold p-2 text-white text-lg  bg-gray-400 rounded "
              onClick={toggleDrawer}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </button>
          </div>
          <div
            className="flex-shrink-0 mt-6 lg:block"
            style={{
              flex: "0 0 250px",
              padding: "10px",
              textAlign: "left",
              maxHeight: "calc(100vh - 100px)",
              overflowY: "auto",
            }}
          >
            <h3 className="font-bold mb-1">Select Book</h3>
            <ul className="mb-3">
              {books.map((book, index) => (
                <button
                  key={index}
                  onClick={() => selectBook(book)}
                  style={{
                    cursor: "pointer",
                    fontWeight: book === selectedBook ? "bold" : "normal",
                    background: book === selectedBook ? "black" : "",
                    color: book === selectedBook ? "white" : "black",
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
            {selectedBook && (
              <>
                <h3 className="font-bold mb-1">Parva</h3>
                <select
                  className="mb-3 border-2 rounded border-gray-400"
                  value={selectedParv ? selectedParv.href : ""}
                  onChange={selectParv}
                  style={{ width: "100%", padding: "5px", fontSize: "14px" }}
                >
                  <option value="" disabled>
                    Select Parva
                  </option>
                  {parvs.map((parv, index) => (
                    <option key={index} value={parv.href}>
                      {parv.label}
                    </option>
                  ))}
                </select>
              </>
            )}
            {selectedParv && uparvs.length > 0 && (
              <>
                <h3 className="font-bold mb-1">UpParva</h3>
                <select
                  className="mb-2 border-2 rounded border-gray-400"
                  value={selectedUparv ? selectedUparv.href : ""}
                  onChange={selectUparv}
                  style={{ width: "100%", padding: "5px", fontSize: "14px" }}
                >
                  <option value="" disabled>
                    Select UpParva
                  </option>
                  {uparvs.map((uparv, index) => (
                    <option key={index} value={uparv.href}>
                      {uparv.label}
                    </option>
                  ))}
                </select>
              </>
            )}
            <div>
              {(selectedUparv || (selectedParv && uparvs.length === 0)) &&
                chapters.length > 0 && (
                  <div>
                    <h3 className="font-bold mb-1">Chapter</h3>
                    <select
                      className="border-2 py-2 rounded-[5px]  border-gray-400"
                      value={selectedChapter ? selectedChapter.href : ""}
                      onChange={selectChapter}
                      style={{
                        width: "230px",
                        fontSize: "14px",
                      }}
                    >
                      <option value="" disabled>
                        Select Chapter
                      </option>
                      {chapters.map((chapter, index) => (
                        <option className="" key={index} value={chapter.href}>
                          {chapter.label}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
            </div>
            <button
              className="lg:hidden mt-[-30px] font-bold text-white text-lg bg-[#8b4513] rounded "
              onClick={toggleDrawer}
              style={closeButtonStyle}
            >
              Search
            </button>
          </div>
        </div>

        {epubFile ? (
          <>
            {loading && (
              <div className="w-full h-10 py-5 mb-5 bg-gray-200 px-10">
                <div
                  className="h-full"
                  style={{ width: "100%", transition: "width 2s" }}
                >
                  <div className="flex justify-between">
                    <span className=" text-lg font-medium text-blue-700">
                      Loading...
                    </span>
                    <span className="text-sm font-medium text-orange-700">
                      {progress}%
                    </span>
                  </div>

                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-orange-900 h-2.5 rounded-full"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            <div style={{ width: "100%" }}>
              <div
                className="hidden lg:block"
                style={{
                  padding: "10px",
                  textAlign: "left",
                  overflowY: "auto",
                }}
              >
                <div className="flex items-center justify-between px-5">
                  <div className="flex items-center gap-5">
                    <div>
                      <select
                        className="border-2 px-[20px] py-2 rounded-[7px] bg-orange-100 border-gray-400"
                        value={selectedBook ? selectedBook.label : ""}
                        onChange={handleBookChange}
                        style={{
                          fontSize: "14px",
                          width: "220px",
                        }}
                      >
                        <option value="" disabled>
                          Select Mahabharat Book
                        </option>
                        {books.map((book, index) => (
                          <option key={index} value={book.label}>
                            {book.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      {selectedBook && (
                        <>
                          <select
                            className=" border-2 px-[30px] py-2 rounded-[7px] bg-orange-100 border-gray-400"
                            value={selectedParv ? selectedParv.href : ""}
                            onChange={selectParv}
                            style={{
                              width: "200px",
                              fontSize: "14px",
                            }}
                          >
                            <option value="" disabled>
                              Select Parva
                            </option>
                            {parvs.map((parv, index) => (
                              <option key={index} value={parv.href}>
                                {parv.label}
                              </option>
                            ))}
                          </select>
                        </>
                      )}{" "}
                    </div>
                    <div>
                      {selectedParv && uparvs.length > 0 && (
                        <>
                          <select
                            className=" border-2 px-[30px] py-2 rounded-[7px] bg-orange-100 border-gray-400"
                            value={selectedUparv ? selectedUparv.href : ""}
                            onChange={selectUparv}
                            style={{
                              width: "200px",
                              fontSize: "14px",
                            }}
                          >
                            <option value="" disabled>
                              Select UpParva
                            </option>
                            {uparvs.map((uparv, index) => (
                              <option key={index} value={uparv.href}>
                                {uparv.label}
                              </option>
                            ))}
                          </select>
                        </>
                      )}
                    </div>
                    <div>
                      {(selectedUparv ||
                        (selectedParv && uparvs.length === 0)) &&
                        chapters.length > 0 && (
                          <div>
                            <select
                              className="border-2 px-[30px] py-2 rounded-[7px] bg-orange-100 border-gray-400"
                              value={
                                selectedChapter ? selectedChapter.href : ""
                              }
                              onChange={selectChapter}
                              style={{
                                width: "500px",
                                fontSize: "14px",
                              }}
                            >
                              <option value="" disabled>
                                Select Chapter
                              </option>
                              {chapters.map((chapter, index) => (
                                <option
                                  className=""
                                  key={index}
                                  value={chapter.href}
                                >
                                  {chapter.label}
                                </option>
                              ))}
                            </select>
                          </div>
                        )}
                    </div>
                  </div>
                  <div className="hidden bg-gray-200 lg:block">
                    <div className="flex gap-5  p-2 px-6 justify-end items-center   ">
                      <div className="flex gap-4 items-center">
                        {" "}
                        {/* Updated: Added items-center class */}
                        <input
                          type="number"
                          placeholder="Search By page number"
                          value={pageNumberFilter || ""}
                          onChange={(e) => setPageNumberFilter(e.target.value)}
                          id="first_name"
                          className="bg-gray-50 w-[205px] h-10 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full px-2 py-2.5"
                        />
                        <button
                          onClick={() => goToPage(pageNumberFilter)}
                          style={{ cursor: "pointer" }}
                          className="bg-[#8b4513] font-bold text-white  px-4  p-2 rounded"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="w-[100%] lg:py-5 py-3 pb-10 min-h-screen  bg-orange-200"
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
                  epubOptions={{ flow: "scrolled" }} // Ensure content is scrollable
                  ref={renditionRef}
                  getRendition={handleRendition}
                  style={{ flex: "1", overflowX: "hidden" }}
                />
              </div>
            </div>
            <div className="bg-orange-100 w-full p-3 lg:py-5 lg:px-80 flex justify-between fixed bottom-0 left-0">
              <button
                className="bg-gray-700 w-40 p-2 font-bold text-white px-4   rounded"
                onClick={prevPage}
              >
                Previous
              </button>
              <button
                className="bg-[#8b4513] w-40 font-bold text-white   p-2  rounded"
                onClick={nextPage}
              >
                Next
              </button>
            </div>
          </>
        ) : (
          <div>
            Please upload an EPUB file:
            <div style={{ marginTop: "20px" }}>
              <input
                type="file"
                accept=".epub"
                onChange={handleFileUpload}
                style={{ display: "none" }}
                id="fileInput"
              />
              <label
                htmlFor="fileInput"
                style={{
                  cursor: "pointer",
                  padding: "10px",
                  border: "1px solid black",
                  borderRadius: "5px",
                }}
              >
                Upload EPUB
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MahabharataHindi;
