import React from "react";
import "./Engineering.css";
import { Col, Container, Row } from "react-bootstrap";

import maintanIcon from "../../assets/icon/maintenance.png";
import VisionSection from "../../components/vision/VisionSection";
import Certification from "../../components/certification/Certification";
import { motion } from "framer-motion";

function Engineering() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      <div className="services-section2">
        <Container>
          <Row>
            <Col>
              <div className="oil-banner2">
                <div className="oil-title2">
                  <div>
                    {" "}
                    <img src={maintanIcon} alt="" />
                  </div>
                  <div>Engineering</div>
                </div>
                <div className="overlay2"></div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="services-box2">
                <div>Detailed engineering</div>
              </div>
            </Col>
            <Col>
              <div className="services-box2">
                <div>production drawing and detailing service</div>
              </div>
            </Col>
            <Col>
              <div className="services-box2">
                <div>product design</div>
              </div>
            </Col>
            <Col>
              <div className="services-box2">
                <div>feed engineering</div>
              </div>
            </Col>
            <Col>
              <div className="services-box2">
                <div>3D modeling</div>
              </div>
            </Col>
            <Col>
              <div className="services-box2">
                <div>3D Scanning</div>
              </div>
            </Col>
            <Col xl="4" lg="6" md="6">
              <div className="services-box2">
                <div>As built</div>
              </div>
            </Col>
            <Col xl="4" lg="6" md="6">
              <div className="services-box2">
                <div>reverse engineering</div>
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

export default Engineering;
