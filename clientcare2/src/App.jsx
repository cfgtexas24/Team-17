import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserHome from './components/user_components/UserHome'
import FormsPage from './components/admin_components/formsPage'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/user_components/Navbar'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<UserHome/>}/>
        <Route path="/forms" element={<FormsPage/>}/>
        <Route path="/dashboard" element={<></>}/>
        <Route path="/profile" element={<></>}/>
      </Routes>
    </>
  )
}

export default App