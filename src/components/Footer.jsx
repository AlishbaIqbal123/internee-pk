import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-intro">
          <p>The ultimate platform designed to turbocharge the IT sector in Pakistan.</p>
          <p className="phone">📞 +92 312 3023645</p>
        </div>
        
        <div className="footer-content">
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#student-ambassador">Student Ambassador</a></li>
              <li><a href="#interns-profiles">Interns Profiles</a></li>
              <li><a href="#about">About Us</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Resources</h4>
            <ul>
              <li><a href="#community">Community</a></li>
              <li><a href="#certification">Certification</a></li>
              <li><a href="#scholarships">Scholarships</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-stats">
          <div className="stat-item">
            <span className="stat-number">1+</span>
            <span className="stat-label">Expert-Led Internships</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">1+</span>
            <span className="stat-label">Successful Graduates</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">1+</span>
            <span className="stat-label">LinkedIn Followers</span>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Copyright © {new Date().getFullYear()} internee.pk</p>
          <div className="footer-links">
            <a href="#terms">Terms of Use</a>
            <span>|</span>
            <a href="#privacy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;