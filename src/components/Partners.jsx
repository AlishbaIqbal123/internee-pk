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

  const partners = [
    { name: 'Google Cloud', src: '/partners/google-cloud.png' },
    { name: 'See Pakistan 2024', src: '/partners/see-pakistan-2024.png' },
    { name: 'Microsoft for Startups Founders Hub', src: '/partners/founders-hub.png' },
    { name: 'ITG', src: '/partners/itg.png' },
    { name: 'National Expansion Plan of NICS', src: '/partners/nep-nics.png' },
    { name: 'PITB', src: '/partners/pitb.png' }
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
              <img className="partner-img" src={partner.src} alt={partner.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;


