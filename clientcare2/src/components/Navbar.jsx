import React from 'react';
import { Link } from 'react-router-dom';
import { FaChartBar, FaClipboardList, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    // Side navigation container
    <nav className="fixed top-0 right-0 h-full w-16 bg-gray-800 flex flex-col items-center py-4">
      {/* Navigation buttons */}
      <NavButton to="/dashboard" icon={<FaChartBar size={24} />} tooltip="Dashboard" />
      <NavButton to="/reports" icon={<FaClipboardList size={24} />} tooltip="Reports" />
      <NavButton to="/profile" icon={<FaUserCircle size={24} />} tooltip="Profile" />
    </nav>
  );
};

// Reusable component for navigation buttons
const NavButton = ({ to, icon, tooltip }) => {
  return (
    <Link
      to={to}
      className="text-white hover:bg-gray-700 p-3 rounded-full mb-4 relative group"
    >
      {icon}
      <span className="absolute right-full mr-2 bg-gray-700 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {tooltip}
      </span>
    </Link>
  );
};

export default Navbar;