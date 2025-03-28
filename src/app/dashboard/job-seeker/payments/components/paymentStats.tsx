"use client";
import { Percent } from "lucide-react";
import Payment_history from "./payment_history";
import PaymentStatCard from "./paymentStatsCard";

const stats = [
  {
    value: "$1,500",
    label: "Total Payment",
    icon: <Percent className="text-blue-500" size={30} />,
    bgCol: "bg-blue-500",
  },
  {
    value: "$901,500",
    label: "Balance",
    icon: <Percent className="text-blue-500" size={30} />,
    bgCol: "bg-blue-500",
  },
];

export default function PaymentStats() {
  return (
    <main className="flex-1 pb-2 pt-2 mt-2 mb-4 overflow-scroll scrollbar-hide">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
          <PaymentStatCard key={index} {...stat} />
        ))}
      </div>
    </main>
  );
}
