import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../../util";
import './login.css'


const Login = () => {
  const [loginData, setloginData] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setloginData({ ...loginData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    

     const {  email, password } = loginData;
    
        // Validate required fields
        if ( !email || !password ) {
          return handleError("Name, Email  are required.");
        }

    try {
          const url = "http://localhost:8000/api/login";
          const response = await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({  email, password }),
          });
    
          const result = await response.json();
          const { success, message,error ,jwtToken, name } = result;
    
          if (success) {
            handleSuccess(message);
            localStorage.setItem("loggedInuser",name);
            localStorage.setItem("Token",jwtToken);
            
            setTimeout(() => {
              navigate("/");
            }, 1000);
          } else if(error){
            const details=error?.details?.[0]?.message;
            handleError(details);
          }else if(success){
            handleError(message ); 
          }
    
          console.log(result);
        } catch (error) {
    
          handleError("An error occurred while loging up. Please try again.");
          console.error(error);
        }
  };

  return (
    <div className="login-container" >
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label>Email</label>
            <input  type="email"  name="email"  placeholder="Enter your email"  value={loginData.email}  onChange={handleChange}  required/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input  type="password"  name="password"  placeholder="Enter your password"  value={loginData.password}  onChange={handleChange}  required/>
          </div>
          <button type="submit" className="btn-login">Login</button>
        </form>
        <p className="login-footer">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
        <ToastContainer/>
      </div>
    </div>
  );
};

export default Login;
