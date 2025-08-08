import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useState } from "react";

export default function TransferProjects() {
  const [services, setServices] = useState([
    { id: 1, name: "Logo Design", assignedTo: "", saved: false },
    { id: 2, name: "Content Writing", assignedTo: "", saved: false },
    { id: 3, name: "Video Editing", assignedTo: "", saved: false },
  ]);

  const [openCompany, setOpenCompany] = useState(false);

  const handleAssignChange = (id, value) => {
    setServices((prev) =>
      prev.map((service) =>
        service.id === id ? { ...service, assignedTo: value } : service
      )
    );
  };

  const handleSave = (id) => {
    setServices((prev) =>
      prev.map((service) =>
        service.id === id ? { ...service, saved: true } : service
      )
    );
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-100">
        <Topbar />

        <h1 className="text-2xl font-bold mb-6">TRANSFER PROJECTS</h1>

        <div className="bg-white p-4 shadow rounded mb-6 relative z-10">

          {/* Company Header Clickable */}
          <div
            className="flex justify-between font-bold text-lg border-b pb-2 mb-4 cursor-pointer"
            onClick={() => setOpenCompany((prev) => !prev)}
          >
            <span>1. Company Name</span>
            <span>Invoice no.</span>
            <span>{openCompany ? "▲" : "▼"}</span>
          </div>

          {/* Dropdown content */}
          {openCompany && (
            <div className="bg-gray-50 p-4 rounded shadow-inner">
              <h2 className="text-center font-bold text-lg mb-4">
                Service Details
              </h2>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <span className="font-semibold">Service Name</span>
                <span className="font-semibold">Assigned to</span>
                <span className="font-semibold">Action</span>
              </div>

              {services.map((service) => (
                <div
                  key={service.id}
                  className="grid grid-cols-3 gap-4 items-center mb-2"
                >
                  <div className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span>{service.name}</span>
                  </div>
                  <select
                    className="border rounded px-2 py-1"
                    value={service.assignedTo}
                    onChange={(e) =>
                      handleAssignChange(service.id, e.target.value)
                    }
                  >
                    <option value="">Select Employee</option>
                    <option value="John Doe">John Doe</option>
                    <option value="Jane Smith">Jane Smith</option>
                  </select>
                  <button
                    onClick={() => handleSave(service.id)}
                    className={`px-4 py-1 rounded text-white ${
                      service.saved
                        ? "bg-gray-400"
                        : "bg-blue-500 hover:bg-blue-600"
                    }`}
                  >
                    Save
                  </button>
                </div>
              ))}

              <div className="text-center mt-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded">
                  Send to Review
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Transfer History */}
        <h2 className="text-2xl font-bold mb-4">TRANSFER HISTORY</h2>
        <div className="bg-white p-4 shadow rounded">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border">Company Name</th>
                <th className="p-2 border">Invoice No.</th>
                <th className="p-2 border">Services</th>
                <th className="p-2 border">Assigned to</th>
                <th className="p-2 border">Deadline</th>
                <th className="p-2 border">Activity</th>
              </tr>
            </thead>
            <tbody>
              {[...Array(7)].map((_, i) => (
                <tr key={i} className="text-center">
                  <td className="p-2 border font-semibold">Bold text column</td>
                  <td className="p-2 border font-semibold">Bold text column</td>
                  <td className="p-2 border font-semibold">Bold text column</td>
                  <td className="p-2 border font-semibold">Bold text column</td>
                  <td className="p-2 border font-semibold">Bold text column</td>
                  <td className="p-2 border">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
                      {i === 0 ? "View" : "Update"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
