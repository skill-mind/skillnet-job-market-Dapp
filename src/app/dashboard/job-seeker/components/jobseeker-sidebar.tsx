"use client";
import Image from "next/image";
import { ReactNode, useContext } from "react";
import homeIcon from "../../../../../public/img/tutor icon/homeDashboard.svg";
import jobIcon from "../../../../../public/img/permanent-job.svg";
import notificationIcon from "../../../../../public/img/notification.svg";
import chatbot from "../../../../../public/chat-bot.png";
import support from "../../../../../public/support.svg";
import { DashBoardContext } from "@/app/useContext/dashboardContext";

interface NavItemProps {
  icon: ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

function NavItem({ icon, label, active = false, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3.5 w-full px-4 py-2.5 rounded-lg transition-colors ${
        active ? "bg-[#FFFFFF1A]" : "hover:bg-[#FFFFFF1A]"
      }`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

export function Sidebar() {
  const { activeSection, setActiveSection: onSectionChange } =
    useContext(DashBoardContext);

  return (
    <aside className="w-64 border-r relative min-h-[90vh] bg-[#161716] border-gray-800 overflow-y-auto">
      <div className="p-4 h-[90%]  overflow-y-auto scrollbar-hide scroll-smooth">
        <nav className="space-y-2">
          <NavItem
            label="Home"
            active={activeSection === "home"}
            icon={<Image src={homeIcon} alt="Home" height={20} width={20} />}
            onClick={() => onSectionChange("home")}
          />
          <NavItem
            icon={<Image src={jobIcon} alt="Jo" height={20} width={20} />}
            label="Applications"
            active={activeSection === "appliccations"}
            onClick={() => onSectionChange("appliccations")}
          />
          <NavItem
            icon={
              <Image
                src={notificationIcon}
                alt="Notification"
                height={20}
                width={20}
              />
            }
            label="Notifications"
            active={activeSection === "notifications"}
            onClick={() => onSectionChange("notifications")}
          />

          <div className="absolute bottom-7 w-[85%] space-y-3">
            <NavItem
              icon={<Image src={support} alt="Jo" height={20} width={20} />}
              label="Support"
              active={activeSection === "support"}
              onClick={() => onSectionChange("support")}
            />

            <NavItem
              icon={<Image src={chatbot} alt="Jo" height={20} width={20} />}
              label="Ai Chatbot"
              active={activeSection === "chatbot"}
              onClick={() => onSectionChange("chatbot")}
            />
          </div>
        </nav>
      </div>
    </aside>
  );
}
