import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Find Your Dream Internship in Pakistan</h1>
            <p>Join thousands of students who found their perfect internships. Connect with top companies across Pakistan and kickstart your career.</p>
            <div className="hero-buttons">
              <button className="btn-primary">Browse Internships</button>
              <button className="btn-secondary">Post an Internship</button>
            </div>
            
            <div className="stats">
              <div className="stat">
                <span className="count">1000+</span>
                <span className="label">Internships</span>
              </div>
              <div className="stat">
                <span className="count">500+</span>
                <span className="label">Companies</span>
              </div>
              <div className="stat">
                <span className="count">5000+</span>
                <span className="label">Students</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;