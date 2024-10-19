import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex flex-row justify-between'>
          <h1 className='text-3xl font-bold text-black'>Client Care 2.0</h1>
          <div className='flex flex-row justify-evenly'>
            <Link to="/" className='text-black font-semibold p-2 ml-2 mr-4 hover:text-white hover:bg-slate-400 rounded-lg'>Home</Link>
            <Link to="/formsPage" className='text-black font-semibold p-2 ml-2 mr-4 hover:text-white hover:bg-slate-400 rounded-lg'>Forms</Link>
            <Link to="/dashboard" className='text-black font-semibold p-2 ml-2 mr-4 hover:text-white hover:bg-slate-400 rounded-lg'>Dashboard</Link>
            <Link to="/profile" className='text-black font-semibold p-2 ml-2 mr-2 hover:text-white hover:bg-slate-400 rounded-lg'>Profile</Link>
            <Link to="/calendar" className='text-black font-semibold p-2 ml-2 mr-2 hover:text-white hover:bg-slate-400 rounded-lg'>Appointment Calendar</Link>
            <Link to="/patientSearch" className='text-black font-semibold p-2 ml-2 mr-2 hover:text-white hover:bg-slate-400 rounded-lg'>Patient Search</Link>
            
          </div>
        </div>
      )
}

export default Navbar