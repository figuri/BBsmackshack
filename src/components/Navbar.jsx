import React from "react";
import { Link } from "react-router-dom";
import logo from "../../pub/images/bblogo.jpg";

function Navbar() {
  return (
    <nav className="navbar">
      <img className="logo" src={logo} alt="BBs Smack Shack logo" />
      <div className="navStuff">
        <div className="pages">
          <Link to="/">BB's Smack Shack</Link>
          <Link to="/about">About us.</Link>
          <Link to="/shop">Shop.</Link>
          <Link to="/contact">Contact us.</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
