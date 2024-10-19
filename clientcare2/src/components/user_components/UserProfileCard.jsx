import React from 'react'
import { Calendar } from 'lucide-react'

const userName = "John Doe"
const UserProfileCard = () => {
  return (
    <>
        <div className='flex flex-col shadow-lg bg-gray-100 mt-32 h-96 rounded-3xl justify-start w-2/5'>
            <div className='flex'>
                <h2 className='font-semibold ml-7 mt-5 text-xl'>Welcome, {userName} !</h2>
            </div>
            {/* upcoming appointments display */}
            <div className='ml-7 mt-4'>
                <h3 className="text-xl font-semibold mb-2 flex flex-row">
                    <Calendar className="mr-2" />
                    Upcoming Appointments
                </h3>
                <p className="ml-8 flex text-sm text-gray-600">You have 0 upcoming appointments. Click to view details.</p>
                <div>

                </div>
            </div>
        </div>
    </>
  )
}

export default UserProfileCard