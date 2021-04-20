import React, { useState } from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handelClick = () => {
    setToggle(!toggle);
  };
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <ul className={toggle ? "nav_links active" : "nav_links"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/rooms">Rooms</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handelClick}>
        {(toggle && <FaTimes className="icon" />) || (
          <FaBars className="icon" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
