import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HowItWorks.css';

const HowItWorks = () => {
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

    const element = document.getElementById('how-it-works');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const steps = [
    {
      number: '1',
      title: 'Sign Up & Choose a Domain',
      description: 'Explore a wide range of internships across various industries, tailored to match your skills.'
    },
    {
      number: '2',
      title: 'Fill out the Desired Form',
      description: 'Fill out a quick application form to and secure your internship opportunity.'
    },
    {
      number: '3',
      title: 'Earn Your Certificate',
      description: 'Complete your internship, gain valuable hands-on experience, and receive a certificate'
    }
  ];

  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="container">
        <div className={`section-header ${isVisible ? 'fade-in' : ''}`}>
          <span className="section-label">How It Works</span>
          <h2>A Simple and Seamless Process to Start Your Internship Journey</h2>
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`step-card ${isVisible ? 'fade-in' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>

        <div className={`cta-section ${isVisible ? 'fade-in' : ''}`}>
          <Link to="/dashboard" className="btn-cta">Get Started Now</Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;


