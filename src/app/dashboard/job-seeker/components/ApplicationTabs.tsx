import React, { useState } from "react";
import { ArrowDown, XIcon } from "lucide-react";

const SaveIcon = () => (
  <svg
    width="12"
    height="14"
    viewBox="0 0 12 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.666748 2.33333V12.0573C0.666748 12.6507 1.38475 12.9487 1.80475 12.5287L6.00008 8.33333L10.1954 12.5287C10.6154 12.9487 11.3334 12.6513 11.3334 12.0573V2.33333C11.3334 1.97971 11.1929 1.64057 10.9429 1.39052C10.6928 1.14048 10.3537 1 10.0001 1H2.00008C1.64646 1 1.30732 1.14048 1.05727 1.39052C0.807224 1.64057 0.666748 1.97971 0.666748 2.33333Z"
      stroke="#696969"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const JobListing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full text-white p-6 rounded-lg flex flex-col lg:flex-row gap-6">
      {/* Left Section */}
      <div className="lg:w-[1400px] text-[#BBBBBB] w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Quality Assurance Manager</h2>
          <button
            className="bg-[#D0EFB1] px-4 py-2 rounded text-black"
            onClick={() => setIsModalOpen(true)}
          >
            APPLY NOW
          </button>
        </div>
        <p className="text-gray-400">SkillNet Incorporated</p>
        <div className="flex justify-between space-x-4 text-gray-400 text-sm mt-2">
          <div className="space-x-3">
            <span>Lagos, Nigeria</span>
            <span className="bg-gray-700 px-2 py-1 rounded">Remote</span>
            <span>Posted 5 days ago</span>
          </div>
          <div>
            <SaveIcon />
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <p className="flex items-center">
            <span className="font-semibold">Full-time</span>
          </p>
          <p className="flex items-center">$250,000 - $300,000 per year</p>
          <p className="flex items-center">Senior Level</p>
          <p className="flex items-center">Deadline: 21st January, 2025</p>
        </div>
        <div className="mt-6 bg-[#161716] p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Job Overview</h3>
          <p className="text-gray-300 text-sm mt-2 leading-7">
            We are seeking a highly skilled and detail-oriented Quality
            Assurance Manager to lead and manage our QA team. In this role, you
            will be responsible for ensuring that our products and services meet
            the highest standards of quality and reliability. You will develop
            and implement quality assurance strategies, oversee testing
            processes, and collaborate with cross-functional teams to drive
            continuous improvement. As the Quality Assurance Manager, you will
            play a critical role in maintaining customer satisfaction and
            upholding the company’s reputation for excellence. This position
            requires strong leadership, analytical, and problem-solving skills,
            as well as a deep understanding of QA methodologies and best
            practices.
          </p>
        </div>

        <div className="bg-[#161716] mt-6 text-white p-4 rounded-lg shadow-lg ">
          <section>
            <h2 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-4">
              Key Responsibilities
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                Develop and implement comprehensive quality assurance policies,
                procedures, and standards.
              </li>
              <li>
                Oversee all aspects of the QA process, including planning,
                testing, and reporting.
              </li>
              <li>
                Lead and mentor the QA team, fostering a culture of continuous
                improvement.
              </li>
              <li>
                Collaborate with product development, engineering, and
                operations teams to identify and resolve quality issues.
              </li>
              <li>
                Monitor key quality metrics and develop strategies to address
                gaps.
              </li>
              <li>
                Conduct regular audits and reviews to ensure compliance with
                regulatory requirements and company standards.
              </li>
              <li>
                Stay updated on industry trends and emerging technologies to
                enhance QA processes.
              </li>
              <li>
                Manage resource allocation and prioritize tasks to meet project
                deadlines.
              </li>
            </ul>
          </section>

          <section className="mt-10">
            <h2 className="text-xl font-semibold border-b border-gray-700 pb-2 mb-4">
              Minimum Requirements
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>
                Bachelor's degree in Quality Management, Engineering, or a
                related field.
              </li>
              <li>
                Proven experience as a Quality Assurance Manager or in a similar
                role.
              </li>
              <li>
                Strong knowledge of QA methodologies, tools, and processes.
              </li>
              <li>
                Experience with software development and testing frameworks is a
                plus.
              </li>
              <li>Excellent leadership and team management skills.</li>
              <li>Exceptional analytical and problem-solving abilities.</li>
              <li>Strong communication and interpersonal skills.</li>
              <li>
                Detail-oriented with a commitment to achieving excellence.
              </li>
            </ul>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold text-[#767776] border-b border-gray-700 pb-2 mb-4">
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              <span className="border-[#313130] border text-gray-200 px-3 py-1 rounded-md">
                Microsoft Excel
              </span>
              <span className="border-[#313130] border text-gray-200 px-3 py-1 rounded-md">
                Notion
              </span>
              <span className="border-[#313130] border text-gray-200 px-3 py-1 rounded-md">
                Team Work
              </span>
            </div>
          </section>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-[900px] w-full ">
        <div className=" p-4 bg-[#161716] rounded-lg">
          <h3 className="text-lg font-semibold">About The Company</h3>
          <div className="flex text-[#767776] items-center justify-between my-3">
            <h1>Overview</h1>
            <ArrowDown size={20} />
          </div>
          <p className="text-gray-300 text-sm mt-2 leading-6">
            SkillNet is an innovative, blockchain-powered platform that
            seamlessly connects job seekers with employers while empowering
            tutors and institutions to create, sell, and deliver high-quality
            courses and exams. It combines the best of both worlds—an online job
            marketplace and a learning hub—giving users a competitive edge in
            today’s ever-evolving job market. Job seekers can enhance their
            skills through verified courses and exams, employers gain access to
            a pool of talented candidates, and tutors/institutions monetize
            their expertise—all powered by the StarkNet blockchain for security,
            transparency, and decentralization.
          </p>
        </div>
        <div className="mt-6 bg-[#161716] p-4 rounded-lg">
          <div className="flex text-[#767776] items-center justify-between my-3">
            <h3 className="text-lg font-semibold">Other Information</h3>
            <ArrowDown size={20} />
          </div>

          <div>
            <div>
              <div className="text-gray-300 lex items-center space-x-6 text-sm mt-2">
                <span>Website:</span>{" "}
                <a href="#" className="text-green-400">
                  www.skillnet.com
                </a>
              </div>
            </div>

            <div>
              <div className="text-gray-300 flex items-center space-x-6 text-sm">
                <span>Location:</span>
                <span>Santa Monica, CA, USA</span>
              </div>
            </div>

            <div>
              <div className="text-gray-300 flex items-center space-x-6 text-sm">
                <span>Company size:</span>
                <span>200 - 300 employees</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-[#101110] relative text-white p-6 rounded-lg max-w-3xl w-full">
            <div className=" text-center">
              <h2 className="text-lg font-semibold mb-1 text-center">
                Your Application
              </h2>
            </div>
            <span
              onClick={() => setIsModalOpen(false)}
              className=" cursor-pointer absolute right-6 top-8"
            >
              <XIcon />
            </span>
            <p className="text-sm text-gray-400 text-center mb-4">
              Please carefully fill out this application form.
            </p>

            <label className="block text-gray-300 text-sm mb-2">
              Cover Letter
            </label>
            <textarea
              className="w-full p-2 border-[#252625] min-h-48 border bg-[#101110] text-white rounded-md mb-4"
              placeholder="Write your cover letter"
            ></textarea>

            <label className="block text-gray-300 text-sm mb-2">
              Have you worked with a Fortune 500 company?
            </label>
            <select className="w-full p-2 border-[#252625] border bg-[#101110] text-white rounded-md mb-4">
              <option>Yes</option>
              <option>No</option>
            </select>

            <button className="w-full bg-[#D0EFB1] text-black py-2 rounded-md hover:bg-[#c0e29e] transition">
              Continue
            </button>

            <button
              className="mt-3 text-gray-400 text-sm hover:underline"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobListing;
