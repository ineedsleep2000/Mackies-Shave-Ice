import React from "react";
import { Link } from "react-router-dom";

const Menunavbar = () => {
  return (
    <div className="navbar">
      <ul className="navigation">
        <li>
          <Link className="button" to="/combo_flavors">
            Combination Flavors
          </Link>
        </li>
        <li>
          <Link className="button" to="/shaved_ices">
            Tropical Snow Flavors
          </Link>
        </li>
        <li>
          <Link className="button" to="/hot-eats-&-cool-treats">
            Hot Eats & Cool Treats
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menunavbar;
