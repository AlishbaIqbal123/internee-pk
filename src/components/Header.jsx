import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const location = useLocation();

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
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
            </ul>
          </nav>

          <div className="header-actions">
            <Link to="/jobs/public" className="btn btn-primary">Job Portal</Link>
            <Link to="/dashboard" className="btn btn-primary">Sign In</Link>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;