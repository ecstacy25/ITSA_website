import React from "react";
import "./Service2.css";
import innovationIcon from "../../assets/innovation.png";
import efficiencyIcon from "../../assets/efficiency.png";
import securityIcon from "../../assets/security.png";
import productivityIcon from "../../assets/productivity.png";
import laptop from '../../assets/laptop-img.png'

const App = () => {
  return (
    <div className="container">
         
      <div className="content">
        
        <div className="itservices">
        <div className="image-container">
        <h1>
          IT Service Desk Africa is transforming businesses with Innovation Efficiency & Security.
        </h1>
        <img
          src={laptop}
          alt="Person working on a laptop"
        />
      </div>
        <div className="features">
          <div className="feature">
            <div className="icon1">
              <img src={innovationIcon} alt="Innovation Icon" />
            </div>
            <h3>Innovation</h3>
            <p>We constantly introduce new ideas or methods for improvement.</p>
          </div>
          <div className="feature">
            <div className="icon1">
              <img src={efficiencyIcon} alt="Efficiency Icon" />
            </div>
            <h3>Efficiency</h3>
            <p>We ensure clients maximize output with minimum resources or effort.</p>
          </div>
          <div className="feature">
            <div className="icon1">
              <img src={securityIcon} alt="Security Icon" />
            </div>
            <h3>Security</h3>
            <p>Protect devices against unauthorized access or potential harm.</p>
          </div>
          <div className="feature">
            <div className="icon1">
              <img src={productivityIcon} alt="Productivity Icon" />
            </div>
            <h3>Productivity</h3>
            <p>Output or effectiveness of tasks completed within a timeframe.</p>
          </div>
        </div> 
        </div>
       
      </div>
     
    </div>
  );
};

export default App;
