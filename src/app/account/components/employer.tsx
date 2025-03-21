
"use client";
import Input from "@/components/Forms/Input";
import React from "react";
import TextArea from "@/components/Forms/TextArea";
import Checkbox from "@/components/Forms/Checkbox";
import Button from "@/components/Forms/Button";


function Employer() {
  const handleContinue = () => {};

  return (
  
      <div className="flex flex-col justify-center items-center px-3 md:px-0">
        <div className="header-details text-center">
          <h2 className="text-white font-UbuntuBold text-[1.5rem] mb-2">
            Build your profile as employer
          </h2>
          <p className="text-grayText text-[0.875rem]">
            Enter your professional details
          </p>
        </div>
        <div className="flex flex-col gap-6 w-full max-w-md">
          <div className="mt-5 md:mt-10 w-full">
            <Input
              type="text"
              name="Title"
              placeholder="Enter name of company"
              label="Name of company"
              onChange={()=>{}}
              value=""
            />
          </div>
          <div className="w-full">
            <TextArea
              name="bio"
              placeholder="Description...."
              label="Brief description  of company"
              onChange={()=>{}}
              value=""
            />
          </div>
          <div className="w-full">
            <Input
              type="email"
              name="email"
              placeholder="company email"
              label="Email"
              onChange={()=>{}}
              value=""
            />
          </div>
         
          <div className="my-2">
            <Checkbox isAgreement={true} privacyUrl="" termsUrl="" />
          </div>
          <div className="my-2 w-full">
            <Button label="CONTINUE" onButtonClick={handleContinue} />
          </div>
        </div>
      </div>

)}

export default Employer