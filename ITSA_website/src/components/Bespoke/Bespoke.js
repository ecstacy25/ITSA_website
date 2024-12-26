import React from "react";
import "./Bespoke.css";
import Bespoke1 from "../../assets/Bespoke.png";

const Bespoke = () => {
  return (
    <div className='container'>
      <div className='text-section1'>
        <h2>
         Bespoke Software Design
        </h2>
        <p>
          At IT Service Desk Africa, we specialize in designing bespoke software
          solutions for your business processes. Our approach simplifies
          operations and boosts productivity, ensuring that the software we
          create aligns perfectly with your organisation’s needs. From the
          initial concept through to deployment, we collaborate closely with you
          to develop solutions that not only meet your current requirements but
          also evolve with your business. Start your journey with us today and
          let’s create software that works for you.
        </p>
        <button className='read-more-button'>Read More</button>
      </div>
      <div className='image-section1'>
        <img
          src={Bespoke1} 
          alt='Collaboration'
          className='image1'
        />
      </div>
    </div>
  );
};

export default Bespoke;
