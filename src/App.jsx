import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Internship from './pages/Internship';
import JobPortal from './pages/JobPortal';
import GraduateProgram from './pages/GraduateProgram';
import StudentAmbassador from './pages/StudentAmbassador';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/jobs/public" element={<JobPortal />} />
          <Route path="/graduateprogram" element={<GraduateProgram />} />
          <Route path="/studentambassadors" element={<StudentAmbassador />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
