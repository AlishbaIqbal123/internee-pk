import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="main-header">
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/" className="logo">
            <h2>internee.pk</h2>
          </Link>
          
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
              <li><Link to="/" className={isActive('/') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
              <li><Link to="/internship" className={isActive('/internship') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Internship</Link></li>
              <li><Link to="/graduateprogram" className={isActive('/graduateprogram') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Graduate Program</Link></li>
              <li><Link to="/studentambassadors" className={isActive('/studentambassadors') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Student Ambassador</Link></li>
              <li><Link to="/jobs/public" className={isActive('/jobs/public') ? 'active' : ''} onClick={() => setIsMenuOpen(false)}>Job Portal</Link></li>
              <li><Link to="/dashboard" className="btn-login" onClick={() => setIsMenuOpen(false)}>Dashboard</Link></li>
              <li><button className="btn-signup">Sign Up</button></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;