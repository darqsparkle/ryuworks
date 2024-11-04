import React, { useEffect, useState } from 'react';
import './Home.css';
import RyuWorksLogo from '../assets/ryuworkslogo.png';
import InstagramLogo from '../assets/instagram.png';
import LinkedinLogo from '../assets/linkedin.png';
import Hearts from '../assets/Hearts.png';

const Home = () => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

    // Update cursor position on mouse move
    const handleMouseMove = (event) => {
        setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    useEffect(() => {
        // Attach the event listener for mouse movement
        window.addEventListener('mousemove', handleMouseMove);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="home-container">
            {/* Custom cursor element */}
            <img
                src={Hearts}
                alt="Hearts"
                className="custom-cursor"
                style={{
                    left: `${cursorPosition.x}px`,
                    top: `${cursorPosition.y}px`,
                    transform: 'translate(-50%, -50%)' // Center the cursor image
                }}
            />
            <img src={RyuWorksLogo} alt="RyuWorks Logo" />
            <h1>
                <i>WE ARE</i> <span className="highlighted-word"><i>COOKING</i></span> <i>SOMETHING</i>
            </h1>
            <h1><i>STAY</i> <span className='highlighted-word'>TUNED</span> <i>FOR MORE!!</i></h1>
            <h2><i>CATCH US ON OUR</i> <span className='highlighted-word'><u>SOCIALS</u></span></h2>
            <div className="social-links-container">
                <a
                    href="https://www.instagram.com/ryuworksofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <img src={InstagramLogo} alt="Instagram" className="social-icon" />
                </a>
                <a
                    href="https://www.linkedin.com/company/ryuworks"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                >
                    <img src={LinkedinLogo} alt="LinkedIn" className="social-icon" />
                </a>
            </div>
        </div>
    );
};

export default Home;
