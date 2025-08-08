import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

export default function Report() {
  const rows = Array.from({ length: 7 }, (_, i) => ({
    name: i === 0 ? "TL. Name" : i === 1 ? "Sales Executive" : "Bold text column",
    totalProjects: i === 0 ? "1234" : i === 1 ? "60" : "Bold text column",
    currentProjects: i === 0 ? "23" : i === 1 ? "5" : "Bold text column",
    completedProjects: i === 0 ? "1200" : i === 1 ? "20" : "Bold text column",
    joiningDate: i === 0 ? "15" : i === 1 ? "5" : "Bold text column",
    lastMonthProjects: i === 0 ? "2" : i === 1 ? "0" : "Bold text column",
  }));

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-100">
        <Topbar />
        <h1 className="text-2xl font-bold mb-4">REPORT</h1>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option>Month</option>
            <option>January</option>
            <option>February</option>
          </select>
          <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option>Day</option>
            <option>1</option>
            <option>2</option>
          </select>
          <button className="bg-blue-500 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-600 transition">
            Search
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow-md overflow-x-auto p-4">
          <table className="w-full table-auto text-sm text-left">
            <thead className="bg-white text-gray-800 font-bold">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Total Projects</th>
                <th className="px-4 py-3">Current Projects</th>
                <th className="px-4 py-3">Completed Projects</th>
                <th className="px-4 py-3">Joining Date</th>
                <th className="px-4 py-3">Last Month Projects</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx} className="border-t text-gray-700 font-medium">
                  <td className="px-4 py-3">{row.name}</td>
                  <td className="px-4 py-3">{row.totalProjects}</td>
                  <td className="px-4 py-3">{row.currentProjects}</td>
                  <td className="px-4 py-3">{row.completedProjects}</td>
                  <td className="px-4 py-3">{row.joiningDate}</td>
                  <td className="px-4 py-3">{row.lastMonthProjects}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
