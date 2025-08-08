import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MyProjects from "./pages/MyProjects";
import Help from "./pages/Help";
import PayOut from "./pages/PayOut";
import CompletedProjects from "./pages/CompletedProjects";
import Report from "./pages/Report";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-projects" element={<MyProjects />} />
        <Route path="/completed-projects" element={<CompletedProjects />} />
        <Route path="/report" element={<Report/>} />
        <Route path="/payout" element={<PayOut/>} />
        <Route path="/Review" element={<Help />} />
        {/* Add more routes here later */}
      </Routes>
    </Router>
  );
}

export default App;
