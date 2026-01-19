import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Assignments from './pages/Assignments';
import Certificate from './pages/Certificate';
import Internship from './pages/Internship';
import JobPortal from './pages/JobPortal';
import GraduateProgram from './pages/GraduateProgram';
import StudentAmbassador from './pages/StudentAmbassador';
import MockInterviewDashboard from './pages/MockInterviewDashboard';
import MockInterviewBadges from './pages/MockInterviewBadges';
import CertifiedInterviews from './pages/CertifiedInterviews';
import Roadmap from './pages/Roadmap';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/assignments" element={<Assignments />} />
          <Route path="/dashboard/certificate" element={<Certificate />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/jobs/public" element={<JobPortal />} />
          <Route path="/graduateprogram" element={<GraduateProgram />} />
          <Route path="/studentambassadors" element={<StudentAmbassador />} />
          <Route path="/aimock/dashboard" element={<MockInterviewDashboard />} />
          <Route path="/aimock/dashboard/badges" element={<MockInterviewBadges />} />
          <Route path="/aimock/dashboard/interviews" element={<MockInterviewDashboard />} />
          <Route path="/aimock/dashboard/certified/interviews" element={<CertifiedInterviews />} />
          <Route path="/aimock/dashboard/roadmaps" element={<Roadmap />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
