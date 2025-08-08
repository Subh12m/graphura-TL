import Sidebar from "../components/Sidebar";
import ProjectTable from "../components/ProjectTable";
import Topbar from "../components/Topbar";
import CompanyForm from "../components/CompanyForm";

export default function MyProjects() {
  return (
    <div>
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 z-30">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-64 h-screen overflow-y-auto bg-gray-100">
        <div className="p-8">
          <Topbar />
          <h1 className="text-3xl mb-6">My Projects</h1>
          <CompanyForm />
        </div>
      </div>
    </div>
  );
}