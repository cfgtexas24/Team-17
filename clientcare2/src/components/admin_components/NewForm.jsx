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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Available Forms</h1>
      <div className="form-list space-y-4">
        <Link to="/create-form" className="form-box block p-4 border border-gray-300 rounded shadow hover:bg-gray-100">
          + Create New Form +
        </Link>
        {forms.map((form, index) => (
          <Link key={index} to={`/form/${encodeURIComponent(form)}`} className="form-box block p-4 border border-gray-300 rounded shadow hover:bg-gray-100">
            {form}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default NewForm