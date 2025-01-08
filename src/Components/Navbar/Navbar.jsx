import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
            <button className="navbar-toggle" onClick={toggleMenu}>
                &#9776; {/* Unicode for hamburger menu icon */}
            </button>
            <ul className="nav-menu">
                <li><a href="#About">ABOUT</a></li>
                <li><a href="#Experience">EXPERIENCE</a></li>
                <li><a href="#Project">PROJECTS</a></li>
                <li><a href="#Contact">CONTACT</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
