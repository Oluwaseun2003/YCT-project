import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './page/LoginPage';
import Dashboard from './page/Dashboard';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        
        {loggedIn ? (
          <Route path="/dashboard" element={<Dashboard setLoggedIn={setLoggedIn} />} /> 
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}
        
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
