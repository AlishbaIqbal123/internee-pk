import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import './GraduateProgram.css';

const GraduateProgram = () => {
  const programs = [
    {
      id: 1,
      title: 'Software Engineering Graduate Program',
      duration: '6 months',
      type: 'Full-time',
      description: 'Comprehensive program covering full-stack development, system design, and industry best practices.',
      skills: ['React', 'Node.js', 'Database Design', 'API Development']
    },
    {
      id: 2,
      title: 'Data Science Graduate Program',
      duration: '6 months',
      type: 'Full-time',
      description: 'Master data analysis, machine learning, and data visualization techniques.',
      skills: ['Python', 'Machine Learning', 'Data Analysis', 'SQL']
    },
    {
      id: 3,
      title: 'Digital Marketing Graduate Program',
      duration: '4 months',
      type: 'Part-time',
      description: 'Learn SEO, social media marketing, content strategy, and analytics.',
      skills: ['SEO', 'Social Media', 'Content Strategy', 'Analytics']
    }
  ];

  return (
    <div className="graduate-program-page">
      <Header />
      <div className="program-hero">
        <div className="container">
          <h1>Graduate Program</h1>
          <p>Accelerate your career with our intensive graduate programs designed for fresh graduates</p>
        </div>
      </div>

      <div className="program-content">
        <div className="container">
          <div className="section-header">
            <h2>Choose Your Path</h2>
            <p>Select a program that aligns with your career goals and interests</p>
          </div>

          <div className="programs-grid">
            {programs.map((program) => (
              <div key={program.id} className="program-card">
                <div className="program-badge">{program.type}</div>
                <h3>{program.title}</h3>
                <div className="program-duration">
                  <span>⏱️ {program.duration}</span>
                </div>
                <p className="program-description">{program.description}</p>
                <div className="program-skills">
                  <h4>Skills You'll Learn:</h4>
                  <div className="skills-list">
                    {program.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
                <button className="btn-apply-program">Apply Now</button>
              </div>
            ))}
          </div>

          <div className="program-benefits">
            <h2>Program Benefits</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">🎓</div>
                <h3>Industry Mentorship</h3>
                <p>Learn from experienced professionals</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">💼</div>
                <h3>Job Placement</h3>
                <p>Guaranteed placement assistance</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🏆</div>
                <h3>Certification</h3>
                <p>Earn recognized certificates</p>
              </div>
              <div className="benefit-card">
                <div className="benefit-icon">🤝</div>
                <h3>Networking</h3>
                <p>Connect with industry leaders</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default GraduateProgram;

