import React, { useEffect, useState } from 'react';
import './Partners.css';

const Partners = () => {
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

    const element = document.getElementById('partners');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  // Placeholder for partner logos - in production, these would be actual images
  const partners = [
    { name: 'Partner 1', logo: '🏢' },
    { name: 'Partner 2', logo: '🏢' },
    { name: 'Partner 3', logo: '🏢' },
    { name: 'Partner 4', logo: '🏢' },
    { name: 'Partner 5', logo: '🏢' },
    { name: 'Partner 6', logo: '🏢' }
  ];

  return (
    <section className="partners-section" id="partners">
      <div className="container">
        <div className={`section-header ${isVisible ? 'fade-in' : ''}`}>
          <h2>Collaborated with Trusted Worldwide Partners</h2>
        </div>

        <div className={`partners-grid ${isVisible ? 'fade-in' : ''}`}>
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="partner-logo"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="logo-placeholder">{partner.logo}</div>
              <span className="partner-name">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;


