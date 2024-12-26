import React from "react";
import "./Procurement.css";
import Procure from "../../assets/Procure.png";

const Procurement = () => {
  return (
    <div className='container'>
      <div className='text-section1'>
        <h2>Device Procurement</h2>
        <p>
          The right tools can transform your business. We help you source the
          best devices, be it laptops, desktops, or specialized equipment that
          fit your budget and needs. With reliable, top-quality devices, your
          team can work smarter, faster, and better. Let's equip your business
          for success!
        </p>
        <button className='read-more-button'>Read More</button>
      </div>
      <div className='image-section1'>
        <img src={Procure} alt='Devices' className='image1' />
      </div>
    </div>
  );
};

export default Procurement;
