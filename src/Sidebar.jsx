// src/Sidebar.jsx
import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a
        href="https://instagram.com/jai_rh7?igshid=MTNiYzNiMzkwZA%3D%3D&utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        className="icon instagram"
      >
        <i className="fab fa-instagram"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/jai-sachdeva-993261212/"
        target="_blank"
        rel="noopener noreferrer"
        className="icon linkedin"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a
        href="https://github.com/jaisahdeva"
        target="_blank"
        rel="noopener noreferrer"
        className="icon github"
      >
        <i className="fab fa-github"></i>
      </a>
    </div>
  );
};

export default Sidebar;