import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-menu">
                <li><a href="#About">About</a></li>
                <li><a href="#Experience">Experience</a></li>
                <li><a href="#Skills">Skills</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
