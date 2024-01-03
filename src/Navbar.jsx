import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleLinkClick = () => {
    
    
  };

  return (
    <nav className="navbar">
      <div className="logo">Jai Sachdeva</div>

      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={toggleNav}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation links */}
      <div className={`nav-links ${isNavOpen ? 'open' : ''}`}>
        <Link to="home" > Home </Link>
        <Link to="about"> About </Link>
        <Link> Portfolio </Link>
        <Link> Contact </Link>
      </div>
    </nav>
  );
};

export default Navbar;
