import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
      </ul>
    </div>
  );
};

export default Navbar;
