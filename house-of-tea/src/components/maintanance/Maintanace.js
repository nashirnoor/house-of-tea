import React from "react";

import "./Maintanace.css";
import { Col, Container, Row } from "react-bootstrap";

import gearIcon from "../../assets/icon/gear 2.png";
import VisionSection from "../../components/vision/VisionSection";
import Certification from "../../components/certification/Certification";
import { motion } from "framer-motion";

function Maintanace() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      <div className="services-section5">
        <Container>
          <Row>
            <Col>
              <div className="oil-banner5">
                <div className="oil-title5">
                  <div>
                    {" "}
                    <img src={gearIcon} alt="" />
                  </div>
                  <div>maintenance & refurbishment</div>
                </div>
                <div className="overlay5"></div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="services-box5">
                <div>offshore DNV unit maintenance</div>
              </div>
            </Col>
            <Col>
              <div className="services-box5">
                <div>offshore structure maintenance</div>
              </div>
            </Col>
            <Col>
              <div className="services-box5">
                <div>a60 & 17EX unit maintenance</div>
              </div>
            </Col>

            <Col xl="4" lg="6" md="6">
              <div className="services-box5">
                <div>
                  zone 1 & zone 2 explosion proof electrical maintenance
                </div>
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

export default Maintanace;
