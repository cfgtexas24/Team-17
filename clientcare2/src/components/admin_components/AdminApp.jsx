import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { FaChartBar, FaClipboardList, FaUserCircle, FaHome } from 'react-icons/fa';

import Dashboard from "./AdminDashBoard";
import Reports from "./AdminReports";
import Profile from "./AdminProfile";

const SideNavButton = ({ to, icon, tooltip }) => {
  return (
    <Link
      to={to}
      className="text-white hover:bg-gray-700 p-3 rounded-full mb-4 relative group transition-colors duration-300"
    >
      {icon}
      <span className="absolute right-full mr-2 bg-gray-700 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {tooltip}
      </span>
    </Link>
  );
};

const Home = () => (
  <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg">
    <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">Phebe's Workstation</h1>
    <div className="space-y-6">
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">Dashboard</h2>
        <p className="text-gray-600">View key metrics and performance indicators at a glance analyze detailed reports on various aspects of the system.</p>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">Customize Forms</h2>
        <p className="text-gray-600">Generate Forms for the clients</p>
      </div>
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">Profile</h2>
        <p className="text-gray-600">Manage your account settings and personal information.</p>
      </div>
    </div>
  </div>
);

function AdminApp() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <main className="flex-grow flex items-center justify-center p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/forms" element={<Reports />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
      <nav className="bg-gray-800 flex flex-col items-center py-4 px-2 w-16">
        <SideNavButton to="/" icon={<FaHome size={24} />} tooltip="Home" />
        <SideNavButton to="/dashboard" icon={<FaChartBar size={24} />} tooltip="Dashboard" />
        <SideNavButton to="/forms" icon={<FaClipboardList size={24} />} tooltip="Forms" />
        <SideNavButton to="/profile" icon={<FaUserCircle size={24} />} tooltip="Profile" />
      </nav>
    </div>
  );
}

export default AdminApp;