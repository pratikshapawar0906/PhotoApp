import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../../util";
// import "./login.css";

const PhotographerLogin = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = loginData;

    // Validate required fields
    if (!email || !password) {
      return handleError("Email and Password are required.");
    }

    try {
      const url = "http://localhost:8000/api/login1";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      const { success, message } = result;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/dashboard"); // Navigate to the photographer's dashboard
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      handleError("An error occurred while logging in. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Photographer Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={loginData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              value={loginData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn-login">
            Log In
          </button>
        </form>
        <p className="login-footer">
          Don't have an account? <a href="/joinUsForm">Sign Up</a>
        </p>
        <ToastContainer />
      </div>
    </div>
  );
};

export default PhotographerLogin;
