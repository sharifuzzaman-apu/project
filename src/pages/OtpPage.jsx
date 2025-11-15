import React from 'react';
import OtpForm from '../components/OtpForm';
import Otpimage from '../assets/New Project (1).png'
import SignupLeftSection from '../components/LeftDesign';
const OtpPage = () => {
    return (
    <div className="flex w-4xl mx-auto shadow-lg rounded-lg overflow-hidden my-2 pr-10">
      <SignupLeftSection image={Otpimage} />
      <OtpForm />
    </div>
  );
}


export default OtpPage;