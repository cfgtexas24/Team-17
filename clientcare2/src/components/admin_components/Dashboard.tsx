import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
      <div className="container">
        {/* Left side for Patient Information */}
        <div className="left-side">
          {/* Icon and Name */}
          <div className="patient-icon">
            <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fen%2Fpng-dptgb&psig=AOvVaw07UROyKwLXEDSuMR_0cVIc&ust=1729409634735000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLCNpI73mYkDFQAAAAAdAAAAABAE" alt="Patient Icon" />
            <h2>Last Name, First Name</h2>
          </div>
  
          {/* Patient details */}
          <div className="patient-details">
            <div><strong>Patient ID Number:</strong> </div>

            <div><strong>Status:</strong> </div>

            <div><strong>Date of Birth:</strong> </div>

            <div><strong>Address:</strong> </div>

            <div><strong>Phone:</strong> </div>

            <div><strong>Email:</strong> </div>

          </div>
        </div>
  
        {/* Right side with 4 boxes */}
        <div className="right-side">
          <div className="info-box">Client Summary</div>
          <div className="info-box">Lab Reports</div>
          <div className="info-box">Medical Records</div>
          <div className="info-box">Attendance History</div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;