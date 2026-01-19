import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './DashboardSidebar.css';

const DashboardSidebar = () => {
  const location = useLocation();
  const [expandedMenu, setExpandedMenu] = useState(() => {
    if (location.pathname.includes('/dashboard/assignments') || location.pathname.includes('/dashboard/certificate')) {
      return 'internship';
    }
    if (location.pathname.includes('/aimock')) {
      return 'mock';
    }
    return null;
  });

  const toggleMenu = (menu) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  const isActive = (path) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  const isSubActive = (path) => {
    return location.pathname === path;
  };

  return (
    <aside className="dashboard-sidebar">
      <h1 className="sidebar-logo">Internee.pk</h1>
      <nav className="sidebar-nav">
        <Link to="/dashboard" className={`nav-item ${isActive('/dashboard') && !location.pathname.includes('/assignments') && !location.pathname.includes('/certificate') ? 'active' : ''}`}>
          <span className="nav-icon">👤</span>
          <span>Profile</span>
          <span className="nav-arrow">→</span>
        </Link>
        <div className="nav-item-wrapper">
          <div 
            className={`nav-item ${expandedMenu === 'internship' || location.pathname.includes('/dashboard/assignments') || location.pathname.includes('/dashboard/certificate') ? 'active' : ''}`}
            onClick={() => toggleMenu('internship')}
          >
            <span className="nav-icon">📄</span>
            <span>Internship</span>
            <span className="nav-arrow">{expandedMenu === 'internship' ? '↓' : '→'}</span>
          </div>
          {expandedMenu === 'internship' && (
            <div className="nav-submenu">
              <Link 
                to="/dashboard/assignments" 
                className={`nav-subitem ${isSubActive('/dashboard/assignments') ? 'active' : ''}`}
              >
                Task Portal
              </Link>
              <Link 
                to="/dashboard/certificate" 
                className={`nav-subitem ${isSubActive('/dashboard/certificate') ? 'active' : ''}`}
              >
                Certificate
              </Link>
            </div>
          )}
        </div>
        <div className="nav-item-wrapper">
          <div 
            className={`nav-item ${expandedMenu === 'mock' || location.pathname.includes('/aimock') ? 'active' : ''}`}
            onClick={() => toggleMenu('mock')}
          >
            <span className="nav-icon">🏅</span>
            <span>Mock Interview</span>
            <span className="nav-arrow">{expandedMenu === 'mock' ? '↓' : '→'}</span>
          </div>
          {expandedMenu === 'mock' && (
            <div className="nav-submenu">
              <Link 
                to="/aimock/dashboard/badges" 
                className={`nav-subitem ${isSubActive('/aimock/dashboard/badges') ? 'active' : ''}`}
              >
                Badges
              </Link>
              <Link 
                to="/aimock/dashboard/interviews" 
                className={`nav-subitem ${isSubActive('/aimock/dashboard/interviews') ? 'active' : ''}`}
              >
                Interviews
              </Link>
              <Link 
                to="/aimock/dashboard/certified/interviews" 
                className={`nav-subitem ${isSubActive('/aimock/dashboard/certified/interviews') ? 'active' : ''}`}
              >
                Certified Interviews
              </Link>
              <Link 
                to="/aimock/dashboard/roadmaps" 
                className={`nav-subitem ${isSubActive('/aimock/dashboard/roadmaps') ? 'active' : ''}`}
              >
                Road Map
              </Link>
            </div>
          )}
        </div>
        <Link to="/jobs/public" className={`nav-item ${isActive('/jobs/public') ? 'active' : ''}`}>
          <span className="nav-icon">💼</span>
          <span>Job Portal</span>
          <span className="nav-arrow">→</span>
        </Link>
        <Link to="/ai-career-coach" className={`nav-item ${isActive('/ai-career-coach') ? 'active' : ''}`}>
          <span className="nav-icon">📚</span>
          <span>AI Career Coach</span>
          <span className="nav-arrow">→</span>
        </Link>
        <Link to="/ai-course-lms" className={`nav-item ${isActive('/ai-course-lms') ? 'active' : ''}`}>
          <span className="nav-icon">🖥️</span>
          <span>AI Course LMS</span>
          <span className="nav-arrow">→</span>
        </Link>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;

