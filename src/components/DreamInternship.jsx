import React, { useEffect, useState } from 'react';
import './DreamInternship.css';

const DreamInternship = () => {
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

    const element = document.getElementById('dream-internship');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section className="dream-internship-section" id="dream-internship">
      <div className="container">
        <div className={`content-wrapper ${isVisible ? 'fade-in' : ''}`}>
          <span className="trending-label">Trending Explore Internship Opportunities</span>
          <h1>
            Your Dream Internship is Just One <span className="highlight">Click Away!</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default DreamInternship;


