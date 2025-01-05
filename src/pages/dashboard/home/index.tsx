import React, { useEffect } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import books from "~/data/books.ts";
import type { Book } from "~/iterfaces";

const HomePage: React.FC = () => {
  const [featuredBook, setFeaturedBook] = React.useState<Book>();

  useEffect(() => {
    setFeaturedBook(books.find((book) => book.isFeatured));
  }, []);

  return (
    <div className="bg-slate-700 h-[calc(100vh-4rem)] flex justify-between items-center">
      <div className="text-center pl-8">
        <h1 className="text-4xl font-bold text-gray-200">
          Hola! Welcome to Readers Shop
        </h1>
        <Link to="books" className="text-gray-300 flex gap-2 cursor-pointer">
          Discover your next great read with us{" "}
          <HiArrowNarrowRight className="h-6 w-5" />
        </Link>
      </div>
      <div className="w-[50%]">
        <h2 className="text-2xl font-semibold mb-4 text-gray-200">
          Featured Book
        </h2>
        <div className="bg-white py-4 px-8 rounded-l-3xl shadow-md flex items-center h-[42rem] gap-12">
          <div className="w-2/4 ">
            <img
              src={featuredBook?.coverImageLink}
              alt="Featured Book Cover"
              loading="lazy"
              className="h-129"
            />
          </div>
          <div className="w-3/4 px-4">
            <h3 className="text-lg font-semibold">{featuredBook?.name}</h3>
            <p className="text-gray-600">
              {featuredBook?.details.slice(0, 60) + "..."}
            </p>
            <Link to={`books/${featuredBook?.id}`}>
              <button className="bg-gray-900 text-white px-4 py-2 mt-2 rounded hover:bg-gray-700">
                View More Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
