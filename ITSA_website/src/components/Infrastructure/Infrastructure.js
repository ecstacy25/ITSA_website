import React from "react";
import "./Infrastructure.css";
import infra from "../../assets/infra.png"

const Infrastructure = () => {
  return (
    <div className='container'>
      <div className='image-section'>
        <img
          src={infra}
          alt='IT Engineer'
          className='image'
        />
      </div>
      <div className='text-section'>
        <h2>IT Infrastructure Setup</h2>
        <p>
          Managing IT infrastructure doesn’t have to be a headache. With our
          Managed IT Services, we take the burden off your shoulders by
          providing end-to-end support designed to fit your specific needs. From
          proactive monitoring and regular maintenance to top-notch
          cybersecurity, we keep your systems running seamlessly. This means
          fewer disruptions, better efficiency, and complete peace of mind, so
          you can focus on growing your business while we handle the tech.
        </p>
        <button className='read-more-button'>Read More</button>
      </div>
    </div>
  );
};

export default Infrastructure;
