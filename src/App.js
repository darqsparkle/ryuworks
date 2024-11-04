import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Expertise from './pages/Expertise';
import OurProducts from './pages/OurProducts';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/expertise" element={<Expertise />} />
          <Route path="/our-products" element={<OurProducts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
