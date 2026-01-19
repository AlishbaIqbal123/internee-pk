import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ProfessionalDevelopment.css';

const ProfessionalDevelopment = () => {
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

    const element = document.getElementById('professional-dev');
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
    { number: '1000+', label: 'Active Internships' },
    { number: '500+', label: 'Partner Companies' },
    { number: '10,000+', label: 'Success Stories' },
    { number: '50+', label: 'Industry Sectors' }
  ];

  const learningAreas = [
    'Web Development',
    'Digital Marketing',
    'UI/UX Design',
    'Content Writing',
    'Data Analytics',
    'Business Development'
  ];

  const mentorshipFeatures = [
    'One-on-One Guidance',
    'Weekly Sessions',
    'Project Reviews',
    'Career Planning',
    'Industry Connect',
    'Networking Events'
  ];

  const certificationFeatures = [
    'Skill Verification',
    'Project Portfolio',
    'Performance Badges',
    'Industry Recognition',
    'Digital Certificates',
    'LinkedIn Integration'
  ];

  const phases = [
    { number: '1', title: 'Foundation', description: 'Build core skills and knowledge' },
    { number: '2', title: 'Practical Skills', description: 'Apply knowledge through projects' },
    { number: '3', title: 'Industry Projects', description: 'Work on real-world challenges' }
  ];

  return (
    <section className="professional-dev-section" id="professional-dev">
      <div className="container">
        <div className={`section-header ${isVisible ? 'fade-in' : ''}`}>
          <h2>Launch Your Career with <strong>Internee.pk</strong></h2>
          <p>Pakistan's innovative platform for career growth and professional development. Join our <strong>virtual internships</strong> to gain practical experience and kickstart your professional journey.</p>
        </div>

        <div className={`stats-container ${isVisible ? 'fade-in' : ''}`}>
          {stats.map((stat, index) => (
            <div key={index} className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="features-section">
          <div className={`feature-block ${isVisible ? 'fade-in' : ''}`}>
            <div className="feature-icon-large">🎯</div>
            <h3>Targeted Learning</h3>
            <p>Industry-specific <strong>virtual internships</strong> designed to build practical skills and experience.</p>
            <div className="feature-list">
              {learningAreas.map((area, index) => (
                <span key={index} className="feature-tag">{area}</span>
              ))}
            </div>
          </div>

          <div className={`feature-block ${isVisible ? 'fade-in' : ''}`}>
            <div className="feature-icon-large">👨‍🏫</div>
            <h3>Mentorship Program</h3>
            <p>Learn directly from industry experts at <strong>Internee.pk</strong></p>
            <ul className="feature-list-ul">
              {mentorshipFeatures.map((feature, index) => (
                <li key={index}>
                  <span className="check-icon">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className={`feature-block ${isVisible ? 'fade-in' : ''}`}>
            <div className="feature-icon-large">🏆</div>
            <h3>Certification Track</h3>
            <p>Earn recognized certifications through <strong>virtual internships</strong></p>
            <ul className="feature-list-ul">
              {certificationFeatures.map((feature, index) => (
                <li key={index}>
                  <span className="check-icon">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`learning-journey ${isVisible ? 'fade-in' : ''}`}>
          <h3>Your Learning Journey</h3>
          <div className="phases-container">
            {phases.map((phase, index) => (
              <div key={index} className="phase-card">
                <div className="phase-number">{phase.number}</div>
                <h4>Phase {phase.number}: {phase.title}</h4>
                <p>{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`cta-section ${isVisible ? 'fade-in' : ''}`}>
          <h3>Begin Your Professional Journey with <strong>Internee.pk</strong></h3>
          <p>Join our <strong>virtual internships</strong> program and transform your career prospects with hands-on experience and expert guidance.</p>
          <div className="cta-buttons">
            <Link to="/internship" className="btn-primary">Explore Opportunities</Link>
            <Link to="/graduateprogram" className="btn-secondary">View Programs</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalDevelopment;


