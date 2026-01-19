import React from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <DashboardSidebar />

      <main className="dashboard-main">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
          <div className="header-actions">
            <button className="icon-btn">☀️</button>
            <button className="icon-btn">🔔</button>
            <div className="user-profile-icon">👤</div>
          </div>
        </div>

        <div className="dashboard-content">
          <div className="welcome-section">
            <div className="user-avatar-large">👤</div>
            <div className="welcome-text">
              <h2>Welcome, alishba iqbal!</h2>
              <p>Ready to track your progress today?</p>
            </div>
          </div>

          <div className="dashboard-grid">
            <div className="dashboard-left">
              <div className="progress-overview">
                <h3>Progress Overview</h3>
                <div className="progress-chart">
                  <svg viewBox="0 0 600 200" className="chart-svg">
                    <defs>
                      <linearGradient id="gridGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#2d2d2d" />
                        <stop offset="100%" stopColor="#1a1a1a" />
                      </linearGradient>
                    </defs>
                    <rect width="600" height="200" fill="url(#gridGradient)" />
                    <line x1="50" y1="10" x2="50" y2="190" stroke="#444" strokeWidth="1" />
                    <line x1="50" y1="190" x2="550" y2="190" stroke="#444" strokeWidth="1" />
                    {[0, 1, 2, 3, 4].map((val, i) => (
                      <line key={i} x1="50" y1={190 - (val * 45)} x2="550" y2={190 - (val * 45)} stroke="#333" strokeWidth="0.5" />
                    ))}
                    {['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'].map((month, i) => (
                      <text key={i} x={100 + (i * 80)} y={205} fill="#999" fontSize="12" textAnchor="middle">{month}</text>
                    ))}
                    {[0, 1, 2, 3, 4].map((val, i) => (
                      <text key={i} x="35" y={195 - (val * 45)} fill="#999" fontSize="12" textAnchor="end">{val}</text>
                    ))}
                    <polyline
                      points="100,190 180,190 260,190 340,190 420,190 500,190"
                      fill="none"
                      stroke="#00FF00"
                      strokeWidth="2"
                    />
                    <circle cx="500" cy="190" r="4" fill="#00FF00" />
                    <g className="tooltip-group">
                      <rect x="450" y="140" width="100" height="50" fill="#1a1a1a" stroke="#00FF00" strokeWidth="1" rx="4" />
                      <text x="500" y="155" fill="#00FF00" fontSize="12" textAnchor="middle" fontWeight="bold">Dec</text>
                      <text x="500" y="170" fill="#00FF00" fontSize="10" textAnchor="middle">Tasks : 0</text>
                      <text x="500" y="182" fill="#00FF00" fontSize="10" textAnchor="middle">Badges : 0</text>
                      <text x="500" y="194" fill="#00FF00" fontSize="10" textAnchor="middle">Interviews : 0</text>
                    </g>
                  </svg>
                </div>
              </div>

              <div className="achievements-section">
                <h3>Your Achievements</h3>
                <button className="btn-view-all">View All Badges</button>
              </div>

              <div className="tasks-section">
                <h3>Tasks</h3>
                <p className="section-subtitle">Keep track of your progress and deadlines.</p>
                <div className="tasks-list">
                  <div className="task-item">
                    <span className="task-title">Chatbot powered by OpenAI API or Gemini</span>
                    <span className="task-tag assigned">Assigned</span>
                  </div>
                  <div className="task-item">
                    <span className="task-title">Random Quote Generator 🎉</span>
                    <span className="task-tag assigned">Assigned</span>
                  </div>
                  <div className="task-item">
                    <span className="task-title">Notes App (Like Google Keep) 📝</span>
                    <span className="task-tag assigned">Assigned</span>
                  </div>
                  <div className="task-item">
                    <span className="task-title">E-Commerce Platform</span>
                    <span className="task-tag assigned">Assigned</span>
                  </div>
                </div>
                <button className="btn-task-portal">Task Portal</button>
              </div>
            </div>

            <div className="dashboard-right">
              <div className="mock-interviews-section">
                <h3 className="section-title-green">Mock Interviews</h3>
                <div className="mock-interview-stats">
                  <div className="stat-number">1</div>
                  <div className="stat-label">Total Completed</div>
                </div>
                <div className="latest-interview">
                  <h4>LATEST INTERVIEW</h4>
                  <div className="interview-details">
                    <p><strong>Name:</strong> Frontend Frameworks</p>
                    <p><strong>Date:</strong> 04-01-2026</p>
                    <p><strong>Time:</strong> 00:00:00</p>
                    <p><strong>Rating:</strong> 0/5</p>
                  </div>
                  <div className="interview-actions">
                    <button className="btn-re-attempt">Re-Attempt</button>
                    <button className="btn-show-all">Show All Interviews</button>
                  </div>
                </div>
              </div>

              <div className="ongoing-internship">
                <h3>
                  <span className="check-icon">✓</span>
                  Ongoing Internship
                </h3>
                <div className="internship-name">React Internship</div>
                <div className="internship-days">
                  <span className="calendar-icon">📅</span>
                  <span>43 days remaining</span>
                </div>
                <div className="task-completion">
                  <div className="completion-label">Task Completion</div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: '5%' }}></div>
                  </div>
                </div>
              </div>

              <div className="completed-internships">
                <h3>
                  <span className="check-icon">✓</span>
                  Completed Internships
                </h3>
                <p className="empty-message">No completed internships yet.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
