// clientcare2/src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./AdminNavbar";
import Dashboard from "./AdminDashBoard";
import Reports from "./AdminReports";
import Profile from "./AdminProfile";

function App() {
  return (
    <Router>
      <div className="flex">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;