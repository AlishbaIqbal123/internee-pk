import React from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardHeaderActions from '../components/DashboardHeaderActions';
import './MockInterviewBadges.css';

const MockInterviewBadges = () => {
  return (
    <div className="mock-interview-badges-page">
      <DashboardSidebar />

      <main className="mock-interview-badges-main">
        <div className="mock-interview-badges-header">
          <h1>Dashboard</h1>
          <DashboardHeaderActions />
        </div>

        <div className="mock-interview-badges-content">
          <h2>Interview Badges</h2>
          <p className="section-description">Review your earned badges from completed mock interviews.</p>
          <p className="empty-message">No badges earned yet. Complete mock interviews to earn one!</p>
        </div>
      </main>
    </div>
  );
};

export default MockInterviewBadges;

