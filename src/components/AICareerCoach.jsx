import React, { useEffect, useState } from 'react';
import { FaFileAlt, FaEnvelope, FaBriefcase, FaChartLine, FaBullseye, FaChartBar, FaDollarSign } from 'react-icons/fa';
import './AICareerCoach.css';

const AICareerCoach = () => {
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

    const element = document.getElementById('ai-career-coach');
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
      icon: FaFileAlt,
      title: 'AI Resume Building',
      description: 'Stand out in the AI job market with our professional resume-building guide. Learn how to highlight your AI skills, experience, and key accomplishments to catch the attention of top employers.'
    },
    {
      icon: FaEnvelope,
      title: 'Cover Letter Creation',
      description: 'Create compelling cover letters that showcase your passion for AI and demonstrate your value to employers. Make a strong first impression that speaks directly to your AI expertise.'
    },
    {
      icon: FaBriefcase,
      title: 'Interview Preparation',
      description: 'Ace your AI job interviews with confidence through practice questions, interview strategies, and tips for answering technical AI-related queries.'
    },
    {
      icon: FaChartLine,
      title: 'Industry Insights',
      description: 'Stay ahead of the curve with up-to-date insights on the latest AI trends, market demands, and emerging technologies in the AI industry.'
    }
  ];

  const whyChoose = [
    {
      icon: FaBullseye,
      title: 'Comprehensive Guidance',
      description: 'Everything you need to succeed in the AI industry'
    },
    {
      icon: FaChartBar,
      title: 'Industry-Ready Insights',
      description: 'Stay updated on the latest AI trends'
    },
    {
      icon: FaDollarSign,
      title: 'Monetization Options',
      description: 'Share your AI knowledge and earn income'
    }
  ];

  return (
    <section className="ai-career-coach-section" id="ai-career-coach">
      <div className="container">
        <div className={`section-header ${isVisible ? 'fade-in' : ''}`}>
          <h2>AI Career Coach: Your Ultimate Guide to Building a Successful AI Career</h2>
          <p>Looking to kickstart your career in the AI industry? Our AI Career Coach platform offers expert guidance in resume building, cover letter creation, interview preparation, quizzes, and industry insights—all designed to help you land your dream job in Artificial Intelligence.</p>
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

        <div className={`monetize-section ${isVisible ? 'fade-in' : ''}`}>
          <h3>Monetize Your Expertise</h3>
          <h4>Share Your Knowledge & Earn</h4>
          <p>Are you an AI expert? Share your knowledge through courses, tutorials, or content. Build your personal brand and generate income while helping others succeed in their AI careers.</p>
        </div>

        <div className="why-choose-section">
          <h3>Why Choose AI Career Coach?</h3>
          <div className="why-choose-grid">
            {whyChoose.map((item, index) => (
              <div 
                key={index} 
                className={`why-choose-card ${isVisible ? 'fade-in' : ''}`}
                style={{ animationDelay: `${(index + 4) * 0.1}s` }}
              >
                <div className="why-choose-icon">{typeof item.icon === 'function' ? React.createElement(item.icon, { size: 40 }) : item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICareerCoach;


