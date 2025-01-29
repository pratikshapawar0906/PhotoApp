import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './phoyographa.css'; // Import the CSS file

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login1', { email, password });

            // If login is successful, store the token and userId in localStorage
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userId', response.data.userId);

            // Check if user is already registered and redirect to their profile
            if (response.data.userId) {
                navigate(`/profile/${response.data.userId}`); // Redirect to the profile page with the user's ID
            } else {
                // In case the userId is missing or something else goes wrong
                setError('User profile not found.');
            }

        } catch (error) {
            // Handle any login errors
            setError('Invalid credentials or error during login');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleLogin}>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                        style={{ margin: '10px 0px' }}
                        autoComplete="current-password"
                    />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
