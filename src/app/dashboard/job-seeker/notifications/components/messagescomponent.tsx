"use client";
import {
  CheckCheck,
  EllipsisVertical,
  Search,
  Mic,
  Send,
  Smile,
  ChevronLeft,
} from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import userProfile2 from "../../../../../../public/img/astronaut.svg";

function Messages() {
  const [selectedFilter, setSelectedFilter] = useState<string>("New"); // Track the selected filter

  // Sample messages (this can be replaced with actual dynamic data)
  const messages = [
    {
      id: 1,
      name: "Satoshi Nakamoto",
      message: "Hi, how are you?",
      status: "New",
    },
    {
      id: 2,
      name: "Elon Musk",
      message: "Hey, we need to talk.",
      status: "Archived",
    },
  ];

  // Filter messages based on the selected filter
  const filteredMessages = messages.filter((msg) =>
    selectedFilter === "New" ? true : msg.status === selectedFilter
  );

  return (
    <div className="flex w-full h-screen">
      <div className="flex w-full h-full">
        {/* Side Nav containing messages */}
        <div className="w-full md:w-1/3 lg:w-1/3 p-4 border-r border-[#252625] overflow-hidden md:block hidden">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-wrap gap-2">
              {/* Filter Buttons */}
              {["New", "Archived"].map((filter) => (
                <div
                  key={filter}
                  className={`border border-[#252625] p-1 text-xs text-center cursor-pointer hover:bg-[#313130] transition-colors duration-300 rounded-[0.4rem] flex-1 min-w-[60px] ${
                    selectedFilter === filter ? "bg-[#313130]" : ""
                  }`}
                  onClick={() => setSelectedFilter(filter)} // Update selected filter on click
                >
                  {filter}
                </div>
              ))}
            </div>

            {/* Display Filtered Messages */}
            {filteredMessages.map((msg) => (
              <ContactMessage
                key={msg.id}
                imgSrc={userProfile2}
                name={msg.name}
                message={msg.message}
              />
            ))}
          </div>
        </div>

        {/* Chat editor screen */}
        <div className="w-full md:w-2/3 lg:w-2/3 flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-[#252625]">
            <div className="flex items-center space-x-3">
              <ChevronLeft className="block md:hidden" />
              <Image
                src={userProfile2}
                alt="user profile image"
                width={40}
                height={40}
                className="rounded-full"
              />
              <h4 className="font-semibold text-lg text-[#b9b9b9]">
                Satoshi Nakamoto
              </h4>
            </div>

            <div className="flex items-center space-x-4">
              <Search size={20} color="#b9b9b9" />
              <EllipsisVertical size={20} color="#b9b9b9" />
            </div>
          </div>

          <div className="flex-grow p-4 overflow-auto"></div>
          <div className="p-4 flex items-center space-x-4">
            <div className="p-1 pl-4 pr-4 flex items-center space-x-4 border-[#252625] border rounded-[0.5em] w-full">
              <div className="flex space-x-4">
                <Mic size={24} color="#555" className="cursor-pointer" />
                <Smile size={24} color="#555" className="cursor-pointer" />
              </div>
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-grow p-2 border-l border-r bg-transparent border-[#252625] text-[#555] placeholder:text-[#888] placeholder:italic focus:outline-none focus:border-[#555]"
              />
              <Send
                size={34}
                color="#555"
                className="cursor-pointer bg-[#A8C789] hover:bg-[#3a3a3a] hover:text-white p-2 rounded-full transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const ContactMessage = ({
  name,
  message,
  imgSrc,
}: {
  name: string;
  message: string;
  imgSrc: string | StaticImageData;
}) => {
  return (
    <div className="flex items-center justify-center space-x-4 p-4 pt-0 mt-0 w-full m-0">
      <div className="min-w-[60px] h-[60px] sm:w-[60px] sm:h-[60px] overflow-hidden rounded-full bg-gray-300 flex justify-center items-center">
        <Image
          src={imgSrc}
          width={60}
          height={60}
          alt="user profile image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col w-full pr-4 pb-2 border-b border-[#252625]">
        <div className="flex items-center space-x-2">
          <h4 className="text-xs font-semibold text-[#b9b9b9]">{name}</h4>
        </div>
        <div className="text-xs text-[#727272] flex items-center space-x-3">
          <CheckCheck color="white" size={18} />
          <p className="truncate text sm w-full">{message}</p>
          <div className="flex flex-col items-end ml-4">
            <small className="text-[#bbb]">Friday</small>
            <EllipsisVertical
              size={20}
              color="#555"
              className="mt-1 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
