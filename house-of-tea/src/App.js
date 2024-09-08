import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter } from "react-router-dom";

import AnimatedRoutes from "./components/AnimatedRoutes";
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/footer/Footer";
import { CartProvider } from "./Context/CartContext";
import i18n from "./i18n";
import "./i18n";

function App() {
  const [cord, setCord] = useState({ x: 0, y: 0 })
  useEffect(() => {
    if (matchMedia('(pointer:fine)').matches) {
      document.addEventListener('mousemove', (e) => {
        setCord({ x: e.pageX, y: e.pageY })
        console.log('event trigered')

      })
    }
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, []);

  return (
    <CartProvider>
      <div className={"cursor"} style={{ top: (cord.y - 14) + 'px', left: (cord.x -10) + 'px' }} onClick={() => {
        console.log('clicked cursor')
      }}>
        <div style={{marginLeft:'10px'}}></div>
        <div ></div>
      </div>
      <BrowserRouter>

        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
