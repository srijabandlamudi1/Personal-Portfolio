import React from 'react';
import './SideNavbar.css';
import { FaEnvelope, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

const SideNavbar = () => {
    return (
        <div className="side-navbar">
            <ul>
                <li>
                    <div className="sidenav-icon-container">
                        <a href="mailto:srijabandlamudi181@gmail.com" target="_blank" rel="noopener noreferrer">
                            <FaEnvelope />
                        </a>
                        <span className="tooltip">Contact</span>
                    </div>
                </li>
                <li>
                    <div className="sidenav-icon-container">
                        <a href="https://www.linkedin.com/in/srijabandlamudi/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin />
                        </a>
                        <span className="tooltip">LinkedIn</span>
                    </div>
                </li>
                <li>
                    <div className="sidenav-icon-container">
                        <a href="https://www.instagram.com/srija_bandlamudi/" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </a>
                        <span className="tooltip">Instagram</span>
                    </div>
                </li>
                <li>
                    <div className="sidenav-icon-container">
                        <a href="https://github.com/srijabandlamudi1" target="_blank" rel="noopener noreferrer">
                            <FaGithub />
                        </a>
                        <span className="tooltip">GitHub</span>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default SideNavbar;
