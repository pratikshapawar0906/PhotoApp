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
    const [newUsername, setNewUsername] = useState("");
    const [newBio, setNewBio] = useState("");

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/user/${userId}`);
                // console.log(response.data);  // Log the response data to see if username and bio are available
                setUser(response.data);
                setNewUsername(response.data.name);
                setNewBio(response.data.bio);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
    
        fetchUser();
    }, [userId]);

    const handleProfilePhotoUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setNewProfilePhoto(file); // Temporarily store file before submission
    };

    const handlePhotoUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setNewPhoto(file); // Temporarily store file before submission
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            // Upload profile photo if changed
            if (newProfilePhoto) {
                const formData = new FormData();
                formData.append("profilePhoto", newProfilePhoto);
                formData.append("userId", userId);

                const response = await axios.post(`http://localhost:8000/api/user/uploadProfilePhoto`, formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });

                setUser((prevUser) => ({
                    ...prevUser,
                    profilePicture: response.data.photoUrl,
                }));
            }

            // Upload new portfolio photo if changed
            if (newPhoto) {
                const formData = new FormData();
                formData.append("photo", newPhoto);
                formData.append("userId", userId);

                const response = await axios.post("http://localhost:8000/api/user/upload", formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });

                setUser((prevUser) => ({
                    ...prevUser,
                    photos: [...prevUser.photos, response.data.photoUrl],
                }));
                setNewPhoto(null); // Reset newPhoto state after upload
            
            }

            // Update username and bio if changed
            if (newUsername !== user.name || newBio !== user.bio) {
                const response = await axios.put(`http://localhost:8000/api/updateProfile`, {
                    userId,
                    name: newUsername,
                    bio: newBio,
                });
                setUser((prevUser) => ({
                    ...prevUser,
                    name: newUsername,
                    bio: newBio,
                }));
            }

            // Exit edit mode
            setIsEditing(false);
        } catch (error) {
            console.error("Error uploading files:", error);
        }
    };

    const handleDeletePhoto = async (photoUrl, isProfilePhoto = false) => {
        if (!photoUrl) return; // Prevent errors if no photo exists
    
        try {
            await axios.delete(`http://localhost:8000/api/user/deletePhoto`, {
                data: { userId, photoUrl, isProfilePhoto }, // Send flag for profile photo
            });
    
            setUser((prevUser) => {
                if (isProfilePhoto) {
                    return { ...prevUser, profilePicture: null }; // Remove profile photo
                } else {
                    return { 
                        ...prevUser, 
                        photos: prevUser.photos.filter(photo => photo !== photoUrl) 
                    }; // Remove only the selected portfolio photo
                }
            });
        } catch (error) {
            console.error("Error deleting photo:", error);
        }
    };

    if (!user) return <div className="loading">Loading...</div>;

    return (
        <div className="profile-container">
            <div className="profile-header">
                <img src={user.profilePicture} alt="Profile" className="profile-img" />
                <div className="profile-info">
                    <h1>{user?.name || "No username available"}</h1>
                    <p className="email">{user.email}</p>
                    <p className="bio">{user?.bio || "No bio available"}</p>
                    <button onClick={() => setIsEditing(true)} className="edit-btn">
                        Edit Profile
                    </button>
                </div>
            </div>

            {isEditing && (
                <form className="upload-section" onSubmit={handleSubmit}>
                    <div className="d-flex">
                        <div className="col-md-6">
                            <label>Update Profile Picture</label>
                            <input type="file" accept="image/*" onChange={handleProfilePhotoUpload} />
                        </div>
                        <div className="col-md-6">
                            <label>Upload Portfolio Photos</label>
                            <input type="file" accept="image/*" onChange={handlePhotoUpload} />
                        </div>

                    </div>
                    {/* Add fields for username and bio */}
                    <div className="d-flex justify-content-center my-3">
                        <div className="col-md-3">
                            <label>Username</label>
                            <input
                                type="text"
                                value={newUsername}
                                onChange={(e) => setNewUsername(e.target.value)}
                            />
                        </div>
                        <div className="col-md-3">
                            <label>Bio</label>
                            <textarea
                                value={newBio}
                                onChange={(e) => setNewBio(e.target.value)}
                            />
                        </div>
                    </div>
            
                    {/* Button Group */}
                    <div className="button-group">
                        <button type="button" onClick={() => setIsEditing(false)} className="cancel-btn">
                            Cancel
                        </button>
                        
                        <button 
                            type="button" 
                            onClick={() => handleDeletePhoto(user.profilePicture, true)} 
                            className="delete-photo-btn"
                        >
                            Delete Profile Photo
                        </button>
                        
                        <button type="submit" className="submit-btn">
                            Submit
                        </button>
                    </div>
                </form>
            )}

            <div className="portfolio">
                <h2>Gallary</h2>
                <div className="gallery">
                    {user.photos && user.photos.length > 0 ? (
                        user.photos.map((photo, index) => (
                            <div key={index} className="photo-container">
                                <img src={photo} alt="Photograph" className="gallery-img" />
                                <button onClick={() => handleDeletePhoto(photo, false)} className="delete-btn">
                                    ❌ Delete
                                </button>

                            </div>
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
