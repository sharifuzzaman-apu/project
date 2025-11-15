import React from "react";
import SignupForm from "../components/SignupForm";
import ResumeImage from "../assets/New Project.png";
import SignupLeftSection from "../components/LeftDesign";

export default function Signup() {
  return (
    <div className="flex w-4xl mx-auto shadow-lg rounded-lg overflow-hidden my-2 pr-10">
      <SignupLeftSection image={ResumeImage} />
      <SignupForm />
    </div>
  );
}
