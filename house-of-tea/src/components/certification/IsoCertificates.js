import React from "react";
import { Container, Row } from "react-bootstrap";
import "./IsoCertificates.css";
import Carousel from "react-bootstrap/Carousel";
import certificat1 from "../../assets/ISOcertificates/certificate1.png";
import certificat2 from "../../assets/ISOcertificates/certificate2.png";
import certificat3 from "../../assets/ISOcertificates/certificate3.png";
import VisionSection from "../vision/VisionSection";
import { motion } from "framer-motion";

function IsoCertificates() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
      className="iso-certifications"
    >
      <Container>
        <Row>
          <div className="section-heading-certificates">
            <div className="heading-text-certi">iSO certificates</div>
            <div className="heading-desc-certi">
              We Showcasing our ISO Certifications
            </div>
          </div>
        </Row>
        <Row>
          <div>
            <div className="certificates-section">
              <Carousel interval={null}>
                <Carousel.Item>
                  <div className="certi-img">
                    <img src={certificat1} alt="" />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="certi-img">
                    <img src={certificat2} alt="" />
                  </div>
                </Carousel.Item>
                <Carousel.Item>
                  <div className="certi-img">
                    <img src={certificat3} alt="" />
                  </div>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </Row>
      </Container>
      <VisionSection />
    </motion.div>
  );
}

export default IsoCertificates;
