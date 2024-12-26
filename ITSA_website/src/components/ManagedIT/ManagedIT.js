import React from "react";
import "./ManagedIT.css";
import IT from "../../assets/IT.png"

const ManagedIT = () => {
  return (
    <div className='container'>
      <div className='image-section0'>
        <img
          src={IT} 
          alt='IT Professionals'
          className='image'
        />
      </div>
      <div className='text-section0'>
        <h2>Managed IT Services</h2>
        <p>
          Managing IT infrastructure doesn’t have to be a headache. With our
          Managed IT Services, we take the burden off your shoulders by
          providing end-to-end support designed to fit your specific needs. From
          proactive monitoring and regular maintenance to top-notch
          cybersecurity, we keep your systems running smoothly. This means fewer
          disruptions, better efficiency, and complete peace of mind, so you can
          focus on growing your business while we handle the tech.
        </p>
        <button className='read-more-button'>Read More</button>
      </div>
    </div>
  );
};

export default ManagedIT;
