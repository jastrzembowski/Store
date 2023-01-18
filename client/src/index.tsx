import React from "react";
import ReactDOM from "react-dom/client";
import "./app/layout/styles.css";
import App from "./app/layout/App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserHistory } from "history";
import CustomRouter from "./CustiomRouter";
import { StoreProvider } from "./app/context/StoreContext";

export const history = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CustomRouter history={history}>
      <StoreProvider>
        <App />
      </StoreProvider>
    </CustomRouter>
  </React.StrictMode>
);
reportWebVitals();
