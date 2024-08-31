import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import "./Inspection.css";

import inspIcon from "../../assets/icon/inspecting 2.png";
import VisionSection from "../../components/vision/VisionSection";
import Certification from "../../components/certification/Certification";
import { motion } from "framer-motion";

function Inpection() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      <div className="services-section6">
        <Container>
          <Row>
            <Col>
              <div className="oil-banner6">
                <div className="oil-title6">
                  <div>
                    {" "}
                    <img src={inspIcon} alt="" />
                  </div>
                  <div>load testing and inspections </div>
                </div>
                <div className="overlay6"></div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="services-box6">
                <div>radiography</div>
              </div>
            </Col>
            <Col>
              <div className="services-box6">
                <div>magnetic particle testing</div>
              </div>
            </Col>
            <Col>
              <div className="services-box6">
                <div>ultrasonic test</div>
              </div>
            </Col>
            <Col>
              <div className="services-box6">
                <div>dye penetrant test</div>
              </div>
            </Col>
            <Col>
              <div className="services-box6">
                <div>visual inspection</div>
              </div>
            </Col>
            <Col>
              <div className="services-box6">
                <div>eddy current testing</div>
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

export default Inpection;
