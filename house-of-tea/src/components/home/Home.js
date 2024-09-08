// import React from "react";

// import contentimg1 from "../../assets/teaimages/teimage3.jpg";
// import contentimg2 from "../../assets/teaimages/teimage4.jpg";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import { motion } from "framer-motion";
// import Slider from "react-slick";

// import "./Home.css";
// import Carousel from "react-bootstrap/Carousel";
// import { Col, Container, Row } from "react-bootstrap";
// import video2 from "../../assets/house-of-tea-bg-video.mp4";
// // import video2 from "../../assets/houseoftea.mp4";
// import client1 from "../../assets/client-logo/image 20.png";
// import client2 from "../../assets/client-logo/image 21.png";
// import client3 from "../../assets/client-logo/image 22.png";
// import client4 from "../../assets/client-logo/image 23.png";
// import client5 from "../../assets/client-logo/image 24.png";
// import client6 from "../../assets/client-logo/image 25.png";
// import client7 from "../../assets/client-logo/image 26.png";
// import Certification from "../certification/Certification";
// import VisionSection from "../vision/VisionSection";
// import { Link } from "react-router-dom";
// import OurProducts from "../ourProducts/OurProducts";
// import ReviewForm from "../ReviewForm/ReviewForm";
// import { useTranslation } from "react-i18next";
// // import { TypeAnimation } from "react-type-animation";

// const clientImage = [
//   {
//     img: client1,
//     id: "11",
//   },
//   {
//     img: client2,
//     id: "12",
//   },
//   {
//     img: client3,
//     id: "13",
//   },
//   {
//     img: client4,
//     id: "14",
//   },
//   {
//     img: client5,
//     id: "15",
//   },
//   {
//     img: client6,
//     id: "16",
//   },
//   {
//     img: client7,
//     id: "17",
//   },
// ];

// function Home() {
//   const { t } = useTranslation();

//   const settings = {
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 4000,
//     autoplaySpeed: 5000,
//     cssEase: "linear",
//   };

//   return (
//     <motion.div
//       initial={{ width: 0 }}
//       animate={{ width: "100%" }}
//       exit={{ x: window.innerWidth }}
//     >
//       <div className="home">
//         <div className="hero">
//           <video autoPlay loop muted playsInline id="video">
//             <source src={video2} type="video/mp4" />
//           </video>
//           <div className="overlay10"></div>
//           <div className="hero-slider-content">
//             {/* <Carousel pause={false}>
//               <Carousel.Item interval={3000}>
//                 <div className="hero-slider-item">
//                   <div className="slider-heading">
//                     Discover perfect tea blends with unmatched service today
//                   </div>
//                   <div className="button-hero">
//                     <Link className="slider-btn-text" to={"/menu"}>
//                       <div className="slider-btn">ORDER NOW</div>
//                     </Link>
//                   </div>
//                 </div>
//               </Carousel.Item>
//             </Carousel> */}
//           </div>
//         </div>

//         <Container>
//           <Row>
//             <Col sm={12} md={6}>
//               <div className="content-1-img-section">
//                 <Carousel pause={false}>
//                   <Carousel.Item interval={2000}>
//                     <div className="content-1-img">
//                       <img src={contentimg1} alt="oil pipe" />
//                     </div>
//                   </Carousel.Item>
//                   <Carousel.Item interval={2000}>
//                     <div className="content-1-img">
//                       <img src={contentimg2} alt="oil pipe" />
//                     </div>
//                   </Carousel.Item>
//                 </Carousel>
//               </div>
//             </Col>

//             <Col>
//               <div className="content-1">
//                 <div className="content-1-details">
//                   <h1 className="heading">{t("home.about_the_company")}</h1>
//                 </div>
//                 <div className="content-1-details">
//                   <p className="para">
//                     We're obsessed with modern, fast, eco-friendly and reliable
//                     construction technologies. We're an early adopter of Pre
//                     Fabricated Buildings (PEB) and Light Gauge Framing System
//                     (LGSF). An End to End player, and our expertise and assist
//                     you with Project Planning, Procurement, Manufacturing,
//                     Production, Erection and Commissioning.
//                   </p>
//                 </div>
//                 <div className="content-1-details">
//                   <Link to={"aboutus"}>
//                     <button className="content-btn">MORE INFO</button>
//                   </Link>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//         <VisionSection />
//         <div>
//           <ReviewForm />
//         </div>

//         {/* <Certification /> */}
//       </div>
//     </motion.div>
//   );
// }

// export default Home;

import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import contentimg1 from "../../assets/aboutus/W1.jpg";
import contentimg2 from "../../assets/aboutus/w2.jpg";
import contentimg3 from "../../assets/aboutus/w3.jpg";
import contentimg4 from "../../assets/aboutus/w4.jpg";
import contentimg5 from "../../assets/teaimages/teimage3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, useInView } from "framer-motion";
import Slider from "react-slick";
import "./Home.css";
import Carousel from "react-bootstrap/Carousel";
import { Col, Container, Row } from "react-bootstrap";
import video2 from "../../assets/house-of-tea-bg-video.mp4";
import client1 from "../../assets/client-logo/image 20.png";
import client2 from "../../assets/client-logo/image 21.png";
import client3 from "../../assets/client-logo/image 22.png";
import client4 from "../../assets/client-logo/image 23.png";
import client5 from "../../assets/client-logo/image 24.png";
import client6 from "../../assets/client-logo/image 25.png";
import client7 from "../../assets/client-logo/image 26.png";
import patternRight from "../../assets/patterns/color-pattern-right.png";

import VisionSection from "../vision/VisionSection";
import { Link } from "react-router-dom";
import ReviewForm from "../ReviewForm/ReviewForm";
import Map from "./Map/Map";

const clientImage = [
  { img: client1, id: "11", name: 'Thumama' },
  { img: client1, id: "12", name: 'Muaithar' },
  { img: client2, id: "12", name: 'Wakrah' },
  { img: client3, id: "14", name: 'Aziziya' },
  { img: client4, id: "15", name: 'Markhiya' },
  { img: client5, id: "16", name: 'Al Khor' },
  { img: client6, id: "17", name: 'Lekhdaira' },
  { img: client7, id: "18", name: 'Zubara' },
];

function Home() {
  const { t } = useTranslation();
  const [trans, setTrans] = useState(0)
  const aboutParaRef = useRef(null);
  const aboutHeadingRef=useRef(null)
  const aboutImageRef=useRef(null)
  const isaboutParaInView = useInView(aboutParaRef);
  const isaboutImageInView = useInView(aboutImageRef);
  const isaboutHeadingInView = useInView(aboutHeadingRef);

  const aboutParaAnimation = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };
  const aboutHeadingAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  const aboutImageAnimation = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  const pageRef = useRef()
  useEffect(() => {

    pageRef.current.addEventListener('scroll', () => {
      console.log(pageRef.current.scrollY)
    })
    window.addEventListener('scroll', () => {
      setTrans(window.scrollY)
    })
  }, [])



  return (
    <motion.div
      ref={pageRef}

      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      <div className="home">
        <div className="hero vid-div">
          <video autoPlay loop muted playsInline id="video" >
            <source src={video2} type="video/mp4" />
          </video>
          <div className="overlay10"></div>
          <div className="hero-slider-content">
            {/* <Carousel pause={false}>
              <Carousel.Item interval={3000}>
                <div className="hero-slider-item">
                  <div className="slider-heading">
                    {t("home.discover_tea_blends")}
                  </div>
                  <div className="button-hero">
                    <Link className="slider-btn-text" to={"/menu"}>
                      <div className="slider-btn">{t("home.order_now")}</div>
                    </Link>
                  </div>
                </div>
              </Carousel.Item>
            </Carousel> */}
          </div>
        </div>
              
        <Container >
          <Row>
            
            <Col sm={12} md={6} style={{ zIndex: '1' }}>
              <motion.div className="content-1-img-section" ref={aboutImageRef} variants={aboutImageAnimation} initial="hidden" animate={isaboutImageInView ? "visible" : "hidden"}>
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
              </motion.div >
            </Col>

            <Col >
              <div className="content-1">
              <motion.div className="content-1-details" ref={aboutHeadingRef} variants={aboutHeadingAnimation} initial="hidden" animate={isaboutHeadingInView ? "visible" : "hidden"}>
                  <h1 className="heading">{t("home.about_the_company")}</h1>
                  </motion.div>
                
                <motion.div className="content-1-details" ref={aboutParaRef} variants={aboutParaAnimation} initial="hidden" animate={isaboutParaInView ? "visible" : "hidden"}>
                  <p className="para" style={{}}>{t("home.company_description")}</p>
                  </motion.div>
                 
                <div className="content-1-details">
                  <Link to={"aboutus"}>
                    <button className="content-btn">
                      {t("home.more_info")}
                    </button>
                  </Link>
                </div>
              </div>
              <div className="pattern-about" style={{
                marginLeft: 'auto',
                backgroundImage: `url("${patternRight}")`,
                transform: `translateY(-${trans}px)`,

              }}>
              </div>
            </Col>
          </Row>
        </Container>
        <VisionSection />
        <div>
          <div className="home-section4">
            <div className="section-heading">
              <div className="heading-text">Take a look at our stores</div>
              <div className="heading-desc">
                Find Your Ideal Ambiance
              </div>
            </div>
            <div className="map-section" >
              <Map />
            </div>

          </div>
        </div>

        {/* <Certification /> */}
      </div>
      <div className="pattern-footer" style={{
        marginLeft: 'auto',
        backgroundImage: `url("${patternRight}")`,
        transform: `translateY(-${trans}px)`,

      }}></div>
    </motion.div>

  );
}

export default Home;
