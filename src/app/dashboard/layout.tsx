import Navbar from "@/components/admindashboard/Navbar";
import Sidebar from "@/components/admindashboard/SideNavbar";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div>
      <Navbar />
      <div className="flex overflow-y-auto">
        <div className="hidden sm:block w-[300px] h-[674px] bg-[#161716]">
          <Sidebar />
        </div>

        <main className="flex-1 bg-gray-100 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
