"use client";

import Footer from "@/components/Footer";
import NavbarJobSeeker from "@/components/Navbar-job-seeker";
import { Sidebar } from "./components/jobseeker-sidebar";
import { useContext } from "react";
import { DashBoardContext } from "@/app/useContext/dashboardContext";
import JobSeeker from "./job-seeker";
import Notification from "./notifications/notifications";
import ApplicationSeeker from "./applications/Application-seeker";
import Support from "./support/support";

function Page() {
  const { activeSection } = useContext(DashBoardContext);

  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return <JobSeeker />;
      case "appliccations":
        return <ApplicationSeeker />;
      case "notifications":
        return <Notification />;
      case "support":
        return <Support />;
      case "chatbot":
        return "chatbot";
      default:
        return <JobSeeker />;
    }
  };

  return (
    <div>
      <NavbarJobSeeker />
      <div className="grid grid-cols-[1fr_5fr] w-full h-screen overflow-hidden">
        <Sidebar />
        <div className="p-4 overflow-hidden scrollbar-hide overflow-y-auto h-full">
          {renderContent()}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
