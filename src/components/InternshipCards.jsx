import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './InternshipCards.css';

const InternshipCards = () => {
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

    const element = document.getElementById('internship-cards');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const internships = [
    { id: 1, name: 'Graphic Design', slug: 'graphic-design', image: '/internships/1.png', description: 'Create stunning visual designs' },
    { id: 2, name: 'Chatbot Development', slug: 'chatbot-development', image: '/internships/2.png', description: 'Build intelligent chatbots' },
    { id: 3, name: 'Other Internships', slug: 'other', image: '/internships/3.png', description: 'Explore diverse opportunities' },
    { id: 4, name: 'Frontend Internship', slug: 'frontend', image: '/internships/4.png', description: 'Master frontend technologies' },
    { id: 5, name: 'App Development', slug: 'app-development', image: '/internships/5.png', description: 'Develop mobile applications' },
    { id: 6, name: 'Backend Development', slug: 'backend', image: '/internships/6.png', description: 'Build robust backend systems' }
  ];

  return (
    <section className="internship-cards-section" id="internship-cards">
      <div className="container">
        <div className={`section-header ${isVisible ? 'fade-in' : ''}`}>
          <h2>Explore Internship Categories</h2>
          <p>Choose from a wide range of internship opportunities and kickstart your professional journey.</p>
        </div>

        <div className={`internship-cards-grid ${isVisible ? 'fade-in' : ''}`}>
          {internships.map((internship, index) => (
            <Link 
              key={internship.id} 
              to={`/internship/${internship.slug}`}
              className={`internship-card-item ${isVisible ? 'fade-in' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="card-image-wrapper">
                <img 
                  src={internship.image} 
                  alt={internship.name} 
                  className="card-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    const placeholder = e.target.nextElementSibling;
                    if (placeholder) {
                      placeholder.style.display = 'flex';
                    }
                  }}
                />
                <div className="card-image-placeholder" style={{ display: 'none' }}>
                  <span>{internship.name}</span>
                </div>
              </div>
              <h3>{internship.name}</h3>
              <span className="card-link">
                <span>Apply Now</span>
                <span className="arrow-icon">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipCards;
