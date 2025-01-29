import React from "react";
import "./UserProfile.css";

const UserProfile = () => {
  return (
    <>
      <div className="user-profile-container">
        <div className="user-profile-dp">
          <img
            src="https://res.cloudinary.com/dcshglm1w/image/upload/v1734604360/rxt2ug1ywizfs4kk56df.jpg"
            alt=""
          />
        </div>

        <div className="user-profile-content">
          <h3>John Doe</h3>
          <p>Passionate Photographer, love to capture the moments</p>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
