import React, { useState } from "react";
const vedas = [
  {
    id: 1,
    name: "Rigveda",
    src: "https://m.media-amazon.com/images/I/51mDE-WDILL.jpg",
  },
  {
    id: 2,
    name: "Samaveda",
    src: "https://nepalyogahome.com/wp-content/uploads/2021/05/samaveda.jpg",
  },
  {
    id: 3,
    name: "Yajurveda",
    src: "https://m.media-amazon.com/images/I/51fkgWsI+qL.jpg",
  },
  {
    id: 4,
    name: "Atharvaveda",
    src: "https://nepalyogahome.com/wp-content/uploads/2021/05/Atharvaveda.jpg",
  },
];
const Epics = [
  {
    id: 1,
    name: "Ramayana Hindi",
    src: "https://admin.gitapress.org/assets/uploads/media-uploader/624e855656449.webp",
  },
  {
    id: 2,
    name: "Ramayana English",
    src: "https://admin.gitapress.org/assets/uploads/media-uploader/624e84e4cbfce.webp",
  },
  {
    id: 3,
    name: "Mahabharata Hindi",
    src: "https://admin.gitapress.org/assets/uploads/media-uploader/624e855e7085d.webp",
  },
  {
    id: 4,
    name: "Mahabharata English",
    src: "https://m.media-amazon.com/images/I/71s6IAl4QlL._AC_UF1000,1000_QL80_.jpg",
  },
];
const Upanishads = [
  {
    id: 1,
    name: "Isha Upanishad",
    src: "https://cdn.exoticindia.com/images/products/original/books-2019/uak245.jpg",
  },
  {
    id: 2,
    name: "Kena Upanishad",
    src: "https://sanatan.in/cdn/shop/products/68_1.jpg?v=1656756815",
  },
  {
    id: 3,
    name: "Katha Upanishad",
    src: "https://cdn.exoticindia.com/images/products/original/books/gpa057.jpg",
  },
  {
    id: 4,
    name: "Prashna Upanishad",
    src: "https://cdn.exoticindia.com/images/products/original/books/gpa044.jpg",
  },
  {
    id: 5,
    name: "Mundaka Upanishad",
    src: "https://cdn.exoticindia.com/images/products/original/books/gpa051.jpg",
  },
  {
    id: 6,
    name: "Mandukya Upanishad",
    src: "https://m.media-amazon.com/images/I/A1o5c0y+tlL._AC_UF894,1000_QL80_.jpg",
  },
  {
    id: 7,
    name: "Taittiriya Upanishad",
    src: "https://cdn.exoticindia.com/images/products/original/books/gpa049.jpg",
  },
  {
    id: 8,
    name: "Aitareya Upanishad",
    src: "https://sanatan.in/cdn/shop/products/72-copy-2_1.jpg?v=1656336366",
  },
  {
    id: 9,
    name: "Chandogya Upanishad",
    src: "https://m.media-amazon.com/images/I/51cz7ToCbZL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: 10,
    name: "Brihadaranyaka Upanishad",
    src: "https://m.media-amazon.com/images/I/41M3QpHxkCS._SY445_SX342_.jpg",
  },
  {
    id: 11,
    name: "Shvetashvatara Upanishad",
    src: "https://sanatan.in/cdn/shop/products/73-copy-3.jpg?v=1651300907",
  },
];

const BhagvadGeeta = [
  {
    id: 1,
    name: "Bhagavad Gita Hindi",
    src: "https://admin.gitapress.org/assets/uploads/media-uploader/tatavavavacana-vashashhata-sasakaranae1644392839.webp",
  },
  {
    id: 2,
    name: "Bhagavad Gita English",
    src: "https://admin.gitapress.org/assets/uploads/media-uploader/624e84e26cea0.webp",
  },
];

function MainScriptures() {
  const [selectedCategory, setSelectedCategory] = useState("Vedas");
  return (
    <div>
      <div className="flex flex-col sm:flex-row">
        <div className="sm:relative sm:top-0 sm:left-0 sm:flex-none lg:h-[80vh]  bg-black w-full sm:w-[250px] p-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <h2 class="text-lg font-semibold text-white">Scriptures</h2>
            </div>
            <div className=" flex items-start lg:flex-col sm:gap-4">
              <div className="">
                <button
                  onClick={() => setSelectedCategory("Vedas")}
                  className={`inline-flex items-center mb-4 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 justify-start w-full ${selectedCategory === "Vedas" ? "bg-accent" : ""
                    }`}
                  class="inline-flex mb-4 items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 justify-start w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-6 w-6 text-gray-500 dark:text-gray-400"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                  </svg>
                  <span class="ml-2 text-white">Vedas</span>
                </button>
                <div>
                  <button
                    onClick={() => setSelectedCategory("Upanishad")}
                    className={`inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 justify-start w-full ${selectedCategory === "Upanishad" ? "bg-accent" : ""
                      }`}
                    class="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 justify-start w-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="h-6 w-6 text-gray-500 dark:text-gray-400"
                    >
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                    </svg>
                    <span class="ml-2 text-white">Upanishads</span>
                  </button>
                </div>
              </div>
              <div>
                <button
                  onClick={() => setSelectedCategory("Bhagavad Gita")}
                  className={`inline-flex mb-4 items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 justify-start w-full ${selectedCategory === "Bhagavad Gita" ? "bg-accent" : ""
                    }`}
                  class="inline-flex mb-4 items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 justify-start w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="h-6 w-6 text-gray-500 dark:text-gray-400"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                  </svg>
                  <span class="ml-2 text-white">Bhagavad Gita</span>
                </button>
                <div>
                  <button
                    onClick={() => setSelectedCategory("Epics")}
                    className={`inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 justify-start w-full ${selectedCategory === "Epics" ? "bg-accent" : ""
                      }`}
                    class="inline-flex items-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 justify-start w-full"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="h-6 w-6 text-gray-500 dark:text-gray-400"
                    >
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                    </svg>
                    <span class="ml-2 text-white">Epics</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-1 p-6 lg:h-[80vh] overflow-y-auto ">
          <div class="space-y-8">
            {selectedCategory === "Vedas" && (
              <div>
                <h2 class="text-2xl font-bold">Vedas</h2>
                <div class="mt-4 grid grid-cols-2  gap-4 sm:grid-cols-4">
                  {vedas.map((veda) => (
                    <div className="flex items-center justify-center">
                      <div key={veda.id} class="relative  rounded-lg overflow-hidden w-[180px] shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer " >
                        <img
                          src={veda.src}

                          alt={veda.name}
                          className="rounded-md"
                          style={{ aspectRatio: "120/180", objectFit: "cover", width: "180px" }}
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
                        <div class="absolute bottom-4 left-4 text-white">
                          <h3 class="text-lg font-bold"> {veda.name}</h3>
                          <button class="inline-flex text-xs h-6  transform hover:scale-105 hover:shadow-2xl  text-black items-center bg-white justify-center whitespace-nowrap rounded-[3px] ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-lg font-semibold">
                            Read  <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="ml-1 h-4 w-4"
                            >
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path>
                            </svg>
                          </button>

                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            )}
            {selectedCategory === "Upanishad" && (
              <div>
                <h2 class="text-2xl font-bold">Upanishads</h2>
                <div class="mt-4 grid grid-cols-2 gap-4  sm:grid-cols-5">
                  {Upanishads.map((veda) => (
                    <div className="flex items-center justify-center">
                      <div key={veda.id} class="relative  rounded-lg overflow-hidden w-[180px] shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer " >
                        <img
                          src={veda.src}

                          alt={veda.name}
                          className="rounded-md"
                          style={{ aspectRatio: "120/180", objectFit: "cover", width: "180px" }}
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
                        <div class="absolute bottom-4 left-4 text-white">
                          <h3 class="text-lg font-bold"> {veda.name}</h3>
                          <button class="inline-flex text-xs h-6  transform hover:scale-105 hover:shadow-2xl  text-black items-center bg-white justify-center whitespace-nowrap rounded-[3px] ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-lg font-semibold">
                            Read  <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="ml-1 h-4 w-4"
                            >
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path>
                            </svg>
                          </button>

                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {selectedCategory === "Bhagavad Gita" && (
              <div className="">
                <h2 class="text-2xl font-bold">Bhagavad Gita</h2>
                <div className="">
                  <div class="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {BhagvadGeeta.map((veda) => (
                      <div className="flex items-center justify-center">
                        <div key={veda.id} class="relative  rounded-lg overflow-hidden w-[180px] shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer " >
                          <img
                            src={veda.src}

                            alt={veda.name}
                            className="rounded-md"
                            style={{ aspectRatio: "120/180", objectFit: "cover", width: "180px" }}
                          />
                          <div class="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
                          <div class="absolute bottom-4 left-4 text-white">
                            <h3 class="text-lg font-bold"> {veda.name}</h3>
                            <button class="inline-flex text-xs h-6  transform hover:scale-105 hover:shadow-2xl  text-black items-center bg-white justify-center whitespace-nowrap rounded-[3px] ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-lg font-semibold">
                              Read  <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                class="ml-1 h-4 w-4"
                              >
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                              </svg>
                            </button>

                          </div>
                        </div>
                      </div>
                    ))}

                  </div>
                </div>
              </div>
            )}
            {selectedCategory === "Epics" && (
              <div>
                <h2 class="text-2xl font-bold">Epics</h2>
                <div class="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                  {Epics.map((veda) => (
                    <div className="flex items-center justify-center">
                      <div key={veda.id} class="relative  rounded-lg overflow-hidden w-[180px] shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer " >
                        <img
                          src={veda.src}

                          alt={veda.name}
                          className="rounded-md"
                          style={{ aspectRatio: "120/180", objectFit: "cover", width: "180px" }}
                        />
                        <div class="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
                        <div class="absolute bottom-4 left-4 text-white">
                          <h3 class="text-lg font-bold"> {veda.name}</h3>
                          <button class="inline-flex text-xs h-6  transform hover:scale-105 hover:shadow-2xl  text-black items-center duration-500 bg-white justify-center whitespace-nowrap rounded-[3px] ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 text-lg font-semibold">
                            Read  <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="ml-1 h-4 w-4"
                            >
                              <path d="M5 12h14"></path>
                              <path d="m12 5 7 7-7 7"></path>
                            </svg>
                          </button>

                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainScriptures;
