import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './page/LoginPage';
import Dashboard from './page/Dashboard';
import BioData from './components/BioData';
import Advisor from './components/Advisor';
import Payments from './components/Payments';
import CourseRegistration from './components/CourseRegistration';
import Examination from './components/Examination';
import HostelManagement from './components/HostelManagement';
import ResultChecker from './components/ResultChecker';
import Settings from './components/Settings';
import EditBioData from './components/EditBioData';
import AdvisorChat from './components/AdvisorChat';
import ExamAllocation from './components/ExamAllocation';

const App = () => {
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />

        {loggedIn ? (
          <Route path="/dashboard" element={<Dashboard setLoggedIn={setLoggedIn} />} />
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}

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
      </Routes>
    </Router>
  );
};

export default App;
