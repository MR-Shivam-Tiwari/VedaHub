import React, { useState } from 'react';
import Data from '../GitaData/Astvakra.json';

function AstavakraGeetaHindi() {
    const [selectedChapter, setSelectedChapter] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');

    // Extract unique chapters from the data
    const chapters = [...new Set(Data.map(item => item.Chapter))];

    const chapterData = Data.filter(item => item.Chapter === String(selectedChapter));

    const handleChapterSelect = (chapter) => {
        setSelectedChapter(parseInt(chapter));
        window.scrollTo(0, 0); // Scroll to top on chapter change
    };

    const handleSearch = () => {
        // Implement search logic here if needed
    };

    const formatDescription = (Text) => {
        let formattedDescription = Text?.replace(/\n/g, '<br /><br />');
        formattedDescription = formattedDescription?.replace(/'([^']*)'/g, '<b>$1</b>');
        formattedDescription = formattedDescription?.replace(/`([^`]*)`/g, '<i style="color: #6b7280;">$1</i>');
        return formattedDescription;
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
        <div className="bg-orange-300 min-h-screen flex flex-col items-center">
            <div className="bg-orange-100 w-full p-2 lg:p-4  flex items-center justify-between">
                <div>
                    
                </div>
                <div className="flex items-center space-x-2 overflow-x-auto">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground  h-6 bg-orange-600 border px-3 py-1  text-white">
                        Chapter
                    </button>
                    {chapters.map((chapter, index) => (
                        <button
                            key={index}
                            onClick={() => handleChapterSelect(chapter)}
                            className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 ${selectedChapter === parseInt(chapter) ? 'bg-orange-600' : 'bg-orange-200'}`}
                        >
                            {chapter}
                        </button>
                    ))}
                </div>
                <div className='hidden lg:block '>

                <div className="flex  items-center justify-center space-x-2">
                    <input
                        className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-40"
                        placeholder="Search Mantra"
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button
                        onClick={handleSearch}
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-[#a0522d] text-white"
                    >
                        Search
                    </button>
                </div>
                </div>
            </div>
            <div className="flex-1 flex items-center text-start p-4 lg:px-40 pb-20">
                <div className="text-center">
                    {chapterData.map((item, index) => (
                        <div key={index} className="mb-4">
                            <div className="text-lg font-semibold mb-2">Chapter {item.Chapter}</div>
                            <div
                                className="text-lg whitespace-pre-wrap text-start"
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
                    className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 ${selectedChapter !== chapters.length ? 'bg-[#a0522d] text-white' : 'bg-[#a0522d] text-white pointer-events-none opacity-50'}`}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default AstavakraGeetaHindi;
