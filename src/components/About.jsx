import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About internee.pk</h2>
            <p>internee.pk is Pakistan's leading internship platform connecting talented students with top companies across the country. Our mission is to bridge the gap between academia and industry by providing meaningful internship opportunities that help students gain practical experience and launch their careers.</p>
            <p>We believe that internships are crucial for professional development, and our platform makes it easy for students to find, apply for, and secure internships that match their skills and career goals.</p>
            <button className="btn-primary">Learn More</button>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Internships Posted</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Companies</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5000+</div>
              <div className="stat-label">Students Connected</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">85%</div>
              <div className="stat-label">Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;