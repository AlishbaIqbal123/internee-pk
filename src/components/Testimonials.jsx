import React, { useState } from 'react';
import { FaUser, FaUserTie, FaUserGraduate, FaPalette } from 'react-icons/fa';
import './Testimonials.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      id: 1,
      name: 'Kashan Soomro',
      location: 'Karachi, Pakistan',
      content: 'Thanks to internee.pk, I grew up my skills here and now I am working as a Flutter Developer in a US company.',
      avatar: FaUserTie,
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      location: 'Lahore, Pakistan',
      content: 'internee.pk helped me land my dream internship. The platform connected me with opportunities perfectly matched to my skills and interests.',
      avatar: FaUser,
      rating: 5
    },
    {
      id: 3,
      name: 'Ahmed Ali',
      location: 'Islamabad, Pakistan',
      content: 'The personalized recommendations and career guidance I received through internee.pk were invaluable. I secured a competitive internship that launched my career.',
      avatar: FaUserTie,
      rating: 5
    },
    {
      id: 4,
      name: 'Fatima Khan',
      location: 'Karachi, Pakistan',
      content: 'As a student, finding relevant internships seemed impossible. internee.pk made it easy with its comprehensive database and application support.',
      avatar: FaPalette,
      rating: 5
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
          <h2>Trusted By Thousands</h2>
          <h3>Join a Global Community Of Learners Achieving Their Dreams</h3>
          <p>Hear from students who found their perfect internships through internee.pk</p>
        </div>
        
        <div className="testimonials-container">
          <div className="testimonial-card">
            <div className="avatar">{typeof testimonials[currentIndex].avatar === 'function' ? React.createElement(testimonials[currentIndex].avatar, { size: 40 }) : testimonials[currentIndex].avatar}</div>
            <p className="testimonial-content">"{testimonials[currentIndex].content}"</p>
            <div className="testimonial-author">
              <h4>{testimonials[currentIndex].name}</h4>
              <p className="location">{testimonials[currentIndex].location}</p>
              <div className="rating">
                {'★'.repeat(testimonials[currentIndex].rating)}
              </div>
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