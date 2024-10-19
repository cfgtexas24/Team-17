import React, { useState } from 'react'

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

export default function CreateForm() {
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
