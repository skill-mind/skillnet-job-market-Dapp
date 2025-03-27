"use client";
import React, { useState } from "react";
import Jobseekermodal from "@/components/admindashboard/jobseekermodal";

const Page = () => {
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleOpen = (user: any) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const users = [
    {
      name: "Flora Osatuyi",
      email: "Flora@gmail.com",
      wallet: "0x71C...F3E2",
      courses: "5",
      date: "Feb 15, 2025",
      status: "Active",
      job: "56"
    },
    {
      name: "Ben Ejembi",
      email: "Ben@gmail.com",
      wallet: "0x71C...F3E2",
      courses: "5",
      date: "Jan 27, 2025",
      status: "Active",
       job: "56"
    },
  ];

  return (
    <div className="p-4 sm:px-6 md:px-[40px] lg:px-[80px] bg-black text-white min-h-screen pb-[50px] md:pb-[100px]">
      <div className="mt-[50px] md:mt-[100px]">
        <h2 className="text-base md:text-lg font-semibold mb-4">Employers List</h2>

        <div className="w-full rounded-lg overflow-x-auto">
          <table className="w-full text-left text-xs md:text-sm">
            <thead>
              <tr className="bg-[#161716] text-gray-400">
                <th className="p-2 md:p-3">Company Name</th>
                <th className="p-2 md:p-3 hidden sm:table-cell">Wallet Address</th>
                <th className="p-2 md:p-3">Registered</th>
                <th className="p-2 md:p-3 hidden sm:table-cell">Job Posted</th>
                <th className="p-2 md:p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-b border-[#31283A]">
                  <td className="p-2 md:p-3">
                    <div className="flex items-center space-x-2">
                      <span>{user.name}</span>
                    </div>
                  </td>
                  <td className="p-2 md:p-3 hidden sm:table-cell truncate max-w-[150px]">
                    {user.wallet}
                  </td>
                  <td className="p-2 md:p-3">
                    <span className="inline-block px-2 py-1 rounded text-xs 
                      ">
                      {user.status}
                    </span>
                  </td>
                  <td className="p-2 md:p-3 hidden sm:table-cell">{user.job}</td>
                  <td className="p-2 md:p-3">
                    <div className="flex items-center justify-center">
                      <button
                        className="border border-[#2D2E2D] px-2 py-1 md:px-3 md:py-1 
                        rounded-lg text-xs md:text-sm w-full max-w-[80px] 
                        hover:bg-[#2D2E2D] transition-colors duration-300"
                        onClick={() => handleOpen(user)}
                      >
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination or View All Section */}
        <div className="flex justify-between items-center w-full mt-4 md:mt-5">
          <div className="text-xs text-gray-400">
            Showing {users.length} of {users.length} employers
          </div>
          <button 
            className="text-white text-sm md:text-base hover:underline 
            hover:text-gray-300 transition-colors duration-300"
          >
            View All
          </button>
        </div>
      </div>

      {/* Modal Component */}
      <Jobseekermodal open={open} handleClose={handleClose} user={selectedUser} />
    </div>
  );
};

export default Page;