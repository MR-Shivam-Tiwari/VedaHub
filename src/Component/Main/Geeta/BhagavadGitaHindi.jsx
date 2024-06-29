import React, { useState } from 'react';
import gita from "./GitaData/Bhagvadgita.json";

function BhagavadGitaHindi() {
  const [selectedChapter, setSelectedChapter] = useState(1);
  const [selectedShloka, setSelectedShloka] = useState(1);
  const [selectedCommentary, setSelectedCommentary] = useState('');

  const handleCommentaryClick = (commentary) => {
    setSelectedCommentary(commentary);
  };

  const chapter = gita.filter(shloka => shloka.Chapter === selectedChapter.toString());
  const shloka = chapter.find(shloka => shloka.ShlokaNo === selectedShloka.toString());

  const handleChapterChange = (event) => {
    setSelectedChapter(parseInt(event.target.value, 10));
    setSelectedShloka(1);
  };

  const handleShlokaChange = (event) => {
    setSelectedShloka(parseInt(event.target.value, 10));
  };
  const formatText = (text) => {
    // Split the text by line breaks first
    return text.split('\n').map((line, index) => {
      // Split each line by backticks
      const parts = line.split(/(`[^`]+`)/g);
      return (
        <React.Fragment key={index}>
          {parts.map((part, i) =>
            part.startsWith('`') && part.endsWith('`') ? (
              <span key={i} className='text-gray-500  text-[15px]'>{part.slice(1, -1)}</span>
            ) : (
              part
            )
          )}
          <br />
        </React.Fragment>
      );
    });
  };

  const uniqueChapters = [...new Set(gita.map(shloka => shloka.Chapter))];

  return (
    <div className='bg-orange-300 min-h-screen'>
      <div className="w-full max-w-7xl mx-auto py-4 pb-14 lg:py-12 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <select
              value={selectedChapter}
              onChange={handleChapterChange}
              className="flex font-bold josefin-sans-bold h-10 items-center justify-between rounded-md shadow border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-40"
            >
              {uniqueChapters.map((chapter, index) => (
                <option className='font-bold ' key={index} value={chapter}>Chapter {chapter}</option>
              ))}
            </select>
            <select
              value={selectedShloka}
              onChange={handleShlokaChange}
              className="flex h-10 items-center p-5 josefin-sans-bold justify-between rounded-md shadow border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-40"
            >
              {chapter.map((shloka, index) => (
                <option className='font-bold ' key={index} value={shloka.ShlokaNo}>Shloka {shloka.ShlokaNo}</option>
              ))}
            </select>
          </div>
          <div className="mt-4 md:mt-0">
            <input className="flex h-10 w-full shadow-sm rounded-md border border-input bg-white-900 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Search" />
          </div>
        </div>
        {shloka && (
          <div className="bg-gray-100 shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-4 text-center">Sanskrit Shloka</h2>
            <p className="text-2xl mb-7 text-center  yatra-one-regular">{shloka.Shloka}</p>
            <h2 className="text-3xl font-bold mb-4  text-center">Translation (Hindi - English)</h2>
            <div className="space-y-2 border p-5 shadow rounded">
              <div className="flex flex-col items-center">
                <p className="text-lg border p-2 py-3 mb-2 bg-gray-300 rounded josefin-sans-bold text-center">
                  {formatText(shloka.Hindi)}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-lg border p-2 py-3 bg-yellow-300 josefin-sans-bold rounded text-center">
                  {formatText(shloka.English)}
                </p>
              </div>
            </div>

          </div>
        )}
        <div className="flex flex-col md:flex-row items-center  justify-center lg:gap-8 gap-4 mt-8">
          <button
            onClick={() => handleCommentaryClick('Shankaracharya')}
            className={`inline-flex items-center w-[300px] justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-input shadow h-10 px-4 py-2 ${selectedCommentary === 'Shankaracharya' ? 'bg-orange-500' : 'bg-white hover:bg-accent hover:text-accent-foreground'}`}
          >
            Shankaracharya Commentary
          </button>
          <button
            onClick={() => handleCommentaryClick('Ramanujacharya')}
            className={`inline-flex items-center w-[300px] justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-input shadow h-10 px-4 py-2 ${selectedCommentary === 'Ramanujacharya' ? 'bg-orange-500' : 'bg-white hover:bg-accent hover:text-accent-foreground'}`}
          >
            Ramanujacharya Commentary
          </button>
          <button
            onClick={() => handleCommentaryClick('Madhvacharya')}
            className={`inline-flex items-center w-[300px] justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-input shadow h-10 px-4 py-2 ${selectedCommentary === 'Madhvacharya' ? 'bg-orange-500' : 'bg-white hover:bg-accent hover:text-accent-foreground'}`}
          >
            Madhvacharya Commentary
          </button>
        </div>
        <div className="my-8 martel-sans-black  p-4 mb-20 bg-orange-400 shadow-lg rounded-md">
          {selectedCommentary === 'Shankaracharya' && <p>  {formatText(shloka.Shankaracharya.English)}</p>}
          {selectedCommentary === 'Ramanujacharya' && <p>{shloka.Ramanujacharya.English}</p>}
          {selectedCommentary === 'Madhvacharya' && <p>{shloka.Madhvacharya.English}</p>}
          {!selectedCommentary && <p>Select a commentary to view details.</p>}
        </div>
        <div className="bg-orange-200 w-full p-4 lg:py-6 lg:px-80 flex justify-between fixed bottom-0 left-0">
          <button
            onClick={() => setSelectedShloka(selectedShloka > 1 ? selectedShloka - 1 : selectedShloka)}
            className="inline-flex items-center shadow justify-center whitespace-nowrap rounded-md text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-6 lg:w-[150px] py-2 bg-white hover:bg-gray-200 text-black"
          >
            Previous
          </button>
          <button
            onClick={() => setSelectedShloka(selectedShloka < chapter.length ? selectedShloka + 1 : selectedShloka)}
            className="inline-flex items-center shadow justify-center  whitespace-nowrap rounded-md text-sm  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-6 py-2 lg:w-[150px] bg-orange-700 hover:bg-orange-500 text-white font-bold"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default BhagavadGitaHindi;
