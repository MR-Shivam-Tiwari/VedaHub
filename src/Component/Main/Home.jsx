import React from "react";
import ExportEmage from "../Image/Explore_books.jpg";
import BhagvadGeeta from "../Image/GeetaGyan.PNG";
import virat from "../Image/ViratRoop.PNG";
import upnishad from "../Image/Designer.jpeg";
import vedas from "../Image/vedass.PNG";
import epic from "../Image/epic.jpeg";
import scripture from "../Image/ScriptureSearch.jpg";
import discussion from "../Image/Discussion.jpg";
import {  useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
  return (
    <div className="josefin-sans-bold">
      <header class="relative h-[500px] w-full overflow-hidden">
        <img
          src={ExportEmage}
          alt="Hindu Scriptures"
          class="object-cover w-full h-full  "
          style={{}}
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
        <div class="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 class="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Explore the Wisdom of Hindu Scriptures
          </h1>
          <p class="mt-4 text-lg sm:text-xl">
            Discover the timeless teachings and profound insights of the Hindu
            faith.
          </p>
        </div>
      </header>
      <main>
        <section class="py-16 bg-gray-50">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 class="text-3xl font-bold tracking-tight">
                  Discover the Wisdom of Hindu Scriptures
                </h2>
                <p class="mt-4 text-gray-500">
                  Explore the timeless teachings and profound insights of the
                  Hindu faith through our extensive collection of sacred
                  scriptures.
                </p>
                <div class="mt-8 flex gap-2">
                  <a class="inline-flex items-center px-4 text-sm py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={()=>"/scriptures/BhagvadGeeta"} >
                    Explore Scriptures
                  </a>
                  <a class="inline-flex items-center px-4 py-2 border text-sm border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Support The Developer
                  </a>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div class="relative h-64 rounded-lg overflow-hidden">
                  <img
                    src={virat}
                    alt="Bhagavad Gita"
                    class="object-cover h-full w-full"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
                  <div class="absolute bottom-4 left-4 text-white">
                    <h3 class="text-lg font-bold">Bhagavad Gita</h3>
                    <p class="text-sm">Explore the timeless wisdom</p>
                    <a
                      class="inline-flex items-center mt-2  cursor-pointer text-indigo-400 hover:text-indigo-500"
                      onClick={()=>navigate("/scriptures/BhagvadGeeta")}
                    >
                      Read More
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
                        class="ml-1 h-4 w-4"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="relative h-64 rounded-lg overflow-hidden">
                  <img
                    src={upnishad}
                    alt="Upanishads"
                    class="object-cover h-full w-full"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
                  <div class="absolute bottom-4 left-4 text-white">
                    <h3 class="text-lg font-bold">Upanishads</h3>
                    <p class="text-sm">Uncover the secrets of the universe</p>
                    <a
                      class="inline-flex items-center mt-2 cursor-pointer text-indigo-400 hover:text-indigo-500"
                      onClick={()=>navigate("/scriptures/Upanishad")}
                    >
                      Read More
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
                        class="ml-1 h-4 w-4"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="relative h-64 rounded-lg overflow-hidden">
                  <img
                    src={vedas}
                    alt="Vedas"
                    class="object-cover h-full w-full"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
                  <div class="absolute bottom-4 left-4 text-white">
                    <h3 class="text-lg font-bold">Vedas</h3>
                    <p class="text-sm">Explore the foundational texts</p>
                    <a
                      class="inline-flex items-center mt-2 cursor-pointer text-indigo-400 hover:text-indigo-500"
                        onClick={()=>navigate("/scriptures/Vedas")}
                    >
                      Read More
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
                        class="ml-1 h-4 w-4"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="relative h-64 rounded-lg overflow-hidden">
                  <img
                    src={epic}
                    alt=""
                    class="object-cover h-full w-full"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
                  <div class="absolute bottom-4 left-4 text-white">
                    <h3 class="text-lg font-bold">Epics</h3>
                    <p class="text-sm">Discover the ancient stories</p>
                    <a
                      class="inline-flex items-center mt-2 text-indigo-400 hover:text-indigo-500"
                        onClick={()=> navigate("/scriptures/Epics")}
                    >
                      Read More
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
                        class="ml-1 h-4 w-4"
                      >
                        <path d="M5 12h14"></path>
                        <path d="m12 5 7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="py-16 bg-gray-50">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl font-bold tracking-tight text-center">
              Explore Our Interactive Tools
            </h2>
            <p class="mt-4 text-gray-500 text-center">
              Enhance your spiritual journey with our interactive tools and
              resources.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                <img
                  src={scripture}
                  alt="Scripture Search"
                  width="400"
                  height="300"
                  class="w-full h-48 object-cover"
                  // style="aspect-ratio: 400 / 300; object-fit: cover;"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div class="p-6">
                  <h3 class="text-xl font-bold">Scripture Search</h3>
                  <p class="mt-2 text-gray-500">
                    Easily find and explore specific verses, passages, and
                    teachings from the Hindu scriptures.
                  </p>
                  <a
                    class="inline-flex items-center mt-4 text-indigo-600 hover:text-indigo-700"
                    
                  >
                    Try it now
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
                      class="ml-1 h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                <img
                  src={discussion}
                  alt="Discussion Forums"
                  width="400"
                  height="300"
                  class="w-full h-48 object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div class="p-6">
                  <h3 class="text-xl font-bold">Discussion</h3>
                  <p class="mt-2 text-gray-500">
                    Connect with like-minded individuals, share insights, and
                    engage in thought-provoking discussions.
                  </p>
                  <a
                    class="inline-flex items-center mt-4 text-indigo-600 hover:text-indigo-700"
                    
                  >
                    Join the Conversation
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
                      class="ml-1 h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                <img
                  src="https://img.freepik.com/free-photo/woman-sitting-yoga-pose-beach_1098-1454.jpg?t=st=1716402576~exp=1716406176~hmac=b7fd34237ea522857731056dcb2bd889157afa2854014d05ea09128ebb65fada&w=1380"
                  alt="Meditation Guides"
                  width="400"
                  height="300"
                  class="w-full h-48 object-cover"
                  style={{ aspectRatio: "400/300", objectFit: "cover" }}
                />
                <div class="p-6">
                  <h3 class="text-xl font-bold">Meditation Guides</h3>
                  <p class="mt-2 text-gray-500">
                    Explore guided meditations and techniques to deepen your
                    spiritual practice and find inner peace.
                  </p>
                  <a
                    class="inline-flex items-center mt-4 text-indigo-600 hover:text-indigo-700"
                    
                  >
                    Start Meditating
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
                      class="ml-1 h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="container mx-auto py-12 px-4 md:px-6 lg:px-8">
          <h2 class="mb-8 text-3xl font-serif text-[#333] dark:text-[#f5f5f5]">
            Testimonials
          </h2>
          <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div class="rounded-lg bg-[#f5f5f5] dark:bg-[#1a1a1a] p-6 shadow-lg">
              <img
                src="https://img.freepik.com/free-photo/young-girl-with-short-hair-wearing-polo-shirt-looking-camera-with-smile-face_141793-46444.jpg?t=st=1716402440~exp=1716406040~hmac=33accbe4f5587804b36c60a49063dbb49d65f0fa572718f55e4b5e2907241b2b&w=1380"
                alt="Testimonial 1"
                width="80"
                height="80"
                class="rounded-full"
                style={{ aspectRatio: "80/80", objectFit: "cover" }}
              />
              <blockquote class="mt-4 text-[#333] dark:text-[#f5f5f5]">
                "The insights I've gained from studying the Upanishads have
                truly transformed my understanding of life and spirituality."
                <cite class="mt-4 block text-[#666] dark:text-[#999]">
                  - Anita, Spiritual Seeker
                </cite>
              </blockquote>
            </div>
            <div class="rounded-lg bg-[#f5f5f5] dark:bg-[#1a1a1a] p-6 shadow-lg">
              <img
                alt="Testimonial 2"
                class="rounded-full"
                height="80"
                src="https://img.freepik.com/free-photo/young-adult-enjoying-virtual-date_23-2149328221.jpg?t=st=1716402442~exp=1716406042~hmac=0496aa220dc1c8faa5814758fccbb0593a7a174f68eb7c7ada4f03c4e38d651e&w=740"
                width="80"
                style={{ aspectRatio: "80/80", objectFit: "cover" }}
              />
              <blockquote class="mt-4 text-[#333] dark:text-[#f5f5f5]">
                "The Bhagavad Gita has become a constant companion, guiding me
                through the complexities of life with its timeless wisdom."
                <cite class="mt-4 block text-[#666] dark:text-[#999]">
                  - Raj, Philosopher
                </cite>
              </blockquote>
            </div>
            <div class="rounded-lg bg-[#f5f5f5] dark:bg-[#1a1a1a] p-6 shadow-lg">
              <img
                alt="Testimonial 3"
                class="rounded-full"
                height="80"
                src="https://img.freepik.com/free-photo/selfie-portrait-videocall_23-2149186124.jpg?t=st=1716402445~exp=1716406045~hmac=fa148b63558a39a15f01d69c7ebcdb8b73f6aaf5b7a24cf9abf360e5cad3fb36&w=740"
                width="80"
                style={{ aspectRatio: "80/80", objectFit: "cover" }}
              />
              <blockquote class="mt-4 text-[#333] dark:text-[#f5f5f5]">
                "Studying the Vedas has been a profound and life-changing
                experience. The depth of knowledge and insight is truly
                remarkable."
                <cite class="mt-4 block text-[#666] dark:text-[#999]">
                  - Priya, Scholar
                </cite>
              </blockquote>
            </div>
          </div>
        </section>
        {/* <section class="py-16 bg-white">
                    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 class="text-3xl font-bold tracking-tight text-center">Upcoming Events</h2>
                        <p class="mt-4 text-gray-500 text-center">
                            Stay informed about the latest events, workshops, and retreats related to Hindu scriptures.
                        </p>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                            <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                                <img
                                    src="/placeholder.svg"
                                    alt="Event 1"
                                    width="400"
                                    height="300"
                                    class="w-full h-48 object-cover"
                                    style={{aspectRatio:"400/300", objectFit:"cover"}}
                                />
                                <div class="p-6">
                                    <h3 class="text-xl font-bold">Bhagavad Gita Study Retreat</h3>
                                    <p class="mt-2 text-gray-500">
                                        Join us for a 3-day immersive retreat to explore the profound teachings of the Bhagavad Gita.
                                    </p>
                                    <div class="mt-4 flex items-center">
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
                                            class="h-5 w-5 text-gray-400 mr-2"
                                        >
                                            <path d="M8 2v4"></path>
                                            <path d="M16 2v4"></path>
                                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                            <path d="M3 10h18"></path>
                                        </svg>
                                        <span class="text-gray-500">June 10-12, 2023</span>
                                    </div>
                                    <div class="mt-2 flex items-center">
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
                                            class="h-5 w-5 text-gray-400 mr-2"
                                        >
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polyline points="12 6 12 12 16 14"></polyline>
                                        </svg>
                                        <span class="text-gray-500">9:00 AM - 5:00 PM</span>
                                    </div>
                                    <a class="inline-flex items-center mt-4 text-indigo-600 hover:text-indigo-700" href="#">
                                        Learn More
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
                                            class="ml-1 h-4 w-4"
                                        >
                                            <path d="M5 12h14"></path>
                                            <path d="m12 5 7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                                <img
                                    src="/placeholder.svg"
                                    alt="Event 2"
                                    width="400"
                                    height="300"
                                    class="w-full h-48 object-cover"
                                    style={{aspectRatio:"400/300", objectFit:"cover"}}
                                />
                                <div class="p-6">
                                    <h3 class="text-xl font-bold">Vedic Chanting Workshop</h3>
                                    <p class="mt-2 text-gray-500">
                                        Immerse yourself in the ancient art of Vedic chanting and discover its transformative power.
                                    </p>
                                    <div class="mt-4 flex items-center">
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
                                            class="h-5 w-5 text-gray-400 mr-2"
                                        >
                                            <path d="M8 2v4"></path>
                                            <path d="M16 2v4"></path>
                                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                            <path d="M3 10h18"></path>
                                        </svg>
                                        <span class="text-gray-500">July 15, 2023</span>
                                    </div>
                                    <div class="mt-2 flex items-center">
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
                                            class="h-5 w-5 text-gray-400 mr-2"
                                        >
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polyline points="12 6 12 12 16 14"></polyline>
                                        </svg>
                                        <span class="text-gray-500">10:00 AM - 4:00 PM</span>
                                    </div>
                                    <a class="inline-flex items-center mt-4 text-indigo-600 hover:text-indigo-700" href="#">
                                        Learn More
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
                                            class="ml-1 h-4 w-4"
                                        >
                                            <path d="M5 12h14"></path>
                                            <path d="m12 5 7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div class="bg-white rounded-lg shadow-sm overflow-hidden">
                                <img
                                    src="/placeholder.svg"
                                    alt="Event 3"
                                    width="400"
                                    height="300"
                                    class="w-full h-48 object-cover"
                                    style={{aspectRatio:"400/300", objectFit:"cover"}}
                                />
                                <div class="p-6">
                                    <h3 class="text-xl font-bold">Yoga and Meditation Retreat</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
        <section class="py-16 bg-white">
          <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-3xl mb-3 font-bold tracking-tight">
              Daily Inspiration
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="relative h-64 rounded-lg overflow-hidden">
                <img
                  src="https://img.freepik.com/free-photo/portrait-indian-man-celebrating-baisakhi-festival_23-2151216994.jpg?t=st=1716402742~exp=1716406342~hmac=1b764632906488ce9d050b9c3094d78af98fe8f8fc0ef251f54c9037a057bf0d&w=1380"
                  alt="Daily Quote"
                  class="object-cover h-full w-full"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
                <div class="absolute bottom-4 left-4 text-white">
                  <blockquote class="text-lg font-medium">
                    "The essence of all spiritual practice is your attitude,
                    your consciousness, your being. It is not what you do, but
                    how you do it."
                  </blockquote>
                  <cite class="block text-sm font-normal mt-2">
                    - Swami Vivekananda
                  </cite>
                </div>
              </div>
              {/* <div>
                <h2 class="text-3xl font-bold tracking-tight">
                  Daily Wisdom and Inspiration
                </h2>
                <p class="mt-4 text-gray-500">
                  Start your day with a powerful quote or verse from the Hindu
                  scriptures, providing guidance and inspiration for your
                  spiritual journey.
                </p>
              </div> */}
              <div
                id="9whzy9rbpp"
                class="bg-gray-300 border border-gray-300 rounded-lg p-6 space-y-4"
              >
                <h2 class="text-2xl font-bold text-gray-900">Newsletter</h2>
                <p class="text-gray-600">
                  Stay up-to-date with the latest news, insights, and events
                  from the world of Hindu scriptures. Sign up for our newsletter
                  and receive exclusive content delivered straight to your
                  inbox.
                </p>
                <form class="flex space-x-2">
                  <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <button
                    class="inline-flex bg-black text-white items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                    type="submit"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
