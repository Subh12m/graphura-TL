export default function Membertable({ title }) {
  const rows = Array.from({ length: 6 }, (_, i) => ({
    company: `Company ${i + 1}`,
    invoice: "Bold text column",
    service: "Bold text column",
    date: "Bold text column",
    deadline: "Bold text column",
    activity: "Bold text column",
  }));

  // Add status and other fields to rows
  const rowsWithStatus = Array.from({ length: 6 }, (_, i) => ({
    name: `Member ${i + 1}`,
    location: `Location ${i + 1}`,
    email: `member${i + 1}@example.com`,
    contact: `123-456-789${i}`,
    joining: `2024-06-0${i + 1}`,
    status: i % 2 === 0 ? "Active" : "Inactive",
  }));

  return (
    <div className="mt-2 p-6">
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
            {rowsWithStatus.map((row, idx) => (
              <tr key={idx} className="border-t text-gray-700 font-medium">
                <td className="px-4 py-3">{row.name}</td>
                <td className="px-4 py-3">{row.location}</td>
                <td className="px-4 py-3">{row.email}</td>
                <td className="px-4 py-3">{row.contact}</td>
                <td className="px-4 py-3">{row.joining}</td>
                <td className="px-4 py-3">
                  <button
                    className={`px-4 py-1 rounded text-sm font-semibold transition ${
                      row.status === "Active"
                        ? "bg-green-500 text-white hover:bg-green-600"
                        : "bg-red-500 text-white hover:bg-red-600"
                    }`}
                  >
                    {row.status}
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
