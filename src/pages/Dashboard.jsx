import React, { useMemo, useRef, useState } from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import './Dashboard.css';

const Dashboard = () => {
  const [activeMonthIndex, setActiveMonthIndex] = useState(4); // Dec
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const svgRef = useRef(null);

  const progressData = useMemo(
    () => [
      { label: 'Aug', tasks: 2, badges: 1, interviews: 0 },
      { label: 'Sep', tasks: 3, badges: 2, interviews: 1 },
      { label: 'Oct', tasks: 4, badges: 3, interviews: 2 },
      { label: 'Nov', tasks: 3, badges: 2, interviews: 1 },
      { label: 'Dec', tasks: 4, badges: 3, interviews: 2 },
      { label: 'Jan', tasks: 2, badges: 1, interviews: 1 }
    ],
    []
  );

  const chartConfig = {
    width: 600,
    height: 220,
    leftPadding: 60,
    rightPadding: 40,
    bottomPadding: 30,
    topPadding: 20,
    maxY: 5
  };

  const getPointForIndex = (index, value) => {
    const { width, leftPadding, rightPadding, height, bottomPadding, topPadding, maxY } = chartConfig;
    const usableWidth = width - leftPadding - rightPadding;
    const xStep = usableWidth / (progressData.length - 1 || 1);
    const x = leftPadding + index * xStep;
    const usableHeight = height - topPadding - bottomPadding;
    const clampedValue = Math.max(0, Math.min(maxY, value));
    const y = height - bottomPadding - (usableHeight * clampedValue) / maxY;
    return { x, y };
  };

  const polylinePoints = progressData
    .map((item, index) => {
      const { x, y } = getPointForIndex(index, item.tasks);
      return `${x},${y}`;
    })
    .join(' ');

  const activePoint = getPointForIndex(activeMonthIndex, progressData[activeMonthIndex].tasks);
  const activeMonth = progressData[activeMonthIndex];

  const getSvgRelativePoint = (clientX, clientY) => {
    const svg = svgRef.current;
    if (!svg) return null;
    const rect = svg.getBoundingClientRect();
    const relX = ((clientX - rect.left) / rect.width) * chartConfig.width;
    const relY = ((clientY - rect.top) / rect.height) * chartConfig.height;
    return { x: relX, y: relY };
  };

  const findNearestPointIndex = (x) => {
    // Nearest by X (since data points are evenly spaced by month)
    let nearestIndex = 0;
    let nearestDist = Infinity;
    for (let i = 0; i < progressData.length; i += 1) {
      const p = getPointForIndex(i, progressData[i].tasks);
      const dist = Math.abs(p.x - x);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearestIndex = i;
      }
    }
    return { nearestIndex, nearestDist };
  };

  const handleChartMouseMove = (e) => {
    const rel = getSvgRelativePoint(e.clientX, e.clientY);
    if (!rel) return;
    
    const { nearestIndex, nearestDist } = findNearestPointIndex(rel.x);
    const p = getPointForIndex(nearestIndex, progressData[nearestIndex].tasks);
    const dy = Math.abs(p.y - rel.y);
    const threshold = 50; // Increased threshold for better UX

    if (nearestDist <= 50 && dy <= threshold) {
      setActiveMonthIndex(nearestIndex);
      setIsTooltipVisible(true);
    } else {
      setIsTooltipVisible(false);
    }
  };

  const handleChartMouseLeave = () => {
    setIsTooltipVisible(false);
  };

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
                  <svg
                    ref={svgRef}
                    viewBox={`0 0 ${chartConfig.width} ${chartConfig.height}`}
                    className="chart-svg"
                    preserveAspectRatio="xMidYMid meet"
                    onMouseMove={handleChartMouseMove}
                    onMouseLeave={handleChartMouseLeave}
                  >
                    <defs>
                      <linearGradient id="gridGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#2d2d2d" />
                        <stop offset="100%" stopColor="#1a1a1a" />
                      </linearGradient>
                      <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#00FF00" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#00FF00" stopOpacity="0.05" />
                      </linearGradient>
                    </defs>
                    <rect width={chartConfig.width} height={chartConfig.height} fill="url(#gridGradient)" rx="8" />
                    <line
                      x1={chartConfig.leftPadding}
                      y1={chartConfig.topPadding}
                      x2={chartConfig.leftPadding}
                      y2={chartConfig.height - chartConfig.bottomPadding}
                      stroke="#444"
                      strokeWidth="1"
                    />
                    <line
                      x1={chartConfig.leftPadding}
                      y1={chartConfig.height - chartConfig.bottomPadding}
                      x2={chartConfig.width - chartConfig.rightPadding}
                      y2={chartConfig.height - chartConfig.bottomPadding}
                      stroke="#444"
                      strokeWidth="1"
                    />
                    {[0, 1, 2, 3, 4, 5].map((val) => {
                      const { y } = getPointForIndex(0, val);
                      return (
                        <line
                          key={val}
                          x1={chartConfig.leftPadding}
                          y1={y}
                          x2={chartConfig.width - chartConfig.rightPadding}
                          y2={y}
                          stroke="#333"
                          strokeWidth="0.5"
                          strokeDasharray="2,2"
                        />
                      );
                    })}
                    {progressData.map((item, index) => {
                      const { x } = getPointForIndex(index, 0);
                      return (
                        <text
                          key={item.label}
                          x={x}
                          y={chartConfig.height - 8}
                          fill="#999"
                          fontSize="11"
                          textAnchor="middle"
                          fontWeight="500"
                        >
                          {item.label}
                        </text>
                      );
                    })}
                    {[0, 1, 2, 3, 4, 5].map((val) => {
                      const { y } = getPointForIndex(0, val);
                      return (
                        <text
                          key={val}
                          x={chartConfig.leftPadding - 15}
                          y={y + 4}
                          fill="#999"
                          fontSize="11"
                          textAnchor="end"
                          fontWeight="500"
                        >
                          {val}
                        </text>
                      );
                    })}
                    {/* Area fill under the line */}
                    <polygon
                      points={`${chartConfig.leftPadding},${chartConfig.height - chartConfig.bottomPadding} ${polylinePoints} ${chartConfig.width - chartConfig.rightPadding},${chartConfig.height - chartConfig.bottomPadding}`}
                      fill="url(#areaGradient)"
                      opacity="0.3"
                    />
                    {/* Main line */}
                    <polyline 
                      points={polylinePoints} 
                      fill="none" 
                      stroke="#00FF00" 
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Data points */}
                    {progressData.map((item, index) => {
                      const { x, y } = getPointForIndex(index, item.tasks);
                      const isActive = index === activeMonthIndex && isTooltipVisible;
                      return (
                        <g key={item.label}>
                          {/* Hover area for better interaction */}
                          <circle
                            cx={x}
                            cy={y}
                            r={isActive ? 8 : 6}
                            fill="transparent"
                            stroke="none"
                            style={{ cursor: 'pointer' }}
                            onMouseEnter={() => {
                              setActiveMonthIndex(index);
                              setIsTooltipVisible(true);
                            }}
                          />
                          {/* Actual data point */}
                          <circle
                            cx={x}
                            cy={y}
                            r={isActive ? 6 : 4}
                            fill={isActive ? '#00FF00' : '#ffffff'}
                            stroke="#00FF00"
                            strokeWidth={isActive ? '3' : '2'}
                          />
                          {/* Inner dot for active point */}
                          {isActive && (
                            <circle
                              cx={x}
                              cy={y}
                              r={2}
                              fill="#1a1a1a"
                            />
                          )}
                        </g>
                      );
                    })}
                    {/* Tooltip */}
                    {isTooltipVisible && (
                      <g className="tooltip-group" transform={`translate(${activePoint.x}, ${activePoint.y})`}>
                        {/* Tooltip background */}
                        <rect
                          x="-70"
                          y="-85"
                          width="140"
                          height="75"
                          fill="#1a1a1a"
                          stroke="#00FF00"
                          strokeWidth="2"
                          rx="8"
                          filter="drop-shadow(0 4px 12px rgba(0, 255, 0, 0.3))"
                        />
                        {/* Tooltip arrow */}
                        <polygon
                          points="0,0 -8,-8 8,-8"
                          fill="#00FF00"
                        />
                        {/* Tooltip content */}
                        <text
                          x="0"
                          y="-60"
                          fill="#00FF00"
                          fontSize="13"
                          textAnchor="middle"
                          fontWeight="700"
                        >
                          {activeMonth.label}
                        </text>
                        <text x="-50" y="-40" fill="#ffffff" fontSize="11" textAnchor="start" fontWeight="600">
                          Tasks:
                        </text>
                        <text x="50" y="-40" fill="#00FF00" fontSize="11" textAnchor="end" fontWeight="700">
                          {activeMonth.tasks}
                        </text>
                        <text x="-50" y="-25" fill="#ffffff" fontSize="11" textAnchor="start" fontWeight="600">
                          Badges:
                        </text>
                        <text x="50" y="-25" fill="#00FF00" fontSize="11" textAnchor="end" fontWeight="700">
                          {activeMonth.badges}
                        </text>
                        <text x="-50" y="-10" fill="#ffffff" fontSize="11" textAnchor="start" fontWeight="600">
                          Interviews:
                        </text>
                        <text x="50" y="-10" fill="#00FF00" fontSize="11" textAnchor="end" fontWeight="700">
                          {activeMonth.interviews}
                        </text>
                      </g>
                    )}
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
