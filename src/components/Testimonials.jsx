import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Software Engineering Intern',
      company: 'Google',
      content: 'internee.pk helped me land my dream internship at Google. The platform connected me with opportunities perfectly matched to my skills and interests.',
      avatar: '👩‍💻'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Data Science Intern',
      company: 'Microsoft',
      content: 'The personalized recommendations and career guidance I received through internee.pk were invaluable. I secured a competitive internship that launched my career.',
      avatar: '👨‍💻'
    },
    {
      id: 3,
      name: 'Priya Sharma',
      role: 'UX Design Intern',
      company: 'Adobe',
      content: 'As an international student, finding relevant internships seemed impossible. internee.pk made it easy with its comprehensive database and application support.',
      avatar: '👩‍🎨'
    },
    {
      id: 4,
      name: 'David Rodriguez',
      role: 'Business Development Intern',
      company: 'Amazon',
      content: 'The interview preparation resources and networking events organized by internee.pk gave me a significant advantage during the application process.',
      avatar: '👨‍💼'
    }
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Success Stories</h2>
          <p>Hear from students who found their perfect internships through internee.pk</p>
        </div>
        
        <div className="testimonials-container">
          <div className="testimonial-card">
            <div className="avatar">{testimonials[currentIndex].avatar}</div>
            <p className="testimonial-content">"{testimonials[currentIndex].content}"</p>
            <div className="testimonial-author">
              <h4>{testimonials[currentIndex].name}</h4>
              <p className="role">{testimonials[currentIndex].role} at {testimonials[currentIndex].company}</p>
            </div>
          </div>
          
          <div className="navigation-buttons">
            <button className="nav-btn prev-btn" onClick={goToPrevious} aria-label="Previous testimonial">
              &#8249;
            </button>
            <button className="nav-btn next-btn" onClick={goToNext} aria-label="Next testimonial">
              &#8250;
            </button>
          </div>
          
          <div className="indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;