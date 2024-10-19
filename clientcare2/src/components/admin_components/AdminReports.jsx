import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import Select from 'react-select';

// PULL THESE FROM THE BACKEND
const forms = [
  "New Patient Intake Form",
  "Survey after Saturday Class"
];

const patientOptions = [
  { value: 'john-doe', label: 'John Doe' },
  { value: 'jane-smith', label: 'Jane Smith' },
  { value: 'alice-johnson', label: 'Alice Johnson' }
];

const eventOptions = [
  { value: 'event-1', label: 'Event 1' },
  { value: 'event-2', label: 'Event 2' },
  { value: 'event-3', label: 'Event 3' }
];

const FormsLanding = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Available Forms</h2>
      <div className="form-list space-y-4">
        <Link to="create-form" className="form-box block p-4 border border-gray-300 rounded shadow hover:bg-gray-100">
          Create New Form
        </Link>
        {forms.map((form, index) => (
          <Link key={index} to={`form/${encodeURIComponent(form)}`} className="form-box block p-4 border border-gray-300 rounded shadow hover:bg-gray-100">
            {form}
          </Link>
        ))}
      </div>
    </div>
  );
};

const FormComponent = ({ title }) => {
  const [showEventDropdown, setShowEventDropdown] = React.useState(false);

  const handlePatientGroupChange = (selectedOption) => {
    const value = selectedOption ? selectedOption.value : '';
    setShowEventDropdown(value === 'patients-who');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <div className="mb-4">
        <label htmlFor="patient-select" className="block mb-2">Select Patient Group:</label>
        <Select
          id="patient-select"
          name="patient-group"
          options={[{ value: 'patients-who', label: 'Patients who attended...' }, ...patientOptions]}
          onChange={handlePatientGroupChange}
          className="mb-4"
        />
        {showEventDropdown && (
          <Select
            id="event-select"
            name="event-group"
            options={eventOptions}
            className="mb-4"
          />
        )}
      </div>
      <button className="bg-white text-purple-500 border border-purple-500 rounded px-4 py-2 hover:bg-purple-100">
        Send Form
      </button>
    </div>
  );
};

const CreateForm = () => <FormComponent title="Create New Form" />;

const FormDetail = () => {
  const { formName } = useParams();
  return <FormComponent title={decodeURIComponent(formName)} />;
};

const AdminReports = () => {
  return (
    <div className="h-screen w-full bg-white p-4">
      <h1 className="text-2xl font-bold mb-4">Forms</h1>
      <Routes>
        <Route index element={<FormsLanding />} />
        <Route path="create-form" element={<CreateForm />} />
        <Route path="form/:formName" element={<FormDetail />} />
      </Routes>
    </div>
  );
};

export default AdminReports;