import React from 'react';
import './AdminDashboard.css';

const Dashboard = () => {
  return (
    <div className="h-screen w-full bg-gray-200 p-4 font-mono">
      <header className="bg-blue-600 text-white p-2 mb-4 border-4 border-white shadow-lg">
        <h1 className="text-2xl font-bold text-center">Client Care 2000</h1>
      </header>
      
      <div className="grid grid-cols-2 gap-4">
        <DashboardWidget title="Active Clients" value="42" icon="👥" />
        <DashboardWidget title="Pending Tasks" value="7" icon="📋" />
        <DashboardWidget title="Revenue" value="$12,345" icon="💰" />
        <DashboardWidget title="Satisfaction" value="98%" icon="😊" />
      </div>
      
      <footer className="mt-4 text-center text-sm text-gray-600">
        © zlang 
      </footer>
    </div>
  );
};

const DashboardWidget = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-4 border-2 border-gray-400 shadow-inner">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-bold">{title}</h2>
        <span className="text-2xl">{icon}</span>
      </div>
      <div className="text-3xl font-bold text-blue-600">{value}</div>
    </div>
  );
};

export default Dashboard;