import React from 'react';

function UpnishadPage() {
    return (
        <div>
            <div className="flex flex-col sm:flex-row ">
                <div className="   p-6  sm:relative sm:top-0 sm:left-0 sm:flex-none lg:h-[80vh]  bg-black w-full sm:w-[250px] ">
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
                <div className="flex-1 p-6">
                    <div className="mb-6 flex items-center justify-between">
                        <div className="space-y-1">
                            <h2 className="text-2xl font-bold">Rigveda Mantra</h2>
                            <p className="text-gray-500 ">
                                Mantra 1
                            </p>
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
                        <div className="rounded-lg border-2 bg-white p-6 shadow-lg  ">
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
                        <div data-state="closed" className="space-y-4">
                            <button
                                type="button"
                                aria-controls="radix-:r2c:"
                                aria-expanded="false"
                                data-state="closed"
                                className="flex w-full items-center justify-between rounded-lg bg-gray-100 px-4 py-3 font-medium transition-colors hover:bg-gray-200 "
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
                                    className="h-5 w-5 transition-transform data-[state=open]:rotate-180"
                                >
                                    <path d="m6 9 6 6 6-6"></path>
                                </svg>
                            </button>
                            <div data-state="closed" id="radix-:r2c:" hidden="" className="space-y-4 px-4 pb-4"></div>
                        </div>
                        <div data-state="closed" className="space-y-4">
                            <button
                                type="button"
                                aria-controls="radix-:r2c:"
                                aria-expanded="false"
                                data-state="closed"
                                className="flex w-full items-center justify-between rounded-lg bg-gray-100 px-4 py-3 font-medium transition-colors hover:bg-gray-200 "
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
                            <div data-state="closed" id="radix-:r2c:" hidden="" className="space-y-4 px-4 pb-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpnishadPage;
