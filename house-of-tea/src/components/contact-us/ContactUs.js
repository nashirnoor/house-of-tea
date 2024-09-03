// import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import "./ContactUs.css";
// import VisionSection from "../vision/VisionSection";
// import Certification from "../../components/certification/Certification";
// import callIcon from "../../assets/contactus/call.svg";
// import emailIcon from "../../assets/contactus/email.svg";
// import locIcon from "../../assets/contactus/location_on.svg";
// import { motion } from "framer-motion";

// function ContactUs() {
//   return (
//     <motion.div
//       initial={{ width: 0 }}
//       animate={{ width: "100%" }}
//       exit={{ x: window.innerWidth }}
//     >
//       <Container>
//         <Row style={{width:"100%"}}>
//           <Col>
//             <div className="banner8">
//               <div className="overlay8"></div>
//               <div className="title8">
//                 <div className="contact-us-heading"> Contact Us</div>
//               </div>
//             </div>
//           </Col>
//         </Row>
//         <Row>
//           <div>
//             <div className="contact-heading-section">
//               <div className="contact-heading">Contact our Friendly Team</div>
//               <div className="contact-heading-desc">
//                 what are we doing, and why are we doing it.
//               </div>
//             </div>
//           </div>
//         </Row>
//         <Row>
//           <Col>
//             <div className="contact-card">
//               <motion.div
//                 whileHover={{ scale: 1.2, rotate: -20 }}
//                 whileTap={{ scale: 0.8, rotate: 90, borderRadius: "100%" }}
//                 className="contact-card-icon"
//               >
//                 <img src={callIcon} alt=" call icon" />
//               </motion.div>
//               <div className="contact-card-title">call us</div>
//               <div className="contact-card-title-desc">Sat-Thu</div>
//               <div className="contact-card-detail">
//                 +974 7447 7650 +974 5512 9692 +974 7443 3090
//               </div>
//             </div>
//           </Col>
//           <Col>
//             <div className="contact-card">
//               <motion.div
//                 whileHover={{ scale: 1.2, rotate: -20 }}
//                 whileTap={{ scale: 0.8, rotate: 90, borderRadius: "100%" }}
//                 className="contact-card-icon"
//               >
//                 <img src={emailIcon} alt=" email icon" />
//               </motion.div>
//               <div className="contact-card-title">email</div>
//               <div className="contact-card-title-desc">send emails at</div>
//               <div className="contact-card-detail">
//                 info@gulfshore-group.com
//               </div>
//             </div>
//           </Col>
//           <Col>
//             <div className="contact-card">
//               <motion.div
//                 whileHover={{ scale: 1.2, rotate: -20 }}
//                 whileTap={{ scale: 0.8, rotate: 90, borderRadius: "100%" }}
//                 className="contact-card-icon"
//               >
//                 <img src={locIcon} alt=" location icon" />
//               </motion.div>
//               <div className="contact-card-title">visit us</div>
//               <div className="contact-card-title-desc">visit our office</div>
//               <div className="contact-card-detail">
//                 Building No 16, Street 3080, Zone 91 Birkat Al Awamer, Doha,
//                 Qatar
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>

//       {/* <VisionSection />
//       <Certification /> */}
//     </motion.div>
//   );
// }

// export default ContactUs;


import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./ContactUs.css";
import callIcon from "../../assets/contactus/call.svg";
import emailIcon from "../../assets/contactus/email.svg";
import locIcon from "../../assets/contactus/location_on.svg";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import ReviewForm from "../ReviewForm/ReviewForm";
import { FaWhatsapp } from "react-icons/fa";

function ContactUs() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    style={{backgroundColor:'black',color:'white',width:'100%'}}
    >
      <Container >
        <Row style={{ width: "100%" }}>
          <Col>
            <div className="banner8">
              <div className="overlay8"></div>
              <div className="title8">
                <div className="contact-us-heading">
                  {t('contactUs.heading')}
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <div>
            <div className="contact-heading-section">
              <div className="contact-heading">
                {t('contactUs.subheading')}
              </div>
              <div className="contact-heading-desc">
                {t('contactUs.description')}
              </div>
            </div>
          </div>
        </Row>
        <Row className="contact-card-group">
          <Col>
            <div className="contact-card">
              <motion.div
                whileHover={{ scale: 1.2, rotate: -20 }}
                whileTap={{ scale: 0.8, rotate: 90, borderRadius: "100%" }}
                className="contact-card-icon"
              >
                <img src={callIcon} alt="call icon" />
              </motion.div>
              <div className="contact-card-title">
                {t('contactUs.callUs')}
              </div>
              <div className="contact-card-title-desc">
                {t('contactUs.callDetails')}
              </div>
              <div className="contact-card-detail">
                {/* {t('contactUs.callNumbers')} */}
                +974 70377366
              </div>
            </div>
          </Col>
          <Col>
            <div className="contact-card">
              <motion.div
                whileHover={{ scale: 1.2, rotate: -20 }}
                whileTap={{ scale: 0.8, rotate: 90, borderRadius: "100%" }}
                className="contact-card-icon"
              >
                <img src={emailIcon} alt="email icon" />
              </motion.div>
              <div className="contact-card-title">
                {t('contactUs.email')}
              </div>
              <div className="contact-card-title-desc">
                {t('contactUs.emailDetails')}
              </div>
              <div className="contact-card-detail-lower">
                {/* {t('contactUs.emailAddress')} */}
                info@houseoftea.qa
              </div>
            </div>
          </Col>
          <Col>
            <div className="contact-card">
              <motion.div
                whileHover={{ scale: 1.2, rotate: -20 }}
                whileTap={{ scale: 0.8, rotate: 90, borderRadius: "100%" }}
                className="contact-card-icon"
              >
                {/* <img src={locIcon} alt="location icon" /> */}
                <FaWhatsapp size={35}/>
              </motion.div>
              <div className="contact-card-title">
                {t('contactUs.Whatsapp')}
              </div>
              <div className="contact-card-title-desc">
                {t('contactUs.chat_with_us')}
              </div>
              <div className="contact-card-detail">
                {/* {t('contactUs.visitAddress')} */}
                +974 70377366
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div style={{paddingBottom:'20px'}}>
        <ReviewForm />
      </div>
      {/* <VisionSection />
      <Certification /> */}
    </motion.div>
  );
}

export default ContactUs;
