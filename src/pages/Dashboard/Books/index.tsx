import React, { useEffect, useState } from "react";
import Book from "~/components/book";
import books from "~/data/books";
import { useSearchParams } from "react-router-dom";

const BooksPage: React.FC = () => {
  // State for filtering
  const [genreFilter, setGenreFilter] = useState<string | null>(null);
  const [authorFilter, setAuthorFilter] = useState<string | null>(null);

  const [searchParameters] = useSearchParams();
  const filterByAuthor = searchParameters.get("filterByAuthor") || "";

  useEffect(() => {
    if (filterByAuthor) {
      setAuthorFilter(filterByAuthor);
    } else {
      setAuthorFilter(null);
    }
  }, [filterByAuthor]);

  const distinctGenres = [...new Set(books.map((book) => book.genre))];

  const distinctAuthors = [...new Set(books.map((book) => book.author))];

  // Filtered books based on selected filters
  const filteredBooks = books.filter((book) => {
    if (genreFilter && book.genre !== genreFilter) {
      return false;
    }
    if (authorFilter && book.author !== authorFilter) {
      return false;
    }
    return true;
  });

  return (
    <div className="py-4 px-12 bg-orange-400 h-[calc(100vh-4rem)] overflow-y-auto">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-semibold">Available Books</h1>
        <div className="flex space-x-2">
          <label htmlFor="genreFilter" className="hidden">
            Filter by Genre
          </label>
          <select
            id="genreFilter"
            className="border p-2 rounded"
            value={genreFilter || ""}
            onChange={(e) => setGenreFilter(e.target.value || null)}
          >
            {distinctGenres.map((genre, index) => (
              <option value={genre} key={index}>
                {genre}
              </option>
            ))}
          </select>

          <label htmlFor="authorFilter" className="hidden">
            Filter by Author
          </label>
          <select
            id="authorFilter"
            className="border p-2 rounded"
            value={authorFilter || ""}
            onChange={(e) => setAuthorFilter(e.target.value || null)}
          >
            {distinctAuthors.map((author, index) => (
              <option value={author} key={index}>
                {author}
              </option>
            ))}
          </select>

          <button
            className="bg-blue-500 text-white p-2 rounded"
            onClick={() => {
              setGenreFilter(null);
              setAuthorFilter(null);
            }}
          >
            Clear Filters
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredBooks.map((book, index) => (
          <Book key={index} {...book} />
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
