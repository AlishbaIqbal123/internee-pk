import React from 'react';
import './Students.css';

const Students = () => {
  const benefits = [
    {
      title: 'Access to Top Companies',
      description: 'Connect with leading companies across Pakistan offering quality internships.',
      icon: '🏢'
    },
    {
      title: 'Career Guidance',
      description: 'Receive professional mentorship and career guidance from industry experts.',
      icon: '🧭'
    },
    {
      title: 'Skill Development',
      description: 'Enhance your skills through workshops and training programs.',
      icon: '🚀'
    },
    {
      title: 'Job Opportunities',
      description: 'Increase your chances of getting hired after successful internships.',
      icon: '💼'
    }
  ];

  return (
    <section className="students-section" id="students">
      <div className="container">
        <div className="section-header">
          <h2>Benefits for Students</h2>
          <p>Everything you need to succeed in your internship journey</p>
        </div>
        
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div className="benefit-card" key={index}>
              <div className="benefit-icon">{benefit.icon}</div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="students-cta">
          <h3>Ready to Start Your Internship Journey?</h3>
          <p>Join thousands of students who found their perfect internships through internee.pk</p>
          <button className="btn-primary">Register as Student</button>
        </div>
      </div>
    </section>
  );
};

export default Students;