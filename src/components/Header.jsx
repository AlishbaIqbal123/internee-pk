import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="main-header">
      <div className="container">
        <div className="nav-wrapper">
          <div className="logo">
            <h2>internee.pk</h2>
          </div>
          
          <button 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#internships">Internships</a></li>
              <li><a href="#companies">Companies</a></li>
              <li><a href="#students">Students</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><button className="btn-post-job">Post Job</button></li>
              <li><button className="btn-login">Login</button></li>
              <li><button className="btn-signup">Sign Up</button></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;