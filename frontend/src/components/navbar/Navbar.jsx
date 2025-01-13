import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import "./Navbar.css";
import logo from '../../assets/camera-logo.png'

function Navbar() {
  // State to track if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if user is logged in (i.e., if there's a JWT token in localStorage)
  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);  // Run only once when the component mounts

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("Token");
    localStorage.removeItem("loggedInuser");
    setIsLoggedIn(false);  // Update the state to reflect the user is logged out
  };
  const Menu = [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "Explore",
      path: "/explore",
    },
    {
      id: 3,
      name: "Register as Photographer",
      path: "/register",
    },
  ];
  return (
    <div className="navbar mx-5">
      <div className="navbar-left">
        <img
          src={logo}
          alt="logo"
          width={50}
          height={50}
        />
        <ul className="navbar-menu">
          {
            Menu.map((item, index) => (
              <Link className="text-decoration-none" to={item.path} key={index}>
                <li className="navbar-item ">{item.name}</li>
              </Link>
            ))
          }
        </ul>
      </div>

      <div className="navbar-right">
        {isLoggedIn ? (
          <div className="navbar-button">
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <>
            <div className="navbar-button">
              <Link to="/signup">Sign up</Link>
            </div>
            <button className="btn btn-dark">
              <Link className="text-decoration-none text-light" to="/login">
                Login
              </Link>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
