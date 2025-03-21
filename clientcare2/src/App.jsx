import { useEffect, useState } from 'react';
import './App.css';
import UserHome from './components/user_components/UserHome';
import LoginScreen from './components/login_screen/loginScreen';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/user_components/Navbar';
import FormsPage from './components/admin_components/NewForm';
import CreateFormPage from './components/admin_components/CreateForm';
import FormDetail from './components/admin_components/FormDetail';
import Dashboard from './components/admin_components/Dashboard';
import DoctorCalendar from './components/admin_components/DoctorCalender'; 
import PatientSearch from './components/admin_components/patientSearch';
import MockForm from './components/user_components/MockForm'
import MapView from './components/user_components/MapView.jsx'
import AdminNewRegistration from './components/admin_components/AdminNewRegistration.tsx';

function App() {
  const location = useLocation();


  return (
    <>
      {location.pathname !== "/" && <Navbar></Navbar>} 
      <Routes>
        <Route path="/" element={<LoginScreen/>}/>
        <Route path="/forms" element={<></>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/profile" element={<AdminNewRegistration/>}/>
        <Route path="/clinics" element={<MapView/>}/>
        <Route path="/page/user" element={<UserHome/>}/>
        <Route path="/page/admin" element={<Dashboard/>}/>

        <Route path="/formsPage" element={<FormsPage />} />
        <Route path="/create-form" element={<CreateFormPage />} />
        <Route path="/form/:formName" element={<FormDetail />} />
        <Route path="/calendar" element={<DoctorCalendar />} />
        <Route path="/patientsearch" element={<PatientSearch />} />
        <Route path="/form/mockForm" element={<MockForm />} />
      </Routes>
    </>
  );
}

export default App;
