import React from "react";
import "./FeaturedPhotographers.css"

const FeaturedPhotographers = () => {
  const teamMembers = [
    {
      name: "Samaira Dixit",
      role: "Photographer",
      studio: "Pixelbee Studios",
      position: "DOP",
      imageUrl: "path_to_image_1.jpg", // Replace with actual image paths
    },
    {
      name: "Abhi Mishra",
      role: "Photographer",
      studio: "Pixelbee Studios",
      position: "DOP",
      imageUrl: "path_to_image_2.jpg",
    },
    {
      name: "Samaira Dixit",
      role: "Photographer",
      studio: "Pixelbee Studios",
      position: "DOP",
      imageUrl: "path_to_image_3.jpg",
    },
    {
      name: "Samaira Dixit",
      role: "Photographer",
      studio: "Pixelbee Studios",
      position: "DOP",
      imageUrl: "path_to_image_4.jpg",
    },
    {
      name: "Samaira Dixit",
      role: "Photographer",
      studio: "Pixelbee Studios",
      position: "DOP",
      imageUrl: "path_to_image_5.jpg",
    },
    {
      name: "Samaira Dixit",
      role: "Photographer",
      studio: "Pixelbee Studios",
      position: "DOP",
      imageUrl: "path_to_image_6.jpg",
    },
    {
      name: "Samaira Dixit",
      role: "Photographer",
      studio: "Pixelbee Studios",
      position: "DOP",
      imageUrl: "path_to_image_7.jpg",
    },
    {
      name: "Samaira Dixit",
      role: "Photographer",
      studio: "Pixelbee Studios",
      position: "DOP",
      imageUrl: "path_to_image_8.jpg",
    },
  ];
  return (
    <>
    <div className="team-container">
      {teamMembers.map((member, index) => (
        <div key={index} className="team-card">
          <img src={member.imageUrl} alt={member.name} className="team-image" />
          <div className="team-info">
            <h3>{member.name}</h3>
            <p>{member.studio}</p>
            <p className="role">{member.role}</p>
            <p className="position">{member.position}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  )
};

export default FeaturedPhotographers;
