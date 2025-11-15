import React from 'react';
import OtpForm from '../components/OtpForm';
import Otpimage from '../assets/New Project (1).png'
import SignupLeftSection from '../components/LeftDesign';
const OtpPage = () => {
    return (
    <div className="flex flex-col lg:flex-row w-full max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden my-6 bg-white">
      <SignupLeftSection image={Otpimage} />
      <div className="flex-1 p-4 lg:p-8 lg:my-auto lg:mx-auto">
        <OtpForm />
      </div>
    </div>
  );
}


export default OtpPage;