import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/"><img src="/images/logo.png" alt="logo" /></a>
      </div>
      <div className={`navbar-links ${isMobile ? 'active' : ''}`}>
        <a href="#review">Review</a>
        <a href="#partners">Partners</a>
        <a href="#peopel">People</a>
        <a href="#feedback">Feedback</a>
        <a className='price' href="#pricing">Pricing</a>
      <a href="#get-app" className="get-app-button">Get The App</a>
      </div>
      <div className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        <i className={isMobile ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
    </nav>
  );
};

export default NavBar;
