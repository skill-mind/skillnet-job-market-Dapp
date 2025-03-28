"use client";
import { useState } from "react";
import Payment_history from "./components/payment_history";
import PaymentStats from "./components/paymentStats";
import PaymentStatsWeekly from "./components/paymentsStatsWeekly";
import PaymentStatsMonth from "./components/paymentsStatsMonthly";

const tabs = [
  { id: "alltime", label: "All-Time" },
  { id: "weekly", label: "Weekly" },
  { id: "monthly", label: "Monthly" },
];

type TabType = (typeof tabs)[number]["id"];

const PaymentsTab = () => {
  const [activeTab, setActiveTab] = useState<TabType>("alltime");

  const renderComponent = () => {
    switch (activeTab) {
      case "alltime":
        return <PaymentStats />;
      case "weekly":
        return <PaymentStatsWeekly />;
      case "monthly":
        return <PaymentStatsMonth />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full  mx-auto p-3 mr-8 sm:p-6 bg-black">
      <div className="flex gap-2 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 text-sm rounded-3xl transition-all ${
              activeTab === tab.id
                ? "bg-[#2D2E2D] text-white"
                : "text-white hover:text-gray-300 border border-[#161716]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="text-white flex flex-col gap-2">{renderComponent()}</div>

      <Payment_history />
    </div>
  );
};

export default PaymentsTab;
