import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./AdminNavBar";
import Dashboard from "./AdminDashBoard";
import Reports from "./AdminReports";
import Profile from "./AdminProfile";

function AdminApp() {
  return (
    <div className="flex">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
}

export default AdminApp;
