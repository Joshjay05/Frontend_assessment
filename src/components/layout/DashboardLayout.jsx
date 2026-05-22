import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const DashboardLayout = () => {
  return (
    <section className="flex min-h-screen gap-6 bg-gray-50">
      <Sidebar />

      <article className="lg:ml-55 lg:flex-1 lg:flex lg:flex-col lg:min-h-screen overflow-x-hidden">
        <Navbar />
        <div className="lg:flex-1  lg:overflow-y-auto lg:bg-[#F6F6F6] lg:mx-[3%]">
          <Outlet />
        </div>
      </article>
    </section>
  );
};

export default DashboardLayout;
