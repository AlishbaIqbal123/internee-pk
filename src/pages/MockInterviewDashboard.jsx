import React from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardHeaderActions from '../components/DashboardHeaderActions';
import './MockInterviewDashboard.css';

const MockInterviewDashboard = () => {

  const interviews = [
    {
      id: 1,
      title: 'Frontend Frameworks',
      questions: 9,
      createdAt: '04-01-2026'
    }
  ];

  return (
    <div className="mock-interview-dashboard-page">
      <DashboardSidebar />

      <main className="mock-interview-main">
        <div className="mock-interview-header">
          <h1>Dashboard</h1>
          <DashboardHeaderActions />
        </div>

        <div className="mock-interview-content">
          <div className="dashboard-section">
            <h2>Dashboard</h2>
            <p className="section-subtitle">Prepare yourself for the final interview</p>
            <button className="btn-add-new">
              <span className="plus-icon">+</span>
              Add New
            </button>
          </div>

          <div className="previous-interviews-section">
            <h3>Previous Mock Interviews</h3>
            <div className="interviews-grid">
              {interviews.map((interview) => (
                <div key={interview.id} className="interview-card">
                  <h4>{interview.title}</h4>
                  <div className="interview-number">{interview.questions}</div>
                  <p className="interview-date">Created At: {interview.createdAt}</p>
                  <div className="interview-actions">
                    <button className="btn-feedback">Feedback</button>
                    <button className="btn-start">Start</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MockInterviewDashboard;

