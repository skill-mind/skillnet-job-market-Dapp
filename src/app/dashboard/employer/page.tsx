"use client";

import EmployerDashboard from "./employer";
import { useContext } from "react";
import { DashBoardContext } from "@/app/useContext/dashboardContext";
import JobOpening from "./job-openings/job-openings";
import Notifications from "./notifications/notifications";
import UserPage from "./user-profile/page";
import Support from "./support/support";
import PaymentsTab from "./payments/payments";

function Page() {
  const { activeSection } = useContext(DashBoardContext);

  const renderContent = () => {
    switch (activeSection) {
      case "profile":
        return <UserPage />;
      case "home":
        return <EmployerDashboard />;
      case "job openings":
        return <JobOpening />;
      case "notifications":
        return <Notifications />;
      case "support":
        return <Support />;
      case "payments":
        return <PaymentsTab />;

      default:
        return <EmployerDashboard />;
    }
  };

  return <div className="mx-auto">{renderContent()}</div>;
}

export default Page;
