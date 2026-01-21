import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './GraduateProgramDetail.css';

const GraduateProgramDetail = () => {
  const { categoryId } = useParams();

  const programData = {
    'healthcare': {
      title: 'Health Care',
      description: 'Step into the world where every second counts and lives are changed. Whether it\'s assisting in patient care, supporting medical research, or exploring health tech innovation our internships put you at the heart of the action. Join the frontlines of impact and make your mark in the future of healthcare.',
      subcategories: [
        {
          id: 'nursing',
          name: 'Nursing Internship',
          type: 'Remote',
          duration: '3 months',
          category: 'Internship'
        },
        {
          id: 'pharmacy',
          name: 'Pharmacy Internship',
          type: 'Remote',
          duration: '3 months',
          category: 'Internship'
        },
        {
          id: 'medical-research',
          name: 'Medical Research',
          type: 'Remote',
          duration: '4 months',
          category: 'Internship'
        }
      ]
    },
    'engineering': {
      title: 'Engineering',
      description: 'Enter the realm where ideas turn into structures, circuits, and code. From building the future to solving real-world challenges, our engineering internships place you in the driver\'s seat of innovation. Whether it\'s civil, electrical, mechanical, or software get ready to design, build, and disrupt.',
      subcategories: [
        {
          id: 'civil-engineering',
          name: 'Civil Engineering',
          type: 'Remote',
          duration: '3 months',
          category: 'Internship'
        },
        {
          id: 'electrical-engineering',
          name: 'Electrical Engineering',
          type: 'Remote',
          duration: '3 months',
          category: 'Internship'
        },
        {
          id: 'mechanical-engineering',
          name: 'Mechanical Engineering',
          type: 'Remote',
          duration: '3 months',
          category: 'Internship'
        },
        {
          id: 'software-engineering',
          name: 'Software Engineering',
          type: 'Remote',
          duration: '3 months',
          category: 'Internship'
        }
      ]
    },
    'information-technology': {
      title: 'Information Technology',
      description: 'Dive into the digital battlefield where code is power and innovation never sleeps. From software development to cybersecurity, data analytics to cloud computing our IT internships equip you to lead the tech revolution. Step in, gear up, and shape the future of technology.',
      subcategories: [
        {
          id: 'software-development',
          name: 'Software Development',
          type: 'Remote',
          duration: '3 months',
          category: 'Internship'
        },
        {
          id: 'cybersecurity',
          name: 'Cybersecurity',
          type: 'Remote',
          duration: '3 months',
          category: 'Internship'
        },
        {
          id: 'data-analytics',
          name: 'Data Analytics',
          type: 'Remote',
          duration: '3 months',
          category: 'Internship'
        },
        {
          id: 'cloud-computing',
          name: 'Cloud Computing',
          type: 'Remote',
          duration: '3 months',
          category: 'Internship'
        }
      ]
    }
  };

  const program = programData[categoryId] || programData['engineering'];

  return (
    <div className="graduate-program-detail-page">
      <Header />
      
      {/* Hero Banner */}
      <div className="program-detail-hero">
        <div className="container">
          <h1>{program.title}</h1>
          <p>{program.description}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="program-detail-content">
        <div className="container">
          <div className="detail-header">
            <h2>Explore Internship Subcategories</h2>
            <p>Discover opportunities under the {program.title} category.</p>
          </div>

          <div className="subcategories-grid">
            {program.subcategories.map((subcategory) => (
              <div key={subcategory.id} className="subcategory-card">
                <h3>{subcategory.name}</h3>
                <div className="subcategory-meta">
                  <span className="meta-item">
                    <span className="meta-icon"><FaMapMarkerAlt /></span>
                    {subcategory.type}
                  </span>
                  <span className="meta-item">
                    <span className="meta-icon"><FaClock /></span>
                    {subcategory.duration}
                  </span>
                </div>
                <p className="subcategory-type">{subcategory.category}</p>
                <button className="btn-apply-now">Apply Now</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GraduateProgramDetail;
