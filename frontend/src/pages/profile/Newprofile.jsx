import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get dynamic route parameters

const Profile = () => {
    const { userId } = useParams();  // Get userId from URL
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Fetch user data from API using userId
        const fetchUser = async () => {
            const response = await fetch(`http://localhost:8000/api/user/${userId}`);
            const data = await response.json();
            setUser(data);
        };

        fetchUser();
    }, [userId]);

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <h1>{user.username}'s Profile</h1>
            <p>Email: {user.email}</p>
            <p>Bio: {user.bio}</p>
            {/* Render more user info */}
        </div>
    );
};

export default Profile;
