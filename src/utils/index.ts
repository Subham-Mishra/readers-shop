import books from "~/data/books";

export const findBookById = (bookID: string) =>
  books.find((book) => book.id === bookID);
