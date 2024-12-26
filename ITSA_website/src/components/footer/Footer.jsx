import React from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaYoutube } from 'react-icons/fa';
import Logo from '../../assets/Itsalogo.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="logo">
            <img src={Logo} alt="IT Service Africa" />
          
          </div>
          <p>Subscribe to our newsletter! Stay always in touch!</p>
          <div className="subscribe">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
          <small>
            By subscribing you agree to with our <a href="#">Privacy Policy</a> and provide consent to receive updates from our company.
          </small>
        </div>

        <div className="footer-center">
          <h4>Quick links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Our Services</a></li>
            <li><a href="#">Partner with us</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Download Drivers</a></li>
          </ul>
        </div>

        <div className="footer-right">
          <h4>Contact us</h4>
          <p>12, Saka Tinubu street, Victoria Island, Lagos State.</p>
          <p>278 Port-Harcourt Aba Expressway, Opposite Shell RA, Port Harcourt Rivers State</p>
          <p>07079935788, 02014110044</p>
          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
