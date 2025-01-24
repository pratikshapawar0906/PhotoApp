import React, { useState } from "react";
import axios from "axios";
import "./UserProfile.css";

const UserProfile = () => {
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    setProfilePhoto(file);
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();

    if (!profilePhoto) {
      alert("Please select a profile photo.");
      return;
    }

    const formData = new FormData();
    formData.append("profilePhoto", profilePhoto);

    try {
      const response = await axios.post("http://localhost:8000/uploadProfilePhoto", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (response.data.success) {
        alert("Profile photo uploaded successfully!");
      } else {
        alert("Error uploading profile photo.");
      }
    } catch (error) {
      console.error(error);
      alert("There was an error uploading the profile photo.");
    }
  };

  return (
    <div className="user-profile-container">
      <div className="user-profile-dp">
        <img
          src={profilePhoto ? URL.createObjectURL(profilePhoto) : "https://res.cloudinary.com/dcshglm1w/image/upload/v1734604360/rxt2ug1ywizfs4kk56df.jpg"}
          alt="Profile"
        />
      </div>
      <div className="user-profile-content">
        <h3>John Doe</h3>
        <p>Passionate Photographer, love to capture the moments</p>
        <form onSubmit={handleProfileSubmit}>
          <input type="file" accept="image/*" onChange={handleProfilePhotoChange} />
          <button type="submit">Upload Profile Photo</button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
