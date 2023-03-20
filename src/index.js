import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NewPost from "./components/NewPost";
import RootLayout from "./components/routes/RootLayout";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <RootLayout />,
  //   children: [
  { path: "/", element: <App /> },
  { path: "/create-post", element: <NewPost /> },
  //   ],
  // },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router} />
  // <App />
);
