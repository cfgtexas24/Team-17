import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserHome from './components/user_components/UserHome'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/user_components/Navbar'
import Dashboard from './components/admin_components/Dashboard.tsx';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<UserHome/>}/>
        <Route path="/forms" element={<></>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/profile" element={<></>}/>
      </Routes>
    </>
  )
}

export default App
