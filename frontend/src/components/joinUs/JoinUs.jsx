import React from 'react'
import './joinus.css'
import Photoghrap from "../../assets/Photographer.png";
const JoinUs = () => {
  return (
    <>
     <div className="photographer-container">
      <div className="image-section">
        <img
          src={Photoghrap}
          alt="Photographer and client"
          className="photographer-image"
        />
      </div>
      <div className="text-section">
        <h1 className="title">Find Photographer in clicks</h1>
        <p className="description">
          It’s never been so easy to navigate through thousands of profiles of
          photographers, navigate, delve into their art and find a perfect fit.
        </p>
        <div className="buttons">
          <button className="explore-button">Explore</button>
          <button className="learn-button">Learn More</button>
        </div>
        <p className="crew-text">
          Are you a photographer?{' '}
          <a href="/JoinUsForm" className="crew-link">
            Be a part of Crew
          </a>
        </p>
      </div>
    </div>
    </>
  )
}

export default JoinUs