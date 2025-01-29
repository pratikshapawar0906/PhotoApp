import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./newProfile.css"; // Import CSS for styling

const Profile = () => {
    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const [newPhoto, setNewPhoto] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [newProfilePhoto, setNewProfilePhoto] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/user/${userId}`);
                setUser(response.data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUser();
    }, [userId]);

    const handleProfilePhotoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("profilePhoto", file); // MUST match `upload.single("profilePhoto")`
    formData.append("userId", userId); // Ensure userId is sent

    try {
        const response = await axios.post(`http://localhost:8000/api/user/uploadProfilePhoto`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });

        setUser((prevUser) => ({
            ...prevUser,
            profilePicture: response.data.photoUrl, // Update UI immediately
        }));
        const updatedUser = await axios.get(`http://localhost:8000/api/user/${userId}`);
        setUser(updatedUser.data);
    } catch (error) {
        console.error("Error uploading profile photo:", error);
    }
   };
   

    // Handle Photo Upload for Portfolio
    const handlePhotoUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("photo", file);
        formData.append("userId", userId);

        try {
            const response = await axios.post("http://localhost:8000/api/user/upload", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            setUser((prevUser) => ({
                ...prevUser,
                photos: [...prevUser.photos, response.data.photoUrl], // Update UI instantly
            }));

            setNewPhoto(null);
        } catch (error) {
            console.error("Error uploading photo:", error);
        }
    };

    if (!user) return <div className="loading">Loading...</div>;

    return (
        <div className="profile-container">
            {/* Photographer's Profile Info */}
            <div className="profile-header">
                <img src={user.profilePicture} alt="Profile" className="profile-img" />
                <div className="profile-info">
                    <h1>{user.username}</h1>
                    <p className="email">{user.email}</p>
                    <p className="bio">{user.bio}</p>
                    <button onClick={() => setIsEditing(!isEditing)} className="edit-btn">
                        {isEditing ? "Cancel" : "Edit Profile"}
                    </button>
                </div>
            </div>

            {/* Edit Mode: Show File Input for Profile and Portfolio Photo Upload */}
            {isEditing && (
                <div className="upload-section">
                    <div>
                        <label>Update Profile Picture</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleProfilePhotoUpload}
                        />
                    </div>
                    <div>
                        <label>Upload Portfolio Photos</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handlePhotoUpload}
                        />
                    </div>
                </div>
            )}

            {/* Photographer's Portfolio */}
            <div className="portfolio">
                <h2>Portfolio</h2>
                <div className="gallery">
                    {user.photos && user.photos.length > 0 ? (
                        user.photos.map((photo, index) => (
                            <img key={index} src={photo} alt="Photograph" className="gallery-img" />
                        ))
                    ) : (
                        <p>No photos uploaded yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
