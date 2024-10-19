// clientcare2/src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/AdminNavbar";
import Dashboard from "./components/AdminDashBoard";
import Reports from "./components/AdminReports";
import Profile from "./components/AdminProfile";

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