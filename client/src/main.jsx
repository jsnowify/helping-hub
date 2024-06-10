import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import { Login } from "./components/login/Login.jsx";
import { PageNotFound } from "./components/PageNotFound.jsx";
import { Register } from "./components/register/Register.jsx";
import { Home } from "./components/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <PageNotFound />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
