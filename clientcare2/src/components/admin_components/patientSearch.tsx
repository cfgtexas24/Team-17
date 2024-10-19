import React, { useState } from 'react';

// Define types for patient info and medical records
interface MedicalRecord {
  date: string;
  diagnosis: string;
  treatment: string;
}

interface PatientInfo {
  id: number;
  name: string;
  age: number;
  gender: string;
  contact: string;
  address: string;
  medicalRecords: MedicalRecord[];
}

// Mocked patient data (replace this with data from your backend/API)
const patients: PatientInfo[] = [
  {
    id: 1,
    name: 'John Doe',
    age: 45,
    gender: 'Male',
    contact: '555-1234',
    address: '123 Main St, Springfield, USA',
    medicalRecords: [
      { date: '2024-09-10', diagnosis: 'Hypertension', treatment: 'Medication' },
    ],
  },
  {
    id: 2,
    name: 'Jane Doe',
    age: 34,
    gender: 'Female',
    contact: '555-9876',
    address: '456 Maple St, Springfield, USA',
    medicalRecords: [
      { date: '2024-08-20', diagnosis: 'Allergy', treatment: 'Antihistamines' },
    ],
  },
  // Add more patient objects
];

const PatientSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [searchField, setSearchField] = useState<string>('name');
  const [filteredPatients, setFilteredPatients] = useState<PatientInfo[]>(patients);

  // Handler for input changes in search bar
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  // Handler for filter selection (dropdown)
  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchField(event.target.value);
  };

  // Search functionality
  const filterPatients = () => {
    let filtered = patients;

    if (searchTerm.trim() !== '') {
      filtered = patients.filter((patient) => {
        if (searchField === 'name') {
          return patient.name.toLowerCase().includes(searchTerm.toLowerCase());
        } else if (searchField === 'age') {
          return patient.age.toString().includes(searchTerm);
        } else if (searchField === 'medicalRecords') {
          return patient.medicalRecords.some((record) =>
            record.diagnosis.toLowerCase().includes(searchTerm.toLowerCase())
          );
        }
        return false;
      });
    }

    setFilteredPatients(filtered);
  };

  // Update the list whenever searchTerm or searchField changes
  React.useEffect(() => {
    filterPatients();
  }, [searchTerm, searchField]);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Patient Search</h1>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search patients"
        value={searchTerm}
        onChange={handleSearch}
        style={{
          marginRight: '10px',
          padding: '5px',
          backgroundColor: 'white', // Set input background to white
          border: '1px solid #ccc',
          borderRadius: '4px'
        }}
      />

      {/* Dropdown to select the field to filter by */}
      <select
        value={searchField}
        onChange={handleFilterChange}
        style={{ padding: '5px', borderRadius: '4px', backgroundColor: 'white' }}
      >
        <option value="name">Name</option>
        <option value="age">Age</option>
        <option value="medicalRecords">Medical Records</option>
      </select>

      <div style={{ marginTop: '20px' }}>
        <h2>Filtered Patients</h2>
        {filteredPatients.length > 0 ? (
          filteredPatients.map((patient) => (
            <div key={patient.id} style={{ borderBottom: '1px solid #ccc', marginBottom: '10px', paddingBottom: '10px' }}>
              <p><strong>Name:</strong> {patient.name}</p>
              <p><strong>Age:</strong> {patient.age}</p>
              <p><strong>Gender:</strong> {patient.gender}</p>
              <p><strong>Contact:</strong> {patient.contact}</p>
              <p><strong>Address:</strong> {patient.address}</p>
              <h3>Medical Records:</h3>
              {patient.medicalRecords.map((record, index) => (
                <div key={index}>
                  <p><strong>Date:</strong> {record.date}</p>
                  <p><strong>Diagnosis:</strong> {record.diagnosis}</p>
                  <p><strong>Treatment:</strong> {record.treatment}</p>
                </div>
              ))}
            </div>
          ))
        ) : (
          <p>No patients found matching the criteria.</p>
        )}
      </div>
    </div>
  );
};

export default PatientSearch;