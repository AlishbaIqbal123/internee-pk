import React, { useState, useEffect } from 'react';
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
        { id: 1, name: 'Web Development', count: 150 },
        { id: 2, name: 'Digital Marketing', count: 120 },
        { id: 3, name: 'UI/UX Design', count: 90 },
        { id: 4, name: 'Data Analytics', count: 80 },
        { id: 5, name: 'Content Writing', count: 70 },
        { id: 6, name: 'Business Development', count: 60 }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="internship-page">
      <Header />
      <div className="internship-hero">
        <div className="container">
          <h1>Unlock Your Future</h1>
          <p>Discover world-class internships and gain hands-on experience with top industry leaders.</p>
          <button className="btn-primary">Get Started</button>
        </div>
        <div className="hero-subtitle">Find Your Dream Internship Today!</div>
      </div>

      <div className="internship-content">
        <div className="container">
          <div className="section-header">
            <h2>Explore Internship Categories</h2>
            <p>Choose from a wide range of internship opportunities and kickstart your professional journey.</p>
            {loading && <p className="loading-text">Loading subcategories...</p>}
          </div>

          {!loading && (
            <div className="categories-grid">
              {categories.map((category) => (
                <div key={category.id} className="category-card">
                  <div className="category-icon">💼</div>
                  <h3>{category.name}</h3>
                  <p className="category-count">{category.count} Internships Available</p>
                  <button className="btn-explore">Explore</button>
                </div>
              ))}
            </div>
          )}

          <div className="stats-section">
            <div className="stat-card">
              <h3>1</h3>
              <p>Internships Available</p>
            </div>
            <div className="stat-card">
              <h3>1</h3>
              <p>Industry Partners</p>
            </div>
            <div className="stat-card">
              <h3>1</h3>
              <p>Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Internship;

