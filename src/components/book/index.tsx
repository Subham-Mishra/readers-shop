import type React from "react";
import { Link } from "react-router-dom";
import { Book } from "~/iterfaces";

const Book: React.FC<Book> = ({
  id,
  name,
  author,
  genre,
  coverImageLink,
  price,
}) => {
  return (
    <Link to={`/dashboard/books/${id}`} className="cursor-pointer">
      <div className="bg-white h-96 p-4 rounded-lg border border-gray-300 shadow hover:shadow-lg">
        <div className="mb-4">
          <img
            src={coverImageLink}
            alt="Book Cover"
            className="h-60 object-contain"
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

export default Book;
