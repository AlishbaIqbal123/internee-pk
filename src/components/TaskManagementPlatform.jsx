import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBullseye, FaCheckCircle, FaSyncAlt, FaBookOpen } from 'react-icons/fa';
import './TaskManagementPlatform.css';

const TaskManagementPlatform = () => {
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

    const element = document.getElementById('task-platform');
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
      icon: FaBullseye,
      title: 'Hands-on Industry Projects with internee.pk',
      description: 'Gain practical experience through real-world projects that simulate actual industry scenarios. Each task is carefully designed to enhance your professional portfolio through our virtual internships.',
      points: ['Project-based learning', 'Industry-standard practices', 'Portfolio building'],
      size: 'large'
    },
    {
      icon: FaCheckCircle,
      title: 'Skill Verification System by internee.pk',
      description: 'Each completed task adds to your verified skills portfolio. Showcase your capabilities with confidence through our virtual internships and comprehensive tracking system.',
      points: ['Skill verification', 'Progress tracking', 'Achievement badges'],
      size: 'large'
    },
    {
      icon: FaSyncAlt,
      title: 'SDLC Implementation via internee.pk',
      description: 'Experience the complete Software Development Life Cycle through structured tasks and milestones, part of our virtual internship offerings.',
      points: [],
      size: 'small'
    },
    {
      icon: FaBookOpen,
      title: 'Guided Learning Path at internee.pk',
      description: 'Follow a structured learning path designed for both beginners and advanced learners as part of our virtual internship curriculum.',
      points: [],
      size: 'small'
    }
  ];
  
  // Reorder features: 2 large cards first, then 2 small cards
  const orderedFeatures = [
    features[0], // Large 1
    features[1], // Large 2
    features[2], // Small 1
    features[3]  // Small 2
  ];

  return (
    <section className="task-platform-section" id="task-platform">
      <div className="container">
        <div className={`section-header ${isVisible ? 'fade-in' : ''}`}>
          <h2>Master Real-World Skills with Our Task Portal at <strong>internee.pk</strong></h2>
          <p>Transform theoretical knowledge into practical expertise through our comprehensive task portal. Build, learn, and grow with industry-standard projects from our <strong>virtual internships</strong> on <strong>internee.pk</strong>.</p>
        </div>

        <div className="features-grid">
          {orderedFeatures.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-card ${feature.size} ${isVisible ? 'fade-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon">{typeof feature.icon === 'function' ? <feature.icon /> : feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              {feature.points.length > 0 && (
                <ul className="feature-points">
                  {feature.points.map((point, idx) => (
                    <li key={idx}>
                      <span className="check-icon">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className={`cta-section ${isVisible ? 'fade-in' : ''}`}>
          <h3>Ready to Build Your Professional Portfolio with <strong>internee.pk</strong>?</h3>
          <p className="cta-description">Join our <strong>virtual internships</strong> and get access to industry-standard tasks that will help you build a remarkable portfolio, only at <strong>internee.pk</strong>.</p>
          <Link to="/dashboard/assignments" className="btn-cta">Start Your Journey Now</Link>
        </div>
      </div>
    </section>
  );
};

export default TaskManagementPlatform;


