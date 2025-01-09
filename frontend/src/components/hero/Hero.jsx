import React from "react";
import "./Hero.css"; // Import the CSS file
import herobg from "../../assets/hero-avatars.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-heading">
          Telling Stories of Storytellers
        </div>
        <p className="hero-description">
          Engage , connect or collaborate with Premier Photographers & Studios across India.
        </p>
        <div className="hero-button-container">
          <button className="hero-button">
            Explore
          </button>
        </div>
        <div className="hero-image-container">
          <img
            src={herobg}
            alt="Background"
            className="hero-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
