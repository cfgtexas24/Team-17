import React from 'react'

const userName = "John Doe"

const UserProfileCard = () => {
  return (
    <>
        <div className='flex shadow-lg bg-gray-100 mt-32 h-96 rounded-3xl justify-start w-2/5'>
            <h2 className='font-semibold ml-7 mt-5 text-xl'>Welcome, {userName} !</h2>
        </div>
    </>
  )
}

export default UserProfileCard