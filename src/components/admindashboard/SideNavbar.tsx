"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Headphones, Home, Users, Briefcase, GraduationCap, School } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

 
  

  return (
    <div className=" text-white h-[674px]  p-4 flex flex-col justify-between">

      
      <div>
        <button
          className="flex items-center justify-between w-full p-3 rounded-lg bg-[#2F302F]"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex  items-center gap-2">
           <Image
           src="/addm.png"
           alt="dpm"
           height={20}
           width={20}
           />
            <span className=" text-sm">SkillNet Admin</span>
          </div>
          <ChevronDown className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>

      
        <nav className="mt-4 space-y-2">
          <NavItem icon={Home} label="User Management" href="/dashboard/user-management" isActive={pathname === "/dashboard/user-management" } />
          <NavItem icon={Users} label="Job Seekers" href="/dashboard/job-seekers" isActive={pathname === "/dashboard/job-seekers" } /> 
          <NavItem icon={Briefcase} label="Employer Management" href="/dashboard/employer-management"isActive={pathname === "/dashboard/employer-management" } />
          <NavItem icon={GraduationCap} label="Tutor Management" href="/dashboard/tutor-management"  isActive={pathname === "/dashboard/tutor-management" }/>
          <NavItem icon={School} label="Institution Management" href="/dashboard/institution-management" isActive={pathname === "/dashboard/institution-management" } />
        </nav>
      </div>

      
      <div className="p-3   flex items-center gap-2 cursor-pointer">
        <Headphones className="text-white" />
        <span>AI Chat Bot</span>
      </div>
    </div>
  );
}


interface NavItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  isActive: boolean;
}

const NavItem = ({ icon: Icon, label, href, isActive }: NavItemProps) => (
  <Link href={href} className={`flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 cursor-pointer ${isActive ? "bg-[#2D2E2D]" : "hover:bg-gray-800"}` }>
    <Icon className="text-white w-5 h-5" />
    <span className="text-sm">{label}</span>
  </Link>
);
