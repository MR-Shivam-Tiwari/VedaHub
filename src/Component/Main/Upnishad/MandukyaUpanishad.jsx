import React, { useEffect, useState } from "react";
import Data from "../Data/UpnishadData/Mandukya.json";
import { useLocation, useNavigate } from "react-router-dom";

function MandukyaUpanishad() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const [selectedChapter, setSelectedChapter] = useState(() => {
    const savedChapter = localStorage.getItem("selectedChapter");
    return savedChapter
      ? parseInt(savedChapter)
      : parseInt(searchParams.get("selectedChapter")) || 1;
  });
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!searchParams.get("selectedChapter")) {
      searchParams.set("selectedChapter", selectedChapter);
      navigate(
        {
          pathname: location.pathname,
          search: searchParams.toString(),
        },
        { replace: true }
      );
    }
    localStorage.setItem("selectedChapter", selectedChapter);
  }, [selectedChapter]);

  useEffect(() => {
    const chapterFromUrl = parseInt(searchParams.get("selectedChapter"));
    if (chapterFromUrl && chapterFromUrl !== selectedChapter) {
      setSelectedChapter(chapterFromUrl);
    }
  }, [location.search]);

  // Extract unique chapters from the data
  const chapters = [...new Set(Data.map((item) => item.Chapter))];

  const chapterData = Data.filter(
    (item) => item.Chapter === String(selectedChapter)
  );

  const handleChapterSelect = (chapter) => {
    const chapterNum = parseInt(chapter);
    setSelectedChapter(chapterNum);
    searchParams.set("selectedChapter", chapterNum);
    navigate({
      pathname: location.pathname,
      search: searchParams.toString(),
    });
    window.scrollTo(0, 0); // Scroll to top on chapter change
  };

  const handleSearch = () => {
    // Implement search logic here if needed
  };

  const formatDescription = (Text) => {
    if (!Text) return "";

    let formattedDescription = Text.replace(/\n/g, "<br /><br />");
    formattedDescription = formattedDescription.replace(
      /'([^']*)'/g,
      '<p style="color: rgb(239 88 0); text-align: center; font-size:28px; font-weight: bold;">$1</p> '
    );
    formattedDescription = formattedDescription.replace(
      /`([^`]*)`/g,
      '<div style="text-align: start; font-weight: bold; color:black; width:100%;  font-size:19px; line-height: 1.5;">$1</div>'
    );
    return formattedDescription;
  };

  const styles = {
    scrollbar: {
      scrollbarWidth: "thin" /* For Firefox */,
      scrollbarColor: "#c0c0c0 #f0f0f0" /* For Firefox */,
      overflowX: "auto",
    },
    customScrollbar: `
      .flex::-webkit-scrollbar {
        height: 10px;
      }
  
      .flex::-webkit-scrollbar-track {
        background: #f0f0f0;
      }
  
      .flex::-webkit-scrollbar-thumb {
        background-color: #c0c0c0;
        border-radius: 10px;
        border: 2px solid #f0f0f0;
      }
    `,
  };

  const handlePrevious = () => {
    const prevChapter = Math.max(selectedChapter - 1, 1);
    handleChapterSelect(prevChapter);
    window.scrollTo(0, 0); // Scroll to top on chapter change
  };

  const handleNext = () => {
    const nextChapter = Math.min(selectedChapter + 1, chapters.length);
    handleChapterSelect(nextChapter);
    window.scrollTo(0, 0); // Scroll to top on chapter change
  };

  return (
    <div>
      <div
        style={{
          backgroundImage: 'url("/bgg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="min-h-screen flex flex-col items-center">
          <div className="bg-orange-100 w-full p-2 lg:px-7 gap-3 flex items-center justify-center">
            <div></div>
            <div
              className="flex container items-center space-x-2 overflow-x-auto"
              style={styles.scrollbar}
            >
              {chapters.map((chapter, index) => (
                <button
                  key={index}
                  onClick={() => handleChapterSelect(chapter)}
                  className={`inline-flex items-center justify-center whitespace-nowrap rounded-[4px] text-sm font-bold text-black ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3 py-2 ${
                    selectedChapter === parseInt(chapter)
                      ? "bg-orange-600"
                      : "bg-orange-200"
                  }`}
                >
                  Chapter {chapter}
                </button>
              ))}
            </div>
          </div>
          <div className="flex-1 flex items-center text-start p-4 lg:px-40 pb-20 w-full">
            <div className="text-center w-full">
              {chapterData.map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="text-[40px] josefin-sans-regular font-semibold mb-2">
                    Chapter {item.Chapter}
                  </div>
                  <div
                    className="text-md text-gray-600 whitespace-pre-wrap yatra-one-regular text-start break-words"
                    dangerouslySetInnerHTML={{
                      __html: formatDescription(item.Text),
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-orange-100 w-full p-4 lg:px-20 flex justify-between fixed bottom-0 left-0 right-0">
            <button
              onClick={handlePrevious}
              className="inline-flex items-center justify-center w-[120px] whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-[#374151] text-white"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className={`inline-flex items-center justify-center w-[120px] whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 ${
                selectedChapter !== chapters.length
                  ? "bg-[#a0522d] text-white"
                  : "bg-[#a0522d] text-white pointer-events-none opacity-50"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MandukyaUpanishad;
