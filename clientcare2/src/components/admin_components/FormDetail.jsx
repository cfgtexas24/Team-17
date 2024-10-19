import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Select from 'react-select'

/************************************************** */
// PULL THESE FROM THE BACKEND
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

const questions1 = [
  { value: 'question-1', label: 'What was most useful for you from this class?' },
  { value: 'question-2', label: 'What wa least useful for you from this class?' },
  { value: 'question-3', label: 'How much do you agree with the following statement: I now feel more prepare for giving birth after this session.' }
]

const questions2 = [
  { value: 'question-1', label: 'How satisfied are you with our services?' },
  { value: 'question-2', label: 'What would you like us to improve on?' },
]

/************************************************** */
//this page shows the form details, specifically the "Send Form" button and options
const FormDetailPage = ({ formName }) => {
  const [selectedPatientGroup, setSelectedPatientGroup] = useState('')
  const [showEventDropdown, setShowEventDropdown] = useState(false)

  const handlePatientGroupChange = (selectedOption) => {
    const value = selectedOption ? selectedOption.value : ''
    setSelectedPatientGroup(value)
    setShowEventDropdown(value === 'patients-who')
  }

  return (
    <div className="flex min-h-screen relative">
      <div className="fixed left-0 w-1/5 h-full" style={{ backgroundColor: '#3a696e' }}></div>
      <div className="w-3/5 p-4 mx-auto">
        <div className="mb-4 shadow-top">
          <h1 className="text-2xl font-bold mb-4">{formName}</h1>
        </div>
        <div className="mb-4">
        {formName === "Anonymous Feedback Form" ? (
          questions2.map((question, index) => (
            <div key={index} className="block w-full p-2 border border-gray-300 rounded bg-white text-black mb-4">
              {question.label}
            </div>
          ))
        ) : formName === "Survey after Saturday Birthing Class" ? (
          questions1.map((question, index) => (
            <div key={index} className="block w-full p-2 border border-gray-300 rounded bg-white text-black mb-4">
              {question.label}
            </div>
          ))
        ) : null}
      </div>
        <div>
          <label htmlFor="receipients-title" className="block text-center mb-2 font-bold">Choose Form Recipients:</label>
          <div className="flex space-x-4 mb-4">
            <Select
              id="patient-select"
              name="patient-group"
              options={[{ value: 'patients-who', label: 'Patients who attended...' }, ...patientOptions]}
              onChange={handlePatientGroupChange}
              className="flex-1"
            />
            {showEventDropdown && (
              <Select
                id="event-select"
                name="event-group"
                options={eventOptions}
                className="flex-1"
              />
            )}
          </div>
          <button
  className="form-box block mx-auto p-4 border border-gray-300 rounded shadow text-white font-bold"
  style={{ transition: 'background-color 0.3s, color 0.3s', backgroundColor: '#4c8f97' }}
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = '#ffffff'
      e.currentTarget.style.color = '#4c8f97'
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = '#4c8f97'
      e.currentTarget.style.color = '#ffffff'
    }}>
  Send Form
</button>
        </div>
      </div>
      <div className="fixed right-0 w-1/5 h-full" style={{ backgroundColor: '#3a696e' }}></div>
    </div>
  )
}

export default function FormDetail() {
  const { formName } = useParams()
  return <FormDetailPage formName={decodeURIComponent(formName)} />
}