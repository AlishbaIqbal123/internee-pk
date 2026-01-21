import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardHeaderActions from '../components/DashboardHeaderActions';
import './CertifiedInterviews.css';

const CertifiedInterviews = () => {
  const [sortBy, setSortBy] = useState('Latest');

  const interviews = [
    {
      id: 1,
      title: 'Kubernetes Developer',
      category: 'Kubernetes',
      difficulty: 'Intermediate'
    },
    {
      id: 2,
      title: 'NEXTJS DEVELOPER',
      category: 'NEXTJS,REACT',
      difficulty: 'HARD'
    },
    {
      id: 3,
      title: 'REACT DEVELOPER',
      category: 'REACT',
      difficulty: 'HARDEST'
    }
  ];

  return (
    <div className="certified-interviews-page">
      <DashboardSidebar />

      <main className="certified-interviews-main">
        <div className="certified-interviews-header">
          <h1>Dashboard</h1>
          <DashboardHeaderActions />
        </div>

        <div className="certified-interviews-content">
          <div className="search-section">
            <div className="search-box">
              <span className="search-icon"><FaSearch /></span>
              <input type="text" placeholder="Search across all fields..." />
            </div>
          </div>

          <div className="sort-section">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="sort-dropdown">
              <option value="Latest">Latest</option>
              <option value="Oldest">Oldest</option>
              <option value="Title">Title</option>
            </select>
          </div>

          <div className="interviews-grid">
            {interviews.map((interview) => (
              <div key={interview.id} className="interview-card">
                <h3>{interview.title}</h3>
                <p className="interview-category">{interview.category}</p>
                <p className="interview-difficulty">{interview.difficulty}</p>
                <button className="btn-view">View</button>
              </div>
            ))}
          </div>

          <div className="pagination">
            <button className="btn-prev">Prev</button>
            <span className="page-info">Page 1 of 1</span>
            <button className="btn-next" disabled>Next</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CertifiedInterviews;

