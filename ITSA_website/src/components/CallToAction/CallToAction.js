import React from "react";
import "./CallToAction.css";
import call from '../../assets/call.png'

const CallToAction = () => {
  return (
    <div className="cta-container">
      <div className="cta-content1">
       <img src={call} alt="" className="call"/>
        {/* <button className="cta-button">Contact us today</button> */}
      </div>
    </div>
  );
};

export default CallToAction;
