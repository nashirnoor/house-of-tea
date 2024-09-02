// import React from "react";
// // import logoWhite from "../../assets/logo/GULF SHORE LOGO PNG 4.png";
// import logoWhite from "../../assets/logo/toplogo.png";
// import "./Footer.css";
// import { IoCallSharp } from "react-icons/io5";
// import { IoLogoWhatsapp } from "react-icons/io";
// import { MdEmail } from "react-icons/md";
// import facebookicon from "../../assets/face.png";
// import instagarmicon from "../../assets/instagram.png";
// import { Link } from "react-router-dom";
// import ReviewForm from "../ReviewForm/ReviewForm";
// function Footer() {
//   return (
//     <div className="footer">
//       <div className="logofooter">
//         <img src={logoWhite} alt="" />
//       </div>
//       {/* <div className="menufooter">
//         <div>
//           <ul className="menu-list">
//             <li>
//               <Link className="menu-list-link" to={"/"}>
//                 home
//               </Link>{" "}
//             </li>
//             <li>
//               <Link className="menu-list-link" to={"/aboutus"}>
//                 {" "}
//                 about us
//               </Link>{" "}
//             </li>
//             <li>
//               <Link className="menu-list-link" to={"/contactus"}>
//                 contact us
//               </Link>
//             </li>
//             <li>
//               <Link className="menu-list-link" to={"/iso-certifications"}>
//                 certifications
//               </Link>
//             </li>
//           </ul>
//         </div>

//         <div className="iconfooter">
//           <div>
//             <img src={instagarmicon} alt=" instagram icon" />
//           </div>
//           <div>
//             <img src={facebookicon} alt="facebook icon" />
//           </div>
//         </div> 
//       </div> */}
//       <div className="contactfooter">
//         {/* <div className="footerHeading">address</div>
//         <div className="footerDetail">
//           Gulf Shore Group Building No. 15, Street 3080, Zone 91, Birkat Al
//           Awamer, Doha,Qatar
//         </div> */}
//         <div className="footerHeading">phone</div>
//         <div className="footerDetail">
//           <IoCallSharp /> +974 7447 7650
//         </div>
//         <div className="footerDetail">
//           <IoLogoWhatsapp />
//           +974 7447 7650
//         </div>
//         <div className="footerHeading">e-mail</div>
//         <div className="footerDetail">
//           {" "}
//           <MdEmail />
//           info@houseof-group.com
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footer;


import React from "react";
import logoWhite from "../../assets/logo/hft-logo1.png";
import "./Footer.css";
import { IoCallSharp } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import facebookicon from "../../assets/face.png";
import instagarmicon from "../../assets/instagram.png";
import { Link } from "react-router-dom";
import ReviewForm from "../ReviewForm/ReviewForm";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <div className="footer" style={{backgroundColor:"black"}}>
      <div className="logofooter">
        <img src={logoWhite} alt="" style={{height:'120px'}} />
      </div>
      {/* <div className="menufooter">
        <div>
          <ul className="menu-list">
            <li>
              <Link className="menu-list-link" to={"/"}>
                {t("footer.home")}
              </Link>
            </li>
            <li>
              <Link className="menu-list-link" to={"/aboutus"}>
                {t("footer.about_us")}
              </Link>
            </li>
            <li>
              <Link className="menu-list-link" to={"/contactus"}>
                {t("footer.contact_us")}
              </Link>
            </li>
            <li>
              <Link className="menu-list-link" to={"/iso-certifications"}>
                {t("footer.certifications")}
              </Link>
            </li>
          </ul>
        </div>

        <div className="iconfooter">
          <div>
            <img src={instagarmicon} alt="instagram icon" />
          </div>
          <div>
            <img src={facebookicon} alt="facebook icon" />
          </div>
        </div>
      </div> */}
      <div className="contactfooter">
        {/* <div className="footerHeading">{t("footer.address")}</div>
        <div className="footerDetail">
          {t("footer.address_detail")}
        </div> */}
        <div className="footerHeading">{t("footer.phone")}</div>
        <div className="footerDetail">
          <IoCallSharp /> +974 70377366
        </div>
        <div className="footerDetail">
          <IoLogoWhatsapp />
          +974 70377366
        </div>
        <div className="footerHeading">{t("footer.email")}</div>
        <div className="footerDetail">
          <MdEmail />
          info@houseoftea.qa
        </div>
      </div>
    </div>
  );
}

export default Footer;
