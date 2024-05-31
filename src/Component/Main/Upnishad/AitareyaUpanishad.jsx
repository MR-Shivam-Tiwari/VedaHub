import React, { useState } from "react";
import Vedas from '../Data/UpnishadData/Aitareya.json'
function AitareyaUpanishad() {
  const [isOpen, setIsOpen] = useState(false);
  const [commentryopen, setcommentryopen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedLanguageCommentry, setselectedLanguageCommentry] =
    useState(null);
  const [currentMantraIndex, setCurrentMantraIndex] = useState(0);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handlecommentry = () => {
    setcommentryopen(!commentryopen);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
  };

  const handleLanguageCommentry = (language) => {
    setselectedLanguageCommentry(language);
  };

  const handleNext = () => {
    if (currentMantraIndex < Vedas.length - 1) {
      setCurrentMantraIndex(currentMantraIndex + 1);
      setIsOpen(false);
      setcommentryopen(false);
      setSelectedLanguage(null);
      setselectedLanguageCommentry(null);
    }
  };

  const handlePrevious = () => {
    if (currentMantraIndex > 0) {
      setCurrentMantraIndex(currentMantraIndex - 1);
      setIsOpen(false);
      setcommentryopen(false);
      setSelectedLanguage(null);
      setselectedLanguageCommentry(null);
    }
  };

  // Ensure Vedas is defined and has the expected structure
  if (!Vedas || !Array.isArray(Vedas) || Vedas.length === 0) {
    return <div>No data available</div>;
  }

  const currentMantra = Vedas[currentMantraIndex];
  return (
    <div>
      <div>
        <div>
          <div className="flex flex-col sm:flex-row">
            <div className="p-6 bg-gray-800 sm:relative sm:top-0 sm:left-0 sm:flex-none lg:h-[80vh] w-full sm:w-[250px]">
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
                    className="flex h-10 mb-2 items-center justify-between bg-gray-300 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                  >
                    <span style={{ pointerEvents: "none" }}>
                      Part {currentMantra?.Chapter ?? ""}
                    </span>
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

                  <button
                    type="button"
                    role="combobox"
                    aria-controls="radix-:r2b:"
                    aria-expanded="false"
                    aria-autocomplete="none"
                    dir="ltr"
                    data-state="closed"
                    className="flex h-10 mb-2 items-center justify-between bg-gray-300 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                  >
                    <span style={{ pointerEvents: "none" }}>
                      Khand {currentMantra?.Khand ?? ""}
                    </span>
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
                  <button
                    type="button"
                    role="combobox"
                    aria-controls="radix-:r2b:"
                    aria-expanded="false"
                    aria-autocomplete="none"
                    dir="ltr"
                    data-state="closed"
                    className="flex h-10 items-center justify-between bg-gray-300 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full"
                  >
                    <span style={{ pointerEvents: "none" }}>
                      Mantra {currentMantra?.Mantra ?? ""}
                    </span>
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
                  <h2 className="text-2xl font-bold">Aitareya Upanishad</h2>
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
                <div className="rounded-lg border-2 bg-white p-6 shadow-lg border-gray-300">
                  <div className="space-y-4">
                    <div>
                      <div className="mb-2 flex text-sm font-medium">
                        <span>Part {currentMantra?.Chapter ?? ""}</span>
                        <span> &nbsp; &gt; &nbsp; </span>
                        <span style={{ pointerEvents: "none" }}>
                          Valli {currentMantra?.Khand ?? ""}
                        </span>
                        <span> &nbsp; &gt; &nbsp; </span>
                        <span>Mantra {currentMantra?.Mantra ?? ""}</span>
                      </div>
                      <div>
                        {(currentMantra?.Shloka ?? "")
                          .split("\n") // Split the text at the literal '\n'
                          .map((line, index) => (
                            <React.Fragment key={index}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <button
                    type="button"
                    aria-controls="translation-card"
                    aria-expanded={isOpen}
                    data-state={isOpen ? "open" : "closed"}
                    onClick={handleToggle}
                    className="flex text-white w-full items-center justify-between rounded-lg px-4 py-3 font-medium transition-colors bg-gray-800 hover:bg-gray-700"
                  >
                    Translations
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
                      className={`h-5 w-5 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="bg-white border-2 border-gray-300 rounded-lg p-4 shadow-md">
                      <div className="flex items-center justify-center gap-3">
                        <button
                          className="w-full mb-2 p-2 bg-white text-black border-2 shadow-sm rounded-lg hover:bg-gray-200"
                          onClick={() => handleLanguageSelect("hindi")}
                        >
                          Hindi
                        </button>
                        <button
                          className="w-full mb-2 p-2 bg-white text-black border-2 shadow-sm rounded-lg hover:bg-gray-200"
                          onClick={() => handleLanguageSelect("english")}
                        >
                          English
                        </button>
                      </div>
                      {selectedLanguage && (
                        <div className="mt-4">
                          <h3 className="text-lg font-semibold mb-2">
                            {selectedLanguage === "hindi"
                              ? "Hindi Translation"
                              : "English Translation"}
                          </h3>
                          <p>
                            {selectedLanguage === "hindi"
                              ? currentMantra?.HindiTranslation?.split(
                                  "\n"
                                ).map((line, index) => (
                                  <React.Fragment key={index}>
                                    {line}
                                    <br />
                                  </React.Fragment>
                                ))
                              : currentMantra?.EnglishTranslation}
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
                    data-state={commentryopen ? "open" : "closed"}
                    onClick={handlecommentry}
                    className="flex w-full text-white items-center justify-between rounded-lg px-4 py-3 font-medium transition-colors bg-gray-800 hover:bg-gray-700"
                  >
                    Commentary
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
                      className={`h-5 w-5 transition-transform ${
                        commentryopen ? "rotate-180" : ""
                      }`}
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>
                  {commentryopen && (
                    <div className="bg-white border-2 border-gray-300 rounded-lg p-4 shadow-md">
                      <div className="flex items-center justify-center gap-3">
                        <button
                          className="w-full mb-2 p-2 bg-white text-black border-2 shadow-sm rounded-lg hover:bg-gray-200"
                          onClick={() => handleLanguageCommentry("hindi")}
                        >
                          Hindi
                        </button>
                        <button
                          className="w-full mb-2 p-2 bg-white text-black border-2 shadow-sm rounded-lg hover:bg-gray-200"
                          onClick={() => handleLanguageCommentry("english")}
                        >
                          English
                        </button>
                      </div>
                      {selectedLanguageCommentry && (
                        <div className="mt-4">
                          <h3 className="text-lg font-semibold mb-2">
                            {selectedLanguageCommentry === "hindi"
                              ? "Hindi Commentary"
                              : "English Commentary"}
                          </h3>
                          <p>
                            {selectedLanguageCommentry === "hindi"
                              ? currentMantra?.HindiCommentry.split("\n").map(
                                  (line, index) => (
                                    <React.Fragment key={index}>
                                      {line}
                                      <br />
                                    </React.Fragment>
                                  )
                                )
                              : currentMantra?.EnglishCommentry}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={handlePrevious}
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                    disabled={currentMantraIndex === 0}
                  >
                     <span style={{ userSelect: 'none' }}>Previous</span>
                  </button>
                  <button
                    onClick={handleNext}
                    className="inline-flex items-center justify-center bg-black text-white whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                    disabled={currentMantraIndex === Vedas.length - 1}
                  >
                     <span style={{ userSelect: 'none' }}>Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AitareyaUpanishad;
