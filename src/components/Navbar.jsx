import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <h1 class='title'>BB's Smack Shack</h1>
            <ul class='pages'>
                <li>
                    <Link to='/'>Home.</Link>
                </li>
                <li>
                    <Link to='/about'>About us.</Link>
                </li>
                <li>
                    <Link to='/shop'>Shop.</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;