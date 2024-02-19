import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './page/LoginPage';
import Dashboard from './page/Dashboard';
import AdminDashboard from './page/AdminDashboard';
import BioData from './page/BioData';
import Advisor from './page/Advisor';
import Payments from './page/Payments';
import CourseRegistration from './page/CourseRegistration';
import Examination from './page/Examination';
import HostelManagement from './page/HostelManagement';
import ResultChecker from './page/ResultChecker';
import Settings from './page/Settings';
import EditBioData from './page/EditBioData';
import AdvisorChat from './page/AdvisorChat';
import ExamAllocation from './page/ExamAllocation';
import GPAGuardian from './page/GPAGuardian';
import ClassAdvisor from './page/ClassAdvisor';
import AcademicCalendar from './page/AcademicCalendar';
import Results from './page/Results';

const App = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [selectedRole, setSelectedRole] = React.useState("student");

  return (
    <Router>
      <Routes>
      <Route path="/login" element={(<Login setLoggedIn={setLoggedIn} setSelectedRole={setSelectedRole} />)} />

        {loggedIn && selectedRole === "student" ? (
          <Route path="/student-dashboard" element={<Dashboard setLoggedIn={setLoggedIn} />} />
        ) : loggedIn && selectedRole === "admin" ? (
          <Route path="/admin-dashboard" element={<AdminDashboard setLoggedIn={setLoggedIn} />} />
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}

<Route path="/admin-dashboard" element={<AdminDashboard setLoggedIn={setLoggedIn} />} />
        <Route path="/bio-data" element={<BioData />} />
        <Route path="/advisor" element={<Advisor />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/course-registration" element={<CourseRegistration />} />
        <Route path="/examination" element={<Examination />} />
        <Route path="/hostel-management" element={<HostelManagement />} />
        <Route path="/result-checker" element={<ResultChecker />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/edit-biodata" element={<EditBioData />} />
        <Route path="/advisor-chatbot" element={<AdvisorChat />} />
        <Route path="/exam-allocation" element={<ExamAllocation />} />
        <Route path="/gpa-guardian" element={<GPAGuardian />} />
        <Route path="/class-advisor" element={<ClassAdvisor />} />
        <Route path="/academic-calendar" element={<AcademicCalendar />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
};

export default App;
