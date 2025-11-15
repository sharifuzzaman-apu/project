import React from "react";
import SignupForm from "../components/SignupForm";
import ResumeImage from "../assets/New Project.png";
import SignupLeftSection from "../components/LeftDesign";

export default function Signup() {
  return (
    <div className="flex flex-col lg:flex-row w-full max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden my-6 bg-white">
      <SignupLeftSection image={ResumeImage} />
      <div className="flex-1 p-4 lg:p-8 lg:my-auto lg:mx-auto">
        <SignupForm />
      </div>
    </div>
  );
}
