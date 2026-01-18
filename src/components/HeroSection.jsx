import React, { useEffect, useState } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
          <div className="hero-text">
            <div className="alert-banner">
              <span className="alert-icon">🏆</span>
              <span>We are the winner of Google Cloud for Startup 2024</span>
            </div>
            <h1>Looking for <span className="highlight">dream internship?</span></h1>
            <p>Internee.pk kickstart student's tech careers with first internships, providing industry exposure, practical skills, and networking opportunities.</p>
            <div className="hero-buttons">
              <a href="#job-portal" className="btn-primary">Our Job Portal</a>
              <a href="#sign-in" className="btn-secondary">
                Sign In
                <span className="btn-icon">→</span>
              </a>
            </div>
            
            <div className="stats">
              <div className="stat">
                <span className="count">1000+</span>
                <span className="label">Active Internships</span>
              </div>
              <div className="stat">
                <span className="count">500+</span>
                <span className="label">Partner Companies</span>
              </div>
              <div className="stat">
                <span className="count">10,000+</span>
                <span className="label">Success Stories</span>
              </div>
              <div className="stat">
                <span className="count">50+</span>
                <span className="label">Industry Sectors</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;