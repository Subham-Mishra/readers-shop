import React, { Fragment } from "react";
import Author from "~/components/author";
import books from "~/data/books";

const AuthorsPage: React.FC = () => {
  const distinctAuthors = [...new Set(books.map((book) => book.author))];
  return (
    <div className="py-4 px-12 bg-orange-300 h-[calc(100vh-4rem)] overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-semibold">Associated Authors</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {distinctAuthors.map((author, index) => (
          <Fragment key={index}>
            <Author author={author} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default AuthorsPage;
