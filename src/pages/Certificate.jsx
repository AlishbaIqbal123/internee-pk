import React from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import './Certificate.css';

const Certificate = () => {
  return (
    <div className="certificate-page">
      <DashboardSidebar />

      <main className="certificate-main">
        <div className="certificate-header">
          <h1>Dashboard</h1>
          <div className="header-actions">
            <button className="icon-btn">☀️</button>
            <button className="icon-btn">🔔</button>
            <div className="user-profile-icon">👤</div>
          </div>
        </div>

        <div className="certificate-content">
          <p className="empty-message">No certificates found.</p>
        </div>
      </main>
    </div>
  );
};

export default Certificate;

