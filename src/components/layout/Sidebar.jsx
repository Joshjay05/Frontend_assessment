import { NavLink, useNavigate } from "react-router-dom";
import {
  User,
  Users,
  MessageSquare,
  TrendingUp,
  DollarSign,
  Settings,
  LogOut,
} from "lucide-react";
import { useAuthContext } from "../../context/AuthContext";
import mily from "../../assets/emily.png";
import logo from "../../assets/logo.png";

const NAV_ITEMS = [
  { label: "My Portfolio", path: "/dashboard", icon: User },
  { label: "My Group", path: "/dashboard/group", icon: Users },
  { label: "Messages", path: "/dashboard/messages", icon: MessageSquare },
  { label: "Analytics", path: "/dashboard/analytics", icon: TrendingUp },
  { label: "Pack", path: "/dashboard/pack", icon: DollarSign },
  { label: "Settings", path: "/dashboard/settings", icon: Settings },
];

const Sidebar = () => {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const ismobile = window.innerWidth < 640;

  return (
    <aside
      className={`hidden lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-63 bg-white border-r border-gray-100 lg:flex flex-col 
      `}
    >
      <div className="px-6 py-5 border-b border-gray-100">
        <div className="flex items-center gap-2 w-30 h-9 top-22.25 left-28.5">
          <img src={logo} alt="Logo" className="w-full h-full" />
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 overflow-y-auto">
        <ul className="flex flex-col gap-1">
          {NAV_ITEMS.map(({ label, path, icon: Icon }) => (
            <li key={path}>
              <NavLink
                to={path}
                end={path === "/dashboard"}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors
                   ${
                     isActive
                       ? "text-[#FF8600] bg-orange-50 border-l-4 border-[#FF8600] rounded-l-none"
                       : "text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                   }`
                }
              >
                <Icon className="w-4 h-4 shrink-0" />
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-4 py-4">
        <div className="relative flex flex-col items-center gap-3  bg-white rounded-2xl p-5 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-gray-100 w-50 h-37 px-2">
          <div className="absolute -top-6 w-15 h-15 rounded-full bg-orange-100 overflow-hidden">
            <img
              src={mily}
              alt="User Avatar"
              className="w-full h-full object-center"
            />
          </div>
          <div className="text-center mt-6">
            <p className="text-sm font-semibold text-gray-800">
              {user?.first_name ?? "Theresa"} {user?.last_name ?? "Milly"}
            </p>
            <p className="text-xs text-gray-400">
              {user?.role ?? "Influencer"}
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 w-full justify-center bg-orange-50 text-[#FF8600] text-xs font-semibold px-4 py-2 rounded-xl hover:bg-orange-100 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
