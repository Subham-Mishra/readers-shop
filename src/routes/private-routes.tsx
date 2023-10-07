import type { RouteObject } from "react-router-dom";
import Dashboard from "~/pages/dashboard";
import AuthorsPage from "~/pages/dashboard/authors";
import BooksPage from "~/pages/dashboard/books";
import BookDetails from "~/pages/dashboard/bookDetails";
import HomePage from "~/pages/dashboard/home";
import Cart from "~/pages/dashboard/cart";

export const privateRoutes: Array<RouteObject> = [
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "books",
        element: <BooksPage />,
      },
      {
        path: "books/:bookId",
        element: <BookDetails />,
      },
      {
        path: "authors",
        element: <AuthorsPage />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
];
