import React, { useEffect } from "react";
import books from "~/data/books.ts";
import { Book } from "~/iterfaces";

const HomePage: React.FC = () => {
  const [featuredBook, setFeaturedBook] = React.useState<Book>();

  useEffect(() => {
    setFeaturedBook(books.find((book) => book.isFeatured));
  }, []);

  return (
    <div className="bg-orange-300 h-[calc(100vh-4rem)] flex justify-between items-center">
      <div className="text-center pl-8">
        <h1 className="text-4xl font-bold">Hola! Welcome to Readers Shop</h1>
        <p className="text-gray-800 opacity-50">
          Discover your next great read with us!
        </p>
      </div>
      <div className="">
        <h2 className="text-2xl font-semibold mb-4">Featured Book</h2>
        <div className="bg-white py-4 px-8 rounded-l-3xl shadow-md flex items-center">
          <div className="w-1/4">
            <img
              src={featuredBook?.coverImageLink}
              alt="Featured Book Cover"
              className="h-60"
            />
          </div>
          <div className="w-3/4 px-4">
            <h3 className="text-lg font-semibold">{featuredBook?.name}</h3>
            <p className="text-gray-600">
              {featuredBook?.details.slice(0, 60) + "..."}
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded hover:bg-blue-600">
              View More Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
