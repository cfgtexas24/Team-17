import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex flex-row justify-between'>
          <h1 className='text-3xl font-bold text-[#3a696e]'>Abide&Seek</h1>
          <div className='flex flex-row justify-evenly'>
            <Link to="/" className='text-[#3d251e] font-semibold p-2 ml-2 mr-4 hover:text-white hover:bg-[#3a696e] hover:bg-opacity-65 rounded-lg'>Home</Link>
            <Link to="/formsPage" className='text-[#3d251e] font-semibold p-2 ml-2 mr-4 hover:text-white hover:bg-[#3a696e] hover:bg-opacity-65 rounded-lg'>Forms</Link>
            <Link to="/dashboard" className='text-[#3d251e] font-semibold p-2 ml-2 mr-4 hover:text-white hover:bg-[#3a696e] hover:bg-opacity-65 rounded-lg'>Dashboard</Link>
            <Link to="/profile" className='text-[#3d251e] font-semibold p-2 ml-2 mr-2 hover:text-white hover:bg-[#3a696e] hover:bg-opacity-65 rounded-lg'>Profile</Link>
            <Link to="/calendar" className='text-[#3d251e] font-semibold p-2 ml-2 mr-2 hover:text-white hover:bg-[#3a696e] hover:bg-opacity-65 rounded-lg'>Appointment Calendar</Link>
            <Link to="/patientSearch" className='text-[#3d251e] font-semibold p-2 ml-2 mr-2 hover:text-white hover:bg-[#3a696e] hover:bg-opacity-65 rounded-lg'>Patient Search</Link>
            
          </div>
        </div>
      )
}

export default Navbar