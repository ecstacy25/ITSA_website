import React from "react";
import "./WhatDrivesUs.css";
import TeamImage from "../../assets/TeamImage.png"
import icon30 from "../../assets/icon30.png"
import icon31 from "../../assets/icon31.png"
import icon32 from "../../assets/icon32.png"

const WhatDrivesUs = () => {
  return (
    <div className="what-drives-us">
      <div className="top-section">
        <img src={TeamImage} alt="Team" className="team-image" />
        <div className="text-content">
          <h2>What drives us?</h2>
          <p>
            At IT Service Africa, we’re committed to delivering secure, reliable, and innovative IT solutions. 
            Our mission is to simplify IT management and empower businesses to grow.
          </p>
          <button className="cta-button">Contact Us</button>
        </div>
      </div>

      <div className="values-section">
        <div className="value-card">
          <div className="icon"><img src={icon30} alt="" /></div>
          <h3>Vision Statement</h3>
          <p className="t">
            Our vision is to be Africa’s leading provider of safe, secure, and innovative IT service solutions, 
            empowering businesses with technology that drives success and growth.
          </p>
        </div>

        <div className="value-card">
          <div className="icon"><img src={icon31} alt="" /></div>
          <h3>Our Mission</h3>
          <p className="t">
            Our mission is to deliver innovative, efficient, and secure IT solutions with empathy at the core. 
            We strive to streamline processes, boost productivity, and protect critical data, empowering businesses 
            to achieve their full potential.
          </p>
        </div>

        <div className="value-card">
          <div className="icon"><img src={icon32} alt="" /></div>
          <h3>Our Philosophy</h3>
          <p className="t">
            Rooted in innovation, security, and collaboration, our philosophy inspires us to craft IT solutions 
            that transform businesses across Africa and beyond.
          </p>
        </div>
      </div>

      <div className="stats-section">
        <div className="stat">
          <h3>100+</h3>
          <p>Satisfied Clients</p>
        </div>
        <div className="stat">
          <h3>4.8</h3>
          <p>Client Rating</p>
        </div>
        <div className="stat">
          <h3>5,000+</h3>
          <p>Devices Managed</p>
        </div>
        <div className="stat">
          <h3>80%</h3>
          <p>Productivity Boost</p>
        </div>
        <div className="stat">
          <h3>100%</h3>
          <p>Service Delivery</p>
        </div>
      </div>
    </div>
  );
};

export default WhatDrivesUs;
