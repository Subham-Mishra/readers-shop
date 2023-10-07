import type React from "react";
import { useEffect, useState } from "react";
import Book from "~/components/book";
import books from "~/data/books";
import { useSearchParams } from "react-router-dom";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { FaCheck } from "react-icons/fa";

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
          {(!!genreFilter || !!authorFilter) && (
            <button
              className="p-2 text-left rounded-md w-44 bg-gray-900 text-white"
              onClick={() => {
                setGenreFilter(null);
                setAuthorFilter(null);
              }}
            >
              Clear Filters
            </button>
          )}

          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <button className="p-2 text-left rounded-md w-44 bg-gray-900 text-white">
                Filter by Genre
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="h-[25rem] mt-1 rounded-md overflow-y-auto w-44 mr-4 cursor-pointer">
              {distinctGenres.map((genre, index) => (
                <DropdownMenu.Item key={index}>
                  <button
                    className={
                      "bg-gray-900 text-white hover:bg-gray-700 p-2 w-full text-left flex gap-2 items-center"
                    }
                    onClick={() => {
                      setGenreFilter(genre);
                    }}
                  >
                    {genre}
                    {genreFilter === genre && (
                      <FaCheck className="h-4 w-8 mb-1" />
                    )}
                  </button>
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.Content>
          </DropdownMenu.Root>

          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <button className="p-2 text-left rounded-md w-44 bg-gray-900 text-white">
                Filter by Author
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="h-[25rem] mt-1 rounded-md overflow-y-auto w-44 mr-4 cursor-pointer">
              {distinctAuthors.map((author, index) => (
                <DropdownMenu.Item key={index}>
                  <button
                    className={
                      "bg-gray-900 text-white hover:bg-gray-700 p-2 w-full text-left flex gap-2 items-center"
                    }
                    onClick={() => {
                      setAuthorFilter(author);
                    }}
                  >
                    {author}
                    {authorFilter === author && (
                      <FaCheck className="h-4 w-8 mb-1" />
                    )}
                  </button>
                </DropdownMenu.Item>
              ))}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => <Book key={index} {...book} />)
        ) : (
          <p className="text-gray-800 font-md mt-8">
            No books matching the filters!
          </p>
        )}
      </div>
    </div>
  );
};

export default BooksPage;
