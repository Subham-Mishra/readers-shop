import React from "react";
import { Book } from "~/iterfaces";

const Book: React.FC<Book> = ({
  name,
  author,
  genre,
  coverImageLink,
}) => {
  return (
    <div className="bg-white h-96 p-4 rounded-lg border border-gray-300 shadow hover:shadow-lg cursor-pointer">
      <div className="mb-4">
        <img
          src={coverImageLink}
          alt="Book Cover"
          className="h-60 object-contain"
        />
      </div>
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600">{author}</p>
      <p className="text-gray-600">Genre: {genre}</p>
    </div>
  );
};

export default Book;
