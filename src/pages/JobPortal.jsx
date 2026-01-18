import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './JobPortal.css';

const JobPortal = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    type: '',
    experience: ''
  });

  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Tech Solutions Inc.',
      location: 'Karachi, Pakistan',
      type: 'Full-time',
      experience: '2-3 years',
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'React Developer',
      company: 'Digital Innovations',
      location: 'Lahore, Pakistan',
      type: 'Full-time',
      experience: '1-2 years',
      posted: '5 days ago'
    },
    {
      id: 3,
      title: 'UI/UX Designer',
      company: 'Creative Studio',
      location: 'Islamabad, Pakistan',
      type: 'Part-time',
      experience: '1-3 years',
      posted: '1 week ago'
    }
  ];

  return (
    <div className="job-portal-page">
      <Header />
      <div className="job-portal-hero">
        <div className="container">
          <h1>Find Your Dream Job</h1>
          <p>Browse through hundreds of job opportunities from top companies</p>
          
          <div className="search-section">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search jobs, companies, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="search-btn">🔍</button>
            </div>
            
            <div className="filters">
              <select
                value={filters.location}
                onChange={(e) => setFilters({...filters, location: e.target.value})}
              >
                <option value="">All Locations</option>
                <option value="karachi">Karachi</option>
                <option value="lahore">Lahore</option>
                <option value="islamabad">Islamabad</option>
              </select>
              
              <select
                value={filters.type}
                onChange={(e) => setFilters({...filters, type: e.target.value})}
              >
                <option value="">All Types</option>
                <option value="full-time">Full-time</option>
                <option value="part-time">Part-time</option>
                <option value="contract">Contract</option>
              </select>
              
              <select
                value={filters.experience}
                onChange={(e) => setFilters({...filters, experience: e.target.value})}
              >
                <option value="">All Experience Levels</option>
                <option value="entry">Entry Level</option>
                <option value="mid">Mid Level</option>
                <option value="senior">Senior Level</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="jobs-content">
        <div className="container">
          <div className="jobs-header">
            <h2>Available Jobs</h2>
            <p>{jobs.length} jobs found</p>
          </div>

          <div className="jobs-list">
            {jobs.map((job) => (
              <div key={job.id} className="job-card">
                <div className="job-header">
                  <h3>{job.title}</h3>
                  <span className="job-type">{job.type}</span>
                </div>
                <div className="job-company">{job.company}</div>
                <div className="job-details">
                  <span>📍 {job.location}</span>
                  <span>💼 {job.experience}</span>
                  <span>📅 {job.posted}</span>
                </div>
                <div className="job-actions">
                  <button className="btn-apply">Apply Now</button>
                  <button className="btn-save">Save</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JobPortal;

