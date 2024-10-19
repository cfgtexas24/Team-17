import React from 'react';

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
        <div style={styles.container}>
            <h1 style={styles.heading}>Dashboard</h1>
            <p style={styles.paragraph}>Welcome to the dashboard.</p>
        </div>
    );
};

export default Dashboard;
