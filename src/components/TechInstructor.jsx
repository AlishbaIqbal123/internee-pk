import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUpload, FaDollarSign, FaUser, FaBalanceScale } from 'react-icons/fa';
import './TechInstructor.css';

const TechInstructor = () => {
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

    const element = document.getElementById('tech-instructor');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const benefits = [
    {
      icon: FaUpload,
      title: 'Upload Tutorials & Exercises',
      description: 'Use internee.pk to share tutorials, exercises, and projects. Help others learn while you grow with virtual internships that reward your skills.',
      link: 'Learn more'
    },
    {
      icon: FaDollarSign,
      title: 'Earn from Your Expertise',
      description: 'Internee.pk offers virtual internships in Pakistan where tech creators and instructors can earn passive income by sharing their knowledge.',
      link: 'Learn more'
    },
    {
      icon: FaUser,
      title: 'Build Your Instructor Profile',
      description: 'Become a trusted voice on internee.pk. Our virtual internship ecosystem helps you build your personal brand in the online learning space.',
      link: 'Learn more'
    },
    {
      icon: FaBalanceScale,
      title: 'Fair Revenue Sharing',
      description: 'We keep it transparent. Join internee.pk and benefit from a fair model that pays you well — all while gaining experience in virtual internships.',
      link: 'Learn more'
    }
  ];

  return (
    <section className="tech-instructor-section" id="tech-instructor">
      <div className="container">
        <div className={`section-header ${isVisible ? 'fade-in' : ''}`}>
          <h2>Tech Instructor or Content Creator?</h2>
          <h3>Create in Your Native Language & Start Earning</h3>
          <Link to="/dashboard" className="btn-primary-instructor">Start Teaching Today</Link>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`benefit-card ${isVisible ? 'fade-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="benefit-icon">{typeof benefit.icon === 'function' ? React.createElement(benefit.icon, { size: 40 }) : benefit.icon}</div>
              <h4>{benefit.title}</h4>
              <p>{benefit.description}</p>
              <a href="#" className="learn-more-link">{benefit.link} →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechInstructor;


