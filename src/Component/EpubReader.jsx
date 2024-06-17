import React, { useState, useRef, useCallback, useEffect } from "react";
import { EpubView } from "react-reader";

const EpubReader = () => {
  const [epubFile, setEpubFile] = useState(null);
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
    marginTop:"10px",
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
        <h3 className="font-bold mb-1">Chapter</h3>
        <select
          className="mb-2 border-2 rounded border-gray-400"
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
        
        <div
          className="flex-shrink-0 mt-6 lg:block"
          style={{
            flex: "0 0 250px",
            borderRight: "1px solid gray",
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
          {(selectedUparv || (selectedParv && uparvs.length === 0)) && (
            <ChapterList chapters={chapters} />
          )}
          <button
            className="lg:hidden mt-[-30px] font-bold text-white text-lg bg-blue-500 rounded "
            onClick={toggleDrawer}
            style={closeButtonStyle}
          >
            Search
          </button>
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
              {(selectedUparv || (selectedParv && uparvs.length === 0)) && (
                <ChapterList chapters={chapters} />
              )}
            </div>

            <div
              style={{
                flex: "1",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  overflow: "hidden",
                  margin: "0 auto",
                }}
                className="rounded shadow-lg bg-white lg:w-[600px] h-[520px] w-[340px] lg:h-[750px]"
              >
                <EpubView
                  url={epubFile}
                  location={location}
                  locationChanged={onLocationChanged}
                  tocChanged={onTocLoaded}
                  getRendition={handleRendition}
                  styles={{
                    viewer: {
                      width: "100%",
                      height: "100%",
                    },
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full mb-4">
            <div className="flex justify-between w-1/2">
              <button
                onClick={prevPage}
                className="bg-gray-500 lg:ml-[310px] mt-3 text-white px-4 py-2 font-bold h-8 flex items-center rounded"
              >
                Previous
              </button>
              <button
                onClick={nextPage}
                className="bg-blue-500 text-white lg:mr-[55px] mt-3 font-bold px-4 py-2 h-8 flex items-center rounded"
              >
                Next
              </button>
            </div>
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
  );
};

export default EpubReader;
