import React from "react";
import "./Steps.css";
import step1Icon from "../../assets/step1.png";
import step2Icon from "../../assets/step2.png";
import step3Icon from "../../assets/step3.png";
import lightningIcon from "../../assets/lightning.png";
import steps from "../../assets/steps.png";

const Steps = () => {
  return (
    <div className="main-container">
      <img src={steps} alt="" className="steps"/>
{/*      
      <div className="steps-section">
        <h1>Start Your Success Story with Us in 3 Easy Steps.</h1>
        <p>Getting started with us is simple. Here's how we'll help you grow your business.</p>
        <div className="steps-container">
          <div className="step">
            <img src={step1Icon} alt="Step 1 Icon" />
            <h3>Schedule a Free Consultation</h3>
            <p>Connect with our team at your convenience. We're here to listen and understand your unique IT challenges.</p>
          </div>
          <div className="step">
            <img src={step2Icon} alt="Step 2 Icon" />
            <h3>Customize Your Plan</h3>
            <p>Work with our experts to create personalized IT solutions that align with your goals and ensure smooth implementation.</p>
          </div>
          <div className="step">
            <img src={step3Icon} alt="Step 3 Icon" />
            <h3>Watch Your Business Thrive</h3>
            <p>Watch your business grow with our innovative IT services, designed to boost efficiency, security, and scalability.</p>
          </div>
        </div>
      </div>

     
      <div className="cta-section">
        <img src={lightningIcon} alt="Lightning Icon" className="cta-icon" />
        <h2>Take the next step towards business growth!</h2>
        <p>You've taken the first steps toward success, now it's time to take action!</p>
        <button>Schedule a free consultation</button>
      </div> */}
    </div>
  );
};

export default Steps;
