// src/pages/Review.jsx
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import { useState } from "react";

export default function Review() {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");

  const tableData = Array(8).fill({
    companyName: "Bold text column",
    invoiceNo: "Bold text column",
    services: "Bold text column",
    comment: "Bold text column",
    date: "Bold text column",
    file: "#",
  });

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-50">
        <Topbar />

        {/* Page Title */}
        <h1 className="text-2xl font-semibold mb-6">Review</h1>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-md bg-white shadow-sm"
          >
            <option value="">Month</option>
            <option value="jan">January</option>
            <option value="feb">February</option>
          </select>

          <select
            value={day}
            onChange={(e) => setDay(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-md bg-white shadow-sm"
          >
            <option value="">Day</option>
            {Array.from({ length: 31 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>

          <button className="bg-blue-500 text-white px-5 py-2 rounded-md hover:bg-blue-600 shadow-sm">
            Search
          </button>
        </div>

        {/* Table */}
        <div className="bg-white shadow-md rounded-lg overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 font-semibold text-gray-700 text-left">Company Name</th>
                <th className="px-6 py-3 font-semibold text-gray-700 text-center">Invoice No.</th>
                <th className="px-6 py-3 font-semibold text-gray-700 text-left">Services</th>
                <th className="px-6 py-3 font-semibold text-gray-700 text-left">Comment</th>
                <th className="px-6 py-3 font-semibold text-gray-700 text-center">Date</th>
                <th className="px-6 py-3 font-semibold text-gray-700 text-center">Project File</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr
                  key={index}
                  className={`border-t ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
                >
                  <td className="px-6 py-3 font-semibold text-gray-800">{row.companyName}</td>
                  <td className="px-6 py-3 font-semibold text-gray-800 text-center">{row.invoiceNo}</td>
                  <td className="px-6 py-3 font-semibold text-gray-800">{row.services}</td>
                  <td className="px-6 py-3 font-semibold text-gray-800">{row.comment}</td>
                  <td className="px-6 py-3 font-semibold text-gray-800 text-center">{row.date}</td>
                  <td className="px-6 py-3 text-center">
                    <a
                      href={row.file}
                      className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600"
                    >
                      View
                    </a>
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
