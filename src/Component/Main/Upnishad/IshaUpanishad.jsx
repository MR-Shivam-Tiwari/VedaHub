import React, { useState } from "react";
import Vedas from "../Data/UpnishadData/Isha.json";

function IshaUpanishad() {
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

  const handleSelectMantra = (event) => {
    const index = parseInt(event.target.value, 10);
    setCurrentMantraIndex(index);
    setIsOpen(false);
    setcommentryopen(false);
    setSelectedLanguage(null);
    setselectedLanguageCommentry(null);
  };

  const currentMantra = Vedas[currentMantraIndex];
  return (
    <div className="container mx-auto lg:px-20">
      <div>
        <div className="flex flex-col sm:flex-row ">
          <div className="flex-1 lg:p-6 p-3  ">
            <div className="mb-6 flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="lg:text-2xl font-bold yatra-one-regular">
                  Isha Upanishad
                </h2>
              </div>
              <div className="flex items-center space-x-4">
                <div className="space-y-4">
                  <div className="flex items-center  gap-3 text-gray-600 font-bold">
                    <div className="lg:block hidden">Select Mantra</div>
                    <select
                      value={currentMantraIndex}
                      onChange={handleSelectMantra}
                      className="flex h-10 items-center gap-1 justify-between bg-gray-800 text-white font-bold rounded-md border border-input bg-background px-3 py-2 text-sm  placeholder:text-muted-foreground   cursor-pointer  disabled:opacity-50 lg:w-[200px]"
                    >
                      {Vedas.map((mantra, index) => (
                        <option key={index} value={index}>
                          Mantra {mantra.mantraNumber}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6 overflow-y-auto pb-20">
              <div className="rounded-lg border-2 bg-white p-3 shadow-lg border-gray-300">
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center">
                      <div className="mb-2 p-1 bg-gray-300 flex items-center px-3 h-5 text-xs border rounded-[3px] font-bold">
                        Mantra {currentMantra.mantraNumber}
                      </div>
                    </div>
                    <div className="font-bold martel-black">
                      {currentMantra.shlok.line1}
                    </div>
                    <div className="font-bold martel-black ">
                      {currentMantra.shlok.line2}
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
                        className="w-full mb-2 p-2 bg-white text-black border-2 annapurna-sil-regular shadow-sm   rounded-lg hover:bg-gray-200"
                        onClick={() => handleLanguageSelect("hindi")}
                      >
                        Hindi
                      </button>
                      <button
                        className="w-full mb-2 p-2 bg-white text-black border-2 annapurna-sil-regular shadow-sm   rounded-lg hover:bg-gray-200"
                        onClick={() => handleLanguageSelect("english")}
                      >
                        English
                      </button>
                    </div>

                    {selectedLanguage && (
                      <div className="mt-4">
                        <h3 className="text-lg annapurna-sil-regular font-semibold mb-2">
                          {selectedLanguage === "hindi"
                            ? "Hindi Translation"
                            : "English Translation"}
                        </h3>
                        <div className="annapurna-sil-bold ">
                          {selectedLanguage === "hindi"
                            ? currentMantra.translationHindi
                                .split("\n")
                                .map((line, index) => (
                                  <React.Fragment key={index}>
                                    {line}
                                    <br />
                                  </React.Fragment>
                                ))
                            : currentMantra.translationEnglish}
                        </div>
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
                  className="flex w-full text-white  items-center justify-between rounded-lg px-4 py-3 font-medium transition-colors bg-gray-800 hover:bg-gray-700"
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
                        className="w-full mb-2 p-2 bg-white text-black border-2 shadow-sm  annapurna-sil-regular  rounded-lg hover:bg-gray-200"
                        onClick={() => handleLanguageCommentry("hindi")}
                      >
                        Hindi
                      </button>
                      <button
                        className="w-full mb-2 p-2 bg-white text-black border-2 shadow-sm annapurna-sil-regular   rounded-lg hover:bg-gray-200"
                        onClick={() => handleLanguageCommentry("english")}
                      >
                        English
                      </button>
                    </div>

                    {selectedLanguageCommentry && (
                      <div className="mt-4">
                        <h3 className="text-lg annapurna-sil-regular font-semibold mb-2">
                          {selectedLanguageCommentry === "hindi"
                            ? "Hindi Commentary"
                            : "English Commentary"}
                        </h3>
                        <p className="martel-bold">
                          {selectedLanguageCommentry === "hindi"
                            ? currentMantra.commentaryHindi
                                .split("\n")
                                .map((line, index) => (
                                  <React.Fragment key={index}>
                                    {line}
                                    <br />
                                  </React.Fragment>
                                ))
                            : currentMantra.commentaryEnglish}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="bg-gray-300 w-full p-2 px-10 lg:px-20 flex justify-between fixed bottom-0 left-0">
                <button
                  onClick={handlePrevious}
                  disabled={currentMantraIndex === 0}
                  className="inline-flex items-center justify-center whitespace-nowrap w-[100px] rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-200 h-10 px-4 py-2 bg-gray-100 border shadow  text-black "
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentMantraIndex === Vedas.length - 1}
                  className={`inline-flex items-center justify-center bg-gray-800 w-[100px] text-white whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-600 h-10 px-4 py-2 `}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IshaUpanishad;
