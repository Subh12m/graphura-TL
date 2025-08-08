export default function Membertable({ title }) {
  const rows = Array.from({ length: 6 }, (_, i) => ({
    company: `Company ${i + 1}`,
    invoice: "Bold text column",
    service: "Bold text column",
    date: "Bold text column",
    deadline: "Bold text column",
    activity: "Bold text column",
  }));

  return (
    <div className="bg-white rounded-xl shadow-lg mt-6 p-6">
      {/* Outer card */}
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className="bg-white rounded-xl shadow-md overflow-x-auto p-4">
        {/* Table */}
        <table className="w-full table-auto text-sm text-left">
          <thead className="text-gray-800 font-bold bg-white">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Location</th>
              <th className="px-4 py-3">Email_id</th>
              <th className="px-4 py-3">Contact no.</th>
              <th className="px-4 py-3">Joining Date</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className="border-t text-gray-700 font-medium">
                <td className="px-4 py-3">{row.name}</td>
                <td className="px-4 py-3">{row.location}</td>
                <td className="px-4 py-3">{row.email}</td>
                <td className="px-4 py-3">{row.contact}</td>
                <td className="px-4 py-3">
                  <button
                    className="bg-blue-500 text-white px-4 py-1 rounded text-sm font-semibold hover:bg-blue-600 transition"
                  >
                    Status
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
