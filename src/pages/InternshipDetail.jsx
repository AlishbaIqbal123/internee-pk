import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock, FaBriefcase } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './InternshipDetail.css';

const InternshipDetail = () => {
  const { categoryId } = useParams();

  // Internship categories with their subcategories
  const internshipData = {
    'graphic-design': {
      title: 'Graphic Design',
      description: 'Create stunning visual designs and master industry-standard design tools',
      subcategories: [
        {
          id: 'photoshop',
          name: 'Photoshop Internship',
          icon: '/internships/photoshop.png',
          type: 'Remote',
          duration: '2 months',
          category: 'Internship'
        },
        {
          id: 'illustrator',
          name: 'Illustrator Internship',
          icon: '/internships/illustrator.png',
          type: 'Remote',
          duration: '2 months',
          category: 'Internship'
        },
        {
          id: 'autodesk-maya',
          name: 'Autodesk Maya Internship',
          icon: '/internships/autodesk-maya.png',
          type: 'Remote',
          duration: '2 months',
          category: 'Internship'
        },
        {
          id: 'figma',
          name: 'Figma Internship',
          icon: '/internships/figma.png',
          type: 'Remote',
          duration: '2 months',
          category: 'Internship'
        }
      ]
    },
    'chatbot-development': {
      title: 'Chatbot Development',
      description: 'Build intelligent chatbots and conversational AI systems',
      subcategories: [
        {
          id: 'chatgpt',
          name: 'ChatGPT Development',
          icon: '/internships/chatbot.png',
          type: 'Remote',
          duration: '2 months',
          category: 'Internship'
        },
        {
          id: 'dialogflow',
          name: 'Dialogflow Internship',
          icon: '/internships/dialogflow.png',
          type: 'Remote',
          duration: '2 months',
          category: 'Internship'
        }
      ]
    },
    'frontend': {
      title: 'Frontend Internship',
      description: 'Master frontend technologies and build modern web applications',
      subcategories: [
        {
          id: 'react',
          name: 'React Development',
          icon: '/internships/react.png',
          type: 'Remote',
          duration: '3 months',
          category: 'Internship'
        },
        {
          id: 'vue',
          name: 'Vue.js Development',
          icon: '/internships/vue.png',
          type: 'Remote',
          duration: '3 months',
          category: 'Internship'
        },
        {
          id: 'angular',
          name: 'Angular Development',
          icon: '/internships/angular.png',
          type: 'Remote',
          duration: '3 months',
          category: 'Internship'
        }
      ]
    },
    'app-development': {
      title: 'App Development',
      description: 'Develop mobile applications for iOS and Android',
      subcategories: [
        {
          id: 'react-native',
          name: 'React Native Development',
          icon: '/internships/react-native.png',
          type: 'Remote',
          duration: '3 months',
          category: 'Internship'
        },
        {
          id: 'flutter',
          name: 'Flutter Development',
          icon: '/internships/flutter.png',
          type: 'Remote',
          duration: '3 months',
          category: 'Internship'
        },
        {
          id: 'ios',
          name: 'iOS Development',
          icon: '/internships/ios.png',
          type: 'Remote',
          duration: '3 months',
          category: 'Internship'
        },
        {
          id: 'android',
          name: 'Android Development',
          icon: '/internships/android.png',
          type: 'Remote',
          duration: '3 months',
          category: 'Internship'
        }
      ]
    },
    'backend': {
      title: 'Backend Development',
      description: 'Build robust backend systems and APIs',
      subcategories: [
        {
          id: 'nodejs',
          name: 'Node.js Development',
          icon: '/internships/nodejs.png',
          type: 'Remote',
          duration: '3 months',
          category: 'Internship'
        },
        {
          id: 'python',
          name: 'Python Backend',
          icon: '/internships/python.png',
          type: 'Remote',
          duration: '3 months',
          category: 'Internship'
        },
        {
          id: 'java',
          name: 'Java Backend',
          icon: '/internships/java.png',
          type: 'Remote',
          duration: '3 months',
          category: 'Internship'
        }
      ]
    },
    'other': {
      title: 'Other Internships',
      description: 'Explore diverse internship opportunities',
      subcategories: [
        {
          id: 'data-science',
          name: 'Data Science',
          icon: '/internships/data-science.png',
          type: 'Remote',
          duration: '3 months',
          category: 'Internship'
        },
        {
          id: 'digital-marketing',
          name: 'Digital Marketing',
          icon: '/internships/digital-marketing.png',
          type: 'Remote',
          duration: '2 months',
          category: 'Internship'
        }
      ]
    }
  };

  const category = internshipData[categoryId] || internshipData['graphic-design'];
  const categorySlug = categoryId || 'graphic-design';

  return (
    <div className="internship-detail-page">
      <Header />
      
      {/* Hero Banner */}
      <div className="detail-hero">
        <div className="container">
          <h1>{category.title}</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="detail-content">
        <div className="container">
          <div className="detail-header">
            <h2>Explore Your Next Internship</h2>
            <p>Handpicked opportunities to elevate your career.</p>
          </div>

          <div className="subcategories-grid">
            {category.subcategories.map((subcategory) => (
              <div key={subcategory.id} className="subcategory-card">
                <div className="subcategory-image">
                  <img 
                    src={subcategory.icon} 
                    alt={subcategory.name}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="subcategory-placeholder" style={{ display: 'none' }}>
                    <FaBriefcase style={{ fontSize: '3rem', opacity: 0.3 }} />
                  </div>
                </div>
                <h3>{subcategory.name}</h3>
                <div className="subcategory-meta">
                  <span className="meta-item">
                    <span className="meta-icon">📍</span>
                    {subcategory.type}
                  </span>
                  <span className="meta-item">
                    <span className="meta-icon">⏱️</span>
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

export default InternshipDetail;
