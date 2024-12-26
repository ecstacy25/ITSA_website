import React from 'react';
import './Hero.css';
import vrImage from '../../assets/VrImage.png'; // Add the VR image to your assets folder

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1>Solutions That <br /> Power Your <br /> Business Success</h1>
        <p>Discover IT services designed to simplify operations, enhance <br /> productivity, and secure your business.</p>
        <button className="hero-button">Contact us</button>
      </div>
      <div className="hero-image">
        <img src={vrImage} alt="VR Experience" />
      </div>
    </div>
  );
}

export default HeroSection;
