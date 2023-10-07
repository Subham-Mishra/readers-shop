import type { RouteObject } from "react-router-dom";
import Dashboard from "~/pages/Dashboard";
import BooksPage from "~/pages/Dashboard/Books";
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
        path: "books/:id",
        element: <h1>Book Details</h1>,
      },
      {
        path: "authors",
        element: <h1>Authors</h1>,
      },
      {
        path: "cart",
        element: <h1>Cart</h1>,
      },
    ],
  },
];
