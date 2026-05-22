// import { useLocation } from "react-router-dom";
// import {
//   Search,
//   Plus,
//   Bell,
//   XIcon,
//   MenuIcon,
// } from "lucide-react";
// import { useState } from "react";
// import Sidebar from "./Sidebar";
// const ROUTE_TITLES = {
//   "/dashboard": "My Portfolio",
//   "/dashboard/group": "My Group",
//   "/dashboard/messages": "Messages",
//   "/dashboard/analytics": "Analytics",
//   "/dashboard/pack": "Pack",
//   "/dashboard/settings": "Settings",
// };

// const Navbar = () => {
//   const { pathname } = useLocation();
//   const title = ROUTE_TITLES[pathname] ?? "Dashboard";

//   const [isMobileOpen, setIsMobileOpen] = useState(false);
//   return (
//     <header className="flex justify-between lg:grid lg:grid-cols-2  items-center  lg:px-8 py-4 px-1  bg-[#F6F6F6]  ">
//       <div className="flex items-center gap-2">
//         <button
//           className="lg:hidden p-2 rounded-md text-gray-500 hover:bg-gray-50 transition-colors"
//           onClick={() => setIsMobileOpen((prev) => !prev)}
//         >
//           {isMobileOpen ? <MenuIcon /> : <XIcon />}
//         </button>
//         <h1 className="lg:pl-4 text-sm md:text-xl font-bold text-gray-900">
//           {title}
//         </h1>
//       </div>

//       <div className="flex justify-around items-center gap-3  ">
//         <div className="relative bg-white border border-white rounded-2xl p-0 shadow-[0_4px_24px_rgba(0,0,0,0.02)] w-auto lg:w-106 ">
//           <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-900" />
//           <input
//             type="text"
//             placeholder="Search"
//             className="pl-9 pr-4 py-2 text-sm rounded-xl w-full  focus:outline-none focus:ring-1 focus:ring-[#FF8600] focus:border-[#FF8600] transition-all"
//           />
//         </div>

//         <button className="w-9 h-9 rounded-full bg-white border border-white  p-0 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors">
//           <Plus className="w-4 h-4 text-2xl font-bold text-gray-900" />
//         </button>

//         <button className="relative w-9 h-9 rounded-full border border-white flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors bg-white  p-0 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
//           <Bell className="w-4 h-4 text-2xl font-bold text-gray-900" />
//           <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white" />
//         </button>
//       </div>
//       {isMobileOpen && <Sidebar />}
//     </header>
//   );
// };

// export default Navbar;
import { useLocation } from "react-router-dom";
import { Search, Plus, Bell, XIcon, MenuIcon } from "lucide-react";

const ROUTE_TITLES = {
  "/dashboard": "My Portfolio",
  "/dashboard/group": "My Group",
  "/dashboard/messages": "Messages",
  "/dashboard/analytics": "Analytics",
  "/dashboard/pack": "Pack",
  "/dashboard/settings": "Settings",
};

const Navbar = ({ isMobileOpen, setIsMobileOpen }) => {
  const { pathname } = useLocation();
  const title = ROUTE_TITLES[pathname] ?? "Dashboard";

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-8 bg-[#F6F6F6] shrink-0">
      <div className="flex items-center gap-2">
        <button
          className="lg:hidden p-2 rounded-xl bg-white shadow-sm border border-gray-100 text-gray-700 active:scale-95 transition-all"
          onClick={() => setIsMobileOpen((prev) => !prev)}
        >
          {isMobileOpen ? (
            <XIcon className="w-5 h-5" />
          ) : (
            <MenuIcon className="w-5 h-5" />
          )}
        </button>
        <h1 className="pl-2 lg:pl-4 text-base md:text-xl font-bold text-gray-900">
          {title}
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative bg-white border border-gray-100 rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.02)] hidden sm:block w-48 lg:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="pl-9 pr-4 py-2 text-sm rounded-xl w-full bg-transparent focus:outline-none"
          />
        </div>

        <button className="w-9 h-9 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-700 hover:bg-gray-50">
          <Plus className="w-4 h-4 font-bold" />
        </button>

        <button className="relative w-9 h-9 rounded-full bg-white border border-gray-100 shadow-sm flex items-center justify-center text-gray-700 hover:bg-gray-50">
          <Bell className="w-4 h-4" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
