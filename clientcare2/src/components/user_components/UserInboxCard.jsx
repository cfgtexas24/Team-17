import React from 'react'
import { Link } from 'react-router-dom'
import { Bell } from 'lucide-react'

const notifications = [
    { id: 1, type:'reminder', message: 'Your prescription is ready for pickup', date: '10-17-2024' },
    { id: 2, type:'reminder', message: 'Reminder: Upcoming appointment on 10-20-2024', date: '10-17-2024' },
    { id: 3, formId: 'abc123', type:'form', message: 'Fill out new assigned form', date: '10-17-2024'}
]

// leads to form to fill
const clickForm = (formId) => {
    console.log('clicked on form notification')
}

const UserInboxCard = () => {
  return (
    <>
    <div className="shadow-lg mt-32 bg-gray-100 rounded-lg p-6 w-2/5 h-72">
          <h2 className="text-xl flex font-semibold mb-4 items-center">
            <Bell className="mr-7" />
            Notification Inbox
          </h2>
          <ul>
          {notifications.map((notification) => (
          <li
            key={notification.id}
            className={`mb-2 p-2 rounded-lg hover:bg-white hover:shadow-sm ${
              notification.id === 3 ? 'bg-pink-200' : 'bg-gray-200'
            }`}
          >
            {notification.id === 3 ? (
              <Link to="/form/mockForm" className="block">
                <p>{notification.message}</p>
                <p className="text-sm text-gray-600">{notification.date}</p>
              </Link>
            ) : (
              <div onClick={() => clickForm(notification.formId)}>
                <p>{notification.message}</p>
                <p className="text-sm text-gray-600">{notification.date}</p>
              </div>
            )}
          </li>
        ))}
          </ul>
    </div>
    </>
  )
}

export default UserInboxCard