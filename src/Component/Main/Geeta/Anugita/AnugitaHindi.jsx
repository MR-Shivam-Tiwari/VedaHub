import React, { useEffect, useState } from "react";
import Data from "../GitaData/Anugita.json";
import { useLocation, useNavigate } from "react-router-dom";



function AnugitaHindi() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const [selectedChapter, setSelectedChapter] = useState(searchParams.get('selectedChapter') || 1);
  const [searchQuery, setSearchQuery] = useState("");


  useEffect(()=>{
    searchParams.set('selectedChapter', selectedChapter);
  
    navigate({
      pathname: location.pathname,
      search: searchParams.toString(),
    });
  
    },[selectedChapter])


  // Extract unique chapters from the data
  const chapters = [...new Set(Data.map((item) => item.Chapter))];

  const chapterData = Data.filter(
    (item) => item.Chapter === String(selectedChapter)
  );

  const handleChapterSelect = (chapter) => {
    setSelectedChapter(parseInt(chapter));
    window.scrollTo(0, 0); // Scroll to top on chapter change
  };

  const handleSearch = () => {
    // Implement search logic here if needed
  };

  const formatDescription = (Text) => {
    if (!Text) return '';

    let formattedDescription = Text.replace(/\n/g, '<br /><br />');
    formattedDescription = formattedDescription.replace(/'([^']*)'/g, '<p style="color: #ea580c; font-size:25px;">$1</p> ');
    formattedDescription = formattedDescription.replace(/`([^`]*)`/g, '<div style="text-align: center; font-weight: bold;">$1</div>');
    return formattedDescription;
  };


  const styles = {
    scrollbar: {
      scrollbarWidth: 'thin', /* For Firefox */
      scrollbarColor: '#c0c0c0 #f0f0f0', /* For Firefox */
      overflowX: 'auto',
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
    setSelectedChapter(prevChapter);
    window.scrollTo(0, 0); // Scroll to top on chapter change
  };

  const handleNext = () => {
    const nextChapter = Math.min(selectedChapter + 1, chapters.length);
    setSelectedChapter(nextChapter);
    window.scrollTo(0, 0); // Scroll to top on chapter change
  };
  return (
    <div style={{ backgroundImage: 'url("/bgg.png")', backgroundSize: 'cover', backgroundPosition: 'center' }}>

      
      <div className=" min-h-screen flex flex-col items-center">
        <div className="bg-orange-100 w-full p-2 lg:px-7  gap-3 flex items-center justify-between">
          <div></div>
          <div className="flex container mt-3 items-center space-x-2 overflow-x-auto" style={styles.scrollbar}>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground h-6 bg-orange-600 border px-3 py-1 text-white">
              Chapter
            </button>
            {chapters.map((chapter, index) => (
              <button
                key={index}
                onClick={() => handleChapterSelect(chapter)}
                className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3 py-2 ${selectedChapter === parseInt(chapter) ? "bg-orange-600" : "bg-orange-200"
                  }`}
              >
                {chapter}
              </button>
            ))}
          </div>
          {/* <div className="hidden lg:block ">
            <div className="flex  items-center justify-center space-x-2">
              <input
                className="flex h-9 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-40"
                placeholder="Search Mantra"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                onClick={handleSearch}
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-9 px-4 py-2 bg-[#a0522d] text-white"
              >
                Search
              </button>
            </div>
          </div> */}
        </div>
        <div className="flex-1 flex items-center text-start p-4 lg:px-40 pb-20">
          <div className="text-center">
            {chapterData.map((item, index) => (
              <div key={index} className="mb-4">
                <div className="text-[30px] josefin-sans-regular font-semibold mb-2">
                  Chapter {item.Chapter}
                </div>
                <div
                  className="text-lg whitespace-pre-wrap  yatra-one-regular text-start"
                  dangerouslySetInnerHTML={{
                    __html: formatDescription(item.Text),
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-orange-100 w-full p-4 flex justify-between fixed bottom-0 left-0">
          <button
            onClick={handlePrevious}
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-[#374151] text-white"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 ${selectedChapter !== chapters.length
                ? "bg-[#a0522d] text-white"
                : "bg-[#a0522d] text-white pointer-events-none opacity-50"
              }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default AnugitaHindi;
