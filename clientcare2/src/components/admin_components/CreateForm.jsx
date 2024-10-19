import React, { useState } from 'react'
import Select from 'react-select'
import {createForm} from '../../backend/googleFormsAPI/requests'

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

  /************************************************ */
  //this shows the Create Form page, specifically the "Send Form" button and options
export default function CreateForm() {
  const [selectedPatientGroup, setSelectedPatientGroup] = useState('')
  const [showEventDropdown, setShowEventDropdown] = useState(false)
  const [loading, setLoading] = useState(false)

  const handlePatientGroupChange = (selectedOption) => {
    const value = selectedOption ? selectedOption.value : ''
    setSelectedPatientGroup(value)
    setShowEventDropdown(value === 'patients-who')
  }

  const handleCreateForm = async () => {
    setLoading(true)
    await createForm()
    setLoading(false)
  }

  return (
    <div className="p-4">
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
      <div>
        <button
          onClick={handleCreateForm}
          className="bg-white text-purple-500 border border-purple-500 rounded px-4 py-2 hover:bg-purple-100"
          disabled={loading}
        >
          {loading ? 'Creating...' : 'Send Form'}
        </button>
      </div>
    </div>
  )
}
