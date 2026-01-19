import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="hero-section" id="home">
      {showAlert && (
        <div className="alert-banner">
          <div className="alert-content">
            <span>We are the winner of Google Cloud for Startup 2024</span>
            <button className="alert-close" onClick={() => setShowAlert(false)}>×</button>
          </div>
        </div>
      )}
      <div className="container">
        <div className={`hero-content ${isVisible ? 'fade-in' : ''}`}>
          <div className="hero-text">
            <h1>Looking for <br /><span className="highlight">dream internship?</span></h1>
            <p>Internee.pk kickstart student's tech careers with first internships, providing industry exposure, practical skills, and networking opportunities.</p>
            <div className="hero-buttons">
              <Link to="/jobs/public" className="btn btn-primary">Our Job Portal</Link>
              <Link to="/dashboard" className="btn btn-dark">
                Sign In
                <span className="btn-icon">↗</span>
              </Link>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">1000+</span>
                <span className="stat-label">Active Internships</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Partner Companies</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10,000+</span>
                <span className="stat-label">Success Stories</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Industry Sectors</span>
              </div>
            </div>
          </div>

          <div className="hero-grid">
            <div className="grid-col-left">
              <div className="card-green-large">
                <div className="avatars">
                  <div className="avatar"></div>
                  <div className="avatar"></div>
                  <div className="avatar"></div>
                </div>
                <h3>200k+</h3>
                <p>More than 200k+ people has joined us</p>
                <div className="play-btn-wrapper">
                  <button className="play-btn" aria-label="Watch Video">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </button>
                  <svg className="text-circle" viewBox="0 0 100 100" width="100" height="100">
                    <path id="curve" d="M 50 50 m -37 0 a 37 37 0 1 1 74 0 a 37 37 0 1 1 -74 0" fill="transparent" />
                    <text>
                      <textPath href="#curve">
                        WATCH VIDEO OF OUR ACTION •
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>

              <div className="card-green-small">
                <span>Successful growth</span>
                <div className="chart-icon">
                  <div className="bar bar-1"></div>
                  <div className="bar bar-2"></div>
                  <div className="bar bar-3"></div>
                  <span className="arrow">↗</span>
                </div>
              </div>
            </div>

            <div className="grid-col-right">
              <div className="img-card-top">
                <img src="/startup-winners.png" alt="Startup Competition Winners" />
              </div>

              <div className="stats-row">
                <div className="stat-card">
                  <span className="stat-label">National Winner</span>
                  <span className="stat-value">3x</span>
                </div>
                <div className="stat-card">
                  <span className="stat-label">Linkedin Followers</span>
                  <span className="stat-value">50K+</span>
                </div>
                <div className="stat-card">
                  <span className="stat-label">internships Domain</span>
                  <span className="stat-value">30+</span>
                </div>
              </div>

              <div className="img-card-bottom">
                <img src="/community-collage.png" alt="Community Members" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>
    </section>
  );
};

export default HeroSection;