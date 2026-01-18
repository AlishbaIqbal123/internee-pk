import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Internship Matching',
      description: 'We connect talented students with companies offering relevant internship opportunities based on skills and interests.',
      icon: '🎓'
    },
    {
      title: 'Career Guidance',
      description: 'Professional mentorship and guidance to help students navigate their career paths effectively.',
      icon: '🧭'
    },
    {
      title: 'Skill Development',
      description: 'Workshops and training programs to enhance professional skills and marketability.',
      icon: '🚀'
    },
    {
      title: 'Job Placement',
      description: 'Direct pathways to employment opportunities after successful completion of internships.',
      icon: '💼'
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Services</h2>
          <p>We offer comprehensive services to bridge the gap between students and industry professionals.</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;