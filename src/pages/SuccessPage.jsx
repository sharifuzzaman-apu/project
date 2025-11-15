import React from 'react';
import SignupLeftSection from '../components/LeftDesign';
import SuccessImage from '../assets/New Project (2).png';
import Success from '../components/Success';

const SuccessPage = () => {
    return (
        <div className="flex flex-col lg:flex-row w-full max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden my-6 bg-white" >
            <SignupLeftSection image={SuccessImage} />
            <div className="flex-1 p-4 lg:p-8 lg:my-auto lg:mx-auto">
                <Success />
            </div>
        </div>
    );
};

export default SuccessPage;