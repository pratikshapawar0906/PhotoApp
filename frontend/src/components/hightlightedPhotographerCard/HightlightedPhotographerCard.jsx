import React from "react";
import "./HightlightedPhotographerCard.css";

const HightlightedPhotographerCard = ({ photographer }) => {
  const { name, specialty, joined, dp, bg } = photographer;

  return (
    <div className="photographer-card-container">
      <div className="photographer-card-img-container">
        <img src={bg} alt="Card background" className="img-fluid" width={285} />
      </div>
      <div className="photographer-card-info-container">
        <div className="photographer-card-dp-container">
          <img src={dp} alt="Photographer" />
        </div>
        <div className="photographer-card-info">
          <p className="name">{name}</p>
          <p className="speciality">{specialty}</p>
          <p className="joined">Joined {joined}</p>
        </div>
      </div>
    </div>
  );
};

export default HightlightedPhotographerCard;
