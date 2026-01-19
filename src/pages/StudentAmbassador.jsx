import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import './StudentAmbassador.css';

const StudentAmbassador = () => {
  const benefits = [
    {
      icon: '🎯',
      title: 'Leadership Opportunities',
      description: 'Develop leadership skills by representing Internee.pk in your community'
    },
    {
      icon: '🤝',
      title: 'Networking',
      description: 'Connect with industry professionals and fellow ambassadors'
    },
    {
      icon: '💰',
      title: 'Earn Rewards',
      description: 'Get rewarded for your contributions and referrals'
    },
    {
      icon: '📚',
      title: 'Skill Development',
      description: 'Enhance your communication and marketing skills'
    }
  ];

  const requirements = [
    'Currently enrolled in a university or college',
    'Passionate about technology and career development',
    'Active on social media platforms',
    'Good communication skills',
    'Commitment to the program for at least 6 months'
  ];

  return (
    <div className="student-ambassador-page">
      <Header />
      <div className="ambassador-hero">
        <div className="container">
          <h1>Become a Student Ambassador</h1>
          <p>Join our community of student leaders and help others kickstart their careers</p>
          <button className="btn-apply">Apply Now</button>
        </div>
      </div>

      <div className="ambassador-content">
        <div className="container">
          <div className="section-header">
            <h2>Why Become an Ambassador?</h2>
            <p>Make a difference while building your own career</p>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="requirements-section">
            <h2>Requirements</h2>
            <div className="requirements-list">
              {requirements.map((requirement, index) => (
                <div key={index} className="requirement-item">
                  <span className="check-icon">✓</span>
                  <span>{requirement}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="how-it-works-section">
            <h2>How It Works</h2>
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Apply</h3>
                <p>Submit your application with your details</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Get Selected</h3>
                <p>Our team reviews and selects candidates</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Start Promoting</h3>
                <p>Begin sharing Internee.pk with your network</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>Earn Rewards</h3>
                <p>Get rewarded for successful referrals</p>
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

export default StudentAmbassador;


