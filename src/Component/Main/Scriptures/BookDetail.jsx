import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function BookDetail() {
  // Accessing parameters from the URL
  const { category, id, name } = useParams();
  const navigate = useNavigate();

  // Assuming you have the book data available in the same file or fetched from an API
  // Replace this with your actual book data or fetching logic
  const books = {
    Vedas: [
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
    ],
    Upanishad: [
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
    ],
    Epics: [
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
    ],
    BhagvadGeeta: [
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
    ]
  };
  const findBookById = (category, id) => {
    return books[category].find(book => book.id.toString() === id);
  };

  const book = findBookById(category, id);

  if (!book) {
    return <div>Book not found</div>;
  }

  const handleReadNowClick = () => {
    const path = `/scriptures/${category}/${id}/${encodeURIComponent(book.name)}`;
    navigate(path);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row items-start justify-center gap-8 p-6 md:p-12 bg-gray-200 ">
        <div className="flex-1 max-w-md">
          <img
            src={book.src}
            alt="Book Cover"
            width="400"
            height="600"
            className="w-full h-auto rounded-lg shadow-lg"
            style={{ aspectRatio: "400/600", objectFit: "cover" }}
          />
        </div>
        <div class="flex-1 space-y-4 text-start md:text-left">
          <h1 class="text-3xl md:text-4xl font-bold">{book.name}</h1>
          <p class="text-gray-600 dark:text-gray-400 text-lg">
            {book?.description}
          </p>
          <div class="flex justify-center  lg:justify-start  gap-4">
            <a
              class="inline-flex items-center justify-center rounded-md bg-blue-500 hover:bg-blue-600 text-white font-medium px-6  transition-colors"
            
            >
              Purchase
            </a>
            <button onClick={handleReadNowClick} className="inline-flex gap-3 items-center border-gray-400 justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-book" viewBox="0 0 16 16">
                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
              </svg>
              Read Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
