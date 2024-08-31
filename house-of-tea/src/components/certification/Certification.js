import React from "react";
import certifiLogo from "../../assets/certifi.png";

import isosvg from "../../assets/our iso.svg";

import { Container, Row } from "react-bootstrap";
import "./Certification.css";
import { Link } from "react-router-dom";

function Certification() {
  return (
    <>
      <Container>
        <Row>
          <div>
            <div className="certification-section">
              <div className="certilogo">
                <img src={certifiLogo} alt="" />
              </div>
              <div className="content5-heading">
                <img style={{ width: "80%" }} src={isosvg} alt="" />
              </div>
              <div>
                <Link to={"/iso-certifications"}>
                  <button className="content2-btn">VIEW</button>
                </Link>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Certification;
