import React, {  useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

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

const MainScriptures = () => {
  const navigate = useNavigate();
  const { category } = useParams();
  const categories = {
    BhagvadGeeta: BhagvadGeeta,
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
    <div>
      <div className="flex josefin-sans-bold flex-col sm:flex-row">
        <div className="sm:relative sm:top-0 sm:left-0 sm:flex-none lg:h-[90vh] bg-black w-full sm:w-[250px] lg:p-8 p-4">
          <div className="space-y-4">

            <h2 className="text-lg font-semibold text-white">Scriptures</h2>
            <div className="sm:hidden">
              <select
                onChange={(event) => handleCategoryChange(event.target.value)}
                value={selectedCategory}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"      >
                {Object.keys(categories).map((cat) => (
                  <option key={cat}
                    value={cat}>
                    {cat}
                  </option>
                ))}
              </select>



            </div>
            <div className="hidden sm:flex  flex-wrap lg:flex-row sm:flex-col  sm:gap-4">
              {Object.keys(categories).map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}

                  className={`inline-flex items-center mb-4 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 justify-start ${selectedCategory === cat ? "bg-accent" : ""
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
                    className="h-6 w-6 text-gray-500 dark:text-gray-400"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                  </svg>
                  <span className="ml-2 text-white">{cat}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 p-6 lg:h-[90vh] overflow-y-auto ">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold">{selectedCategory}</h2>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {categories[selectedCategory] && categories[selectedCategory].map((book) => (
                  <div className="flex items-center justify-center gap-2" key={book.id}>
                    <div onClick={() => handleBookClick(book)}>
                      <div className="relative rounded-lg overflow-hidden w-[160px] shadow-xl hover:scale-105 hover:shadow-2xl transform duration-500 cursor-pointer">
                        <img
                          src={book.src}
                          alt={book.name}
                          className="rounded-md"
                          style={{ aspectRatio: "90/140", objectFit: "cover", width: "160px" }}
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
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default MainScriptures;
