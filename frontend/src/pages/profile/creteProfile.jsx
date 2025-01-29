import React, { useState } from 'react';
import axios from 'axios';

const ProfileCreation = () => {
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');

    const handleProfileCreation = async () => {
        const token = localStorage.getItem('token');

        try {
            await axios.post('http://localhost:8000/api/create-profile', { name, bio }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            alert('Profile created successfully!');
            // After profile creation, redirect to the user's profile page
            window.location.href = '/profile';
        } catch (err) {
            alert('Error creating profile');
        }
    };

    return (
        <div>
            <h2>Create Your Profile</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <textarea
                placeholder="Bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
            />
            <button onClick={handleProfileCreation}>Create Profile</button>
        </div>
    );
};

export default ProfileCreation;
