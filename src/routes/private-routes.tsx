import type { RouteObject } from "react-router-dom";
import Dashboard from "~/pages/Dashboard";

export const privateRoutes: Array<RouteObject> = [
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "books",
        element: <h1>Books</h1>,
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
