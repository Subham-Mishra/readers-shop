import type { RouteObject } from "react-router-dom";
import Dashboard from "~/pages/Dashboard";
import AuthorsPage from "~/pages/Dashboard/Authors";
import BooksPage from "~/pages/Dashboard/Books";
import BookDetails from "~/components/BookDetails";
import HomePage from "~/pages/Dashboard/Home";

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
        element: <h1>Cart</h1>,
      },
    ],
  },
];
