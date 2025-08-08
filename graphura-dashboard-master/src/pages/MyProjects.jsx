import Sidebar from "../components/Sidebar";
import ProjectTable from "../components/ProjectTable";
import Topbar from "../components/Topbar"; // <-- Import the Topbar component
import CompanyForm from "../components/CompanyForm";

export default function MyProjects() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-100">
        <Topbar /> {/* <-- Add Topbar here */}
        <h1 className="text-3xl mb-6">My Projects</h1>
        
        <CompanyForm/>

      </div>
    </div>
  );
}
