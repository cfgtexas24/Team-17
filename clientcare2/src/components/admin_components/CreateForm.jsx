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
      <div className="fixed left-0 w-1/5 h-full bg-gray-800" style={{ backgroundColor: '#3a696e' }}></div>
      <div className="w-3/5 p-4 mx-auto">
        <div className="mb-4 shadow-top">
          <label htmlFor="form-title" className="block text-center mb-2">Form Title:</label>
          <input
            id="form-title"
            type="text"
            value={formTitle}
            onChange={(e) => setFormTitle(e.target.value)}
            className="block mx-auto mb-4 p-2 border border-gray-300 rounded w-1/2 text-black bg-white"
          />
        </div>
        <div className="mb-4">
          <button
            onClick={addQuestion}
            className="bg-blue-500 text-white rounded-full p-2 mb-4"
          >
            + Add Question
          </button>
          {questions.map((question, index) => (
            <div key={index} className="mb-2">
              <input
                type="text"
                value={question}
                onChange={(e) => handleQuestionChange(index, e.target.value)}
                className="block w-full p-2 border border-gray-300 rounded bg-white text-black"
                placeholder={`Question ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <div>
          <label htmlFor="receipients-title" className="block text-center mb-2">Choose Recipients:</label>
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
        <button className="bg-white text-purple-500 border border-purple-500 rounded px-4 py-2 hover:bg-purple-100">
          Send Form
        </button>
    </div>
    
      </div>
      <div className="fixed right-0 w-1/5 h-full" style={{ backgroundColor: '#3a696e' }}></div>

    </div>
    
  )
}