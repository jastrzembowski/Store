import { createBrowserRouter, Navigate } from "react-router-dom";
import AboutPage from "../../features/about/About";
import Login from "../../features/account/Login";
import Register from "../../features/account/Register";
import BasketPage from "../../features/basket/BasketPage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";

import NotFound from "../errors/NotFound";
import ServerError from "../errors/ServerError";
import App from "../layout/App";
import Contact from "../../features/contact/Contact";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
    children: [
      { path: "catalog", element: <Catalog /> },
      { path: "catalog/:id", element: <ProductDetails /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <Contact /> },
      { path: "server-error", element: <ServerError /> },
      { path: "not-found", element: <NotFound /> },
      { path: "basket", element: <BasketPage /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
]);
