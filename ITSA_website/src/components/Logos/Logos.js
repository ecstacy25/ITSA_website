import React from "react";
import "./Logos.css";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";
import logo6 from "../../assets/logo6.png";
import logo7 from "../../assets/logo7.png";
import logo8 from "../../assets/logo8.png";

const Logos = () => {
  return (
    <div className="trusted-section">
      <div className="text-content">
        <h2>Trusted by Leading Businesses Across the Globe</h2>
        <p>
          From startups to industry leaders, we’re proud to power innovation
          for a diverse range of clients.
        </p>
      </div>
      <div className="logo-grid">
        <img src={logo1} alt="First E & P" />
        <img src={logo2} alt="Ardagh Group" />
        <img src={logo3} alt="Festival Hotel" />
        <img src={logo4} alt="British Council" />
        <img src={logo5} alt="Kwikpay" />
        <img src={logo6} alt="9Mobile" />
        <img src={logo7} alt="UPDC" />
        <img src={logo8} alt="Trewan" />
      </div>
    </div>
  );
};

export default Logos;
