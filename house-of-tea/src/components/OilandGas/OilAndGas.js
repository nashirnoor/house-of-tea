import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./OilAndgas.css";
import oilLogo from "../../assets/icon/oil.png";
import VisionSection from "../../components/vision/VisionSection";
import Certification from "../../components/certification/Certification";

import { motion } from "framer-motion";

function OilAndGas() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      <div className="services-section1">
        <Container>
          <Row>
            <Col>
              <div className="oil-banner1">
                <div className="oil-title1">
                  <div>
                    {" "}
                    <img src={oilLogo} alt="" />
                  </div>
                  <div> OIL & GAS</div>
                </div>
                <div className="overlay"></div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="services-box1">
                <div>type approval /certifications</div>
              </div>
            </Col>
            <Col>
              <div className="services-box1">
                <div>offshore onshore modular containers</div>
              </div>
            </Col>
            <Col>
              <div className="services-box1">
                <div>skid mounted package</div>
              </div>
            </Col>
            <Col>
              <div className="services-box1">
                <div>process piping</div>
              </div>
            </Col>
            <Col>
              <div className="services-box1">
                <div>x overs</div>
              </div>
            </Col>
            <Col>
              <div className="services-box1">
                <div>well testing package( DNV,cSC,aSME,pED/cE )</div>
              </div>
            </Col>
            <Col xl="4" lg="6" md="6">
              <div className="services-box1">
                <div>commissioning and testing</div>
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

export default OilAndGas;
