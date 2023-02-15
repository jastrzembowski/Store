import React from "react";
import ReactDOM from "react-dom/client";
import "./app/layout/styles.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserHistory } from "history";
import { router } from "./app/router/Routes";
// import { StoreProvider } from "./app/context/StoreContext";
import { Provider } from "react-redux";
import { store } from "./app/store/configureStore";
import { RouterProvider } from "react-router-dom";

export const history = createBrowserHistory();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
reportWebVitals();
