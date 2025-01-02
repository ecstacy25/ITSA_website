// App.js
import React from "react";
import "./about.css";
import sophosLogo from "../../assets/sophosLogo.png"; 
import microsoftLogo from "../../assets/microsoftLogo.png";
import dellLogo from "../../assets/dellLogo.png";
import hpLogo from "../../assets/hpLogo.png";

const Partners = () => {
  return (
    <div className="partners-section">
      <h2>Meet the Partners Who Help Us Deliver Excellence</h2>
      <div className="logos-container">
        <img src={sophosLogo} alt="Sophos Logo" className="partner-logo" />
        <img src={microsoftLogo} alt="Microsoft Logo" className="partner-logo" />
        <img src={dellLogo} alt="Dell Logo" className="partner-logo" />
        <img src={hpLogo} alt="HP Logo" className="partner-logo" />
      </div>
    </div>
  );
};

export default Partners;
