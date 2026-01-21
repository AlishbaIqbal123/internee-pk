import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaUser } from 'react-icons/fa';
import NotificationPopup from './NotificationPopup';
import './DashboardHeaderActions.css';

const DashboardHeaderActions = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="header-actions">
      <button className="icon-btn theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle theme">
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </button>
      <NotificationPopup />
      <div className="user-profile-icon">
        <FaUser />
      </div>
    </div>
  );
};

export default DashboardHeaderActions;
