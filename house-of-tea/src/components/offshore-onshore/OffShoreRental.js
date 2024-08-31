import React from "react";
import "./OffShoreRental.css";
import { Col, Container, Row } from "react-bootstrap";

import offshoreIcon from "../../assets/icon/house-rental 1.png";
import VisionSection from "../../components/vision/VisionSection";
import Certification from "../../components/certification/Certification";
import { motion } from "framer-motion";

function OffShoreRental() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      <div className="services-section4">
        <Container>
          <Row>
            <Col>
              <div className="oil-banner4">
                <div className="oil-title4">
                  <div>
                    {" "}
                    <img src={offshoreIcon} alt="" />
                  </div>
                  <div>Offshore/Onshore rental</div>
                </div>
                <div className="overlay4"></div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="services-box4">
                <div>offshore container</div>
              </div>
            </Col>
            <Col>
              <div className="services-box4">
                <div>offshore baskets</div>
              </div>
            </Col>
            <Col>
              <div className="services-box4">
                <div>offshore Skibs</div>
              </div>
            </Col>
            <Col>
              <div className="services-box4">
                <div>offshore accommodation cabin</div>
              </div>
            </Col>
            <Col>
              <div className="services-box4">
                <div>lifting frame</div>
              </div>
            </Col>
            <Col>
              <div className="services-box4">
                <div>offshore chemical storage tank</div>
              </div>
            </Col>
            <Col xl="4" lg="6" md="6">
              <div className="services-box4">
                <div>offshore workshop container</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <VisionSection />

      <Certification />
    </motion.div>
  );
}

export default OffShoreRental;
