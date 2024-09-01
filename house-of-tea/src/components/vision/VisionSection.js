// import React from "react";
// import contentLogo from "../../assets/content-logo/Frame 4 1.png";
// import contentLogo2 from "../../assets/content-logo/Frame 5 1.png";
// import { motion } from "framer-motion";

// import "./VisionSection.css";
// function VisionSection() {
//   return (
//     <div>
//       <div className="home-section3">
//         <div className="section-heading">
//           <div className="heading-text">vission & mission</div>
//           <div className="heading-desc">
//             what are we doing, and why are we doing it.
//           </div>
//         </div>
//         <div className="section-content3">
//           <div className="content3">
//             <motion.div
//               animate={{ scale: [1, 1.2, 1] }}
//               transition={{ ease: "linear", duration: 1.5, repeat: Infinity }}
//               className="v-icon"
//             >
//               <img src={contentLogo} alt="" />
//             </motion.div>
//             <div className="content3-heading">our vision</div>
//             <div className="line"></div>
//             <div className="content3-detail">
//               To become the spearheads of revolutionary offshore / mechanical
//               turnkey project management techniques, ensure uniform quality
//               standards to our client, and expand our service portfolio by
//               investing in technology and training for the looming engineers.
//             </div>
//           </div>

//           <div className="content3">
//             <motion.div
//               animate={{ rotate: [20, -30, 20] }}
//               whileTap={{ scale: 0.8, rotate: 90, borderRadius: "100%" }}
//               transition={{ ease: "linear", duration: 1.5, repeat: Infinity }}
//               className="v-icon"
//             >
//               <img src={contentLogo2} alt="" />
//             </motion.div>
//             <div className="content3-heading">our vision</div>
//             <div className="line"></div>
//             <div className="content3-detail">
//               To become the spearheads of revolutionary offshore / mechanical
//               turnkey project management techniques, ensure uniform quality
//               standards to our client, and expand our service portfolio by
//               investing in technology and training for the looming engineers.
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default VisionSection;


import React, { useState } from "react";
import contentLogo from "../../assets/content-logo/Frame 4 1 white fill.png";
import contentLogo2 from "../../assets/content-logo/Frame 5 1 white fill.png";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import "./VisionSection.css";

function VisionSection() {
  const [selectedContent, setSelectedContent] = useState("vision");
  const { t } = useTranslation();

  const handleClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className="container" style={{ marginTop: "6rem" }}>
      <div className="section-heading">
        <div className="heading-text">{t("VisionSection.heading")}</div>
        <div className="heading-desc">{t("VisionSection.desc")}</div>
      </div>
      <div className="button-group">
        <button
          onClick={() => handleClick("vision")}
          className={`button ${selectedContent === "vision" ? "active" : ""}`}
        >
          {t("VisionSection.vision.heading")}
        </button>
        <button
          onClick={() => handleClick("mission")}
          className={`button ${selectedContent === "mission" ? "active" : ""}`}
        >
          {t("VisionSection.mission.heading")}
        </button>
      </div>
      <div className="section-content3">
        {selectedContent === "vision" && (
          <div className="content3">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              className="v-icon"
            >
              <img src={contentLogo} alt="Vision Logo" />
            </motion.div>
            <div className="content3-heading">
              {t("VisionSection.vision.heading")}
            </div>
            <div className="line"></div>
            <div className="content3-detail">
              {t("VisionSection.vision.detail")}
            </div>
          </div>
        )}
        {selectedContent === "mission" && (
          <div className="content3">
            <motion.div
              animate={{ rotate: [20, -30, 20] }}
              whileTap={{ scale: 0.8, rotate: 90, borderRadius: "100%" }}
              className="v-icon"
            >
              <img src={contentLogo2} alt="Mission Logo" />
            </motion.div>
            <div className="content3-heading">
              {t("VisionSection.mission.heading")}
            </div>
            <div className="line"></div>
            <div className="content3-detail">
              {t("VisionSection.mission.detail")}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default VisionSection;



// import React, { useState } from "react";
// import contentLogo from "../../assets/content-logo/Frame 4 1.png";
// import contentLogo2 from "../../assets/content-logo/Frame 5 1.png";
// import { motion } from "framer-motion";
// import "./VisionSection.css";

// function VisionSection() {
//   const [selectedContent, setSelectedContent] = useState("vision");

//   const handleClick = (content) => {
//     setSelectedContent(content);
//   };

//   return (
//     <div className="container" style={{ marginTop: "6rem" }}>
//       <div className="section-heading">
//         <div className="heading-text">Vision & Mission</div>
//         <div className="heading-desc">
//           What are we doing, and why are we doing it.
//         </div>
//       </div>
//       <div className="button-group">
//         <button
//           onClick={() => handleClick("vision")}
//           className={`button ${selectedContent === "vision" ? "active" : ""}`}
//         >
//           Vision
//         </button>
//         <button
//           onClick={() => handleClick("mission")}
//           className={`button ${selectedContent === "mission" ? "active" : ""}`}
//         >
//           Mission
//         </button>
//       </div>
//       <div className="section-content3">
//         {selectedContent === "vision" && (
//           <div className="content3">
//             <motion.div
//               animate={{ scale: [1, 1.2, 1] }}
//               // transition={{ ease: "linear", duration: 1.5, repeat: Infinity }}
//               className="v-icon"
//             >
//               <img src={contentLogo} alt="Vision Logo" />
//             </motion.div>
//             <div className="content3-heading">Our Vision</div>
//             <div className="line"></div>
//             <div className="content3-detail">
//               At House of Tea, our vision is to become the leaders in the tea
//               industry by pioneering innovative tea blends and brewing
//               techniques. We aim to consistently deliver the highest quality
//               standards to our customers and broaden our range of offerings. By
//               investing in advanced tea-making technology and comprehensive
//               training for our team, we aspire to provide an exceptional tea
//               experience that delights and inspires tea enthusiasts everywhere.
//             </div>
//           </div>
//         )}
//         {selectedContent === "mission" && (
//           <div className="content3">
//             <motion.div
//               animate={{ rotate: [20, -30, 20] }}
//               whileTap={{ scale: 0.8, rotate: 90, borderRadius: "100%" }}
//               // transition={{ ease: "linear", duration: 1.5, repeat: Infinity }}
//               className="v-icon"
//             >
//               <img src={contentLogo2} alt="Mission Logo" />
//             </motion.div>
//             <div className="content3-heading">Our Mission</div>
//             <div className="line"></div>
//             <div className="content3-detail">
//               At House of Tea, our mission is to lead the way in creating
//               extraordinary tea experiences. We strive to introduce
//               revolutionary tea blends and brewing techniques, setting new
//               trends in the tea industry. Our commitment to quality ensures that
//               every cup of tea meets the highest standards, from sourcing the
//               finest leaves to delivering impeccable service. We continuously
//               expand our offerings to cater to diverse tastes and preferences,
//               investing in the latest tea-making technologies and staff training
//               to provide unparalleled expertise. Above all, we aim to build a
//               welcoming and vibrant community where tea enthusiasts can connect,
//               relax, and enjoy the rich tradition of tea.
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default VisionSection;
