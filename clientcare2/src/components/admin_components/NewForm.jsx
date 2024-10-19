import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom'

/***************************************************************************** */
// PULL THESE FROM THE BACKEND
const forms = [
  "New Patient Intake Form",
  "Survey after Saturday Class"
];

/************************* */
const NewForm = () => {
  return (
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
  )
}

export default NewForm