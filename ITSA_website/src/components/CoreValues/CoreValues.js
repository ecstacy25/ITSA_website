import React from "react";
import "./CoreValues.css";

const CoreValues = () => {
  return (
    <div className="core-values">
      <h2>Our Core Values</h2>
      <p>
        Our culture is built on 4 key value-driven attributes that drive results,
        setting us apart from the competition.
      </p>
      <div className="values-grid">
        <div className="first">
        <div className="value-card blue">
          <h3>I - Innovation</h3>
          <p>
            We prioritize innovation and creativity in all aspects of our work,
            continuously striving to improve and adapt to meet the needs of our
            clients and partners.
          </p>
        </div>
        <div className="value-card pink">
          <h3>S - Security & Satisfaction</h3>
          <p>
            We are dedicated to providing a safe and secure environment for all
            stakeholders, and we are committed to continuously improving to
            ensure customer satisfaction.
          </p>
        </div>
        </div>
       <div className="second">
       <div className="value-card orange">
          <h3>T - Trustworthiness</h3>
          <p>
            We will lead our community with integrity and vision. We will
            embrace honesty and transparency at all times.
          </p>
        </div>
       
        <div className="value-card green">
          <h3>A - Assurance</h3>
          <p>
            We offer products and services that are of excellent quality and
            very reliable.
          </p>
        </div>
       </div>
        
      </div>
    </div>
  );
};

export default CoreValues;
