import React, { useMemo, useRef, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardHeaderActions from '../components/DashboardHeaderActions';
import './Dashboard.css';

const Dashboard = () => {
  const [activeMonthIndex, setActiveMonthIndex] = useState(4); // Dec
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const svgRef = useRef(null);

  // Mock user tasks data - in real app, this would come from API
  const userTasks = [
    { id: 1, title: 'Chatbot powered by OpenAI API or Gemini', status: 'assigned' },
    { id: 2, title: 'Random Quote Generator', status: 'assigned' },
    { id: 3, title: 'Notes App (Like Google Keep)', status: 'assigned' },
    { id: 4, title: 'E-Commerce Platform', status: 'assigned' }
  ];

  // Check if user has completed any tasks
  const hasCompletedTasks = userTasks.some(task => task.status === 'completed');
  const completedTasksCount = userTasks.filter(task => task.status === 'completed').length;
  const totalTasks = userTasks.length;

  const progressData = useMemo(
    () => {
      // Only show graph if user has completed tasks
      if (!hasCompletedTasks || completedTasksCount === 0) {
        return [];
      }
      
      // Generate realistic progress data based on completed tasks
      const months = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'];
      const currentMonthIndex = new Date().getMonth();
      const startMonthIndex = Math.max(0, currentMonthIndex - 5);
      
      return months.slice(startMonthIndex, startMonthIndex + 6).map((month, index) => {
        // Distribute completed tasks across months
        const tasksInMonth = index < completedTasksCount ? Math.floor(completedTasksCount / 6) + (index < completedTasksCount % 6 ? 1 : 0) : 0;
        const badgesInMonth = Math.floor(tasksInMonth / 2);
        const interviewsInMonth = Math.floor(tasksInMonth / 3);
        
        return {
          label: month,
          tasks: Math.min(tasksInMonth, 5),
          badges: Math.min(badgesInMonth, 5),
          interviews: Math.min(interviewsInMonth, 5)
        };
      });
    },
    [hasCompletedTasks, completedTasksCount]
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

  const polylinePoints = progressData.length > 0
    ? progressData
        .map((item, index) => {
          const { x, y } = getPointForIndex(index, item.tasks);
          return `${x},${y}`;
        })
        .join(' ')
    : '';

  const activePoint = progressData.length > 0 && activeMonthIndex < progressData.length
    ? getPointForIndex(activeMonthIndex, progressData[activeMonthIndex].tasks)
    : { x: 0, y: 0 };
  const activeMonth = progressData.length > 0 && activeMonthIndex < progressData.length
    ? progressData[activeMonthIndex]
    : { label: '', tasks: 0, badges: 0, interviews: 0 };

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
    if (progressData.length === 0) return;
    
    const rel = getSvgRelativePoint(e.clientX, e.clientY);
    if (!rel) return;
    
    const { nearestIndex, nearestDist } = findNearestPointIndex(rel.x);
    if (nearestIndex >= progressData.length) return;
    
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
          <DashboardHeaderActions />
        </div>

        <div className="dashboard-content">
          <div className="welcome-section">
            <div className="user-avatar-large">
              <FaUser />
            </div>
            <div className="welcome-text">
              <h2>Welcome, alishba iqbal!</h2>
              <p>Ready to track your progress today?</p>
            </div>
          </div>

          <div className="dashboard-grid">
            <div className="dashboard-left">
              <div className="progress-overview">
                <h3>Progress Overview</h3>
                {progressData.length > 0 ? (
                <div className="progress-chart">
                  <svg
                    ref={svgRef}
                    viewBox={`0 0 ${chartConfig.width} ${chartConfig.height}`}
                    className="chart-svg"
                    preserveAspectRatio="xMidYMid meet"
                    onMouseMove={handleChartMouseMove}
                    onMouseLeave={handleChartMouseLeave}
                    style={{ overflow: 'visible' }}
                  >
                    <defs>
                      <linearGradient id="gridGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#2d2d2d" />
                        <stop offset="100%" stopColor="#1a1a1a" />
                      </linearGradient>
                      <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgb(0, 204, 0)" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="rgb(0, 204, 0)" stopOpacity="0.05" />
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
                      stroke="var(--color-primary)" 
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
                            fill={isActive ? 'var(--color-primary)' : '#ffffff'}
                            stroke="var(--color-primary)"
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
                    {isTooltipVisible && progressData.length > 0 && (
                      <g className="tooltip-group">
                        <defs>
                          <filter id="tooltip-shadow" x="-50%" y="-50%" width="200%" height="200%">
                            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="rgb(0, 204, 0)" floodOpacity="0.4"/>
                          </filter>
                        </defs>
                        <g transform={`translate(${Math.max(70, Math.min(activePoint.x, chartConfig.width - 70))}, ${Math.max(95, Math.min(activePoint.y - 10, chartConfig.height - 20))})`}>
                          {/* Tooltip background - larger to prevent cutoff */}
                        <rect
                          x="-75"
                          y="-90"
                          width="150"
                          height="80"
                          fill="#1a1a1a"
                          stroke="var(--color-primary)"
                          strokeWidth="2"
                          rx="8"
                          filter="url(#tooltip-shadow)"
                        />
                        {/* Tooltip arrow */}
                        <polygon
                          points="0,0 -10,-10 10,-10"
                          fill="var(--color-primary)"
                        />
                        {/* Tooltip content */}
                        <text
                          x="0"
                          y="-65"
                          fill="var(--color-primary)"
                          fontSize="13"
                          textAnchor="middle"
                          fontWeight="700"
                        >
                          {activeMonth.label}
                        </text>
                          <text x="-55" y="-45" fill="#ffffff" fontSize="11" textAnchor="start" fontWeight="600">
                            Tasks:
                          </text>
                          <text x="55" y="-45" fill="var(--color-primary)" fontSize="11" textAnchor="end" fontWeight="700">
                            {activeMonth.tasks}
                          </text>
                          <text x="-55" y="-30" fill="#ffffff" fontSize="11" textAnchor="start" fontWeight="600">
                            Badges:
                          </text>
                          <text x="55" y="-30" fill="var(--color-primary)" fontSize="11" textAnchor="end" fontWeight="700">
                            {activeMonth.badges}
                          </text>
                          <text x="-55" y="-15" fill="#ffffff" fontSize="11" textAnchor="start" fontWeight="600">
                            Interviews:
                          </text>
                          <text x="55" y="-15" fill="var(--color-primary)" fontSize="11" textAnchor="end" fontWeight="700">
                            {activeMonth.interviews}
                          </text>
                        </g>
                      </g>
                    )}
                  </svg>
                </div>
                ) : (
                  <div className="no-data-message">
                    <p>No progress data available yet. Complete tasks to see your progress!</p>
                  </div>
                )}
              </div>

              <div className="achievements-section">
                <h3>Your Achievements</h3>
                <button className="btn-view-all">View All Badges</button>
              </div>

              <div className="tasks-section">
                <h3>Tasks</h3>
                <p className="section-subtitle">Keep track of your progress and deadlines.</p>
                <div className="tasks-list">
                  {userTasks.length === 0 ? (
                    <div className="no-tasks-message">
                      <p>No tasks assigned yet. Check back later!</p>
                    </div>
                  ) : (
                    userTasks.map((task) => (
                      <div key={task.id} className="task-item">
                        <span className="task-title">{task.title}</span>
                        <span className={`task-tag ${task.status}`}>
                          {task.status === 'completed' ? 'Completed' : 'Assigned'}
                        </span>
                      </div>
                    ))
                  )}
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
