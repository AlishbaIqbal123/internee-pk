import React from 'react';
import { Link } from 'react-router-dom';
import { FaStethoscope, FaHardHat, FaLaptopCode } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import './GraduateProgram.css';

const GraduateProgram = () => {
  const programs = [
    {
      id: 'healthcare',
      slug: 'healthcare',
      title: 'Health Care',
      icon: FaStethoscope,
      image: '/graduate-programs/healthcare.jpg',
      description: 'Step into the world where every second counts and lives are changed. Whether it\'s assisting in patient care, supporting medical research, or exploring health tech innovation our internships put you at the heart of the action. Join the frontlines of impact and make your mark in the future of healthcare.'
    },
    {
      id: 'engineering',
      slug: 'engineering',
      title: 'Engineering',
      icon: FaHardHat,
      image: '/graduate-programs/engineering.jpg',
      description: 'Enter the realm where ideas turn into structures, circuits, and code. From building the future to solving real-world challenges, our engineering internships place you in the driver\'s seat of innovation. Whether it\'s civil, electrical, mechanical, or software get ready to design, build, and disrupt.'
    },
    {
      id: 'information-technology',
      slug: 'information-technology',
      title: 'Information Technology',
      icon: FaLaptopCode,
      image: '/graduate-programs/information-technology.jpg',
      description: 'Dive into the digital battlefield where code is power and innovation never sleeps. From software development to cybersecurity, data analytics to cloud computing our IT internships equip you to lead the tech revolution. Step in, gear up, and shape the future of technology.'
    }
  ];

  return (
    <div className="graduate-program-page">
      <Header />
      
      <div className="program-hero">
        <div className="container">
          <h1>Graduate Programs</h1>
          <p>Explore our comprehensive graduate programs designed to advance your career and expand your knowledge.</p>
        </div>
      </div>

      <div className="program-content">
        <div className="container">
          <div className="section-header">
            <h2>Explore Categories</h2>
          </div>

          <div className="programs-grid">
            {programs.map((program) => (
              <Link 
                key={program.id} 
                to={`/graduateprogram/${program.slug}`}
                className="program-card"
              >
                <div className="program-image-wrapper">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const placeholder = e.target.nextElementSibling;
                      if (placeholder) {
                        placeholder.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="program-image-placeholder" style={{ display: 'none' }}>
                    {React.createElement(program.icon, { style: { fontSize: '4rem', opacity: 0.3 } })}
                  </div>
                </div>
                <h3>{program.title}</h3>
                <p className="program-description">{program.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default GraduateProgram;
