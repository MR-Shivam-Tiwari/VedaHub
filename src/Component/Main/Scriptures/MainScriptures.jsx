import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Astvakra from "../Geeta/Atavakra.jpg";
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

const Epics = {
  Ramayana: [
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
  ],
  Mahabharata: [
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
    {
      id: 5,
      name: "Mahabharata Bori-CE",
      src: "https://m.media-amazon.com/images/I/71s6IAl4QlL._AC_UF1000,1000_QL80_.jpg",
    },
  ],
};

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

const Geeta = {
  BhagavadGita: [
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
  ],
  AnuGeeta: [
    {
      id: 3,
      name: "Anu Gita Hindi",
      src: "https://cdn.exoticindia.com/images/products/original/books-2019/nas548.webp",
    },
    {
      id: 4,
      name: "Anu Gita English",
      src: "https://cdn.exoticindia.com/images/products/original/books-2019/nas548.webp",
    },
  ],
  AstavakraGeeta: [
    {
      id: 7,
      name: "Astavakra Geeta Hindi",
      src: "https://m.media-amazon.com/images/I/71Ieu2PglwL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 8,
      name: "Astavakra Geeta English",
      src: "https://m.media-amazon.com/images/I/71Ieu2PglwL._AC_UF1000,1000_QL80_.jpg",
    },
  ]
};

const MainScriptures = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const categories = {
    Geeta: Geeta,
    Upanishad: Upanishads,
    Vedas: vedas,
    Epics: Epics,
  };

  // Set the default category if none is selected
  const defaultCategory = "Vedas";
  const selectedCategory = category || defaultCategory;

  useEffect(() => {
    if (!category) {
      navigate(`/scriptures/${defaultCategory}`, { replace: true });
    }
  }, [category, navigate, defaultCategory]);

  const handleCategoryChange = (newCategory) => {
    navigate(`/scriptures/${newCategory}`);
  };

  const handleBookClick = (book) => {
    const path = `/scriptures/${selectedCategory}/${book.id}`;
    navigate(path);
  };

  return (
    <div className="bg-white">
      <div className="flex josefin-sans-bold flex-col sm:flex-row">
        <div className="sm:relative sm:top-0 sm:left-0 sm:flex-none lg:h-[90vh] bg-black w-full sm:w-[250px] lg:p-8 p-4">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Scriptures</h2>
            <div className="sm:hidden">
              <select
                onChange={(event) => handleCategoryChange(event.target.value)}
                value={selectedCategory}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                {Object.keys(categories).map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div className="hidden sm:flex flex-wrap lg:flex-row sm:flex-col sm:gap-4">
              {Object.keys(categories).map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`inline-flex items-center mb-4 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 justify-start ${
                    selectedCategory === cat ? "bg-accent" : ""
                  }`}
                >
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
                    className="h-6 w-6 text-gray-500"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                  </svg>
                  <span className="ml-2 text-white">{cat}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 lg:p-6 p-1 lg:h-[90vh] overflow-y-auto">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold">{selectedCategory}</h2>
              <div className="mt-4">
                {selectedCategory === "Epics" ||
                selectedCategory === "Geeta" ? (
                  Object.keys(categories[selectedCategory]).map(
                    (subCategory) => (
                      <div className="py-1" key={subCategory}>
                        <div className="flex ">
                          <h3 className="text-xl mb-3 pt-1 bg-orange-300  px-2 rounded font-bold">
                            {subCategory}
                          </h3>
                        </div>
                        <div className="grid border py-10 mb-3 rounded bg-orange-100 grid-cols-2 gap-4 sm:grid-cols-4">
                          {categories[selectedCategory][subCategory].map(
                            (book) => (
                              <div
                                className="flex items-center justify-center gap-2"
                                key={book.id}
                              >
                                <div onClick={() => handleBookClick(book)}>
                                  <div className="relative rounded-lg overflow-hidden w-[160px] shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer">
                                    <img
                                      src={book.src}
                                      alt={book.name}
                                      className="rounded-md"
                                      style={{
                                        aspectRatio: "90/140",
                                        objectFit: "cover",
                                        width: "160px",
                                      }}
                                      loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
                                    <div className="absolute bottom-0 left-0 p-2 text-white text-sm font-semibold">
                                      {book.name}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    )
                  )
                ) : (
                  <div className="grid bg-orange-200 py-10 rounded grid-cols-2 gap-4 sm:grid-cols-4">
                    {categories[selectedCategory].map((book) => (
                      <div
                        className="flex items-center justify-center gap-2"
                        key={book.id}
                      >
                        <div onClick={() => handleBookClick(book)}>
                          <div className="relative rounded-lg overflow-hidden w-[160px] shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer">
                            <img
                              src={book.src}
                              alt={book.name}
                              className="rounded-md"
                              style={{
                                aspectRatio: "90/140",
                                objectFit: "cover",
                                width: "160px",
                              }}
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-2 text-white text-sm font-semibold">
                              {book.name}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScriptures;
