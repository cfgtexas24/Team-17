import React from 'react';
import './PatientDashboard.css';
import PatientIcon from '../../assets/PatientIcon.png';

const PatientDashboard = () => {
  return (
    <div className="dashboard-container" style={{ backgroundColor: '#3e6967'}}>
      {/* Left Side: Patient Information */}
      <div className="left-side">
        <div className="patient-icon">
        <img src={PatientIcon} alt="Patient Icon" />
          <h2>Last Name, First Name</h2>
        </div>
        <div className="patient-details">
          <div><strong>Patient ID Number:</strong> </div>
          <div><strong>Status:</strong> </div>
          <div><strong>Date of Birth:</strong> </div>
          <div><strong>Address:</strong> </div>
          <div><strong>Phone:</strong> </div>
          <div><strong>Email:</strong> </div>
        </div>
      </div>

      {/* Right Side: Dashboard Widgets */}
      <div className="right-side">
        <div className="top-left-box">
          <h3>Nutritional Resources</h3>
          {/* Add content here */}
        </div>
        <div className="top-right-box">
          <h3>Upcoming Appointment</h3>
          {/* Add content here */}
        </div>
        <div className="lab-results-box">
          <h3>Lab Results</h3>
          {/* Add content here */}
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;