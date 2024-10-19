import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminHome = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Implement your logout functionality here, for now, we just navigate back to login
    navigate('/');
  };

  return (
    <div>
      {/* Import and display the Navbar */}

      <div className="admin-home-page">
        <h2 className='text-2xl font-bold mt-6'>Admin Home Page</h2>
        
        {/* Add more admin-specific functionality here */}
        <div className="admin-content mt-4">
          <p>Welcome, Admin! Here you can manage users, view reports, and handle administrative tasks.</p>
          
          {/* Add a Logout Button */}
          <button 
            className='logout-btn bg-red-500 text-white font-semibold p-2 mt-4 rounded-lg hover:bg-red-700'
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
