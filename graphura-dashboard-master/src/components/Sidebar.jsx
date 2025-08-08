import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUsers, FaMoneyBillWave, FaClipboardList, FaClipboardCheck, FaUserCircle, FaRegFileAlt } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";
import { MdOutlineReviews } from "react-icons/md";
import { BiTransferAlt } from "react-icons/bi";

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <FaHome /> },
    { name: "Projects", path: "/my-projects", icon: <FaClipboardList /> },
    { name: "Transfer Projects", path: "/transfer-projects", icon: <BiTransferAlt /> },
    { name: "Report", path: "/report", icon: <FaRegFileAlt /> },
    { name: "Team Member", path: "/team-member", icon: <FaUsers /> },
    { name: "Pay out", path: "/payout", icon: <FaMoneyBillWave /> },
    { name: "Review", path: "/review", icon: <MdOutlineReviews /> },
  ];

  return (
    <div className="w-64 h-screen bg-[#3474e0] text-white flex flex-col">
      {/* Logo */}
      <div className="bg-[#2356b6] p-4">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-full h-16 object-contain"
        />
      </div>

      {/* User Info */}
      <div className="flex flex-col items-center text-white py-6">
        <FaUserCircle className="text-4xl mb-2" />
        <p className="text-md font-semibold">Name</p>
        <p className="text-sm opacity-80">TL / Management</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-2 rounded-md text-sm hover:bg-[#2356b6] transition ${
              location.pathname === item.path ? "bg-[#2356b6]" : ""
            }`}
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
