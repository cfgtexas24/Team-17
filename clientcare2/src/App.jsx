import { useState } from 'react'
import './App.css'
import UserHome from './components/user_components/UserHome'
import LoginFunc from './components/login_screen/loginScreen'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/user_components/Navbar'
import FormsPage from './components/admin_components/NewForm'
import CreateFormPage from './components/admin_components/CreateForm'
import FormDetail from './components/admin_components/FormDetail'
import Dashboard from './components/admin_components/Dashboard.tsx';
import MapView from './components/user_components/MapView.jsx'
import AdminHome from './components/admin_components/AdminHome.jsx'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<LoginFunc/>}/>
        <Route path="/forms" element={<></>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/profile" element={<></>}/>
        <Route path="/page/user" element={<UserHome/>}/>
        <Route path="/page/admin" element={<AdminHome/>}/>

        <Route path="/formsPage" element={<FormsPage/>}/>
        <Route path="/create-form" element={<CreateFormPage />} />
        <Route path="/form/:formName" element={<FormDetail />} />
      </Routes>
    </>
  )
}

export default App