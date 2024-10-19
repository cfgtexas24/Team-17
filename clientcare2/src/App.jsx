import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AdminApp from './components/admin_components/AdminApp';
import UserHome from './components/user_components/UserHome';
// TODO: Import CustomerHome component when you have it

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<HomePage />} />
        
        {/* Admin routes */}
        <Route path="/admin/*" element={<AdminApp />} />
        
        {/* User routes */}
        <Route path="/user/*" element={<UserHome />} />
        
        {/* TODO: Add customer routes when you have the component */}
        {/* <Route path="/customer/*" element={<CustomerHome />} /> */}
      </Routes>
    </Router>
  );
};

export default App;