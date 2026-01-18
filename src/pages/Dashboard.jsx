import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <Header />
      <div className="dashboard-container">
        <aside className="dashboard-sidebar">
          <h1 className="sidebar-logo">Internee.pk</h1>
          <nav className="sidebar-nav">
            <a href="/dashboard" className="nav-item active">
              <span className="nav-icon">👤</span>
              <span>Profile</span>
            </a>
            <a href="/internship" className="nav-item">
              <span className="nav-icon">💼</span>
              <span>Internship</span>
            </a>
            <a href="/mock-interview" className="nav-item">
              <span className="nav-icon">🎤</span>
              <span>Mock Interview</span>
            </a>
            <a href="/jobs/public" className="nav-item">
              <span className="nav-icon">🔍</span>
              <span>Job Portal</span>
            </a>
            <a href="/ai-career-coach" className="nav-item">
              <span className="nav-icon">🤖</span>
              <span>AI Career Coach</span>
            </a>
            <a href="/ai-course-lms" className="nav-item">
              <span className="nav-icon">📚</span>
              <span>AI Course LMS</span>
            </a>
          </nav>
        </aside>

        <main className="dashboard-main">
          <div className="dashboard-header">
            <h1>Dashboard</h1>
            <div className="header-actions">
              <button className="icon-btn">🔔</button>
              <button className="icon-btn">⚙️</button>
            </div>
          </div>

          <div className="dashboard-content">
            <div className="welcome-section">
              <div className="user-info">
                <div className="user-avatar">👤</div>
                <div>
                  <h2>Welcome, User!</h2>
                  <p>Ready to track your progress today?</p>
                </div>
              </div>
            </div>

            <div className="progress-section">
              <h3>Progress Overview</h3>
              <div className="progress-cards">
                <div className="progress-card">
                  <div className="card-icon">📋</div>
                  <div className="card-content">
                    <h4>Tasks</h4>
                    <p className="card-value">0</p>
                  </div>
                </div>
                <div className="progress-card">
                  <div className="card-icon">🏆</div>
                  <div className="card-content">
                    <h4>Badges</h4>
                    <p className="card-value">0</p>
                  </div>
                </div>
                <div className="progress-card">
                  <div className="card-icon">🎤</div>
                  <div className="card-content">
                    <h4>Interviews</h4>
                    <p className="card-value">0</p>
                  </div>
                </div>
                <div className="progress-card">
                  <div className="card-icon">⭐</div>
                  <div className="card-content">
                    <h4>Average Rating</h4>
                    <p className="card-value">0.0</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="recent-activity">
              <h3>Recent Activity</h3>
              <div className="activity-list">
                <p className="empty-state">No recent activity. Start your journey by exploring internships!</p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;

