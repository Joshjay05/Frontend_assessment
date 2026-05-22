import { NavLink, useNavigate } from "react-router-dom";
import {
  User,
  UsersRound,
  Mail,
  TrendingUp,
  CircleDollarSign,
  Settings,
  LogOut,
} from "lucide-react";
import { useAuthContext } from "../../context/AuthContext";
import mily from "../../assets/emily.png";
import logo from "../../assets/logo.png";

const NAV_ITEMS = [
  { label: "My Portfolio", path: "/dashboard", icon: User },
  { label: "My Group", path: "/dashboard/group", icon: UsersRound },
  { label: "Messages", path: "/dashboard/messages", icon: Mail },
  { label: "Analytics", path: "/dashboard/analytics", icon: TrendingUp },
  { label: "Pack", path: "/dashboard/pack", icon: CircleDollarSign },
  { label: "Settings", path: "/dashboard/settings", icon: Settings },
];

const Sidebar = ({ onClose }) => {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-[#FAFAFA] border-r border-gray-100 flex flex-col">
      <div className="px-6 py-6 flex justify-center items-center">
        <div className="h-9 flex items-center justify-center">
          <img src={logo} alt="Logo" className="h-full object-contain" />
        </div>
      </div>

      <nav className="flex-1 pl-6 py-4 overflow-y-auto">
        <ul className="flex flex-col gap-1.5">
          {NAV_ITEMS.map(({ label, path, icon: Icon }) => (
            <li key={path}>
              <NavLink
                to={path}
                end={path === "/dashboard"}
                onClick={onClose}
                className={({ isActive }) =>
                  `relative flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200
                   ${
                     isActive
                       ? "w-50 text-[#FF8600] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100/40"
                       : "text-gray-400 hover:bg-gray-100/60 hover:text-gray-700"
                   }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-1.5 h-7 bg-[#FF8600] rounded-r-full" />
                    )}
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{label}</span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="px-4 py-4 flex justify-center">
        <div className="relative flex flex-col items-center gap-3 bg-white rounded-2xl p-5 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-gray-100 w-full max-w-50 mt-6">
          <div className="absolute -top-6 w-12 h-12 rounded-full bg-orange-100 overflow-hidden border-2 border-white shadow-sm">
            <img
              src={mily}
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center mt-6">
            <p className="text-xs font-bold text-gray-800 whitespace-nowrap">
              {user?.first_name ?? "Theresa"} {user?.last_name ?? "Milly"}
            </p>
            <p className="text-[10px] text-gray-400 font-medium">
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
