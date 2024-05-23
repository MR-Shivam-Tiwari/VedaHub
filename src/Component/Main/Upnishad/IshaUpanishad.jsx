import React, { useState } from 'react'

function IshaUpanishad() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    const [commentryopen, setcommentryopen] = useState(false);

    const handlecommentry = () => {
        setcommentryopen(!commentryopen);
    };
    const [selectedLanguage, setSelectedLanguage] = useState(null);

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
    };
    return (
        <div>
            <div>
                <div className="flex flex-col sm:flex-row ">
                    <div className="  bg-gray-100 p-6 dark:bg-gray-800 sm:relative sm:top-0 sm:left-0 sm:flex-none lg:h-[80vh]  bg-black w-full sm:w-[250px] p-8">
                        <div className="space-y-4">
                            <div>
                                <button
                                    type="button"
                                    role="combobox"
                                    aria-controls="radix-:r2b:"
                                    aria-expanded="false"
                                    aria-autocomplete="none"
                                    dir="ltr"
                                    data-state="closed"
                                    className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                                >
                                    <span style={{ pointerEvents: "none" }}>Mantra 1</span>
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
                                        className="h-4 w-4 opacity-50"
                                        aria-hidden="true"
                                    >
                                        <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 p-6 lg:h-[80vh] overflow-y-auto">
                        <div className="mb-6 flex items-center justify-between">
                            <div className="space-y-1">
                                <h2 className="text-2xl font-bold">Isha Upanishad</h2>

                            </div>
                            <div className="flex items-center space-x-4">
                                <input
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-w-xs"
                                    placeholder="Search mantras..."
                                    type="text"
                                />
                                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
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
                                        className="mr-2 h-4 w-4"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </svg>
                                    Search
                                </button>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="rounded-lg border-2 bg-white p-6 shadow-lg border-gray-300 ">
                                <div className="space-y-4">

                                    <div>
                                        <div className="mb-2 text-sm font-medium">Mantra</div>
                                        <div>
                                            ईशावास्यामिदं सर्व यत्किश्च जगत्यां जगत् । <br />
                                            तेन त्यक्तेन भुञ्जीथा मा गृधः कस्यस्विद् धनम् ।।

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <button
                                    type="button"
                                    aria-controls="translation-card"
                                    aria-expanded={isOpen}
                                    data-state={isOpen ? 'open' : 'closed'}
                                    onClick={handleToggle}
                                    className="flex text-white w-full items-center justify-between rounded-lg bg-gray-100 px-4 py-3 font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                                >         Translations
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
                                        className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                                    >
                                        <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                </button>
                                {isOpen && (
                                    <div className="bg-white border-2 border-gray-300 rounded-lg p-4 shadow-md">
                                        <div className='flex items-center justify-center gap-3'>
                                            <button
                                                className="w-full mb-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                                onClick={() => handleLanguageSelect('hindi')}
                                            >
                                                Hindi Translation
                                            </button>
                                            <button
                                                className="w-full mb-2 p-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                                                onClick={() => handleLanguageSelect('english')}
                                            >
                                                English Translation
                                            </button>
                                        </div>

                                        {selectedLanguage && (
                                            <div className="mt-4">
                                                <h3 className="text-lg font-semibold mb-2">
                                                    {selectedLanguage === 'hindi' ? 'Hindi Text' : 'English Text'}
                                                </h3>
                                                <p>
                                                    {selectedLanguage === 'hindi'
                                                        ? 'Hindi text goes here...'
                                                        : 'There are only 18 verses in the Isavasya Upanishad, which is part of the 40th chapter of the Yajurveda. Its 18 verses have been an important place like the 18 chapters of Shrimad Bhagavad Gita. Description of Brahma, description of worship, description of prayer, description of Brahma knowledge, description of self-knowledge, description of meaning knowledge, etc. have been given in this Upanis Ishavasyopanishad is named after the Ishavasya of the first mantra ‘Ishavasyamidam Sarvam’. In spite of being small in all the Upanishads, there is an introduction of amazing subtle vision in it. It is said in the first mantra, this whole world is the abode of God.'}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                            <div data-state="closed" className="space-y-4">
                                <button
                                    type="button"
                                    aria-controls="translation-card"
                                    aria-expanded={commentryopen}
                                    data-state={commentryopen ? 'open' : 'closed'}
                                    onClick={handlecommentry}
                                    className="flex w-full text-white items-center justify-between rounded-lg bg-gray-100 px-4 py-3 font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                                >
                                    Commentry
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
                                        className="h-5 w-5 transition-transform data-[state=open]:rotate-180"
                                    >
                                        <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                </button>
                                {commentryopen && (
                                    <div className="bg-white border-2 border-gray-300 rounded-lg p-4 shadow-md">
                                        <div className='flex items-center justify-center gap-3'>
                                            <button
                                                className="w-full mb-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                                                onClick={() => handleLanguageSelect('hindi')}
                                            >
                                                Hindi Commentry
                                            </button>
                                            <button
                                                className="w-full mb-2 p-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                                                onClick={() => handleLanguageSelect('english')}
                                            >
                                                English Commentry
                                            </button>
                                        </div>

                                        {selectedLanguage && (
                                            <div className="mt-4">
                                                <h3 className="text-lg font-semibold mb-2">
                                                    {selectedLanguage === 'hindi' ? 'Hindi Text' : 'English Text'}
                                                </h3>
                                                <p>
                                                    {selectedLanguage === 'hindi'
                                                        ? 'Hindi '
                                                        : 'There are only 18 verses in the Isavasya Upanishad, which is part of the 40th chapter of the Yajurveda. Its 18 verses have been an important place like the 18 chapters of Shrimad Bhagavad Gita. Description of Brahma, description of worship, description of prayer, description of Brahma knowledge, description of self-knowledge, description of meaning knowledge, etc. have been given in this Upanis Ishavasyopanishad is named after the Ishavasya of the first mantra ‘Ishavasyamidam Sarvam’. In spite of being small in all the Upanishads, there is an introduction of amazing subtle vision in it. It is said in the first mantra, this whole world is the abode of God.'}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default IshaUpanishad
