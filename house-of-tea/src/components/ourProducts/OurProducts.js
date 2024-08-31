
// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Col, Container, Row } from "react-bootstrap";
// import cardImage from "../../assets/content-img/image 13.png";
// import cardImage2 from "../../assets/content-img/image 39.png";

// import "./OurProducts.css";

// const products = [
//   { id: 1, src: cardImage, title: "SAFTY PRODUCTS", path: "/products/safety-product" },
//   {
//     id: 2,
//     src: cardImage2,
//     title: "ENGINEERING",
//     path: "/products/engineering",
//   },
//   {
//     id: 3,
//     src: cardImage,
//     title: "PRE-ENGINEERED BUILDING",
//     path: "/products/pre-engineered",
//   },
//   {
//     id: 4,
//     src: cardImage2,
//     title: "OFFSHORE/ONSHADE RENTAL",
//     path: "/products/off-shore-on-shore-rental",
//   },
//   {
//     id: 5,
//     src: cardImage,
//     title: "MAINTENANCE & REFURBISHMENT",
//     path: "/products/maintenance-refurbishment",
//   },
//   {
//     id: 6,
//     src: cardImage2,
//     title: "LOAD TESTING & INSPECTIONS",
//     path: "/products/load-testing-and-inspection",
//   },
// ];

// const OurProducts = () => {
//   return (
//     <Container>
//       <Row style={{ marginTop: "8rem" }}>
//         <div className="section-heading">
//           <div className="heading-text">Our Services</div>
//           <div className="heading-desc">An overview of what we do.</div>
//         </div>
//       </Row>

//       <Row className="home-section2">
//         {products.map((product) => (
//           <Col key={product.id} md={4} sm={6} xs={12} className="mb-4">
//             <Link to={product.path} className="card-link">
//               <div className="card">
//                 <div className="card-logo">
//                   {/* <motion.div
//                     whileHover={{ scale: 1.2, rotate: -360 }}
//                     whileTap={{ scale: 0.8, borderRadius: "100%" }}
//                     className="v-icon"
//                   > */}
//                   <svg
//                     className="dot"
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="60"
//                     height="60"
//                     viewBox="0 0 60 60"
//                     fill="none"
//                   >
//                     <circle cx="30" cy="30" r="30" fill="#FFE605" />
//                   </svg>
//                   <img
//                     className="card-img"
//                     src={product.src}
//                     alt={product.title}
//                   />
//                   {/* </motion.div> */}
//                 </div>
//                 <div className="card-text">{product.title}</div>
//               </div>
//             </Link>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// };

// export default OurProducts;


import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import cardImage from "../../assets/content-img/image 13.png";
import cardImage2 from "../../assets/content-img/image 39.png";

import "./OurProducts.css";

const products = [
  { id: 1, src: cardImage, title: "SAFETY PRODUCTS", path: "/products/safety-products" },
  {
    id: 2,
    src: cardImage2,
    title: "SPECIALISED PRODUCTS",
    path: "/products/specialised-products",
  },
  {
    id: 3,
    src: cardImage,
    title: "PRE-ENGINEERED BUILDING",
    path: "/products/pre-engineered",
  },
  {
    id: 4,
    src: cardImage2,
    title: "OFFSHORE/ONSHADE RENTAL",
    path: "/products/off-shore-on-shore-rental",
  },
  {
    id: 5,
    src: cardImage,
    title: "MAINTENANCE & REFURBISHMENT",
    path: "/products/maintenance-refurbishment",
  },
  {
    id: 6,
    src: cardImage2,
    title: "LOAD TESTING & INSPECTIONS",
    path: "/products/load-testing-and-inspection",
  },
];

const OurProducts = () => {
  return (
    <Container>
      <Row style={{ marginTop: "8rem" }}>
        <div className="section-heading">
          <div className="heading-text">Our Services</div>
          <div className="heading-desc">An overview of what we do.</div>
        </div>
      </Row>

      <Row className="home-section2">
        {products.map((product) => (
          <Col key={product.id} md={4} sm={6} xs={12} className="mb-4">
            <Link to={product.path} className="card-link">
              <div className="card">
                <div className="card-logo">
                  
                  <img
                    className="card-img"
                    src={product.src}
                    alt={product.title}
                  />
                </div>
                <div className="card-text">{product.title}</div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OurProducts;
