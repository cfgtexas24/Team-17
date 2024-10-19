import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Select from 'react-select'

const questions = [
  { value: 'question-1', label: 'What was most useful for you from this class?', type: 'text' },
  { value: 'question-2', label: 'What was least useful for you from this class?', type: 'text' },
  { value: 'question-3', label: 'How much do you agree with the following statement: I now feel more prepared for giving birth after this session.', type: 'scale' }
]

export default function MockForm() {
    return (
      <div className="flex min-h-screen relative">
      <div className="fixed left-0 w-1/5 h-full" style={{ backgroundColor: '#3a696e' }}></div>
      <div className="w-3/5 p-4 mx-auto">
        <div className="mb-4 shadow-top">
          <h1 className="text-2xl font-bold mb-4">Post Childbirth Education Class Survey</h1>
          {questions.map((question, index) => (
            <div key={index} className="block w-full p-2 border border-gray-300 rounded bg-white text-black mb-4">
              <label className="block mb-2">{question.label}</label>
              {question.type === 'text' ? (
                <input
                  type="text"
                  className="block w-full p-2 border border-gray-300 rounded bg-white text-black"
                  placeholder="Your answer"
                />
              ) : (
                <div className="flex flex-col space-y-2">
                  {['Strongly agree', 'Mildly agree', 'Mildly disagree', 'Strongly disagree'].map((option, idx) => (
                    <label key={idx} className="flex items-center">
                      <input type="radio" name={`question-${index}`} value={option} className="mr-2" />
                      {option}
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div>
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
  Submit Form
</button>
          </div>
        </div>
        </div>
        <div className="fixed right-0 w-1/5 h-full" style={{ backgroundColor: '#3a696e' }}></div>
        </div>
      )
}