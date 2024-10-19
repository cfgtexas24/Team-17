import React from 'react'
import { Link } from 'react-router-dom'

/***************************************************************************** */
// PULL THESE FROM THE BACKEND
const forms = [
  "New Patient Intake Form",
  "Survey after Saturday Class"
];

/************************* */
//this creates the initial page that the user sees when they click on the "Forms" tab
const NewForm = () => {
  return (
    <div className="flex min-h-screen relative">
      <div className="fixed left-0 w-1/5 h-full bg-gray-800" style={{ backgroundColor: '#3a696e' }}></div>
      <div className="w-3/5 p-4 mx-auto">
        <h1 className="text-2xl font-bold mb-4">Available Forms</h1>
        <div className="form-list space-y-4">
          <Link to="/create-form" className="form-box block p-4 border border-gray-300 rounded shadow text-white"
          style={{ transition: 'background-color 0.3s', backgroundColor : '#4c8f97' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4c8f97'}>
            + Create New Form +
          </Link>
          {forms.map((form, index) => (
            <Link key={index} to={`/form/${encodeURIComponent(form)}`} className="form-box block p-4 border border-gray-300 rounded shadow text-white"
            style={{ transition: 'background-color 0.3s', backgroundColor : '#4c8f97'  }}
  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ffffff'}
  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#4c8f97'}>
              {form}
            </Link>
          ))}
        </div>
      </div>
      <div className="fixed right-0 w-1/5 h-full" style={{ backgroundColor: '#3a696e' }}></div>
    </div>
  )
}

export default NewForm