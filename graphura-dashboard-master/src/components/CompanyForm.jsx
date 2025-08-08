import React, { useState } from "react";

const CompanyForm = () => {
  const [showDetails, setShowDetails] = useState(false);

  // These would come from backend ideally
  const companyName = "Graphura";
  const invoiceNumber = "INV-001";

  const services = [
    {
      name: "Logo",
      actions: ["Video", "Download", "Upload"],
    },
    {
      name: "Banner",
      actions: ["Message", "Video / Audio", "Upload"],
    },
    {
      name: "Bold text column",
      actions: ["Message", "Video / Audio", "Upload"],
    },
  ];

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white shadow-md rounded-lg space-y-6">
      {/* Dropdown Header */}
      <div
        className="flex justify-between items-center border-b pb-4 cursor-pointer"
        onClick={() => setShowDetails(!showDetails)}
      >
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-lg">1.</span>
          <span className="font-semibold text-lg">{companyName}</span>
        </div>
        <div className="font-semibold text-lg flex items-center">
          Invoice no. {invoiceNumber}
          <span className="ml-2">{showDetails ? "▲" : "▼"}</span>
        </div>
      </div>

      {/* Details Section */}
      {showDetails && (
        <>
          {/* Client Info */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {/* Left side */}
            <div className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Client Name</label>
                <input className="w-full border rounded p-2" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Contact no.</label>
                <input className="w-full border rounded p-2" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Start Date</label>
                <input className="w-full border rounded p-2" type="date" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Service name</label>
                <input className="w-full border rounded p-2" />
              </div>
            </div>

            {/* Right side */}
            <div className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Designation</label>
                <input className="w-full border rounded p-2" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Email_id</label>
                <input className="w-full border rounded p-2" type="email" />
              </div>
              <div>
                <label className="block mb-1 font-medium">End Date</label>
                <input className="w-full border rounded p-2" type="date" />
              </div>
            </div>
          </div>

          {/* Company Details */}
          <div className="text-center font-semibold text-lg underline mt-8">Company Details</div>

          <div className="overflow-x-auto mt-4">
            <table className="w-full border rounded shadow-sm text-sm text-center">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 border">Service</th>
                  <th className="py-2 border" colSpan={3}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <tr key={index} className="border-t">
                    <td className="py-2 border font-medium">{service.name}</td>
                    {service.actions.map((action, i) => (
                      <td key={i} className="py-2 border">
                        <button
                          className={`px-3 py-1 text-white rounded ${
                            action === "Upload"
                              ? "bg-green-600"
                              : action.includes("Download")
                              ? "bg-blue-500"
                              : "bg-blue-600"
                          } hover:opacity-90`}
                        >
                          {action}
                        </button>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default CompanyForm;