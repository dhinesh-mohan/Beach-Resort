import React from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul className="li-items">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Rooms</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
