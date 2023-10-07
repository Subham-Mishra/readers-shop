import React from "react";
import { Link } from "react-router-dom";
import { HiMiniUserCircle } from "react-icons/hi2";

const Author: React.FC<{ author: string }> = ({ author }) => {
  return (
    <Link
      to={`/dashboard/books?filterByAuthor=${author}`}
      className="cursor-pointer"
    >
      <div className="bg-white h-16 w-80 p-4 flex items-center gap-2 rounded-lg border border-gray-300 shadow hover:shadow-lg">
        <HiMiniUserCircle className="h-6 w-6" />
        <h2 className="text-lg font-semibold">{author}</h2>
      </div>
    </Link>
  );
};

export default Author;
