import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/formsPage.jsx'
import AdminApp from './components/admin_components/AdminApp'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <AdminApp/>
      
    </BrowserRouter>
  </StrictMode>,
)


