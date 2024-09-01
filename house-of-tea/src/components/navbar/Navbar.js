// import React, { useContext, useState } from "react";
// import logo from "../../assets/logo/GULF SHORE LOGO PNG 5.png";
// import logo2 from "../../assets/logo/toplogo.png";
// import "./NavbarStyles.css";
// import { HiOutlineMenuAlt4 } from "react-icons/hi";
// import { IoMdClose } from "react-icons/io";
// import whitelogo from "../../assets/logo/GULF SHORE LOGO PNG 4.png";
// import { Link, useLocation } from "react-router-dom";

// import { navItems } from "./NavItems";
// import Dropdown from "./Dropdown";
// import { FaAngleDown } from "react-icons/fa";
// import { CartContext } from '../../Context/CartContext';

// // import downarrow from "../../assets/icon/down.svg";

// function Navbar() {

//   const { getTotalItems } = useContext(CartContext);
//   const totalItems = getTotalItems();
//   const [nav, setNav] = useState(false);
//   const [bgnav, setBgnav] = useState(false);
//   const [dropdown, setDropdown] = useState(false);
//   const [sub, setSub] = useState(false);

//   const handleNav = () => setNav(!nav);
//   const location = useLocation().pathname;

//   const changeBackground = () => {
//     if (window.scrollY >= 80) {
//       setBgnav(true);
//     } else {
//       setBgnav(false);
//     }
//   };

//   window.addEventListener("scroll", changeBackground);

//   return (
//     <div>
//       <div className={bgnav ? "nav-header active" : "nav-header"}>
//         <Link to={"/"}>
//           <div className={bgnav ? "logo1" : "logo"}>
//             <div className={bgnav ? "no-logo" : "yes-logo"}>
//               <img src={logo2} alt="Company logo gulf shore" />
//             </div>
//             <div className={bgnav ? "yes-logo" : "no-logo"}>
//               <img
//                 style={{ width: "90px" }}
//                 src={logo2}
//                 alt="white company logo gulf shore"
//               />
//             </div>
//           </div>
//         </Link>
//         <ul className={"nav-menu"}>
//           {navItems.map((item) => {
//             if (item.title === "SERVICES") {
//               return (
//                 <li
//                   key={item.id}
//                   onClick={() => setDropdown(true)}
//                   onMouseLeave={() => setDropdown(false)}
//                 >
//                   <Link
//                     className={
//                       (location === "/" && !bgnav) || bgnav ? "white" : "black"
//                     }
//                     to={item.path}
//                   >
//                     {item.title}

//                     <FaAngleDown
//                       color={
//                         (location === "/" && !bgnav) || bgnav
//                           ? "white"
//                           : "black"
//                       }
//                       className="down-icon"
//                     />
//                   </Link>

//                   {dropdown && <Dropdown />}
//                 </li>
//               );
//             }
//             return (
//               <li key={item.id} className={item.cName}>
//                 <Link
//                   className={
//                     (location === "/" && !bgnav) || bgnav ? "white" : "black"
//                   }
//                   to={item.path}
//                 >
//                   {item.title}
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>

//         <div className="hamburger" onClick={handleNav}>
//           <HiOutlineMenuAlt4
//             color={
//               (useLocation().pathname === "/" && !bgnav) || bgnav
//                 ? "white"
//                 : "black"
//             }
//             size={40}
//           />
//         </div>
//         <div className={nav ? "mobile-menu active" : "mobile-menu"}>
//           <ul className="mobile-nav">
//             <Link className="mobile-link" to={"/"}>
//               <li onClick={handleNav}>HOME</li>
//             </Link>
//             {/* <li className="mobile-link" onClick={() => setSub(!sub)}>
//               SERVICES
//               <FaAngleDown className="down-icon" />
//               <ul
//                 className={sub ? "sub-active" : "services-sub"}
//                 onClick={handleNav}
//               >
//                 <li>
//                   <Link className="mobile-link" to={"/oilandgas"}>
//                     Oil & Gas
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="mobile-link" to={"/engineering"}>
//                     Engineering
//                   </Link>
//                 </li>
//                 <li>
//                   <Link className="mobile-link" to={"/pre-engineered"}>
//                     pre engineered building
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     className="mobile-link"
//                     to={"/off-shore-on-shore-rental"}
//                   >
//                     Offshore/Onshore rental
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     className="mobile-link"
//                     to={"/maintanance-refurbishment"}
//                   >
//                     maintenance & refurbishment
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     className="mobile-link"
//                     to={"/load-testing-and-inspection"}
//                   >
//                     load testing and inspections
//                   </Link>
//                 </li>
//               </ul>
//             </li> */}
//             <Link className="mobile-link" to={"/aboutus"}>
//               <li onClick={handleNav}>ABOUT US</li>
//             </Link>
//             <Link className="mobile-link" to={"/menu"}>
//               <li onClick={handleNav}>MENU</li>
//             </Link>
//             <Link className="mobile-link" to={"/order-foem"}>
//               <li onClick={handleNav}>ORDER NOW</li>
//             </Link>
//             <Link className="mobile-link" to={"/contactus"}>
//               <li onClick={handleNav}>CONTACT US</li>
//             </Link>
//             <Link className="mobile-link" to={"/cart"}>
//               <li onClick={handleNav}>Cart{totalItems}</li>
//             </Link>
//             <div
//               style={{
//                 width: "100%",
//                 justifyContent: "space-around",
//                 display: "flex",
//               }}
//             >
//               <IoMdClose size={40} onClick={handleNav} />
//             </div>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

// import React, { useContext, useState, useEffect } from "react";
// import logo2 from "../../assets/logo/toplogo.png";
// import "./NavbarStyles.css";
// import { HiOutlineMenuAlt4 } from "react-icons/hi";
// import { IoMdClose } from "react-icons/io";
// import { Link, useLocation } from "react-router-dom";
// import { CartContext } from "../../Context/CartContext";
// import Dropdown from "./Dropdown";
// import { FaAngleDown } from "react-icons/fa";
// import { FaShoppingCart } from "react-icons/fa";

// function Navbar() {
//   const { getTotalItems } = useContext(CartContext);
//   const [nav, setNav] = useState(false);
//   const [bgnav, setBgnav] = useState(false);
//   const [dropdown, setDropdown] = useState(false);
//   const [sub, setSub] = useState(false);

//   const [totalItems, setTotalItems] = useState(getTotalItems());

//   useEffect(() => {
//     setTotalItems(getTotalItems());
//   }, [getTotalItems]);

//   const handleNav = () => setNav(!nav);
//   const location = useLocation().pathname;

//   const changeBackground = () => {
//     if (window.scrollY >= 80) {
//       setBgnav(true);
//     } else {
//       setBgnav(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", changeBackground);
//     return () => window.removeEventListener("scroll", changeBackground);
//   }, []);

//   const navItems = [
//     {
//       id: 11,
//       title: "HOME",
//       path: "/",
//       cName: "nav-item",
//     },
//     {
//       id: 2,
//       title: "ABOUT US",
//       path: "/aboutus",
//       cName: "nav-item",
//     },
//     {
//       id: 3,
//       title: "MENU",
//       path: "/menu",
//       cName: "nav-item",
//     },
//     {
//       id: 4,
//       title: "ORDER NOW",
//       path: "/order-form",
//       cName: "nav-item",
//     },
//     {
//       id: 5,
//       title: "CONTACT US",
//       path: "/contactus",
//       cName: "nav-item",
//     },
//     {
//       id: 6,
//       title: `CART (${totalItems})`,
//       path: "/cart",
//       cName: "nav-item",
//     },
//   ];

//   return (
//     <div>
//       <div className={bgnav ? "nav-header active" : "nav-header"}>
//         <Link to={"/"}>
//           <div className={bgnav ? "logo1" : "logo"}>
//             <div className={bgnav ? "no-logo" : "yes-logo"}>
//               <img src={logo2} alt="Company logo gulf shore" />
//             </div>
//             <div className={bgnav ? "yes-logo" : "no-logo"}>
//               <img
//                 style={{ width: "90px" }}
//                 src={logo2}
//                 alt="white company logo gulf shore"
//               />
//             </div>
//           </div>
//         </Link>
//         <ul className={"nav-menu"}>
//           {navItems.map((item) => {
//             if (item.title === "SERVICES") {
//               return (
//                 <li
//                   key={item.id}
//                   onClick={() => setDropdown(true)}
//                   onMouseLeave={() => setDropdown(false)}
//                 >
//                   <Link
//                     className={
//                       (location === "/" && !bgnav) || bgnav ? "white" : "black"
//                     }
//                     to={item.path}
//                   >
//                     {item.title}
//                     <FaAngleDown
//                       color={
//                         (location === "/" && !bgnav) || bgnav
//                           ? "white"
//                           : "black"
//                       }
//                       className="down-icon"
//                     />
//                   </Link>
//                   {dropdown && <Dropdown />}
//                 </li>
//               );
//             }
//             return (
//               <li key={item.id} className={item.cName}>
//                 <Link
//                   className={
//                     (location === "/" && !bgnav) || bgnav ? "white" : "black"
//                   }
//                   to={item.path}
//                 >
//                   {item.title}
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//         <div className="hamburger" onClick={handleNav}>
//           <HiOutlineMenuAlt4
//             color={
//               (useLocation().pathname === "/" && !bgnav) || bgnav
//                 ? "white"
//                 : "black"
//             }
//             size={40}
//           />
//         </div>
//         <div className={nav ? "mobile-menu active" : "mobile-menu"}>
//           <ul className="mobile-nav">
//             <Link className="mobile-link" to={"/"}>
//               <li onClick={handleNav}>HOME</li>
//             </Link>
//             <Link className="mobile-link" to={"/aboutus"}>
//               <li onClick={handleNav}>ABOUT US</li>
//             </Link>
//             <Link className="mobile-link" to={"/menu"}>
//               <li onClick={handleNav}>MENU</li>
//             </Link>
//             <Link className="mobile-link" to={"/order-form"}>
//               <li onClick={handleNav}>ORDER NOW</li>
//             </Link>
//             <Link className="mobile-link" to={"/contactus"}>
//               <li onClick={handleNav}>CONTACT US</li>
//             </Link>
//             <Link className="mobile-link" to={"/cart"}>
//               <li onClick={handleNav}>
//                 CART <FaShoppingCart /> ({totalItems})
//               </li>
//             </Link>
//             <div
//               style={{
//                 width: "100%",
//                 justifyContent: "space-around",
//                 display: "flex",
//               }}
//             >
//               <IoMdClose size={40} onClick={handleNav} />
//             </div>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;




import React, { useContext, useState, useEffect } from "react";
import pagelogo from "../../assets/logo/page-logo.png";
import homeLogo from "../../assets/logo/hft-logo1.png";
import "./NavbarStyles.css";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import Dropdown from "./Dropdown";
import { FaAngleDown, FaShoppingCart } from "react-icons/fa";
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';
import { useTranslation } from "react-i18next";

function Navbar() {
  const { t } = useTranslation();
  const { getTotalItems } = useContext(CartContext);
  const [nav, setNav] = useState(false);
  const [bgnav, setBgnav] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const [totalItems, setTotalItems] = useState(getTotalItems());

  

  useEffect(() => {
    setTotalItems(getTotalItems());
  }, [getTotalItems]);

  const handleNav = () => setNav(!nav);
  const location = useLocation().pathname;

  const logo = location === '/' ? homeLogo : pagelogo;
  
  const changeBackground = () => {
    // if (window.scrollY >= 80) {
     setBgnav(true);
    // } else {
      //setBgnav(false);
    //}
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  const navItems = [
    {
      id: 1,
      title: t("navbar.home"),
      path: "/",
      cName: "nav-item",
      icon: "",
    },
    {
      id: 2,
      title: t("navbar.about_us"),
      path: "/aboutus",
      cName: "nav-item",
      icon: "",
    },
    {
      id: 3,
      title: t("navbar.menu"),
      path: "/menu",
      cName: "nav-item",
      icon: "",
    },
    {
      id: 4,
      title: t("navbar.contact_us"),
      path: "/contactus",
      cName: "nav-item",
      icon: "",
    },
    {
      id: 5,
      title: `${t("navbar.cart")} (${totalItems})`,
      path: "/cart",
      cName: "nav-item",
      icon: <FaShoppingCart />,
    },
  ];

  return (
    <div>
      <div className={bgnav ? "nav-header active" : "nav-header"}>
        <Link to={"/"}>
          <div className={bgnav ? "logo1" : "logo"}>
            <div className={bgnav ? "no-logo" : "yes-logo"}>
              <img src={logo} alt="House Of Tea" />
            </div>
            <div className={bgnav ? "yes-logo" : "no-logo"}>
              <img
                style={{ width: "90px" }}
                src={homeLogo}
                alt="House Of Tea"
              />
            </div>
          </div>
        </Link>
        <ul className={"nav-menu"}>
          {navItems.map((item) => {
            if (item.title === t("navbar.services")) {
              return (
                <li
                  key={item.id}
                  onClick={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link
                    className={
                      (location === "/" && !bgnav) || bgnav ? "white" : "black"
                    }
                    to={item.path}
                  >
                    {item.icon}
                    {item.title}
                    <FaAngleDown
                      color={
                        (location === "/" && !bgnav) || bgnav
                          ? "white"
                          : "black"
                      }
                      className="down-icon"
                    />
                  </Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link
                  className={
                    (location === "/" && !bgnav) || bgnav ? "white" : "black"
                  }
                  to={item.path}
                >
                  {item.title && item.title} {""}
                  {item.icon} {""}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="hamburger" onClick={handleNav}>
          <HiOutlineMenuAlt4
            color={
              (location === "/" && !bgnav) || bgnav
                ? "white"
                : "black"
            }
            size={40}
          />
        </div>
        <div className={nav ? "mobile-menu active" : "mobile-menu"}>
          <ul className="mobile-nav">
            <Link className="mobile-link" to={"/"}>
              <li onClick={handleNav}>{t("navbar.home")}</li>
            </Link>
            <Link className="mobile-link" to={"/aboutus"}>
              <li onClick={handleNav}>{t("navbar.about_us")}</li>
            </Link>
            <Link className="mobile-link" to={"/menu"}>
              <li onClick={handleNav}>{t("navbar.menu")}</li>
            </Link>
            <Link className="mobile-link" to={"/contactus"}>
              <li onClick={handleNav}>{t("navbar.contact_us")}</li>
            </Link>
            <Link className="mobile-link" to={"/cart"}>
              <li onClick={handleNav}>
                {t("navbar.cart")} <FaShoppingCart /> ({totalItems})
              </li>
            </Link>
            <div
              style={{
                width: "100%",
                justifyContent: "space-around",
                display: "flex",
              }}
            >
              <IoMdClose size={40} onClick={handleNav} />
            </div>
          </ul>
        </div>
        <div>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
}

export default Navbar;


// import React, { useContext, useState, useEffect } from "react";
// import logo2 from "../../assets/logo/toplogo.png";
// import "./NavbarStyles.css";
// import { HiOutlineMenuAlt4 } from "react-icons/hi";
// import { IoMdClose } from "react-icons/io";
// import { Link, useLocation } from "react-router-dom";
// import { CartContext } from "../../Context/CartContext";
// import Dropdown from "./Dropdown";
// import { FaAngleDown, FaShoppingCart } from "react-icons/fa";
// import  LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher'


// function Navbar() {
//   const { getTotalItems } = useContext(CartContext);
//   const [nav, setNav] = useState(false);
//   const [bgnav, setBgnav] = useState(false);
//   const [dropdown, setDropdown] = useState(false);

//   const [totalItems, setTotalItems] = useState(getTotalItems());

//   useEffect(() => {
//     setTotalItems(getTotalItems());
//   }, [getTotalItems]);

//   const handleNav = () => setNav(!nav);
//   const location = useLocation().pathname;

//   const changeBackground = () => {
//     if (window.scrollY >= 80) {
//       setBgnav(true);
//     } else {
//       setBgnav(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", changeBackground);
//     return () => window.removeEventListener("scroll", changeBackground);
//   }, []);

//   const navItems = [
//     {
//       id: 11,
//       title: "HOME",
//       path: "/",
//       cName: "nav-item",
//       icon: "",
//     },
//     {
//       id: 2,
//       title: "ABOUT US",
//       path: "/aboutus",
//       cName: "nav-item",
//       icon: "",
//     },
//     {
//       id: 3,
//       title: "MENU",
//       path: "/menu",
//       cName: "nav-item",
//       icon: "",
//     },

//     {
//       id: 4,
//       title: "CONTACT US",
//       path: "/contactus",
//       cName: "nav-item",
//       icon: "",
//     },
//     {
//       id: 5,
//       title: `CART (${totalItems})`,
//       path: "/cart",
//       cName: "nav-item",
//       icon: <FaShoppingCart />,
//     },
//   ];

//   return (
//     <div>
//       <div className={bgnav ? "nav-header active" : "nav-header"}>
//         <Link to={"/"}>
//           <div className={bgnav ? "logo1" : "logo"}>
//             <div className={bgnav ? "no-logo" : "yes-logo"}>
//               <img src={logo2} alt="Company logo gulf shore" />
//             </div>
//             <div className={bgnav ? "yes-logo" : "no-logo"}>
//               <img
//                 style={{ width: "90px" }}
//                 src={logo2}
//                 alt="white company logo gulf shore"
//               />
//             </div>
//           </div>
//         </Link>
//         <ul className={"nav-menu"}>
//           {navItems.map((item) => {
//             if (item.title === "SERVICES") {
//               return (
//                 <li
//                   key={item.id}
//                   onClick={() => setDropdown(true)}
//                   onMouseLeave={() => setDropdown(false)}
//                 >
//                   <Link
//                     className={
//                       (location === "/" && !bgnav) || bgnav ? "white" : "black"
//                     }
//                     to={item.path}
//                   >
//                     {item.icon}
//                     {item.title}
//                     <FaAngleDown
//                       color={
//                         (location === "/" && !bgnav) || bgnav
//                           ? "white"
//                           : "black"
//                       }
//                       className="down-icon"
//                     />
//                   </Link>
//                   {dropdown && <Dropdown />}
//                 </li>
//               );
//             }
//             return (
//               <li key={item.id} className={item.cName}>
//                 <Link
//                   className={
//                     (location === "/" && !bgnav) || bgnav ? "white" : "black"
//                   }
//                   to={item.path}
//                 >
//                   {item.title && item.title} {""}
//                   {item.icon} {""}
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//         <div className="hamburger" onClick={handleNav}>
//           <HiOutlineMenuAlt4
//             color={
//               (useLocation().pathname === "/" && !bgnav) || bgnav
//                 ? "white"
//                 : "black"
//             }
//             size={40}
//           />
//         </div>
//         <div className={nav ? "mobile-menu active" : "mobile-menu"}>
//           <ul className="mobile-nav">
//             <Link className="mobile-link" to={"/"}>
//               <li onClick={handleNav}>HOME</li>
//             </Link>
//             <Link className="mobile-link" to={"/aboutus"}>
//               <li onClick={handleNav}>ABOUT US</li>
//             </Link>
//             <Link className="mobile-link" to={"/menu"}>
//               <li onClick={handleNav}>MENU</li>
//             </Link>

//             <Link className="mobile-link" to={"/contactus"}>
//               <li onClick={handleNav}>CONTACT US</li>
//             </Link>
//             <Link className="mobile-link" to={"/cart"}>
//               <li onClick={handleNav}>
//                 CART <FaShoppingCart /> {""} ({totalItems})
//               </li>
//             </Link>
//             <div
//               style={{
//                 width: "100%",
//                 justifyContent: "space-around",
//                 display: "flex",
//               }}
//             >
//               <IoMdClose size={40} onClick={handleNav} />
//             </div>
//           </ul>
//         </div>
//         <div>
//           {" "}
//           <LanguageSwitcher />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;
