import React from 'react';
import './DHMS.css';
import deviceImage from '../../assets/deviceImage.png';  

const DeviceHealth = () => {
  return (
    <div className="container">
      <div className="image-section">
        <img src={deviceImage} alt="Two Women with Laptops" className='image' />
      </div>
      <div className="text-section">
        <h2>Device Health Management Service(DHMS)</h2>
        <p>
          Healthy devices mean a healthy business. With our Device health management 
          Service, we ensure your devices are always in top shape, proactively monitored, 
          maintained, and optimized to keep your business running smoothly. Say goodbye to 
          unexpected breakdowns. We’ve got your devices covered. Our device health 
          management service provides a comprehensive solution to keep your devices running smoothly.
        </p>
        <button className="explore-btn">Explore DHMS</button>
      </div>
    </div>
  );
}

export default DeviceHealth;
