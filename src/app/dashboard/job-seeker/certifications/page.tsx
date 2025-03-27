"use client";
import { useState } from "react";
import { type NextPage } from "next";

import React from "react";
import FormModal from "./components/FormModal";
import { CertificationForm } from "./components/Form";
import type { CertificationData } from "./components/Form";
import ProfilePage from "./components/ProfilePage";
import Footer from "@/components/Footer";
import Rectangle27 from "../../../../../public/img/Rectangle 27.svg";
import Image from "next/image";
import { Plus, Pencil, MoveLeftIcon } from "lucide-react";

type ModalType = "certification" | null;

const UserPage: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [editData, setEditData] = useState<CertificationData | null>(null);

  const handleEdit = (type: ModalType, data: CertificationData) => {
    setModalType(type);
    setEditData(data);
    setIsModalOpen(true);
  };

  const handleCertificationSubmit = (data: CertificationData) => {
    console.log("Certification data:", data);
    setIsModalOpen(false);
  };

  const getModalTitle = () => {
    return modalType
      ? `${editData ? "Edit" : "Add"} ${
          modalType.charAt(0).toUpperCase() + modalType.slice(2)
        }`
      : "";
  };

  return (
    <>
      <div className="w-full">
        <Image
          src={Rectangle27}
          alt="Rectangle27}"
          width={1920}
          className="w-full border-bottom-8"
        />
      </div>

      {/* Profile Box */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
        <ProfilePage />
        <div className="min-h-screen text-gray-100 py-6 px-2 sm:px-4 flex flex-col items-center">
          <div className="w-full max-w-4xl">
            {/* About Section */}
            <section id="about" className="mb-8 mt-7">
              <div className="flex items-center justify-between mb-4 border-b-2 border-[#1d1d1c] pb-2">
                <h2 className="text-xl sm:text-2xl p-3 flex space-x-3 justify-start items-center font-semibold pb-4 w-full">
                  <MoveLeftIcon />
                  <span>Certifications</span>
                </h2>
                <div className="flex gap-3">
                  <button
                    onClick={() =>
                      handleEdit("certification", {} as CertificationData)
                    }
                  >
                    <Plus className="w-5 h-5 text-gray-400 hover:text-white" />
                  </button>
                </div>
              </div>
            </section>

            <section className="mb-8 p-4 bg-[#161716] border border-[#1D1D1C] rounded-lg">
              {/* certifications */}
              <section id="certification" className="mb-8">
                <div className="border-b-2 border-[#1d1d1c] pb-2">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <div className="w-[72px] h-[72px] rounded-md bg-slate-300"></div>
                        <div>
                          <h2 className="text-lg sm:text-2xl font-semibold ">
                            Blockchain Developer
                          </h2>
                          <p className="text-sm text-[#D9D9D9]">
                            Institution: SkillNet Academy
                          </p>
                          <p className="text-[#D0EFB1] text-sm">
                            unframed.co/item/0x07....5f1/3171138
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() =>
                          handleEdit("certification", {} as CertificationData)
                        }
                      >
                        <Pencil className="w-5 h-5 text-gray-400 hover:text-white" />
                      </button>
                      <button
                        onClick={() =>
                          handleEdit("certification", {} as CertificationData)
                        }
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-[#D9D9D9]">26-09-2022</p>
                </div>

                <div className="space-y-6">
                  <div className="pb-4 border-[#1d1d1c]">
                    <p className="text-gray-300 mt-3 text-sm sm:text-base">
                      I design experiments that could rival a sci-fi plot,
                      pushing machines to understand everything from Shakespeare
                      to cat memes. Translating complex AI jargon into something
                      humans can actually understand? That&apos;s me
                      too—essentially an interpreter for our soon-to-be
                      overlords. And let&apos;s not forget about writing papers
                      that make it sound like I have everything under control,
                      while secretly wondering if my latest model is sentient or
                      just being sarcastic.
                    </p>

                    <section id="skills">
                      <div className="flex items-center space-x-6 mb-4 border-b-2 border-[#1d1d1c] py-3 sm:pb-6">
                        <h2 className="text-lg sm:text-xl text-[#9596A0] font-semibold ">
                          Skills
                        </h2>

                        <div className="flex flex-wrap gap-2 pt-">
                          <span className="px-3 py-1 bg-[#1a1b1a] border border-[#313130] rounded-sm text-xs sm:text-sm">
                            TypeScript
                          </span>
                          <span className="px-3 py-1 bg-[#1a1b1a] border border-[#313130] rounded-sm text-xs sm:text-sm">
                            Python
                          </span>
                          <span className="px-3 py-1 bg-[#1a1b1a] border border-[#313130] rounded-sm text-xs sm:text-sm">
                            Power BI
                          </span>
                          <span className="px-3 py-1 bg-[#1a1b1a] border border-[#313130] rounded-sm text-xs sm:text-sm">
                            JavaScript
                          </span>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </section>

              <section id="certification" className="mb-8">
                <div className="border-b-2 border-[#1d1d1c] pb-2">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <div className="w-[72px] h-[72px] rounded-md bg-slate-300"></div>
                        <div>
                          <h2 className="text-lg sm:text-2xl font-semibold ">
                            Blockchain Developer
                          </h2>
                          <p className="text-sm text-[#D9D9D9]">
                            Institution: SkillNet Academy
                          </p>
                          <p className="text-[#D0EFB1] text-sm">
                            unframed.co/item/0x07....5f1/3171138
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() =>
                          handleEdit("certification", {} as CertificationData)
                        }
                      >
                        <Pencil className="w-5 h-5 text-gray-400 hover:text-white" />
                      </button>
                      <button
                        onClick={() =>
                          handleEdit("certification", {} as CertificationData)
                        }
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-[#D9D9D9]">26-09-2022</p>
                </div>

                <div className="space-y-6">
                  <div className="pb-4 border-[#1d1d1c]">
                    <p className="text-gray-300 mt-3 text-sm sm:text-base">
                      I design experiments that could rival a sci-fi plot,
                      pushing machines to understand everything from Shakespeare
                      to cat memes. Translating complex AI jargon into something
                      humans can actually understand? That&apos;s me
                      too—essentially an interpreter for our soon-to-be
                      overlords. And let&apos;s not forget about writing papers
                      that make it sound like I have everything under control,
                      while secretly wondering if my latest model is sentient or
                      just being sarcastic.
                    </p>

                    <section id="skills">
                      <div className="flex items-center space-x-6 mb-4 border-b-2 border-[#1d1d1c] py-3 sm:pb-6">
                        <h2 className="text-lg sm:text-xl text-[#9596A0] font-semibold ">
                          Skills
                        </h2>

                        <div className="flex flex-wrap gap-2 pt-">
                          <span className="px-3 py-1 bg-[#1a1b1a] border border-[#313130] rounded-sm text-xs sm:text-sm">
                            TypeScript
                          </span>
                          <span className="px-3 py-1 bg-[#1a1b1a] border border-[#313130] rounded-sm text-xs sm:text-sm">
                            Python
                          </span>
                          <span className="px-3 py-1 bg-[#1a1b1a] border border-[#313130] rounded-sm text-xs sm:text-sm">
                            Power BI
                          </span>
                          <span className="px-3 py-1 bg-[#1a1b1a] border border-[#313130] rounded-sm text-xs sm:text-sm">
                            JavaScript
                          </span>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </section>
            </section>
          </div>
        </div>
      </div>
      <Footer />

      <FormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={getModalTitle()}
      >
        {modalType === "certification" && (
          <CertificationForm
            onSubmit={handleCertificationSubmit}
            initialData={editData as CertificationData}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </FormModal>
    </>
  );
};

export default UserPage;
