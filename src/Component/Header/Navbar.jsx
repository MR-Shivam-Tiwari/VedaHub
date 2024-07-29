import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [showslidebar, setslidebarl] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const togglesidebar = () => {
    setslidebarl(!showslidebar);
  };

  const [activePage, setActivePage] = useState("");

  const handleNavigate = (path) => {
    setActivePage(path);
    navigate(path);
  };

  return (
    <div>
      <header class="flex josefin-sans-bold h-14 lg:h-15 w-full shrink-0 items-center px-4 md:px-6 bg-gray-300">
        <div className="lg:hidden mb-1 " onClick={togglesidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </div>
        <div
          class="mr-3 ml-2 gap-1   lg:flex flex  items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          {/* <img src={logo} alt="" className='h-9 w-9 mb-2 border-gray-300 rounded-full' /> */}
          <span class="text-[#8b4513] font-bold lg:text-[30px] md:text-xl text-xl">
            ShastraSangrah
          </span>
        </div>
        <nav
          aria-label="Main"
          data-orientation="horizontal"
          dir="ltr"
          class="relative z-10 max-w-max flex-1 items-center justify-center hidden lg:flex"
        >
          <div style={{ position: "relative" }}>
            <ul
              data-orientation="horizontal"
              class="group flex flex-1  list-none items-center justify-center space-x-1"
              dir="ltr"
            >
              <div
                class="group inline-flex h-9 w-max cursor-pointer items-center justify-center rounded-md px-4 py-2 text-lg font-medium transition-colors hover:bg-[#e0e0e0] hover:text-[#8b4513] focus:bg-[#e0e0e0] focus:text-[#8b4513] focus:outline-none disabled:pointer-events-none disabled:opacity-50 "
                data-radix-collection-item=""
                onClick={() => navigate("/")}
              >
                Home
              </div>

              <div
                class="group inline-flex h-9 w-max items-center cursor-pointer bg-gray-300 justify-center rounded-md px-4 py-2 text-lg font-medium transition-colors hover:bg-[#e0e0e0] hover:text-[#8b4513] focus:bg-[#e0e0e0] focus:text-[#8b4513] focus:outline-none disabled:pointer-events-none disabled:opacity-50 "
                data-radix-collection-item=""
                onClick={() => navigate("/scriptures/Geeta")}
              >
                Scriptures
              </div>
              <div
                class="group inline-flex h-9 w-max items-center cursor-pointer justify-center rounded-md px-4 py-2 text-lg font-medium transition-colors hover:bg-[#e0e0e0] hover:text-[#8b4513] focus:bg-[#e0e0e0] focus:text-[#8b4513] focus:outline-none disabled:pointer-events-none disabled:opacity-50 "
                data-radix-collection-item=""
                onClick={() => navigate("/about")}
              >
                About Us
              </div>
              <div
                class="group inline-flex h-9 w-max items-center cursor-pointer justify-center rounded-md px-4 py-2 text-lg font-medium transition-colors hover:bg-[#e0e0e0] hover:text-[#8b4513] focus:bg-[#e0e0e0] focus:text-[#8b4513] focus:outline-none disabled:pointer-events-none disabled:opacity-50 "
                data-radix-collection-item=""
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </div>
              <div
                class="group inline-flex h-9 w-max items-center cursor-pointer justify-center rounded-md px-4 py-2 text-lg font-medium transition-colors hover:bg-[#e0e0e0] hover:text-[#8b4513] focus:bg-[#e0e0e0] focus:text-[#8b4513] focus:outline-none disabled:pointer-events-none disabled:opacity-50 "
                data-radix-collection-item=""
                onClick={() => navigate("/donation")}
              >
                Donation
              </div>
             
            </ul>
          </div>
          <div class="absolute left-0 top-full flex justify-center"></div>
        </nav>
        <div class="ml-auto flex items-center gap-3">
          <div className="hidden lg:block">
            <button
              onClick={()=> navigate('/search-book')}
              class="inline-flex items-center   gap-2 bg-orange-500 border-orange-500 hover:bg-orange-600 shadow font-bold  pt-4  justify-center whitespace-nowrap rounded-[4px] md:rounded-md lg:rounded-md  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-6 lg:h-10 md:h-10  px-2 md:px-4 lg:px-4  py-3 text-md lg:text-lg md:text-lg "
            >
              Scripture
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </button>
          </div>

          <button
            onClick={toggleModal}
            class="inline-flex items-center bg-white  justify-center whitespace-nowrap rounded-[4px] md:rounded-md lg:rounded-md  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-6 lg:h-10 md:h-10  px-2 md:px-4 lg:px-4  py-3 text-md lg:text-lg md:text-lg font-semibold"
          >
            Report Bug
          </button>
        </div>
      </header>
      {showModal && (
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex items-center justify-center w-full   bg-black bg-opacity-50"
        >
          <div className="relative p-4 w-full max-w-2xl ">
            <div className="relative bg-white rounded-lg shadow ">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">
                <div>
                  <h1 class="text-3xl font-bold text-gray-900 ">
                    Report a Bug
                  </h1>
                  <p class="mt-2 text-gray-500 ">
                    Help us improve by reporting any issues you encounter.
                  </p>
                </div>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center "
                  onClick={toggleModal}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div class="w-full max-w-2xl mx-auto py-5 px-4 sm:px-6 lg:px-8 overflow-y-auto lg:h-[400px]  sm:max-h-screen">
                <div class="space-y-6">
                  <form class="space-y-6">
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          for="name"
                          class="block text-sm font-medium text-gray-700 "
                        >
                          Name
                        </label>
                        <div class="mt-1">
                          <input
                            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="name"
                            placeholder="Enter your name"
                            required=""
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          for="email"
                          class="block text-sm font-medium text-gray-700 "
                        >
                          Email (optional)
                        </label>
                        <div class="mt-1">
                          <input
                            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="email"
                            placeholder="Enter your email"
                            required=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="grid lg:grid-cols-2  gap-6 ">
                      <div>
                        <label
                          for="phone"
                          class="block text-sm font-medium text-gray-700 "
                        >
                          Phone Number (optional)
                        </label>
                        <div class="mt-1">
                          <input
                            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            id="phone"
                            placeholder="Enter your Phone"
                            required=""
                          />
                        </div>
                      </div>
                      <div>
                        <label
                          class="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                          for="multiple_files"
                        >
                          Upload a Screenshot of Bug
                        </label>
                        <form class="max-w-sm">
                          <label for="file-input" class="sr-only">
                            Choose file
                          </label>
                          <input
                            type="file"
                            name="file-input"
                            id="file-input"
                            class="block w-full border  border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none 
    file:bg-gray-300 file:border-0
    file:me-4
    file:py-2 file:px-4
    dark:file:bg-neutral-700 dark:file:text-neutral-400"
                          />
                        </form>
                      </div>
                    </div>
                    <div>
                      <label
                        for="description"
                        class="block text-sm font-medium text-gray-700 "
                      >
                        Bug Description
                      </label>
                      <div class="mt-1">
                        <textarea
                          class="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[100px]"
                          id="description"
                          placeholder="Describe the bug you encountered"
                          required=""
                        ></textarea>
                      </div>
                    </div>

                    <div class="flex justify-end">
                      <button
                        type="submit"
                        class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Submit Bug Report
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {showslidebar && (
        <div className="fixed inset-0 z-50  w-full h-full bg-black bg-opacity-500">
          <div className=" p-4 w-full  ">
            <div className="relative bg-white rounded-lg shadow h-[600px] ">
              <div className="flex items-center justify-between p-4 md:p-5">
             
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center  "
                  onClick={togglesidebar}
                >
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="w-full  px-4">
                <div>
                  <ul
                    data-orientation="horizontal"
                    className="group list-none space-y-5"
                    dir="ltr"
                  >
                    <div
                      className={`group h-9 w-max cursor-pointer rounded-md px-4 py-2 text-lg font-medium transition-colors ${
                        activePage === "/" ? "bg-[#e0e0e0] text-[#8b4513]" : ""
                      } hover:bg-[#e0e0e0] hover:text-[#8b4513] focus:bg-[#e0e0e0] focus:text-[#8b4513] focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
                      onClick={() => {
                        handleNavigate("/");
                        togglesidebar();
                      }}
                    >
                      Home
                    </div>

                    <div
                      className={`group h-9 w-max cursor-pointer rounded-md px-4 py-2 text-lg font-medium transition-colors ${
                        activePage === "/scriptures/Geeta"
                          ? "bg-[#e0e0e0] text-[#8b4513]"
                          : ""
                      } hover:bg-[#e0e0e0] hover:text-[#8b4513] focus:bg-[#e0e0e0] focus:text-[#8b4513] focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
                      onClick={() => {
                        handleNavigate("/scriptures/Geeta");
                        togglesidebar();
                      }}
                    >
                      Scriptures
                    </div>

                    <div
                      className={`group h-9 w-max cursor-pointer rounded-md px-4 py-2 text-lg font-medium transition-colors ${
                        activePage === "/about"
                          ? "bg-[#e0e0e0] text-[#8b4513]"
                          : ""
                      } hover:bg-[#e0e0e0] hover:text-[#8b4513] focus:bg-[#e0e0e0] focus:text-[#8b4513] focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
                      onClick={() => {
                        handleNavigate("/about");
                        togglesidebar();
                      }}
                    >
                      About Us
                    </div>

                    <div
                      className={`group h-9 w-max cursor-pointer rounded-md px-4 py-2 text-lg font-medium transition-colors ${
                        activePage === "/contact"
                          ? "bg-[#e0e0e0] text-[#8b4513]"
                          : ""
                      } hover:bg-[#e0e0e0] hover:text-[#8b4513] focus:bg-[#e0e0e0] focus:text-[#8b4513] focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
                      onClick={() => {
                        handleNavigate("/contact");
                        togglesidebar();
                      }}
                    >
                      Contact Us
                    </div>

                    <div
                      className={`group h-9 w-max cursor-pointer rounded-md px-4 py-2 text-lg font-medium transition-colors ${
                        activePage === "/donation"
                          ? "bg-[#e0e0e0] text-[#8b4513]"
                          : ""
                      } hover:bg-[#e0e0e0] hover:text-[#8b4513] focus:bg-[#e0e0e0] focus:text-[#8b4513] focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
                      onClick={() => {
                        handleNavigate("/donation");
                        togglesidebar();
                      }}
                    >
                      Donation
                    </div>
                    
                  </ul>
                </div>
                <button
                // onClick={toggleModal}
                onClick={() => {
                  navigate('/search-book');
                  togglesidebar();
                }}
                
                class="inline-flex items-center lg:hidden w-full mt-20 text-2xl    gap-12 bg-orange-500 border-orange-500 shadow font-bold    justify-center whitespace-nowrap rounded-[4px] h-10 md:rounded-md lg:rounded-md  ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground  lg:h-10 md:h-10  px-2 md:px-4 lg:px-4  py-3 text-md lg:text-lg md:text-lg "
              >
                Scripture
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
              </button>
              </div>
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
