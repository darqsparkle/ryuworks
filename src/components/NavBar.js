import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Import the CSS file for styling

const NavBar = () => {
    return (
        <nav>
            <ul className="navbar">
                <li className="brand">
                    <Link to="/">Ryuworks</Link>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about-us">About Us</Link>
                </li>
                <li>
                    <Link to="/expertise">Expertise</Link>
                </li>
                <li>
                    <Link to="/our-products">Our Products</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
