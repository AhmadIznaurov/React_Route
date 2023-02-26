import React from "react";
import N from "./Navbar.module.css";
console.log(N);
const Navbar = () => {
    return (
        <nav className={N.nav}>
            <ul>
                <li><a href="#">Profile</a></li>
                <li className={`${N.item} ${N.active}`}><a>Messages</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Music</a></li>
                <br /> <li><a href="#">Settings</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;