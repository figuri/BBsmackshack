import React from "react";
import { Link } from "react-router-dom";
import logo from "../../pub/images/bblogo.jpg";

function Navbar() {
  return (
    <nav className="navbar">
      <img class="logo" src={logo} alt="BBs Smack Shack logo" />
      <div class="navStuff">
        <div class="pages">
          <Link to="/">BB's Smack Shack</Link>
          <Link to="/about">About us.</Link>
          <Link to="/shop">Shop.</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
