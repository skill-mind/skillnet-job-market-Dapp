"use client";
import React from "react";
import Image from "next/image";

interface Student {
  id: string;
  sn: number;
  transactionId: string;
  amount: number;
  date: string;
}

function Payment_history() {
  const students: Student[] = [
    {
      id: "1",
      sn: 1,
      transactionId: "0xe46d0b1039a8f97df2800062dde83010d3de04df2...",
      amount: 15,
      date: "12th Jan, 2025",
    },
    {
      id: "2",
      sn: 1,
      transactionId: "0xe46d0b1039a8f97df2800062dde83010d3de04df2",
      amount: 17,
      date: "12th Jan, 2025",
    },
    {
      id: "3",
      sn: 1,
      transactionId: "0xe46d0b1039a8f97df2800062dde83010d3de04df2",
      amount: 56,
      date: "12th Jan, 2025",
    },
  ];

  return (
    <div className="overflow-y-auto flex-grow w-full md:w-[calc(100vw-405px)] bg-[#101110] text-white">
      <main className="flex-1 flex-grow w-full">
        {/* Students Table */}
        <h1 className="my-2 font-semibold text-lg text-[#FCFCFC]">
          Payment History
        </h1>
        <div className="overflow-x-auto w-full">
          <table className="w-full">
            <thead className="h-[48px]">
              <tr className="text-left text-sm bg-[#161716] p-10 box-border border-zinc-800">
                <th className="font-normal text-zinc-400 px-4 py-3">SN</th>
                <th className="font-normal text-zinc-400 py-[17px] px-[9px]">
                  Transaction ID
                </th>
                <th className="font-normal text-zinc-400 py-[17px] px-[9px]">
                  Amount{" "}
                </th>
                <th className="font-normal text-zinc-400 py-[17px] px-[9px]">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="border-b h-[68px] border-zinc-800"
                >
                  <td className="py-[17px] px-[9px] whitespace-nowrap">
                    {student.sn}
                  </td>
                  <td className="py-[17px] px-[9px] whitespace-nowrap">
                    {student.transactionId}
                  </td>
                  <td className="py-[17px] px-[9px] whitespace-nowrap">
                    ${student.amount}
                  </td>
                  <td className="py-[17px] px-[9px] whitespace-nowrap">
                    {student.date}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Payment_history;
