import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Reports from "./components/Reports";
import Profile from "./components/Profile";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <main className="flex-grow pr-16"> {/* Add right padding to accommodate the navbar */}
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </main>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;