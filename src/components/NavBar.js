import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="brand">
                <Link to="/">Ryuworks</Link>
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                &#9776; {/* Unicode for hamburger icon */}
            </div>
            <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
                <li>
                    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                </li>
                <li>
                    <Link to="/about-us" onClick={() => setMenuOpen(false)}>About Us</Link>
                </li>
                <li>
                    <Link to="/expertise" onClick={() => setMenuOpen(false)}>Expertise</Link>
                </li>
                <li>
                    <Link to="/our-products" onClick={() => setMenuOpen(false)}>Our Products</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
