import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Assignments from './pages/Assignments';
import Certificate from './pages/Certificate';
import Internship from './pages/Internship';
import InternshipDetail from './pages/InternshipDetail';
import JobPortal from './pages/JobPortal';
import GraduateProgram from './pages/GraduateProgram';
import GraduateProgramDetail from './pages/GraduateProgramDetail';
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
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/assignments" element={<Assignments />} />
          <Route path="/dashboard/certificate" element={<Certificate />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/internship/:categoryId" element={<InternshipDetail />} />
          <Route path="/jobs/public" element={<JobPortal />} />
          <Route path="/graduateprogram" element={<GraduateProgram />} />
          <Route path="/graduateprogram/:categoryId" element={<GraduateProgramDetail />} />
          <Route path="/studentambassadors" element={<StudentAmbassador />} />
          <Route path="/aimock/dashboard" element={<MockInterviewDashboard />} />
          <Route path="/aimock/dashboard/badges" element={<MockInterviewBadges />} />
          <Route path="/aimock/dashboard/interviews" element={<CertifiedInterviews />} />
          <Route path="/aimock/dashboard/roadmaps" element={<Roadmap />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
