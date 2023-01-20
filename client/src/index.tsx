import React from "react";
import ReactDOM from "react-dom/client";
import "./app/layout/styles.css";
import App from "./app/layout/App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserHistory } from "history";
import CustomRouter from "./CustiomRouter";
// import { StoreProvider } from "./app/context/StoreContext";
import { Provider } from "react-redux";
import { store } from "./app/store/configureStore";

export const history = createBrowserHistory();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <CustomRouter history={history}>
      {/* <StoreProvider> */}
        <Provider store={store}>
          <App />
        </Provider>
      {/* </StoreProvider> */}
    </CustomRouter>
  </React.StrictMode>
);
reportWebVitals();
