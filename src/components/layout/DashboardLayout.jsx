import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const DashboardLayout = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <section className="flex min-h-screen bg-[#F6F6F6] relative">
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setIsMobileOpen(false)}
          />

          <div className="relative w-64 h-full animate-in slide-in-from-left duration-200">
            <Sidebar isMobile onClose={() => setIsMobileOpen(false)} />
          </div>
        </div>
      )}

      <article className="w-full lg:pl-64 flex flex-col min-h-screen overflow-x-hidden">
        <Navbar isMobileOpen={isMobileOpen} setIsMobileOpen={setIsMobileOpen} />
        <div className="flex-1 overflow-y-auto bg-[#F6F6F6] px-4 lg:px-[3%] pb-6">
          <Outlet />
        </div>
      </article>
    </section>
  );
};

export default DashboardLayout;
