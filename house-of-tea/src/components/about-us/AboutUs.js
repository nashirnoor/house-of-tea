// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import "./AboutUs.css";
// import { motion } from "framer-motion";

// import contentimg1 from "../../assets/aboutus/W1.jpg";
// import contentimg2 from "../../assets/aboutus/w2.jpg";
// import contentimg3 from "../../assets/aboutus/w3.jpg";
// import contentimg4 from "../../assets/aboutus/w4.jpg";
// import contentimg5 from "../../assets/teaimages/teimage3.jpg";
// import contentimg6 from "../../assets/teaimages/teimage4.jpg";
// import Carousel from "react-bootstrap/Carousel";
// import { useTranslation } from "react-i18next";
// import ReviewForm from "../ReviewForm/ReviewForm";

// function AboutUs() {
//   const { t } = useTranslation();

//   return (
//     <motion.div
//       initial={{ width: 0 }}
//       animate={{ width: "100%" }}
//       exit={{ x: window.innerWidth }}
//     >
//       <Container>
//         <Row style={{ width: "100%" }}>
//           <Col>
//             <div className="oil-banner7">
//               <div className="overlay7">
//                 <div className="oil-title7">
//                   <div className="about-us-heading">
//                     {t("about.first_heading")}{" "}
//                     <span className="highlighted-text">
//                       {" "}
//                       {t("about.second_heading")}{" "}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Col>
//         </Row>
//         <Row>
//           <Col sm={12} md={6}>
//             <div className="content-1-img-section">
//               <Carousel pause={false}>
//                 <Carousel.Item interval={2000}>
//                   <div className="content-1-img">
//                     <img src={contentimg1} alt="oil pipe" />
//                   </div>
//                 </Carousel.Item>
//                 <Carousel.Item interval={2000}>
//                   <div className="content-1-img">
//                     <img src={contentimg2} alt="oil pipe" />
//                   </div>
//                 </Carousel.Item>
//                 <Carousel.Item interval={2000}>
//                   <div className="content-1-img">
//                     <img src={contentimg3} alt="oil pipe" />
//                   </div>
//                 </Carousel.Item>
//                 <Carousel.Item interval={2000}>
//                   <div className="content-1-img">
//                     <img src={contentimg4} alt="oil pipe" />
//                   </div>
//                 </Carousel.Item>
//                 <Carousel.Item interval={2000}>
//                   <div className="content-1-img">
//                     <img src={contentimg5} alt="oil pipe" />
//                   </div>
//                 </Carousel.Item>
//               </Carousel>
//             </div>
//           </Col>

//           <Col>
//             <div className="content-1">
//               <div className="content-1-details">
//                 <h1 className="heading">{t("about.about_the_company")}</h1>
//               </div>
//               <div className="content-1-details">
//                 <p className="para">{t("about.company_description")}</p>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//       <div>
//         <ReviewForm />
//       </div>
//     </motion.div>
//   );
// }

// export default AboutUs;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./AboutUs.css";
import { motion } from "framer-motion";
import contentimg1 from "../../assets/aboutus/W1.jpg";
import contentimg2 from "../../assets/aboutus/w2.jpg";
import contentimg3 from "../../assets/aboutus/w3.jpg";
import contentimg4 from "../../assets/aboutus/w4.jpg";
import contentimg5 from "../../assets/teaimages/teimage3.jpg";
import contentimg6 from "../../assets/teaimages/teimage4.jpg";
import Carousel from "react-bootstrap/Carousel";
import { useTranslation } from "react-i18next";
import ReviewForm from "../ReviewForm/ReviewForm";

function AboutUs() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
      style={{backgroundColor:'black'}}
    >
      {/* <Container>
        <Row style={{ width: "100%" }}>
          <Col>
            <div className="oil-banner7">
              <div className="overlay7">
                <div className="oil-title7">
                  <div className="about-us-heading">
                    {t("about.first_heading")}{" "}
                    <span className="highlighted-text">
                      {" "}
                      {t("about.second_heading")}{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div className="content-1-details">
          <h1 className="heading">{t("about.about_the_company")}</h1>
        </div>
        <Row className="aboutus_container">
          <div>
            <Col  style={{width:'100%'}}>
              <div className="content-1-img-section">
                <Carousel pause={false}>
                  <Carousel.Item interval={2000}>
                    <div className="carousel-img-wrapper">
                      <img
                        src={contentimg1}
                        alt="oil pipe"
                        className="carousel-img"
                      />
                    </div>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <div className="carousel-img-wrapper">
                      <img
                        src={contentimg2}
                        alt="oil pipe"
                        className="carousel-img"
                      />
                    </div>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <div className="carousel-img-wrapper">
                      <img
                        src={contentimg3}
                        alt="oil pipe"
                        className="carousel-img"
                      />
                    </div>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <div className="carousel-img-wrapper">
                      <img
                        src={contentimg4}
                        alt="oil pipe"
                        className="carousel-img"
                      />
                    </div>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <div className="carousel-img-wrapper">
                      <img
                        src={contentimg5}
                        alt="oil pipe"
                        className="carousel-img"
                      />
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>

            <Col>
              <div className="content-1">
                <div className="content-1-details">
                  <p className="para">{t("about.company_description")}</p>
                </div>
              </div>
            </Col>
          </div>
        </Row>
      </Container> */}
      <Container>
      <Row style={{ width: "100%" }}>
           
          <Col>
            <div className="oil-banner7">
              <div className="overlay7">
                <div className="oil-title7">
                  <div className="about-us-heading">
                    {t("about.first_heading")}{" "}
                    <span className="highlighted-text">
                      {" "}
                      {t("about.second_heading")}{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
          <Row>
               
            <Col sm={12} md={6}>
              <div className="content-1-img-section">
                <Carousel pause={false}>
                  <Carousel.Item interval={2000}>
                    <div className="carousel-img-wrapper">
                      <img
                        src={contentimg1}
                        alt="oil pipe"
                        className="carousel-img"
                      />
                    </div>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <div className="carousel-img-wrapper">
                      <img
                        src={contentimg2}
                        alt="oil pipe"
                        className="carousel-img"
                      />
                    </div>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <div className="carousel-img-wrapper">
                      <img
                        src={contentimg3}
                        alt="oil pipe"
                        className="carousel-img"
                      />
                    </div>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <div className="carousel-img-wrapper">
                      <img
                        src={contentimg4}
                        alt="oil pipe"
                        className="carousel-img"
                      />
                    </div>
                  </Carousel.Item>
                  <Carousel.Item interval={2000}>
                    <div className="carousel-img-wrapper">
                      <img
                        src={contentimg5}
                        alt="oil pipe"
                        className="carousel-img"
                      />
                    </div>
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>

            <Col>
              <div className="content-1">
                <div className="content-1-details">
                  <h1 className="heading">{t("home.about_the_company")}</h1>
                </div>
                <div className="content-1-details">
                  <p className="paras">{t("about.company_description")}</p>
                </div>
                
              </div>
            </Col>
          </Row>
        </Container>
    </motion.div>
  );
}

export default AboutUs;
