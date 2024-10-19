import React from 'react'
import Navbar from './Navbar'
import UserProfileCard from './UserProfileCard'
import UserInboxCard from './UserInboxCard'

const UserHome = () => {
  return (
    <>
      <Navbar />
      <div className='flex flex-row justify-evenly'>
        <UserProfileCard />
        <UserInboxCard />
      </div>
    </>
  )
}

export default UserHome
