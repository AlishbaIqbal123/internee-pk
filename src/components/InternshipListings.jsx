import React, { useState } from 'react';
import './InternshipListings.css';

const InternshipListings = () => {
  const [internships] = useState([
    {
      id: 1,
      title: 'Software Engineering Intern',
      company: 'Tech Innovations Inc.',
      location: 'Remote',
      type: 'Full-time',
      duration: '3 months',
      stipend: '₹25,000/month',
      posted: '2 days ago',
      description: 'Join our development team to work on cutting-edge software solutions and gain hands-on experience in modern tech stacks.'
    },
    {
      id: 2,
      title: 'Marketing Intern',
      company: 'Digital Growth Co.',
      location: 'Delhi, India',
      type: 'Part-time',
      duration: '2 months',
      stipend: '₹15,000/month',
      posted: '1 week ago',
      description: 'Assist in digital marketing campaigns and social media strategy development for various clients.'
    },
    {
      id: 3,
      title: 'Data Science Intern',
      company: 'Analytics Pro',
      location: 'Mumbai, India',
      type: 'Full-time',
      duration: '6 months',
      stipend: '₹30,000/month',
      posted: '3 days ago',
      description: 'Work with large datasets to derive insights and build predictive models for business intelligence.'
    },
    {
      id: 4,
      title: 'UX/UI Design Intern',
      company: 'Creative Solutions',
      location: 'Bangalore, India',
      type: 'Full-time',
      duration: '3 months',
      stipend: '₹20,000/month',
      posted: '5 days ago',
      description: 'Design user-friendly interfaces and conduct user research to improve product experience.'
    }
  ]);

  const [filters, setFilters] = useState({
    location: '',
    type: '',
    duration: ''
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const filteredInternships = internships.filter(internship => {
    return (
      (filters.location === '' || internship.location.toLowerCase().includes(filters.location.toLowerCase())) &&
      (filters.type === '' || internship.type === filters.type) &&
      (filters.duration === '' || internship.duration === filters.duration)
    );
  });

  return (
    <section className="internships-section" id="internships">
      <div className="container">
        <div className="section-header">
          <h2>Available Internships</h2>
          <p>Discover exciting internship opportunities tailored to your skills and career goals.</p>
        </div>
        
        <div className="filters">
          <div className="filter-group">
            <label htmlFor="location">Location:</label>
            <input 
              type="text" 
              id="location"
              name="location" 
              placeholder="Enter location" 
              value={filters.location}
              onChange={handleFilterChange}
            />
          </div>
          
          <div className="filter-group">
            <label htmlFor="type">Type:</label>
            <select 
              id="type"
              name="type" 
              value={filters.type}
              onChange={handleFilterChange}
            >
              <option value="">All Types</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
            </select>
          </div>
          
          <div className="filter-group">
            <label htmlFor="duration">Duration:</label>
            <select 
              id="duration"
              name="duration" 
              value={filters.duration}
              onChange={handleFilterChange}
            >
              <option value="">All Durations</option>
              <option value="1 month">1 month</option>
              <option value="2 months">2 months</option>
              <option value="3 months">3 months</option>
              <option value="6 months">6 months</option>
            </select>
          </div>
        </div>
        
        <div className="internships-grid">
          {filteredInternships.map(internship => (
            <div className="internship-card" key={internship.id}>
              <div className="card-header">
                <h3>{internship.title}</h3>
                <span className="posted">{internship.posted}</span>
              </div>
              
              <div className="company-info">
                <p className="company">{internship.company}</p>
                <div className="tags">
                  <span className="tag location">{internship.location}</span>
                  <span className="tag type">{internship.type}</span>
                  <span className="tag duration">{internship.duration}</span>
                  <span className="tag stipend">{internship.stipend}</span>
                </div>
              </div>
              
              <p className="description">{internship.description}</p>
              
              <div className="card-footer">
                <button className="btn-apply">Apply Now</button>
                <button className="btn-details">View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipListings;