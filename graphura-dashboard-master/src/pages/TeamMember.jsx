import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Membertable from "../components/Membertable";

export default function TeamMember() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Topbar */}
        <Topbar />

        {/* Page Content */}
        <div className="p-6 flex-1">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">
            Team Members
          </h1>

          {/* Search and Add Button */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
            <input
              type="text"
              placeholder="Search member..."
              className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
              Add Member
            </button>
          </div>
        </div>
        <Membertable/>
      </div>
    </div>
  );
}
