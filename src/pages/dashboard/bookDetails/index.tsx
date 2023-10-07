import { useEffect, useState } from "react";
import type { Book } from "~/iterfaces";
import { FaCartPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";
import books from "~/data/books";
import { useShoppingCart } from "~/hooks/useCart";

const BookDetails: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<Book>();
  const { bookId } = useParams();
  const { addToCart, isBookInCart } = useShoppingCart();

  useEffect(() => {
    if (bookId) {
      const book = books.find((book) => book.id === bookId);
      setSelectedBook(book);
    }
  }, [bookId]);

  const addToCartHandler = () => {
    selectedBook && addToCart(selectedBook.id);
  };

  if (!selectedBook) return <></>;

  const {
    id,
    coverImageLink,
    name,
    details,
    author,
    genre,
    price,
    publicationDate,
  } = selectedBook;

  return (
    <div className="h-[calc(100vh-4rem)] p-4 bg-orange-400">
      <div className="max-w-3xl mx-auto flex space-x-4">
        <div className="w-1/2">
          <img src={coverImageLink} alt={name} className="w-full" />
        </div>
        <div className="w-1/2">
          <h1 className="text-2xl font-semibold mb-2">{name}</h1>
          <p className="text-gray-800 mb-4">{author}</p>
          <p className="text-gray-800 mb-4">Rs. {price}</p>
          <p className="mb-4">{details}</p>
          <p>Genre: {genre}</p>
          <p>Publication Date: {publicationDate}</p>
          {isBookInCart(id) ? (
            <button
              disabled
              className="mt-4 bg-gray-900 text-white px-4 py-2 rounded"
            >
              Added to Cart!
            </button>
          ) : (
            <button
              onClick={addToCartHandler}
              className="mt-4 bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-600 focus:outline-none"
            >
              Add to Cart <FaCartPlus className="inline-block ml-2" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
