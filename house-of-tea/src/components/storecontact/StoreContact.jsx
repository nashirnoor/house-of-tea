

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../storecontact/storecontact.css";

import callIcon from "../../assets/contactus/call.svg";
import emailIcon from "../../assets/contactus/email.svg";
import locIcon from "../../assets/contactus/location_on.svg";
import { motion } from "framer-motion";
import { useTranslation } from 'react-i18next';
import ReviewForm from "../ReviewForm/ReviewForm";
import { FaWhatsapp } from "react-icons/fa";
const storeData = [
    { name: "Aziziya", landline: "41435313", whatsapp: "74410010" },
    { name: "Al Wakrah", landline: "44166767", whatsapp: "31366767" },
    { name: "Al Thumama", landline: "44425757", whatsapp: "31235757" },
    { name: "Al Khor", landline: "44277366", whatsapp: "70377366" },
    { name: "Al Rayyan", landline: "44362211", whatsapp: "31462211" },
    { name: "Al Markhiya", landline: "41423838", whatsapp: "77298787" },
    { name: "Al Zubarah", landline: "44933644", whatsapp: "70602132" },

];
const noland = [
    { name: "Lekhdaira", whatsapp: "77289797" },
    { name: "City Center", whatsapp: "31393737" }
]

function StoreContact() {
    const { t } = useTranslation();

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth }}
            style={{ backgroundColor: 'black', color: 'white', width: '100%' }}
        >
            <Container>
                <Row style={{ width: "100%" }}>
                    <Col>
                        <div className="banner8">
                            <div className="overlay8"></div>
                            <div className="title8">
                                <div className="contact-us-heading"></div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <div>
                        <div className="contact-heading-section">
                            <div className="contact-heading">{t('contactUs.subheading')}</div>
                            <div className="contact-heading-desc">{t('contactUs.description')}</div>
                        </div>
                    </div>
                </Row>

                {storeData.map((store, index) => (
                    <div key={index} style={{ marginBottom: '30px' }}>
                        {/* Location Name */}
                        <Row>
                            <Col>
                                <h3 style={{ textAlign: 'center', margin: '20px 0' }}>{store.name}</h3>
                            </Col>
                        </Row>

                        <Row className="contact-card-group">
                            {/* First Card: Landline */}
                            {store.landline && (
                                <Col md={4}>
                                    <div className="contact-card">
                                        <motion.div
                                            whileHover={{ scale: 1.2, rotate: -20 }}
                                            whileTap={{ scale: 0.8, rotate: 90, borderRadius: "100%" }}
                                            className="contact-card-icon"
                                        >
                                            <img src={callIcon} alt="call icon" />
                                        </motion.div>
                                        <div className="contact-card-title">{t('contactUs.callUs')}</div>
                                        <div className="contact-card-title-desc">{t('contactUs.callDetails')}</div>
                                        <div className="contact-card-detail">+974 {store.landline}</div>
                                    </div>
                                </Col>
                            )}

                            {/* Second Card: Email */}
                            <Col md={4}>
                                <div className="contact-card">
                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: -20 }}
                                        whileTap={{ scale: 0.8, rotate: 90, borderRadius: "100%" }}
                                        className="contact-card-icon"
                                    >
                                        <img src={emailIcon} alt="email icon" />
                                    </motion.div>
                                    <div className="contact-card-title">{t('contactUs.email')}</div>
                                    <div className="contact-card-title-desc">{t('contactUs.emailDetails')}</div>
                                    <div className="contact-card-detail-lower">info@houseoftea.qa</div>
                                </div>
                            </Col>

                            {/* Third Card: WhatsApp */}
                            <Col md={4}>
                                <div className="contact-card">
                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: -20 }}
                                        whileTap={{ scale: 0.8, rotate: 90, borderRadius: "100%" }}
                                        className="contact-card-icon"
                                    >
                                        <FaWhatsapp size={35} />
                                    </motion.div>
                                    <div className="contact-card-title">{t('contactUs.Whatsapp')}</div>
                                    <div className="contact-card-title-desc">{t('contactUs.chat_with_us')}</div>
                                    <div className="contact-card-detail">+974 {store.whatsapp}</div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                ))}
                 {noland.map((store, index) => (
                    <div key={index} style={{ marginBottom: '30px' }}>
                        {/* Location Name */}
                        <Row>
                            <Col>
                                <h3 style={{ textAlign: 'center', margin: '20px 0' }}>{store.name}</h3>
                            </Col>
                        </Row>

                        <Row className="contact-card-group">                         
                            {/* Second Card: Email */}
                            <Col md={6}>
                                <div className="contact-card">
                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: -20 }}
                                        whileTap={{ scale: 0.8, rotate: 90, borderRadius: "100%" }}
                                        className="contact-card-icon"
                                    >
                                        <img src={emailIcon} alt="email icon" />
                                    </motion.div>
                                    <div className="contact-card-title">{t('contactUs.email')}</div>
                                    <div className="contact-card-title-desc">{t('contactUs.emailDetails')}</div>
                                    <div className="contact-card-detail-lower">info@houseoftea.qa</div>
                                </div>
                            </Col>

                            {/* Third Card: WhatsApp */}
                            <Col md={6}>
                                <div className="contact-card">
                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: -20 }}
                                        whileTap={{ scale: 0.8, rotate: 90, borderRadius: "100%" }}
                                        className="contact-card-icon"
                                    >
                                        <FaWhatsapp size={35} />
                                    </motion.div>
                                    <div className="contact-card-title">{t('contactUs.Whatsapp')}</div>
                                    <div className="contact-card-title-desc">{t('contactUs.chat_with_us')}</div>
                                    <div className="contact-card-detail">+974 {store.whatsapp}</div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                ))}
            </Container>
        </motion.div>
    );
}


export default StoreContact