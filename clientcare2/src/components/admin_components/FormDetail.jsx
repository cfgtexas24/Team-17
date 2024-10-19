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

const questions = [
  { value: 'question-1', label: 'What was most useful for you from this class?' },
  { value: 'question-2', label: 'What wa least useful for you from this class?' },
  { value: 'question-3', label: 'How much do you agree with the following statement: I now feel more prepare for giving birth after this session.' }
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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{formName}</h1>
      {questions.map((question, index) => (
          <div key={index} className="block w-full p-2 border border-gray-300 rounded bg-white text-black mb-4">
            {question.label}
          </div>
        ))}
      <div className="mb-4">
        <label htmlFor="patient-select" className="block mb-2">Select Recipient:</label>
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
      <div>
        <button className="bg-white text-purple-500 border border-purple-500 rounded px-4 py-2 hover:bg-purple-100">
          Send Form
        </button>
      </div>
    </div>
  )
}

export default function FormDetail() {
  const { formName } = useParams()
  return <FormDetailPage formName={decodeURIComponent(formName)} />
}