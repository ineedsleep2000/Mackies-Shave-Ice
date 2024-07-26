import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { user, isLoggedIn, logout } = useAuth();

  return (
    <div className="navbar">
      <img src="logo" alt="Mackies shave ice" className="logo" />

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
        {isLoggedIn ? (
          <>
            <li>
              <span className="button">Welcome, {user && user.name}</span>
            </li>
            <li>
              <button className="button" onClick={logout}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link className="button" to="/login">
              Login
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
