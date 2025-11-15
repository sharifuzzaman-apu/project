import React from 'react';
import SignupLeftSection from '../components/LeftDesign';
import SuccessImage from '../assets/New Project (2).png';
import Success from '../components/success';

const SuccessPage = () => {
    return (
        <div className="flex w-4xl mx-auto shadow-lg rounded-lg overflow-hidden my-2 pr-10" >
            <SignupLeftSection image={SuccessImage} />
            <Success />
        </div>
    );
};

export default SuccessPage;