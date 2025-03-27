"use client";

import Footer from "@/components/Footer";
import NavbarJobSeeker from "@/components/Navbar-job-seeker";
import { Sidebar } from "./components/jobseeker-sidebar";
import { useContext } from "react";
import { DashBoardContext } from "@/app/useContext/dashboardContext";
import JobSeeker from "./job-seeker";
import Notification from "./notifications/notifications";
import ApplicationSeeker from "./Application-seeker";

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
        return "support";
      case "chatbot":
        return "chatbot";
      default:
        return <JobSeeker />;
    }
  };

  return (
    <div>
      <NavbarJobSeeker />
      <div className="grid grid-cols-[1fr_5fr] w-full">
        <Sidebar />
        <div className="p-4">{renderContent()}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Page;
