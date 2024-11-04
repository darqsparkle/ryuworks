import React from 'react';
import './Home.css';
import RyuWorksLogo from '../assets/ryuworkslogo.png';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

const Home = () => {
    return (
        <div className="home-container">
            <img src={RyuWorksLogo} alt="RyuWorks Logo" />
            <h1>
                WE ARE <span className="highlighted-word">COOKING</span> SOMETHING
            </h1>
            <a
                href="https://www.instagram.com/ryuworksofficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="instagram-link"
            >
                <i className="fab fa-instagram"> Follow us on Instagram</i>
            </a>
            <p>Stay Tuned🍻🍻</p>
        </div>
    );
};

export default Home;
