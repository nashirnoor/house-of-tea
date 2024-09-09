// import React, { useEffect } from "react";

// import { Route, Routes, useLocation } from "react-router-dom";
// import Home from "../components/home/Home";
// import OilAndgas from "../components/OilandGas/OilAndGas";
// import Engineering from "../components/engineering/Engineering";
// import PreEngineering from "../components/pre-engineering/Pre-engineering";
// import OffShoreRental from "../components/offshore-onshore/OffShoreRental";
// import Maintanace from "../components/maintanance/Maintanace";
// import Inspection from "../components/inpection/Inspection";
// import IsoCertificates from "../components/certification/IsoCertificates";
// import AboutUs from "../components/about-us/AboutUs";
// import ContactUs from "../components/contact-us/ContactUs";
// import { AnimatePresence } from "framer-motion";
// import OurProducts from "./ourProducts/OurProducts";
// import OurBrands from "./OurBrands/OurBrands";
// import ProductList from "./ProductList/ProductList";

// function AnimatedRoutes() {
//   const { pathname } = useLocation();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);
//   const location = useLocation();
//   return (
//     <AnimatePresence>
//       <Routes location={location} key={location.pathname}>
//         <Route index path="/" Component={Home} />
//         <Route path="/oilandgas" Component={OilAndgas} />
//         <Route path="/engineering" Component={Engineering} />
//         <Route path="/pre-engineered" Component={PreEngineering} />
//         <Route path="/off-shore-on-shore-rental" Component={OffShoreRental} />
//         <Route path="/maintanance-refurbishment" Component={Maintanace} />
//         <Route path="/load-testing-and-inspection" Component={Inspection} />
//         <Route path="/iso-certifications" Component={IsoCertificates} />
//         <Route path="/aboutus" Component={AboutUs} />
//         <Route path="/contactus" Component={ContactUs} />
//         <Route path="/our-products" Component={OurProducts} />
//         <Route path="/products/:category" component={ProductList} />
//         <Route path="/our-brands" Component={OurBrands} />
//       </Routes>
//     </AnimatePresence>
//   );
// }

// export default AnimatedRoutes;

import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../components/home/Home";
import OilAndgas from "../components/OilandGas/OilAndGas";
import Engineering from "../components/engineering/Engineering";
import PreEngineering from "../components/pre-engineering/Pre-engineering";
import OffShoreRental from "../components/offshore-onshore/OffShoreRental";
import Maintanace from "../components/maintanance/Maintanace";
import Inspection from "../components/inpection/Inspection";
import IsoCertificates from "../components/certification/IsoCertificates";
import AboutUs from "../components/about-us/AboutUs";
import ContactUs from "../components/contact-us/ContactUs";
import { AnimatePresence } from "framer-motion";
import OurProducts from "./ourProducts/OurProducts";
import OurBrands from "./OurBrands/OurBrands";
import ProductList from "./ProductList/ProductList";
import Menu from "./Menu/Menu";
import Cart from "./cart/Cart";
import StoreContact from "./storecontact/StoreContact";

function AnimatedRoutes() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route index path="/" element={<Home />} />
        <Route path="/oilandgas" element={<OilAndgas />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/pre-engineered" element={<PreEngineering />} />
        <Route path="/off-shore-on-shore-rental" element={<OffShoreRental />} />
        <Route path="/maintanance-refurbishment" element={<Maintanace />} />
        <Route path="/load-testing-and-inspection" element={<Inspection />} />
        <Route path="/iso-certifications" element={<IsoCertificates />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/our-products" element={<OurProducts />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/our-brands" element={<OurBrands />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/store-contact" element={<StoreContact />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
