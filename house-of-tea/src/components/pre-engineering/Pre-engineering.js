import React from "react";
import "./Pre-engineering.css";
import { Col, Container, Row } from "react-bootstrap";

import buildIcon from "../../assets/icon/building 2.png";
import VisionSection from "../../components/vision/VisionSection";
import Certification from "../../components/certification/Certification";

import { motion } from "framer-motion";

function PreEngineering() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      <div className="services-section3">
        <Container>
          <Row>
            <Col>
              <div className="oil-banner3">
                <div className="oil-title3">
                  <div>
                    {" "}
                    <img src={buildIcon} alt="" />
                  </div>
                  <div>pre engineered building</div>
                </div>
                <div className="overlay3"></div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="services-box3">
                <div>pEB structural design</div>
              </div>
            </Col>
            <Col>
              <div className="services-box3">
                <div>pEB Steel detailing</div>
              </div>
            </Col>
            <Col>
              <div className="services-box3">
                <div>lgsf steel frames and structure</div>
              </div>
            </Col>

            <Col xl="4" lg="6" md="6">
              <div className="services-box3">
                <div>pEB fabrication</div>
              </div>
            </Col>
            <Col xl="4" lg="6" md="6">
              <div className="services-box3">
                <div>peb erection</div>
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

export default PreEngineering;
