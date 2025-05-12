import React from 'react';
export default function Navbar() {
return (
        <nav className="navbar">
            <div className="con">
            <a href="/" className="logo">
                MyPortfolio
            </a>
            <ul className="nav-links">
                <li><a href="#about" className="nav-link">About</a></li>
                <li><a href="#project" className="nav-link">Projects</a></li>
                <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
            </div>
            
        </nav>
    );
};
