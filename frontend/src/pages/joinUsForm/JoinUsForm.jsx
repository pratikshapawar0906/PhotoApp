import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../../util";
import "../signup/signup.css";


const JoinUsForm = () => {
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password } = signUpData;

    // Validate required fields
    if (!name || !email || !password) {
      return handleError("Name, Email, and Password are required.");
    }

    try {
      const url = "http://localhost:8000/api/signup1";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const result = await response.json();
      const { success, message } = result;

      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/joinUsForm/login");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      handleError("An error occurred while signing up. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Sign Up</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input  id="name"  type="text"  name="name"  placeholder="Enter your name"  value={signUpData.name}  onChange={handleChange}  required/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input  id="email"  type="email"  name="email"  placeholder="Enter your email"  value={signUpData.email}  onChange={handleChange}  required/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input  id="password"  type="password"  name="password"  placeholder="Enter your password"  value={signUpData.password}  onChange={handleChange}  required  autoComplete="new-password"/>
          </div>
          <button type="submit" className="btn-signup">
            Sign Up
          </button>
        </form>
        <p className="signup-footer">
          Already have an account? <a href="/joinUsForm/login">Login</a>
        </p>
        <ToastContainer />
      </div>
    </div>
  );
};

export default JoinUsForm;

