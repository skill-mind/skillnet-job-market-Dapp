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
      rating: "5.7",
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
      rating: "5.7",
    },
  ];

  return (
    <div className="p-4 md:px-[80px] bg-black text-white min-h-screen pb-[100px]">
      <div className="mt-[100px]">
        <h2 className="text-lg font-semibold">Institutions List</h2>

        <div className="mt-4 w-full rounded-lg overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#161716] text-gray-400">
                <th className="p-3"> Name</th>
                <th className="p-3 hidden sm:table-cell">Expertise</th>
                <th className="p-3">Rating</th>
                <th className="p-3">Courses</th>
                <th className="p-3 hidden sm:table-cell">status</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="border-b border-[#31283A]">
                  <td className="p-3">{user.name}</td>
                  <td className="p-3 hidden sm:table-cell">{user.expertise}</td>
                  <td className="p-3">{user.rating}</td>
                  <td className="p-3">{user.job}</td>
                  <td className="p-3">{user.status}</td>
                  <td className="p-3">
                    <div className="flex flex-col sm:flex-row gap-2">
                      <button
                        className="border border-[#2D2E2D] px-3 py-1 rounded-lg text-xs sm:text-sm"
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
          <div className="text-right w-full mt-5">
            <button className="text-white">View All</button>
          </div>
        </div>
      </div>

      {/* Modal Component */}
      <Jobseekermodal
        open={open}
        handleClose={handleClose}
        user={selectedUser}
      />
    </div>
  );
};

export default Page;
