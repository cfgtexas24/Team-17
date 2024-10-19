import React from 'react';
import './Dashboard.css';
import PatientIcon from '../../assets/PatientIcon.png';

const Dashboard = () => {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start', /* Align items at the top */
            height: '100vh',
            backgroundColor: '#f5f5f5',
            fontFamily: 'Arial, sans-serif',
            padding: '20px',
            borderRadius: '10px',
            backgroundColor: 'white',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
            marginTop: '20px' /* Add a margin to push it slightly down from the top */
        },
        heading: {
            fontSize: '2.5rem',
            color: '#333',
            marginBottom: '10px',
            textTransform: 'uppercase',
            letterSpacing: '2px'
        },
        paragraph: {
            fontSize: '1.2rem',
            color: '#666',
            marginTop: '0'
        }
    };

    return (
      <div className="container">
        {/* Left side for Patient Information */}
        <div className="left-side">
          {/* Icon and Name */}
          <div className="patient-icon">
          <img src={PatientIcon} alt="Patient Icon" />
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