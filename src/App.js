import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Expertise from './pages/Expertise';
import OurProducts from './pages/OurProducts';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <div className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/our-products" element={<OurProducts />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
