import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav>
          <ul>
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

export default NavBar
