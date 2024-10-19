import React from 'react'
import { Link } from 'react-router-dom'



// WE SHOULD REMOVE DASHBOARD AND FORMS LINK AS THOSE ARENT USER THINGS. WAITING FOR OTHER NAVBAR TO BE FINISHED BEFORE DOING SO
const Navbar = () => {
    return (
        <div className='flex flex-row justify-between'>
          <h1 className='text-3xl font-bold text-black'>Client Care 2.0</h1>
          <div className='flex flex-row justify-evenly'>
            <Link to="/user/" className='text-black font-semibold p-2 ml-2 mr-4 hover:text-white hover:bg-slate-400 rounded-lg'>Home</Link>
            <Link to="/formsPage" className='text-black font-semibold p-2 ml-2 mr-4 hover:text-white hover:bg-slate-400 rounded-lg'>Forms</Link>
            <Link to="/dashboard" className='text-black font-semibold p-2 ml-2 mr-4 hover:text-white hover:bg-slate-400 rounded-lg'>Dashboard</Link> 
            <Link to="/user/profile" className='text-black font-semibold p-2 ml-2 mr-2 hover:text-white hover:bg-slate-400 rounded-lg'>Profile</Link>
          </div>
        </div>
      )
}

export default Navbar