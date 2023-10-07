import { useEffect, useState } from "react";
import { Book } from "~/iterfaces";
import { FaCartPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";
import books from "~/data/books";

const BookDetails: React.FC = () => {
  const [cart, setCart] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book>();
  let { bookId } = useParams();

  useEffect(() => {
    if (bookId) {
      const book = books.find((book) => book.id === bookId);
      setSelectedBook(book);
    }
  }, [bookId]);

  if (!selectedBook) return <></>;

  const addToCart = () => {
    selectedBook && setCart([...cart, selectedBook]);
  };

  const { coverImageLink, name, details, author, genre, publicationDate } =
    selectedBook;

  return (
    <div className="h-[calc(100vh-4rem)] p-4 bg-orange-300">
      <div className="max-w-3xl mx-auto flex space-x-4">
        <div className="w-1/2">
          <img src={coverImageLink} alt={name} className="w-full" />
        </div>
        <div className="w-1/2">
          <h1 className="text-2xl font-semibold mb-2">{name}</h1>
          <p className="text-gray-800 mb-4">{author}</p>
          <p className="mb-4">{details}</p>
          <p>Genre: {genre}</p>
          <p>Publication Date: {publicationDate}</p>
          <button
            onClick={addToCart}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
          >
            Add to Cart <FaCartPlus className="inline-block ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
