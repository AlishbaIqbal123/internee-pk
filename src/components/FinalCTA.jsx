import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './FinalCTA.css';

const FinalCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('final-cta');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const stats = [
    { number: '1+', label: 'Expert-Led Internships' },
    { number: '1+', label: 'Successful Graduates' },
    { number: '1+', label: 'LinkedIn Followers' }
  ];

  return (
    <section className="final-cta-section" id="final-cta">
      <div className="container">
        <div className={`content-wrapper ${isVisible ? 'fade-in' : ''}`}>
          <span className="trending-label">Trending Explore Internship Opportunities</span>
          <h1>
            Unlock New Opportunities <br />
            With Top-tier Internships.
          </h1>
          <p>Take the first step toward a successful career with Internee.pk. Explore top internships, gain hands-on experience, and earn a valuable certificate.</p>
          
          <div className="cta-buttons">
            <Link to="/graduateprogram" className="btn-primary">Get Started Now</Link>
            <Link to="/internship" className="btn-secondary">
              Explore Internships
              <span className="btn-icon">→</span>
            </Link>
          </div>
        </div>

        <div className={`stats-container ${isVisible ? 'fade-in' : ''}`}>
          {stats.map((stat, index) => (
            <div key={index} className="stat-item" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;


