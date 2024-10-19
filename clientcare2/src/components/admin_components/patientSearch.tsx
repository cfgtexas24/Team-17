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
    name: 'Sarah Doe',
    age: 32,
    gender: 'Female',
    contact: '555-1234',
    address: '123 Main St, Springfield, USA',
    medicalRecords: [
      { date: '2024-09-20', diagnosis: 'Monthly Check Up', treatment: 'Routine examination' },
    ],
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 28,
    gender: 'Female',
    contact: '555-9876',
    address: '456 Maple St, Springfield, USA',
    medicalRecords: [
      { date: '2024-09-20', diagnosis: 'Prenatal Check Up', treatment: 'Ultrasound and consultation' },
    ],
  },
  {
    id: 3,
    name: 'Sam Green',
    age: 30,
    gender: 'Female',
    contact: '555-5432',
    address: '789 Oak St, Springfield, USA',
    medicalRecords: [
      { date: '2024-09-21', diagnosis: 'Genetic Screening', treatment: 'Blood test and counseling' },
    ],
  },
  {
    id: 4,
    name: 'Emily White',
    age: 27,
    gender: 'Female',
    contact: '555-6789',
    address: '321 Pine St, Springfield, USA',
    medicalRecords: [
      { date: '2024-09-21', diagnosis: 'Ultrasound', treatment: 'Routine ultrasound check' },
    ],
  },
  {
    id: 5,
    name: 'Olivia Brown',
    age: 33,
    gender: 'Female',
    contact: '555-2468',
    address: '654 Elm St, Springfield, USA',
    medicalRecords: [
      { date: '2024-09-21', diagnosis: 'Gestational Diabetes Screening', treatment: 'Glucose tolerance test' },
    ],
  },
  {
    id: 6,
    name: 'Sophia Davis',
    age: 29,
    gender: 'Female',
    contact: '555-1357',
    address: '987 Cedar St, Springfield, USA',
    medicalRecords: [
      { date: '2024-09-22', diagnosis: 'Routine Pregnancy Check Up', treatment: 'Blood pressure check and consultation' },
    ],
  },
  {
    id: 7,
    name: 'Lily Johnson',
    age: 31,
    gender: 'Female',
    contact: '555-8642',
    address: '111 Birch St, Springfield, USA',
    medicalRecords: [
      { date: '2024-09-22', diagnosis: 'Fetal Growth Monitoring', treatment: 'Ultrasound and measurements' },
    ],
  },
  {
    id: 8,
    name: 'Ava Martinez',
    age: 26,
    gender: 'Female',
    contact: '555-9753',
    address: '222 Willow St, Springfield, USA',
    medicalRecords: [
      { date: '2024-09-23', diagnosis: 'Third Trimester Check Up', treatment: 'Routine examination and consultation' },
    ],
  },
  {
    id: 9,
    name: 'Ella Wilson',
    age: 35,
    gender: 'Female',
    contact: '555-8645',
    address: '333 Poplar St, Springfield, USA',
    medicalRecords: [
      { date: '2024-09-23', diagnosis: 'Labor and Delivery Planning', treatment: 'Discussion and planning for delivery' },
    ],
  },
  {
    id: 10,
    name: 'Mia Thomas',
    age: 30,
    gender: 'Female',
    contact: '555-1359',
    address: '444 Ash St, Springfield, USA',
    medicalRecords: [
      { date: '2024-09-24', diagnosis: 'Postpartum Follow Up', treatment: 'Health assessment and recovery plan' },
    ],
  },
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
    <div className="mt-4" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2 className='text-3xl mb-7 font-bold text-[#3a696e]'>Patient Search</h2>

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

      <div className="" style={{ marginTop: '20px' }}>
        <h2>Filtered Patients</h2>
        <div className='flex flex-col'>
          {filteredPatients.length > 0 ? (
            filteredPatients.map((patient) => (
              <div key={patient.id} className="w-5/7 pt-4 rounded-lg bg-slate-200 flex flex-row justify-evenly mb-5" style={{ borderBottom: '1px solid #ccc', marginBottom: '10px', paddingBottom: '10px' }}>
                <div className='text-left'>
                  <p><strong>Name:</strong> {patient.name}</p>
                  <p><strong>Age:</strong> {patient.age}</p>
                </div>
                <div className='text-left'>
                  <p><strong>Gender:</strong> {patient.gender}</p>
                  <p><strong>Contact:</strong> {patient.contact}</p>
                </div>
                <div className=''>
                <h3 className='font-bold mb-2'>Medical Records:</h3>
                {patient.medicalRecords.map((record, index) => (
                  <div className="text-left" key={index}>
                    <p><strong>Date:</strong> {record.date}</p>
                    <p><strong>Diagnosis:</strong> {record.diagnosis}</p>
                    <p><strong>Treatment:</strong> {record.treatment}</p>
                  </div>
                ))}
                </div>
                <div>
                  <p><strong>Address:</strong> {patient.address}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No patients found matching the criteria.</p>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default PatientSearch;