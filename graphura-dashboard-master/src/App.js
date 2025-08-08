import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MyProjects from "./pages/MyProjects";
import Help from "./pages/Help";
import PayOut from "./pages/PayOut";
import CompletedProjects from "./pages/CompletedProjects";
import Report from "./pages/Report";
import Review from "./pages/Review";
import TransferProjects from "./pages/Transferprojects";
import TeamMember from "./pages/TeamMember";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-projects" element={<MyProjects />} />
        <Route path="/transfer-projects" element={<TransferProjects />} />
        <Route path="/report" element={<Report/>} />
        <Route path="/payout" element={<PayOut/>} />
        <Route path="/Review" element={<Review />} />
        <Route path="/team-member" element={<TeamMember />} />
        {/* Add more routes here later */}
      </Routes>
    </Router>
  );
}

export default App;
