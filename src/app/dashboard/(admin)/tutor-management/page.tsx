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
      job: "56",
      expertise: "data sci",
      rating: "5.7"
    },
    {
      name: "Ben Ejembi",
      email: "Ben@gmail.com",
      wallet: "0x71C...F3E2",
      courses: "5",
      date: "Jan 27, 2025",
      status: "Active",
      job: "56",
      expertise: "web dev",
      rating: "5.7"
    },
  ];

  return (
    <div className="p-4 md:px-[40px] lg:px-[80px] bg-black text-white min-h-screen pb-[50px] md:pb-[100px]">
      <div className="mt-[50px] md:mt-[100px]">
        <h2 className="text-base md:text-lg font-semibold mb-4">Tutor List</h2>

        <div className="w-full rounded-lg overflow-x-auto">
          <table className="w-full text-left text-xs md:text-sm">
            <thead>
              <tr className="bg-[#161716] text-gray-400">
                <th className="p-2 md:p-3">Name</th>
                <th className="p-2 md:p-3 hidden md:table-cell">Expertise</th>
                <th className="p-2 md:p-3">Rating</th>
                <th className="p-2 md:p-3">Courses</th>
                <th className="p-2 md:p-3 hidden md:table-cell">Status</th>
                <th className="p-2 md:p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-b border-[#31283A]">
                  <td className="p-2 md:p-3">{user.name}</td>
                  <td className="p-2 md:p-3 hidden md:table-cell">{user.expertise}</td>
                  <td className="p-2 md:p-3">{user.rating}</td>
                  <td className="p-2 md:p-3">{user.courses}</td>
                  <td className="p-2 md:p-3 hidden md:table-cell">{user.status}</td>
                  <td className="p-2 md:p-3">
                    <div className="flex items-center justify-center">
                      <button
                        className="border border-[#2D2E2D] px-2 py-1 md:px-3 md:py-1 rounded-lg text-xs md:text-sm w-full max-w-[80px]"
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

        <div className="text-right w-full mt-4 md:mt-5">
          <button className="text-white text-sm md:text-base hover:underline">
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