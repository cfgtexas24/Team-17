import React, { useState } from 'react'
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

  /************************************************ */
  //this shows the Create Form page, specifically the "Send Form" button and options
export default function CreateForm() {
    const [selectedPatientGroup, setSelectedPatientGroup] = useState('')
  const [showEventDropdown, setShowEventDropdown] = useState(false)
  const [questions, setQuestions] = useState([])
  const [formTitle, setFormTitle] = useState('')

  const handlePatientGroupChange = (selectedOption) => {
    const value = selectedOption ? selectedOption.value : ''
    setSelectedPatientGroup(value)
    setShowEventDropdown(value === 'patients-who')
  }
  const addQuestion = () => {
    setQuestions([...questions, ''])
  }

  const handleQuestionChange = (index, value) => {
    const newQuestions = [...questions]
    newQuestions[index] = value
    setQuestions(newQuestions)
  }

  return (
    <div className="flex min-h-screen relative">
      <div className="fixed left-0 w-1/5 h-full" style={{ backgroundColor: '#3a696e' }}></div>
      <div className="w-3/5 p-4 mx-auto">
        <div className="mb-4 shadow-top">
          <h1 className="text-2xl font-bold mb-4">Create a New Form</h1>
          <label htmlFor="form-title" className="block text-center mb-2 font-bold">Form Title:</label>
          <input
            id="form-title"
            type="text"
            value={formTitle}
            onChange={(e) => setFormTitle(e.target.value)}
            className="block mx-auto mb-4 p-2 border border-gray-300 rounded w-full text-black bg-white"
            placeholder={`Form Title`}
          />
        </div>
        <div className="mb-4">
          {questions.map((question, index) => (
            <div key={index} className="mb-2">
              <input
                type="text"
                value={question.value}
                onChange={(e) => handleQuestionChange(index, e.target.value)}
                className="block w-full p-2 border border-gray-300 rounded bg-white text-black"
                placeholder={`Question ${index + 1}`}
              />
            </div>
          ))}
          <button
            onClick={addQuestion}
            className="border rounded px-4 py-2 mb-4"
            style={{ transition: 'background-color 0.3s, color 0.3s', backgroundColor: '#a26b61' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#ffffff'
              e.currentTarget.style.color = '#a26b61'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#a26b61'
              e.currentTarget.style.color = '#ffffff'
            }}>
            + Add Question
          </button>
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