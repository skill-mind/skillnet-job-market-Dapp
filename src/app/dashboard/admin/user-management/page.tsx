"use client";
import { useState } from "react";
import Image from "next/image";

const Page = () => {
  const [activeTab, setActiveTab] = useState("Job Seekers");

  const users = [
    {
      name: "Flora Osatuyi",
      wallet: "0x71C...F3E2",
      date: "Feb 15, 2025",
      courses: 5,
      jobs: 12,
      status: "Active",
    },
    {
      name: "Ben Ejembi",
      wallet: "0x82A...DAF1",
      date: "Jan 27, 2025",
      courses: 8,
      jobs: 7,
      status: "Active",
    },
  ];

  const tabs = [
    "Job Seekers",
    "Employers",
    "Tutors",
    "Institutions",
    "Banned Users",
  ];

  const activeJobListings = [
    {
      name: "Senior Blockchain Dev",
      postedDate: "Feb 15, 2025",
      applications: 24,
      interviews: 5,
      status: "Active",
    },
    {
      name: "Product Designer",
      postedDate: "Feb 10, 2025",
      applications: 18,
      interviews: 3,
      status: "Active",
    },
  ];

  const recentHires = [
    {
      name: "Ben Ejembi",
      position: "UI Designer",
      hireDate: "Feb 10, 2025",
      certificateVerification: "Blockchain Verified",
    },
    {
      name: "Flora Osatuyi",
      position: "UX Researcher",
      hireDate: "Feb 05, 2025",
      certificateVerification: "Blockchain Verified",
    },
  ];

  const customExams = [
    {
      title: "JavaScript Test",
      creationDate: "Feb 10, 2025",
      participants: 24,
      avgScore: "70%",
      status: "Active",
    },
    {
      title: "Python Analysis",
      creationDate: "Feb 22, 2025",
      participants: 14,
      avgScore: "80%",
      status: "Active",
    },
  ];

  const companyDetails = [
    { h1: "0xD8E...C9F5", h2: "Wallet Address" },
    { h1: "24", h2: "Job Posted" },
    { h1: "187", h2: "Applicants Reviewed" },
    { h1: "12", h2: "People Hired" },
    { h1: "8", h2: "Exams Created" }
  ];

  return (
    <div className="p-4 md:px-[80px] bg-black text-white min-h-screen pb-[100px]">
      {/* Stat Cards - Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { icon: "/percent.png", count: "1273", label: "Total Users" },
          { icon: "/bagicon.png", count: "50", label: "Total Users" },
          { icon: "/bagicon.png", count: "150", label: "certifications" },
          { icon: "/ccccr.png", count: "17", label: "Platform Revenue" }
        ].map((card, index) => (
          <div key={index} className="bg-[#161716] p-4 sm:p-10 rounded-lg flex items-center gap-5">
            <div>
              <Image src={card.icon} width={50} height={50} alt="Icon" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold">{card.count}</h3>
              <p className="text-gray-400">{card.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* User Management - Responsive Tabs and Table */}
      <div className="mt-[100px]">
        <h2 className="text-lg font-semibold">User Management</h2>

        <div className="flex flex-wrap space-x-2 sm:space-x-4 w-full mt-4 border-b border-gray-700 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-2 sm:px-4 py-2 rounded-t-lg whitespace-nowrap ${
                activeTab === tab ? "bg-[#2C2F35] text-white" : "text-gray-400"
              }`}
            >
              {tab} ({Math.floor(Math.random() * 500)}) 
            </button>
          ))}
        </div>

        {/* Mobile-friendly Table */}
        <div className="mt-4 w-full rounded-lg overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#161716] text-gray-400">
                <th className="p-3">Name</th>
                <th className="p-3 hidden md:table-cell">Wallet Address</th>
                <th className="p-3 hidden sm:table-cell">Registration Date</th>
                <th className="p-3 hidden sm:table-cell">Courses Taken</th>
                <th className="p-3 hidden sm:table-cell">Jobs Applied</th>
                <th className="p-3">Status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-b border-[#31283A]">
                  <td className="p-3">{user.name}</td>
                  <td className="p-3 hidden md:table-cell">{user.wallet}</td>
                  <td className="p-3 hidden sm:table-cell">{user.date}</td>
                  <td className="p-3 hidden sm:table-cell">{user.courses}</td>
                  <td className="p-3 hidden sm:table-cell">{user.jobs}</td>
                  <td className="p-3">{user.status}</td>
                  <td className="p-3">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <button className="border border-[#2D2E2D] px-3 py-1 rounded-lg text-xs sm:text-sm">
                        View
                      </button>
                      <button className="px-3 border border-[#2D2E2D] py-1 rounded-lg text-xs sm:text-sm">
                        Ban
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-right w-full mt-2">
          <button className="text-white">View All</button>
        </div>
      </div>

      {/* Company Details - Responsive Layout */}
      <div className="mt-[100px] flex flex-col gap-5">
        <h1>User Detail</h1>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5 items-center">
          <Image src="/addm.png" alt="logo" width={80} height={80} />

          <div className="flex flex-col gap-2 text-center sm:text-left">
            <h1 className="text-[#FCFCFC] text-2xl">Company Name</h1>
            <h2 className="text-[#ABABAB]">Account Type</h2>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-[100px]">
              <h3 className="text-[#ABABAB]">
                Company Size:{" "}
                <span className="text-bold text-white">101-500 Employees</span>
              </h3>
              <h3 className="text-[#ABABAB]">
                Location:{" "}
                <span className="text-bold text-white">Kaduna, Nigeria</span>
              </h3>
              <h3 className="text-[#ABABAB]">
                Joined:{" "}
                <span className="text-bold text-white">Jan 12 2025</span>
              </h3>
            </div>
          </div>
        </div>
        
        {/* Responsive Company Details Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
          {companyDetails.map((details, index) => (
            <div 
              key={index} 
              className="h-[100px] bg-[#161716] rounded-md flex flex-col justify-center items-center"
            >
              <h1 className="text-sm sm:text-base">{details.h1}</h1>
              <h2 className="text-xs sm:text-sm text-gray-400">{details.h2}</h2>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive Tables for Job Listings, Hires, and Exams */}
      {[
        { 
          title: "Active Job Listings", 
          data: activeJobListings, 
          headers: ["Name", "Posted Date", "Applications", "Interviews", "Status"] 
        },
        { 
          title: "Recent Hires", 
          data: recentHires, 
          headers: ["Employee Name", "Position", "Hire Date", "Certificate Verification"] 
        },
        { 
          title: "Custom Exams Created", 
          data: customExams, 
          headers: ["Exam Title", "Creation Date", "Participants", "Avg Score", "Status"] 
        }
      ].map(({ title, data, headers }) => (
        <div key={title} className="mt-[100px] w-full">
          <h2 className="text-lg font-semibold">{title}</h2>
          <div className="mt-4 rounded-lg overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-[#161716] text-gray-400">
                  {headers.map((header, index) => (
                    <th key={index} className="p-3 hidden sm:table-cell">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="border-b border-[#31283A]">
                    {Object.values(item).map((value, colIndex) => (
                      <td key={colIndex} className="p-3  sm:table-cell">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;