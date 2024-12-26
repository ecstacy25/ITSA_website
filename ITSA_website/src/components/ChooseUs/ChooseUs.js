import React from "react";
import "./ChooseUs.css";
import icon20 from "../../assets/icon20.png"
import icon21 from "../../assets/icon21.png"
import icon22 from "../../assets/icon22.png"
const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <h3>Why Choose us?</h3>
      <h1>THE REASON YOU NEED US</h1>
      <div className="reasons">
        <div className="reason-card">
          <div className="icon pink">
        <img src={icon20} alt="" />
          </div>
          <h2>Proven Expertise</h2>
          <p>
            Our experienced team brings deep industry knowledge and a track
            record of success, ensuring you receive reliable and effective IT
            solutions tailored to your needs.
          </p>
        </div>
        <div className="reason-card">
          <div className="icon green">
          <img src={icon21} alt="" />
          </div>
          <h2>Innovative Approach</h2>
          <p>
            In today’s fast-changing digital world, staying ahead requires new
            ideas. We use the latest technologies and trends to prepare your
            business for the future, helping you stay competitive and
            adaptable.
          </p>
        </div>
        <div className="reason-card">
          <div className="icon yellow">
          <img src={icon22} alt="" />
          </div>
          <h2>Customized Solutions</h2>
          <p>
            We take the time to understand your unique challenges, delivering
            personalized strategies that enhance efficiency and drive growth
            for your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
