// src/Navbar.jsx
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className={`navbar`}>
      <div className="logo">Jai Sachdeva</div>

      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={toggleNav}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation links */}
      <div className={`nav-links ${isNavOpen ? 'open' : ''}`}>
       
       
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>

      </div>
    </nav>
  );
};

export default Navbar;
