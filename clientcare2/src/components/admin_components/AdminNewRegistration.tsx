import React, { useState } from 'react';
import PatientChart from '../../backend/dashboard/PatientChart';
import AddPatientForm from '../../backend/dashboard/AddPatientForm';
import { Patient } from '../../backend/dashboard/interfaces';
import "./AdminNewRegistration.css" 


const AdminNewRegistration: React.FC = () => {
    const [patients, setPatients] = useState<Patient[]>([]); // State to hold patient data
    const [showChart, setShowChart] = useState(false); // State to control chart visibility
    const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null); // State for the selected patient

    const handleAddPatient = (newPatient: Patient) => {
        // Update the patients state with the new patient
        setPatients(prevPatients => [...prevPatients, newPatient]);
    };

    const handleShowChart = (patient: Patient) => {
        setSelectedPatient(patient); // Set the selected patient
        setShowChart(true); // Show the chart
    };

    const handleHideChart = () => {
        setShowChart(false); 
        setSelectedPatient(null); 
    };

    return (
        <div>
            <h1  className= 'custom-h1'>Patient Management</h1>
            <p>Welcome to patient management.</p>
            
            <AddPatientForm onAddPatient={handleAddPatient} />

            
            <h2>Patients</h2>
            <ul>
                {patients.map(patient => (
                    <li key={patient.name} onClick={() => handleShowChart(patient)}>
                        {patient.name}
                    </li>
                ))}
            </ul>

            
            {showChart && (
                <div>
                    <PatientChart patient={selectedPatient} onHide={handleHideChart} />
                    <button  onClick={handleHideChart}>Hide Patient Chart</button>
                </div>
            )}
        </div>
    );
};

export default AdminNewRegistration;

