// React Component
import React from "react";
import "./WhoWeAre.css";
import who1 from '../../assets/who1.png'
import who4 from '../../assets/who444.png'
import who2 from '../../assets/who2.png'
import who3 from '../../assets/who3.png'
const WhoWeAre = () => {
  return (
    <div className="who-we-are-container">
      <div className="text-sections">
        <h1>Who We Are?</h1>
        <p>
          At IT Service Africa Limited, we deliver secure, intuitive, and
          innovative IT solutions tailored for your business. Our unique IT
          Service Delivery Framework (SDF) ensures seamless deployment and
          management, providing reliable,cutting-edge services that are simple
          to access and use. With a strong focus on safety, accessibility, and
          ease, we empower your business to excel in the digital age, giving you
          the confidence to move forward with every technological step.
        </p>
        <button className="learn-more-button">Learn More</button>
      </div>
      <div className="image-sections">
        <div className="image-grid"> 
  <img
    src={who1}
    alt="Image 1"
    className="image-grid-item"
  />
  <div className="image-grid-item stacked-images">
    <img 
      src={who4}
      alt="Image 2"
    />
    <img
      src={who2}
      alt="Image 4"
    />
  </div>
  <img
  src={who3}
  alt="Image 3"
  className="image-grid-item special-width"
/>



        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
