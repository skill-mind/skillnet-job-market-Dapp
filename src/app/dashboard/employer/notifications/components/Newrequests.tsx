import { useState } from "react";
import questionIcon from "../../../../../../public/questionsimage.svg";
import check_red from "../../../../../../public/checkmark-red.svg";
import check_green from "../../../../../../public/checkmark-green.svg";
import Image from "next/image";
import Link from "next/link";

const questionsNotifications = [
  {
    image: questionIcon,
    time: "15 mins",
    category: "Design",
    content:
      "What videos and materials can you recommend for a beginner started web design",
  },
  {
    image: questionIcon,
    time: "15 mins",
    category: "Design",
    content:
      "What videos and materials can you recommend for a beginner started web design",
  },
  {
    image: questionIcon,
    time: "15 mins",
    category: "Design",
    content:
      "What videos and materials can you recommend for a beginner started web design",
  },
  {
    image: questionIcon,
    time: "15 mins",
    category: "Design",
    content:
      "What videos and materials can you recommend for a beginner started web design",
  },
  {
    image: questionIcon,
    time: "15 mins",
    category: "Design",
    content:
      "What videos and materials can you recommend for a beginner started web design",
  },
];

const Newrequests = () => {
  const [modalType, setModalType] = useState<"accept" | "reject" | null>(null);

  const handleAccept = () => {
    setModalType("accept");
  };

  const handleReject = () => {
    setModalType("reject");
  };

  const closeModal = () => {
    setModalType(null);
  };

  return (
    <>
      {questionsNotifications.map((questionsNotification, index) => (
        <div
          key={index}
          className="w-full flex justify-between items-center p-6 bg-[#161716] rounded-lg "
        >
          <div className="flex items-start sm:items-center justify-start gap-2 sm:gap-[31px]">
            <div className="w-9 h-9 sm:w-[41px] sm:h-[41px] rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
              <Image
                src={questionsNotification.image}
                alt="questions"
                height={100}
                width={100}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex flex-col gap-2 sm:gap-3">
              <h4 className="text-[#6E6E6E] text-xs sm:text-base font-medium flex flex-wrap items-center">
                Submitted {questionsNotification.time} ago
                <div className="bg-[#2F302F] w-[3px] h-3 mx-2 sm:mx-3 hidden sm:block"></div>
                <span className="text-[#3D5682] text-xs sm:text-base ml-0 sm:ml-0 mt-1 sm:mt-0">
                  {questionsNotification.category}
                </span>
              </h4>

              <p className="text-[#CCCCCC] text-sm sm:text-base font-medium max-w-full ">
                {questionsNotification.content}
              </p>
            </div>
          </div>

          <div className="self-start sm:self-auto">
            <button
              onClick={handleReject}
              className="mx-4 border-[1px] border-[#2D2E2D] rounded-lg py-2 sm:py-3 px-4 sm:px-[18px] transition duration-200 ease-in-out active:scale-95 text-white font-bold text-xs sm:text-sm whitespace-nowrap mt-2 sm:mt-0"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="mx-4 border-[1px] border-[#2D2E2D] rounded-lg py-2 sm:py-3 px-4 sm:px-[18px] transition duration-200 ease-in-out active:scale-95 text-white font-bold text-xs sm:text-sm whitespace-nowrap mt-2 sm:mt-0"
            >
              Accept
            </button>
          </div>
        </div>
      ))}

      {modalType === "accept" && (
        <div className="fixed my-auto mt-[350px] h-screen bottom-0 inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-[#202120] flex items-center space-x-5 w-[900px] p-6 rounded-lg">
            <Image src={check_green} alt="icon" />
            <p>You have accepted Jackie Chan’s request to message you</p>
            <button
              onClick={closeModal}
              className=" px-4 py-2 bg-[#343534] text-white rounded-xl"
            >
              Undo
            </button>
          </div>
        </div>
      )}

      {modalType === "reject" && (
        <div className="fixed bottom-0 inset-0 h-screen mt-[350px] bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-[#202120] flex items-center space-x-5 w-[900px] p-6 rounded-lg">
            <Image src={check_red} alt="icon" />
            <p>You have accepted Jackie Chan’s request to message you</p>
            <button
              onClick={closeModal}
              className=" px-4 py-2 bg-[#343534] text-white rounded-xl"
            >
              Undo
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Newrequests;
