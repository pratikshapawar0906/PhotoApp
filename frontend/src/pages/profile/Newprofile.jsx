import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [profile, setProfile] = useState({});
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/profiles", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(response.data);
      } catch (error) {
        console.error("Failed to load profile", error);
      }
    };
    if (token) {
      fetchProfile();
    } else {
      // Handle cases where there is no token (e.g., redirect to login)
    }
  }, [token]);

  return (
    <div>
      <h2>Your Profile</h2>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
    </div>
  );
}

export default Profile;
