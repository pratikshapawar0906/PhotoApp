import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="link-container">
        <a href="#" className="footer-link">For Photographers</a>
        <a href="#" className="footer-link">Hire Talent</a>
        <a href="#" className="footer-link">Inspiration</a>
        <a href="#" className="footer-link">About</a>
        <a href="#" className="footer-link">Privacy Policy</a>
        <a href="#" className="footer-link">Terms & Conditions</a>
      </div>
      <div className="copyright">
        &copy; camcrew - 2023
      </div>
    </footer>
  );
};

export default Footer;
