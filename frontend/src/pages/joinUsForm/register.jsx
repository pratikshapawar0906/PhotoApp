import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css'; // Import the CSS file

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        const userData = {
            name: username,  // Fixed "name" issue
            email,
            password,
        };

        try {
            const response = await fetch("http://localhost:8000/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userData),
            });

            const data = await response.json();

            if (response.status === 400 && data.message === "User already exists") {
                console.log("User exists, redirecting to profile...");
                navigate(`/profile/${data.userId}`);
                return;
            }

            if (!response.ok) {
                throw new Error(data.message || "Registration failed");
            }

            console.log("Registration successful:", data);
            navigate(`/profile/${data.userId}`);

        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            {error && <p className="error-message">{error}</p>}
            <form className="register-form" onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="User Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
