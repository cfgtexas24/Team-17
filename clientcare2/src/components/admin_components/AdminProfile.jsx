import React from 'react';
import './AdminProfile.css';



const Profile = () => {
  return (
    <div className="min-h-screen bg-teal-500 p-4 font-mono text-black">
      <div className="max-w-3xl mx-auto bg-white border-4 border-gray-800 shadow-lg">
        <header className="bg-yellow-400 p-2 text-center border-b-4 border-gray-800">
          <h1 className="text-3xl font-bold blink">Admin Profile</h1>
        </header>
        
        <div className="p-4">
          <table className="w-full border-collapse border-2 border-gray-800">
            <tbody>
              <ProfileRow label="Name" value="John Doe" />
              <ProfileRow label="Role" value="Supreme Admin" />
              <ProfileRow label="Email" value="john.doe@geocities.com" />
              <ProfileRow label="Last Login" value="1999-12-31 23:59:59" />
            </tbody>
          </table>
          
          <div className="mt-6 text-center">
          <img src="/src/images/theworldisyours.jpg"
          className="inline-block border-4 border-gray-800"
          />
          </div>
          
          <div className="mt-6 flex justify-center space-x-4">
            <Button90s>Edit Profile</Button90s>
            <Button90s>Change Password</Button90s>
          </div>
        </div>
        
        <footer className="bg-gray-300 p-2 text-center text-sm border-t-4 border-gray-800">
          <marquee>Welcome to the Information Superhighway! 🚗💨</marquee>
        </footer>
      </div>
    </div>
  );
};

const ProfileRow = ({ label, value }) => (
  <tr className="border-b-2 border-gray-800">
    <td className="p-2 font-bold bg-gray-300 border-r-2 border-gray-800">{label}:</td>
    <td className="p-2">{value}</td>
  </tr>
);

const Button90s = ({ children }) => (
  <button className="bg-gray-300 border-t-2 border-l-2 border-white border-b-2 border-r-2 border-gray-800 px-4 py-2 font-bold active:bg-gray-400 active:border-t-2 active:border-l-2 active:border-gray-800 active:border-b-2 active:border-r-2 active:border-white">
    {children}
  </button>
);

export default Profile;