import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import './Internship.css';

const Internship = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading categories
    setTimeout(() => {
      setCategories([
        { id: 1, name: 'Frontend Development', image: '/internships/4.png', description: 'Build modern web applications using latest technologies' },
        { id: 2, name: 'Chatbot Development', image: '/internships/2.png', description: 'Master social media, SEO, and digital advertising strategies' },
        { id: 3, name: 'Graphic Design', image: '/internships/1.png', description: 'Create beautiful and user-friendly interfaces' },
        { id: 4, name: 'Content Writing', image: '/internships/3.png', description: 'Develop compelling content for various platforms' },
        { id: 5, name: 'Backend Development', image: '/internships/6.png', description: 'Analyze data and derive actionable insights' },
        { id: 6, name: 'App Development', image: '/internships/5.png', description: 'Learn sales, partnerships, and business growth strategies' }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="internship-page">
      <Header />
      <div className="internship-hero">
        <div className="container">
          <span className="trending-label">Trending Explore Internship Opportunities</span>
          <h1>Your Dream Internship is Just One Click Away!</h1>
          <p>Discover world-class internships and gain hands-on experience with top industry leaders.</p>
          <Link to="/dashboard" className="btn-primary">Get Started</Link>
        </div>
      </div>

      <div className="internship-content">
        <div className="container">
          <div className="section-header">
            <h2>Explore Internship Categories</h2>
            <p>Choose from a wide range of internship opportunities and kickstart your professional journey.</p>
            {loading && <p className="loading-text">Loading categories...</p>}
          </div>

          {!loading && (
            <div className="categories-grid">
              {categories.map((category) => (
                <div key={category.id} className="category-card">
                  <div className="category-icon">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="category-icon-placeholder">
                      <span>{category.name.charAt(0)}</span>
                    </div>
                  </div>
                  <h3>{category.name}</h3>
                  <p className="category-description">{category.description}</p>
                  <Link to={`/internship/${category.slug || category.name.toLowerCase().replace(/\s+/g, '-')}`} className="btn-explore">Explore</Link>
                </div>
              ))}
            </div>
          )}

          <div className="stats-section">
            <div className="stat-card">
              <h3>1000+</h3>
              <p>Active Internships</p>
            </div>
            <div className="stat-card">
              <h3>500+</h3>
              <p>Partner Companies</p>
            </div>
            <div className="stat-card">
              <h3>10,000+</h3>
              <p>Success Stories</p>
            </div>
            <div className="stat-card">
              <h3>50+</h3>
              <p>Industry Sectors</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Internship;


