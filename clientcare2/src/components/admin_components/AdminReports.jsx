import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NewForm from './NewForm';
import CreateForm from './CreateForm';
import FormDetail from './FormDetail';

import React from 'react';
import NewForm from './NewForm';

const AdminReports = () => {
  return (
    <div className="h-screen w-full bg-white p-4">
      <h1 className="text-2xl font-bold mb-4">Reports & Forms</h1>
      <NewForm />
    </div>
  );
};

export default AdminReports;