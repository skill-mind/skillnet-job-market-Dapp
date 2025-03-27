"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { IoNotificationsOutline, IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { IoBanSharp } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { ChevronDown, Headphones, Home, Users, Briefcase, GraduationCap, School } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  icon?: React.ReactNode;
};

interface NavbarProps {
  logo?: string;
  navItems?: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({
  
}) => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="relative">
      <div className="w-full px-4  md:px-[86px]">
        <div className="flex items-center gap-[250px] justify-between h-[80px]">
          {/* Logo */}
          <div>
            <Link
              href="/"
              className="text-lg font-bold text-gray-800 dark:text-white"
            >
              <Image src="/skillnet-white logo.png" alt="logo" width={50} height={50} />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <button 
              onClick={toggleSidebar} 
              className="text-white focus:outline-none"
            >
              <IoMenuOutline className="h-6 w-6" />
            </button>
            <button 
              onClick={toggleMobileMenu} 
              className="text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <IoCloseOutline className="h-6 w-6" /> : <HiOutlineDotsVertical className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-between  items-center w-full">
            <div className="flex items-center space-x-2">
              <h1>User management</h1>
              <h2 className="border border-[#2F302F] flex items-center h-5"></h2>
              <h3>Glance</h3>
            </div>

            <div className="flex items-center gap-5">
              <div className="flex items-center gap-1">
                <IoNotificationsOutline className="h-5 w-10" />
                <div className="relative w-full max-w-md">
                  <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 border border-[#1F1F1F] bg-[#1F1F1F] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-main"
                  />
                </div>
              </div>
              <div className="flex items-center border border-[#1F1F1F] rounded-md px-6 py-2 gap-2">
                <IoBanSharp />
                <p>Ban users</p>
              </div>

              <div className="flex items-center bg-[#161716] rounded-md px-[25px] gap-2 py-2">
                <div className="flex items-center gap-2">
                  <Image src="/Dp.png" alt="Dp" width={20} height={50} />
                  <p>osatuyipikin.braavos.eth</p>
                  <div>
                    <HiOutlineDotsVertical />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Sidebar */}
          {isSidebarOpen && (
            <div className="fixed top-0 left-0 w-64 h-full bg-[#1F1F1F] z-50 md:hidden">
              <div className="p-4 text-white h-full flex flex-col justify-between">
                <div>
                  <button
                    className="flex items-center justify-between w-full p-3 rounded-lg bg-[#2F302F] mb-4"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <div className="flex items-center gap-2">
                      <Image
                        src="/addm.png"
                        alt="dpm"
                        height={20}
                        width={20}
                      />
                      <span className="text-sm">SkillNet Admin</span>
                    </div>
                    <IoCloseOutline className="h-6 w-6" />
                  </button>

                  <nav className="space-y-2">
                    <MobileNavItem icon={Home} label="User Management" href="/dashboard/user-management" isActive={pathname === "/dashboard/user-management"} />
                    <MobileNavItem icon={Users} label="Job Seekers" href="/dashboard/job-seekers" isActive={pathname === "/dashboard/job-seekers"} />
                    <MobileNavItem icon={Briefcase} label="Employer Management" href="/dashboard/employer-management" isActive={pathname === "/dashboard/employer-management"} />
                    <MobileNavItem icon={GraduationCap} label="Tutor Management" href="/dashboard/tutor-management" isActive={pathname === "/dashboard/tutor-management"} />
                    <MobileNavItem icon={School} label="Institution Management" href="/dashboard/institution-management" isActive={pathname === "/dashboard/institution-management"} />
                  </nav>
                </div>

                <div className="p-3 flex items-center gap-2 cursor-pointer">
                  <Headphones className="text-white" />
                  <span>AI Chat Bot</span>
                </div>
              </div>
            </div>
          )}

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-[#161716] md:hidden">
              <div className="flex flex-col p-4 space-y-4">
                <div className="flex items-center space-x-2">
                  <h1 className="text-white">User management</h1>
                  <h2 className="border border-[#2F302F] flex items-center h-5"></h2>
                  <h3 className="text-white">Glance</h3>
                </div>

                <div className="flex items-center gap-1">
                  <IoNotificationsOutline className="h-5 w-10 text-white" />
                  <div className="relative w-full">
                    <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full pl-10 pr-4 py-2 border border-[#1F1F1F] bg-[#1F1F1F] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-main"
                    />
                  </div>
                </div>

                <div className="flex items-center border border-[#1F1F1F] rounded-md px-6 py-2 gap-2">
                  <IoBanSharp />
                  <p>Ban users</p>
                </div>

                <div className="flex items-center bg-[#161716] rounded-md px-[25px] gap-2 py-2">
                  <div className="flex items-center gap-2">
                    <Image src="/Dp.png" alt="Dp" width={20} height={50} />
                    <p>osatuyipikin.braavos.eth</p>
                    <div>
                      <HiOutlineDotsVertical />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

// Mobile Nav Item Component
interface MobileNavItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  isActive: boolean;
}

const MobileNavItem = ({ icon: Icon, label, href, isActive }: MobileNavItemProps) => (
  <Link 
    href={href} 
    className={`flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 cursor-pointer ${isActive ? "bg-[#2D2E2D]" : "hover:bg-gray-800"}`}
  >
    <Icon className="text-white w-5 h-5" />
    <span className="text-sm">{label}</span>
  </Link>
);

export default Navbar;