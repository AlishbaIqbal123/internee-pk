import React from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardHeaderActions from '../components/DashboardHeaderActions';
import './Certificate.css';

const Certificate = () => {
  return (
    <div className="certificate-page">
      <DashboardSidebar />

      <main className="certificate-main">
        <div className="certificate-header">
          <h1>Dashboard</h1>
          <DashboardHeaderActions />
        </div>

        <div className="certificate-content">
          <p className="empty-message">No certificates found.</p>
        </div>
      </main>
    </div>
  );
};

export default Certificate;

