import { useState } from 'react'
import './App.css'
import UserHome from './components/user_components/UserHome'
import LoginScreen from './components/login_screen/loginScreen'
import { Route, Routes } from 'react-router-dom'
import FormsPage from './components/admin_components/NewForm'
import CreateFormPage from './components/admin_components/CreateForm'
import FormDetail from './components/admin_components/FormDetail'
import Dashboard from './components/admin_components/Dashboard.tsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginScreen/>}/>
        <Route path="/forms" element={<></>}/>
        <Route path="/admin" element={<Dashboard/>}/>
        <Route path="/profile" element={<></>}/>
        <Route path="/user" element={<UserHome/>}/>

        <Route path="/forms" element={<FormsPage/>}/>
        <Route path="/create-form" element={<CreateFormPage />} />
        <Route path="/form/:formName" element={<FormDetail />} />
      </Routes>
    </>
  )
}

export default App