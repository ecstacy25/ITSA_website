import React from "react";
import "./About2.css";
import Image1 from "../../assets/Frames.png"

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="texts">
        <h3>About IT Service Africa</h3>
        <h2>Who are we?</h2>
        <p>
          At IT Service Africa, we are more than just a service provider, we are your strategic technology partner. 
          Our mission is to deliver IT solutions that aren't just effective but transformative. From device health 
          management and IT managed services to process automation, we craft tailored solutions that keep your 
          business agile, secure, and ahead of the curve.
          With a deep understanding of IT complexities, we turn challenges into streamlined, effective solutions 
          that empower your business to thrive.
        </p>
        <button className="cta-button">Check out our services</button>
      </div>
      <div className="images">
        <img src={Image1} alt="IT Service Africa Overview" />
      </div>
    </div>
  );
};

export default AboutSection;
