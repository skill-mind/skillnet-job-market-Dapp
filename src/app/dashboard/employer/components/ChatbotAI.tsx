import { X, Search, MoreVertical, Mic, Smile, Send } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface ChatModalProps {
  onClose: () => void;
}

export default function ChatModal({ onClose }: ChatModalProps) {
  const [messages, setMessages] = useState([
    {
      text: "Gm Gm, Satoshi. I have been following your teachings and it's been really helpful to me. I do have a thing to suggest regarding one of your programs",
      time: "12:43 AM",
      sender: "user",
    },
    {
      text: "Oh that’s awesome. I’m glad my resources have been helpful and I’m open to helpful suggestions.",
      time: "12:45 AM",
      sender: "bot",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to the bottom of the messages when a new message is added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    // Add the new message to the chat
    setMessages((prev) => [
      ...prev,
      { text: newMessage, time: "12:50 AM", sender: "user" },
    ]);
    setNewMessage("");

    // Simulate a bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { text: "Thanks for your message!", time: "12:51 AM", sender: "bot" },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center">
      <div className="bg-[#101110] border border-[#252625] w-[650px] rounded-lg shadow-lg p-4 relative">
        {/* Header */}
        <div className="flex justify-between items-center border-b border-[#252625] pb-3">
          <button
            onClick={onClose}
            className="flex items-center text-white space-x-2"
          >
            <X size={18} />
            <span>Back</span>
          </button>
          <span className="text-white font-semibold">Skillnet Chatbot</span>
          <div className="flex space-x-3">
            <Search className="text-gray-400 cursor-pointer" size={18} />
            <MoreVertical className="text-gray-400 cursor-pointer" size={18} />
          </div>
        </div>

        {/* Messages */}
        <div className="mt-4 space-y-3 overflow-y-auto h-[500px]">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-3 rounded-lg max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-[#202120] text-white"
                    : "bg-[#161716] text-white"
                }`}
              >
                <p className="text-sm">{msg.text}</p>
                <span className="text-gray-300 text-xs block text-right mt-1">
                  {msg.time}
                </span>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="flex items-center mt-4 border-t border-[#252625] pt-3">
          <button className="p-2">
            <Mic className="text-gray-400" size={18} />
          </button>
          <button className="p-2">
            <Smile className="text-gray-400" size={18} />
          </button>
          <input
            type="text"
            placeholder="Type a message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 bg-transparent text-white px-3 outline-none"
          />
          <button
            onClick={handleSendMessage}
            className="p-2 bg-green-600 rounded-full"
          >
            <Send className="text-white" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
