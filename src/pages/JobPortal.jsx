import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './JobPortal.css';

const JobPortal = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('Latest');

  const jobs = [
    {
      id: 1,
      title: 'Business Development Intern Internship in...',
      company: 'DigixSoft',
      location: 'Karachi, Pakistan',
      date: 'Jan 19, 2026',
      description: 'Business Development Intern Internship in DigixSoft Karachi, Pakistan'
    },
    {
      id: 2,
      title: 'Client Acquisition Intern Internship in...',
      company: 'DigixSoft',
      location: 'Karachi, Pakistan',
      date: 'Jan 19, 2026',
      description: 'Client Acquisition Intern Internship in DigixSoft Karachi, Pakistan'
    },
    {
      id: 3,
      title: 'Graphic Designer Job in The D...',
      company: 'The Design Brewery',
      location: 'Karachi, Pakistan',
      date: 'Jan 19, 2026',
      description: 'Graphic Designer Job in The Design Brewery Karachi, Pakistan'
    },
    {
      id: 4,
      title: 'Sales Executive Job in Hims Technology P...',
      company: 'Hims Technology Pvt Ltd.',
      location: 'Karachi, Pakistan',
      date: 'Jan 19, 2026',
      description: 'Sales Executive Job in Hims Technology Pvt Ltd. Karachi, Pakistan'
    },
    {
      id: 5,
      title: 'Junior Media Buyer Job in The Art Expert...',
      company: 'The Art Expert',
      location: 'Karachi, Pakistan',
      date: 'Jan 19, 2026',
      description: 'Junior Media Buyer Job in The Art Expert Karachi, Pakistan'
    },
    {
      id: 6,
      title: 'Professional Video Editor Job in Rizing Te...',
      company: 'Rizing Tech',
      location: 'Karachi, Pakistan',
      date: 'Jan 19, 2026',
      description: 'Professional Video Editor Job in Rizing Tech Karachi, Pakistan'
    }
  ];

  return (
    <div className="job-portal-page">
      <Header />
      <div className="job-portal-content">
        <div className="container">
          <div className="job-portal-header">
            <h1>Job Portal</h1>
            <p className="tagline">Find your dream job today</p>
          </div>

          <div className="search-filter-section">
            <div className="search-box">
              <span className="search-icon">🔍</span>
              <input
                type="text"
                placeholder="Search jobs by title or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="btn-search">Search</button>
            <div className="sort-dropdown-wrapper">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="sort-dropdown"
              >
                <option value="Latest">Latest</option>
                <option value="Oldest">Oldest</option>
                <option value="Title">Title</option>
              </select>
            </div>
          </div>

          <div className="jobs-grid">
            {jobs.map((job) => (
              <div key={job.id} className="job-card">
                <button className="bookmark-btn">🔖</button>
                <div className="job-date">{job.date}</div>
                <h3 className="job-title">{job.title}</h3>
                <p className="job-description">{job.description}</p>
                <button className="btn-apply">
                  Apply
                  <span className="external-icon">↗</span>
                </button>
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
