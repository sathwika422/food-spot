import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
  return (
    <div className="navbar-design">
      {/* <div className="navbar-spacer"></div> */}
      <ul className="flex-container-row">
        <li>
          <Link className="navbar-items" to="/login">
            Login
          </Link>
        </li>
        <li>
          <Link className="navbar-items profile-option" to="/accounts">
            Profile
          </Link>
        </li>
        <ul class="dropdown-menu">
          <li><a href="">option 1</a></li>
          <li><a href="">option 2</a></li>
          <li><a href="">option 3</a></li>
        </ul>
      </ul>
    </div>
  );
};

export default NavBar;
