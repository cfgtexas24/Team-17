import React from 'react'
import { Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'

const userName = "Mary Jane"
const UserProfileCard = () => {
  return (
    <>
        <div className='flex flex-col shadow-lg text-[#3a696e] bg-slate-100 mt-32 h-96 rounded-3xl justify-start w-2/5'>
            <div className='flex'>
                <h2 className='font-semibold ml-7 mt-5 text-xl'>Welcome, {userName}!</h2>
            </div>
            {/* upcoming appointments display */}
            <div className='ml-7 mt-4 mb-4'>
                <h3 className="text-xl font-semibold mb-2 flex flex-row">
                    <Calendar className="mr-2" />
                    Upcoming Appointments
                </h3>
                <p className="ml-8 flex text-sm ">You have 0 upcoming appointments. Click to view details.</p>
                <div className='mt-28 mr-5'>
                    <Link to="/clinics" className='shadow text-2xl font-semibold rounded-full bg-[#c49087] text-white hover:bg-white hover:shadow hover:text-[#c49087] p-5'>
                        Find a Clinic
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default UserProfileCard