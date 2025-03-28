"use client";
import { MessageSquare, Percent, Folder } from "lucide-react";
import EmployerStatCard from "./components/employer-stats";
import QuickActionButton from "./components/employer-card";
import Payment_history from "./payment_history";

const stats = [
  {
    value: "$1,500",
    label: "Total Money Disbursed",
    icon: <Percent className="text-blue-500" size={30} />,
    bgCol: "bg-blue-500",
  },
];

export default function Tutor() {
  return (
    <main className="flex-1 px-8 pb-8 pt-2 mt-2 mb-4 overflow-scroll scrollbar-hide">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <EmployerStatCard key={index} {...stat} />
        ))}
      </div>
      <section>
        <Payment_history />
      </section>
    </main>
  );
}
