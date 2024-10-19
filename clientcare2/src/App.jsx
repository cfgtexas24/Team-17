import { useState } from 'react'
import './App.css'
import UserHome from './components/user_components/UserHome'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/user_components/Navbar'
import FormsPage from './components/admin_components/NewForm'
import CreateFormPage from './components/admin_components/CreateForm'
import FormDetail from './components/admin_components/FormDetail'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/forms" element={<FormsPage/>}/>
        <Route path="/create-form" element={<CreateFormPage />} />
        <Route path="/form/:formName" element={<FormDetail />} />
      </Routes>
    </>
  )
}

export default App