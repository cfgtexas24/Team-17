
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom'
/***************************************************************************** */
// PULL THESE FROM THE BACKEND
const forms = [
  "New Patient Intake Form",
  "Survey after Saturday Class"
];

const patientOptions = [
  { value: 'john-doe', label: 'John Doe' },
  { value: 'jane-smith', label: 'Jane Smith' },
  { value: 'alice-johnson', label: 'Alice Johnson' }
]

const eventOptions = [
  { value: 'event-1', label: 'Event 1' },
  { value: 'event-2', label: 'Event 2' },
  { value: 'event-3', label: 'Event 3' }
]

/************************************************************************* */
//defining a FormsPage component
//this component will display a list of forms and each is linked to a form detail page
const FormsPageLanding = () => {
  return (
    <div>
      <div>
        <h1>Available Forms</h1>
        <div className="form-list">
          <Link to="/create-form" className="form-box">Create New Form</Link>
          {forms.map((form, index) => (
            <Link key={index} to={`/form/${encodeURIComponent(form)}`} className="form-box">
              {form}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

/*********************************************************************** */
//page for creating a new form
const CreateFormPage = () => {
  const [selectedPatientGroup, setSelectedPatientGroup] = useState('')
  const [showEventDropdown, setShowEventDropdown] = useState(false)

  const handlePatientGroupChange = (event) => {
    const value = event.target.value
    setSelectedPatientGroup(value)
    setShowEventDropdown(value === 'patients-who')
  }

  return (
    <div>
      <h1>Create New Form</h1>
      <p>insert the backend form stuff</p>
      <div>
        <label htmlFor="patient-select">Select Patient Group:</label>
        <select id="patient-select" name="patient-group" onChange={handlePatientGroupChange}>
          <option value="">Select Patient Group</option>
          <option value="patients-who">Patients who...</option>
          {patientOptions.map((patient) => (
            <option key={patient.value} value={patient.value}>{patient.label}</option>
          ))}
        </select>
        {showEventDropdown && (
          <select id="event-select" name="event-group">
            <option value="">Select Event</option>
            {eventOptions.map((event) => (
              <option key={event.value} value={event.value}>{event.label}</option>
            ))}
          </select>
        )}
      </div>
      <div>
        <button>Send Form</button>
      </div>
    </div>
  )
}

/*************************************************************************** */
//page for viewing and editing all the other forms
const FormDetailPage = ({ formName }) => {
  return (
    <div>
      <h1>{formName}</h1>
    </div>
  )
}

const FormDetailPageWrapper = () => {
  const { formName } = useParams()
  return <FormDetailPage formName={decodeURIComponent(formName)} />
}

/*************************************************************** */
//runs the app
function FormsPage() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path="/formsPage" element={<FormsPageLanding />} />
            <Route path="/create-form" element={<CreateFormPage />} />
            <Route path="/form/:formName" element={<FormDetailPageWrapper />} />
          </Routes>
        </Router>
    </div>
    
  )
}

export default FormsPage