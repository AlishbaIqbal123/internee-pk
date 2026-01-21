import React, { useState } from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardHeaderActions from '../components/DashboardHeaderActions';
import './Assignments.css';

const Assignments = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [formData, setFormData] = useState({
    linkedinUrl: '',
    githubUrl: '',
    deploymentUrl: ''
  });

  const assignments = [
    {
      id: 1,
      title: 'Redesign internee.pk Website',
      status: 'Assigned'
    },
    {
      id: 2,
      title: 'Introduce Your self',
      status: 'Assigned'
    },
    {
      id: 3,
      title: 'AI-Powered Chatbot',
      status: 'Assigned'
    },
    {
      id: 4,
      title: 'Chatbot powered by OpenAI API or Gemini',
      status: 'Assigned'
    },
    {
      id: 5,
      title: 'Random Quote Generator',
      status: 'Assigned'
    },
    {
      id: 6,
      title: 'Notes App (Like Google Keep)',
      status: 'Assigned'
    },
    {
      id: 7,
      title: 'E-Commerce Platform',
      status: 'Assigned'
    }
  ];

  const handleSubmit = (assignment) => {
    setSelectedAssignment(assignment);
    setShowModal(true);
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here
    alert('Assignment submitted successfully!');
    setShowModal(false);
    setFormData({ linkedinUrl: '', githubUrl: '', deploymentUrl: '' });
  };

  const completedCount = 0;
  const totalCount = assignments.length;

  return (
    <div className="assignments-page">
      <DashboardSidebar />

      <main className="assignments-main">
        <div className="assignments-header">
          <h1>Dashboard</h1>
          <DashboardHeaderActions />
        </div>

        <div className="assignments-content">
          <div className="welcome-banner">
            <h2>Welcome, alishba iqbal!</h2>
            <p>Manage your assignments efficiently!</p>
          </div>

          <div className="progress-section">
            <h3>Your Progress</h3>
            <div className="progress-info">
              <span className="progress-text">{completedCount} / {totalCount} Assignments Completed</span>
              <div className="progress-bar-container">
                <div className="progress-bar-fill" style={{ width: '0%' }}></div>
              </div>
              <span className="progress-percentage">0% Complete</span>
            </div>
          </div>

          <div className="assignments-section">
            <h3 className="section-title-green">Your Assignments</h3>
            <div className="assignments-table">
              <div className="table-header">
                <div className="table-col">#</div>
                <div className="table-col">Title</div>
                <div className="table-col">Status</div>
                <div className="table-col">Action</div>
              </div>
              {assignments.map((assignment) => (
                <div key={assignment.id} className="table-row">
                  <div className="table-col">{assignment.id}</div>
                  <div className="table-col">{assignment.title}</div>
                  <div className="table-col">
                    <span className="status-badge assigned">{assignment.status}</span>
                  </div>
                  <div className="table-col">
                    <button 
                      className="btn-submit"
                      onClick={() => handleSubmit(assignment)}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">Submit Assignment</h2>
            <p className="modal-instruction">Ensure all fields are correctly filled before submitting.</p>
            
            <div className="assignment-details">
              <h3>Assignment {selectedAssignment?.id}</h3>
              <h4>{selectedAssignment?.title}</h4>
              <h4>Frontend Development Tasks</h4>
              
              <div className="task-list">
                <div className="task-item-detail">
                  <strong>1. Responsive Design & UI</strong>
                  <p>Develop the frontend using React, ensuring a fully responsive design for various devices and screen sizes.</p>
                  <p>Design a user-friendly navigation menu that adapts seamlessly across different devices.</p>
                </div>
                
                <div className="task-item-detail">
                  <strong>2. Interactive & Dynamic UI</strong>
                  <p>Create interactive and dynamic user interfaces using React components.</p>
                  <p>Implement animations and transitions to enhance user engagement and interactivity.</p>
                  <p>Integrate React components for features like contact forms, modals, and dynamic content loading.</p>
                </div>
                
                <div className="task-item-detail">
                  <strong>3. State Management</strong>
                  <p>Implement state management using React hooks (useState, useEffect) or Context API.</p>
                  <p>Handle form inputs, user interactions, and data flow efficiently.</p>
                </div>
                
                <div className="task-item-detail">
                  <strong>4. Testing & Quality Assurance</strong>
                  <p>Conduct thorough testing of React components to identify and fix issues.</p>
                </div>
                
                <div className="task-item-detail">
                  <strong>5. Documentation & Maintenance</strong>
                  <p>Provide documentation for React component development and usage if needed.</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleModalSubmit} className="submit-form">
              <div className="form-group">
                <label>LinkedIn Post URL:</label>
                <input
                  type="url"
                  placeholder="Enter LinkedIn post URL"
                  value={formData.linkedinUrl}
                  onChange={(e) => setFormData({...formData, linkedinUrl: e.target.value})}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>GitHub Repository URL:</label>
                <input
                  type="url"
                  placeholder="Enter GitHub repo URL"
                  value={formData.githubUrl}
                  onChange={(e) => setFormData({...formData, githubUrl: e.target.value})}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Live Deployment URL (Optional):</label>
                <input
                  type="url"
                  placeholder="Enter live deployment URL"
                  value={formData.deploymentUrl}
                  onChange={(e) => setFormData({...formData, deploymentUrl: e.target.value})}
                />
              </div>

              <div className="modal-actions">
                <button type="button" className="btn-cancel" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn-submit-modal">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Assignments;

