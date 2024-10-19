import './formsPage.css'
import { BrowserRouter as Router, Route, Routes, Link, useParams } from 'react-router-dom'

// PULL THIS FROM THE BACKEND
const forms = [
  "New Patient Intake Form",
  "Survey after Saturday Class"
];

//defining a FormsPage component
//this component will display a list of forms and each is linked to a form detail page
const FormsPage = () => {
  return (
    <div>
      <div>
        <h1>Available Forms</h1>
        <div className="form-list">
          <Link to="/create-form" className="form-box">Create New Form</Link>
          {forms.map((form, index) => (
            <Link key={index} to={`/form/${encodeURIComponent(form)}`} className="form-box">
              {form}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

//page for creating a new form
const CreateFormPage = () => {
  return (
    <div>
      <h1>Create New Form</h1>
      <p>insert the backend form stuff</p>
      <div>
        <button>Send Form</button>
        
      </div>
      
    </div>
  )
}

//page for viewing and editing all the other forms
const FormDetailPage = ({ formName }) => {
  return (
    <div>
      <h1>{formName}</h1>
    </div>
  )
}

//runs the app
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormsPage />} />
        <Route path="/create-form" element={<CreateFormPage />} />
        <Route path="/form/:formName" element={<FormDetailPageWrapper />} />
      </Routes>
    </Router>
  )
}

const FormDetailPageWrapper = () => {
  const { formName } = useParams()
  return <FormDetailPage formName={decodeURIComponent(formName)} />
}

export default App