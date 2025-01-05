import type React from "react";
import { Link } from "react-router-dom";
import type { Book } from "~/iterfaces";

const BookItem: React.FC<Book> = ({
  id,
  name,
  author,
  genre,
  coverImageLink,
  price,
}) => {
  return (
    <Link to={`/dashboard/books/${id}`} className="cursor-pointer">
      <div className="bg-gray-200 h-128 p-4 rounded-lg border border-gray-300 shadow hover:shadow-lg hover:transform hover:scale-105 duration-300">
        <div className="mb-8 text-center w-full flex flex-col justify-center items-center ">
          <img
            src={coverImageLink}
            alt="Book Cover"
            className="h-60 object-contain"
            loading="lazy"
          />
        </div>
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-gray-800 text-md">Rs. {price}</p>
        <p className="text-gray-600">{author}</p>
        <p className="text-gray-600">Genre: {genre}</p>
      </div>
    </Link>
  );
};

export default BookItem;
