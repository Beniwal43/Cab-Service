import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import IMG from "../asesst/logo.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar_left">
        <img src={IMG} alt="None" />
        <div className="Pagename">CAB SERVICE</div>
      </div>
      <div className="navbar_right">
        <ul>
          <li>
            <Link className="navbtn" to="/home">Home</Link>
          </li>
          <li>
            <Link className="navbtn" to="/about">About</Link>
          </li>
          <li>
            <Link className="navbtn" to="/service">Services</Link>
          </li>
          <li>
            <Link className="navbtn" to="/contactus">Contact</Link>
          </li>
          <li>
            <Link className="navbtn" to="/">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
