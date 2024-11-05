import React from "react";
import Logo from "../assets/images/logo1.png";
const Navbar = () => {
  const username=window.localStorage.getItem("Username")
  
  const signout=()=>{
    window.localStorage.removeItem("Username")
    window.location.reload()
   
  }

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
            <a href="/gamification">Gamification</a>
          </li>
          <li>
            <a href="/truthmate">TruthMate</a>
          </li>
          <li>
            <a href="/news">Read News</a>
          </li>
        </div>
        <div className="navbar-auths">
          {username ? (
            <div className="flex justify-center items-center gap-2 ">
              <p className="text-nowrap text-sm">{username}</p>
            <button onClick={signout} className="btn-1">Logout</button>
            </div>
            ):(<a href="/login" className="btn-1">Login</a>)}
          {/* <a href="/login" className="btn-1">Login</a> */}
          <a href="/trueMix" className="btn-2">Start Free Trial</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
