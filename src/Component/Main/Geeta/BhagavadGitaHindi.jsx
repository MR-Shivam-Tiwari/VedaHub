import React, { useState } from 'react';
import BookNotFound from '../../Other/BookNotFound';

function BhagavadGitaHindi() {
  const [selectedCommentary, setSelectedCommentary] = useState('');

  const handleCommentaryClick = (commentary) => {
    setSelectedCommentary(commentary);
  };

  return (
    <div className='bg-orange-300 min-h-screen'>
      <div className="w-full max-w-7xl mx-auto py-4 pb-14 lg:py-12 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <button type="button" className="flex h-10 items-center justify-between rounded-md shadow border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-40">
              <span style={{ pointerEvents: "none" }}>Chapter 1</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
            <button type="button" className="flex h-10 items-center  justify-between rounded-md  shadow border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-40">
              <span style={{ pointerEvents: "none" }}>Shloka 1</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true">
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          </div>
          <div className="mt-4 md:mt-0">
            <input className="flex h-10 w-full shadow-sm rounded-md border border-input bg-white-900 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Search" />
          </div>
        </div>
        <div className="bg-gray-100 shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Sanskrit Shloka</h2>
          <p className="text-2xl mb-4 text-center">यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः। तत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम॥</p>
          <div className="space-y-2">
            <div className="flex flex-col items-center">
              <p className="text-lg">Hindi Translation: जहां योगेश्वर कृष्ण और धनुर्धारी अर्जुन हैं, वहीं श्री, विजय, समृद्धि और स</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-lg">English Translation: Wherever there is Krishna, the master </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center  justify-center lg:gap-8 gap-4 mt-8">
          <button
            onClick={() => handleCommentaryClick('Shankaracharya')}
            className={`inline-flex items-center w-[300px] justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  border-input shadow h-10 px-4 py-2 ${selectedCommentary === 'Shankaracharya' ? 'bg-orange-500' : 'bg-white hover:bg-accent hover:text-accent-foreground'}`}
          >
            Shankaracharya Commentary
          </button>
          <button
            onClick={() => handleCommentaryClick('Ramanujacharya')}
            className={`inline-flex items-center w-[300px] justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  border-input shadow h-10 px-4 py-2 ${selectedCommentary === 'Ramanujacharya' ? 'bg-orange-500' : 'bg-white hover:bg-accent hover:text-accent-foreground'}`}
          >
            Ramanujacharya Commentary
          </button>
          <button
            onClick={() => handleCommentaryClick('Madhvacharya')}
            className={`inline-flex items-center w-[300px] justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50  border-input shadow h-10 px-4 py-2 ${selectedCommentary === 'Madhvacharya' ? 'bg-orange-500' : 'bg-white hover:bg-accent hover:text-accent-foreground'}`}
          >
            Madhvacharya Commentary
          </button>
        </div>
        <div className="my-8 p-4 bg-white shadow-lg rounded-md">
          {selectedCommentary === 'Shankaracharya' && <p>Shankaracharya's commentary text goes here...</p>}
          {selectedCommentary === 'Ramanujacharya' && <p>Ramanujacharya's commentary text goes here...</p>}
          {selectedCommentary === 'Madhvacharya' && <p>Madhvacharya's commentary text goes here...</p>}
          {!selectedCommentary && <p>Select a commentary to view details.</p>}
        </div>
        <div className="bg-orange-200 w-full p-4 lg:py-6 lg:px-80 flex justify-between fixed bottom-0 left-0">
          <button
            // onClick={handlePrevious}
            className="inline-flex items-center shadow justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-6 lg:w-[150px] py-2 bg-white hover:bg-gray-200 text-black"
          >
            Previous
          </button>
          <button
            // onClick={handleNext}
            className="inline-flex items-center shadow justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-6 py-2 lg:w-[150px] bg-white hover:bg-gray-200 text-black"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default BhagavadGitaHindi;
