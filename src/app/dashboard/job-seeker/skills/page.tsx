"use client";
import { useState } from "react";
import { type NextPage } from "next";

import React from "react";
import FormModal from "./components/FormModal";
import { SkillsForm } from "./components/Form";
import type { SkillData } from "./components/Form";
import ProfilePage from "./components/ProfilePage";
import Footer from "@/components/Footer";
import Rectangle27 from "../../../../../public/img/Rectangle 27.svg";
import Image from "next/image";
import { Plus, Pencil, MoveLeftIcon } from "lucide-react";

type ModalType = "skills" | null;

const UserPage: NextPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [editData, setEditData] = useState<SkillData | null>(null);

  const handleEdit = (type: ModalType, data: SkillData) => {
    setModalType(type);
    setEditData(data);
    setIsModalOpen(true);
  };

  const handleSkillsSubmit = (data: SkillData) => {
    console.log("Skill data:", data);
    setIsModalOpen(false);
  };

  const getModalTitle = () => {
    return modalType
      ? `${editData ? "Edit" : "Add"} ${
          modalType.charAt(0).toUpperCase() + modalType.slice(1)
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
                  <span>Skills</span>
                </h2>
                <div className="flex gap-3">
                  <button onClick={() => handleEdit("skills", {} as SkillData)}>
                    <Plus className="w-5 h-5 text-gray-400 hover:text-white" />
                  </button>
                </div>
              </div>
            </section>

            <section className="mb-8 p-4 bg-[#161716] border border-[#1D1D1C] rounded-lg">
              {/* Experiences */}
              <section id="experience" className="mb-8">
                <div className="border-b-2 border-[#1d1d1c] pb-2 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-lg text-[#FCFCFC] sm:text-2xl font-semibold flex-1">
                      Frontend Developer
                    </h2>
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleEdit("skills", {} as SkillData)}
                      >
                        <Pencil className="w-5 h-5 text-gray-400 hover:text-white" />
                      </button>
                      <button
                        onClick={() => handleEdit("skills", {} as SkillData)}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                  <h3 className="text-[#D0EFB1]">The Buidl</h3>
                </div>

                <div className="border-b-2 border-[#1d1d1c] pb-2 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-lg text-[#FCFCFC] sm:text-xl font-semibold flex-1">
                      Frontend Developer
                    </h2>
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleEdit("skills", {} as SkillData)}
                      >
                        <Pencil className="w-5 h-5 text-gray-400 hover:text-white" />
                      </button>
                      <button
                        onClick={() => handleEdit("skills", {} as SkillData)}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                  <h3 className="text-[#D0EFB1]">The Buidl</h3>
                </div>

                <div className="border-b-2 border-[#1d1d1c] pb-2 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-lg text-[#FCFCFC] sm:text-xl font-semibold flex-1">
                      Frontend Developer
                    </h2>
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleEdit("skills", {} as SkillData)}
                      >
                        <Pencil className="w-5 h-5 text-gray-400 hover:text-white" />
                      </button>
                      <button
                        onClick={() => handleEdit("skills", {} as SkillData)}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                  <h3 className="text-[#D0EFB1]">The Buidl</h3>
                </div>

                <div className="border-b-2 border-[#1d1d1c] pb-2 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-lg text-[#FCFCFC] sm:text-xl font-semibold flex-1">
                      Frontend Developer
                    </h2>
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleEdit("skills", {} as SkillData)}
                      >
                        <Pencil className="w-5 h-5 text-gray-400 hover:text-white" />
                      </button>
                      <button
                        onClick={() => handleEdit("skills", {} as SkillData)}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                  <h3 className="text-[#D0EFB1]">The Buidl</h3>
                </div>
                <div className="border-b-2 border-[#1d1d1c] pb-2 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-lg text-[#FCFCFC] sm:text-xl font-semibold flex-1">
                      Frontend Developer
                    </h2>
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleEdit("skills", {} as SkillData)}
                      >
                        <Pencil className="w-5 h-5 text-gray-400 hover:text-white" />
                      </button>
                      <button
                        onClick={() => handleEdit("skills", {} as SkillData)}
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                  <h3 className="text-[#D0EFB1]">The Buidl</h3>
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
        {modalType === "skills" && (
          <SkillsForm
            onSubmit={handleSkillsSubmit}
            initialData={editData as SkillData}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </FormModal>
    </>
  );
};

export default UserPage;
