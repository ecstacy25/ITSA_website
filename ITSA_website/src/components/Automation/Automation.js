import React from 'react';
import './Automation.css';
import automationImage from '../../assets/automationImage.png';

const AutomationSection = () => {
  return (
    <div className="container">
      <div className="text-section1">
        <h2>Process Automation</h2>
        <p>
          In today's fast-paced business environment, efficiency is paramount. Repetitive tasks 
          can drain valuable time and resources, hindering productivity and innovation. We 
          specialize in process automation, transforming the way organizations operate by 
          streamlining workflows, reducing manual errors, and enabling teams to focus on 
          strategic initiatives that drive growth.
        </p>
        <button className="read-more-btn">Read More</button>
      </div>
      <div className="image-section1">
        <img className='image1' src={automationImage} alt="Automation Process" />
      </div>
    </div>
  );
}

export default AutomationSection;
