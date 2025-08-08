import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import Membertable from "../components/Membertable";

export default function TeamMember() {
  return (
    <div>
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 z-30">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="ml-64 h-screen overflow-y-auto bg-gray-100">
        <div className="p-8">
          {/* Topbar */}
          <Topbar />

          {/* Page Content */}
          <div className="p-6 flex-1">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              Team Members
            </h1>
          </div>

          <Membertable />
          {/* Add any additional content or components here */}
          <div className="p-6 mt-6 max-w-4xl mx-auto bg-white rounded-md shadow-md">
            <form className="grid gap-6">
              {/* Name */}
              <div className="grid grid-cols-2 items-center gap-4">
                <label className="text-base font-medium">Name</label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2 shadow-sm focus:outline-none"
                />
              </div>

              {/* Contact no. */}
              <div className="grid grid-cols-2 items-center gap-4">
                <label className="text-base font-medium">Contact no.</label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2 shadow-sm focus:outline-none"
                />
              </div>

              {/* Email_id */}
              <div className="grid grid-cols-2 items-center gap-4">
                <label className="text-base font-medium">Email_id</label>
                <input
                  type="email"
                  className="w-full border rounded-md p-2 shadow-sm focus:outline-none"
                />
              </div>

              {/* Location */}
              <div className="grid grid-cols-2 items-center gap-4">
                <label className="text-base font-medium">Location</label>
                <input
                  type="text"
                  className="w-full border rounded-md p-2 shadow-sm focus:outline-none"
                />
              </div>

              {/* Joining date */}
              <div className="grid grid-cols-2 items-center gap-4">
                <label className="text-base font-medium">Joining date</label>
                <input
                  type="date"
                  className="w-full border rounded-md p-2 shadow-sm focus:outline-none"
                />
              </div>

              {/* Button */}
              <div className="grid grid-cols-2">
                <div></div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
                  >
                    ADD
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}