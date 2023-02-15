import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import Header from "./Header";
import "react-toastify/dist/ReactToastify.css";
import ServerError from "../errors/ServerError";
import HomePage from "../../features/home/HomePage";
import Contact from "../../features/contact/Contact";
import About from "../../features/about/About";
import NotFound from "../errors/NotFound";
import BasketPage from "../../features/basket/BasketPage";
// import { useStoreContext } from "../context/StoreContext";
import LoadingComponent from "./LoadingComponent";
import CheckoutPage from "../../features/checkout/CheckoutPage";
import { useAppDispatch } from "../store/configureStore";
import { fetchBasketAsync } from "../../features/basket/basketSlice";
import Register from "../../features/account/Register";
import Login from "../../features/account/Login";
import { fetchCurrentUser } from "../../features/account/accountSlice";

function App() {
  // const {setBasket} = useStoreContext();

  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  const initApp = useCallback(async () => {
    try {
      await dispatch(fetchCurrentUser());
      await dispatch(fetchBasketAsync());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    initApp().then(() => setLoading(false));
  }, [initApp]);

  const [darkMode, setDarkMode] = useState(false);

  const paletteType = darkMode ? "dark" : "light";

  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });

  function changeMode() {
    setDarkMode(!darkMode);
  }

  if (loading)
    return <LoadingComponent message="Initializing app..."></LoadingComponent>;

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <CssBaseline />
      <Header darkMode={darkMode} changeMode={changeMode} />
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/server-error" element={<ServerError />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
