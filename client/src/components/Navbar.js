import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import logo from "../assets/mackies-logo.jpeg";

const Navbar = () => {
  const { user, isLoggedIn, logout } = useAuth();

  return (
    <div className="navbar universal-margin">
      <img src={logo} alt="Mackies shave ice" className="logo" />

      <ul className="navigation">
        <li>
          <Link className="button" to="/menu">
            Menu
          </Link>
        </li>
        <li>
          <Link className="button" to="/contact">
            Contact Us
          </Link>
        </li>
        <li>
          <Link className="button" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link
            className="button"
            to="https://www.facebook.com/profile.php?id=100083220046221"
          >
            Facebook
          </Link>
        </li>
        <li>
          <Link
            className="button"
            to="https://www.instagram.com/mackies_shave_ice/"
          >
            Instagram
          </Link>
        </li>
        {isLoggedIn ? (
          <>
            <li>
              <span className="button">Welcome, {user && user.name}</span>
            </li>
            <li>
              <button className="logoutButton" onClick={logout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link className="loginButton" to="/login">
              Login
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
