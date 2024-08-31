import React, { useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";

import AnimatedRoutes from "./components/AnimatedRoutes";

import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer/Footer";
import { CartProvider } from "./Context/CartContext";
import i18n from "./i18n";
import "./i18n";

function App() {
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, []);

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
