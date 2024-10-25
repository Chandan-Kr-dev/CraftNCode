import React from "react";
import Logo from "../assets/images/logo1.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-box">
        <div className="navbar-logo-section">
          <a href="/">TrueMix</a>
          <img src={Logo} alt="No Image Found"></img>
        </div>
        <div className="navbar-links">
          <li>
            <a href="/docs">Explore</a>
          </li>
          <li>
            <a href="">Gamification</a>
          </li>
          <li>
            <a href="/truthmate">TruthMate</a>
          </li>
          <li>
            <a href="/news">Read News</a>
          </li>
        </div>
        <div className="navbar-auths">
          <a href="/login" className="btn-1">Login</a>
          <a href="/trueMix" className="btn-2">Start Free Trial</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
