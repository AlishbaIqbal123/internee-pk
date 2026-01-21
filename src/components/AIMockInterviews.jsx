import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRobot, FaLightbulb, FaBullseye, FaDumbbell, FaBolt, FaChartBar } from 'react-icons/fa';
import './AIMockInterviews.css';

const AIMockInterviews = () => {
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

    const element = document.getElementById('ai-mock-interviews');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const features = [
    {
      icon: FaRobot,
      title: 'Realistic AI Interview Simulations',
      description: 'Simulate real interview environments powered by AI. Perfect for students seeking online internship interview practice or job readiness.'
    },
    {
      icon: FaLightbulb,
      title: 'Smart Feedback with AI',
      description: 'Instantly analyze your answers, tone, and relevance. Improve every time with feedback tailored for virtual internship candidates.'
    },
    {
      icon: FaBullseye,
      title: 'Role-Based Mock Interviews',
      description: 'Practice interviews for software engineering, product management, business, and digital marketing roles in our internee.pk platform.'
    }
  ];

  const benefits = [
    {
      icon: FaDumbbell,
      title: 'Build Real Interview Confidence',
      description: 'Reduce anxiety and increase success rate through repeated AI-based mock interview sessions.'
    },
    {
      icon: FaBolt,
      title: 'Become Job-Ready Fast',
      description: 'Structured interview training that prepares you for real-world scenarios. Perfect for students applying for internships.'
    },
    {
      icon: FaChartBar,
      title: 'Track Progress with Reports',
      description: 'Access detailed performance reports you can share with mentors and hiring managers.'
    }
  ];

  return (
    <section className="ai-mock-interviews-section" id="ai-mock-interviews">
      <div className="container">
        <div className={`section-header ${isVisible ? 'fade-in' : ''}`}>
          <h2>AI Mock Interview Platform for Virtual Internships in Pakistan</h2>
          <p>Prepare for <strong>technical</strong>, <strong>marketing</strong>, or <strong>business interviews</strong> with our AI-powered mock interview system. Join <strong>Internee.pk's virtual internship program</strong> to get unlimited access, real-time feedback, and role-specific practice.</p>
          <Link to="/aimock/dashboard" className="btn-apply">Apply Now for Virtual Internship</Link>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-card ${isVisible ? 'fade-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon">{typeof feature.icon === 'function' ? React.createElement(feature.icon, { size: 40 }) : feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="benefits-section">
          <h3>Why Choose Our AI Mock Interview Platform?</h3>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`benefit-card ${isVisible ? 'fade-in' : ''}`}
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <div className="benefit-icon">{typeof benefit.icon === 'function' ? React.createElement(benefit.icon, { size: 40 }) : benefit.icon}</div>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIMockInterviews;


