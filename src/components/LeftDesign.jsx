import React from "react";

const SignupLeftSection = ({ image }) => {
  return (
    <div>
      <div className="hidden md:block relative w-[400px] h-[800px] overflow-hidden rounded-lg">
        {/* middle */}
        <div className="absolute right-12 w-[400px] h-full bg-[rgba(19,189,232,1)] rotate-[8.5deg] origin-top-left rounded-lg"></div>
        {/* top */}
        <div className="absolute top-[20px] -left-[75px] w-full h-56 bg-[rgba(113,226,255,1)] rotate-[-14.83deg] origin-top-left rounded-3xl"></div>
        {/* bottom */}
        <div className="absolute bottom-[-150px] -left-10 w-full h-52 bg-[rgba(113,226,255,1)] rotate-[-20deg] origin-bottom-left rounded-3xl"></div>

        <div className="relative -right-10 top-8 p-5">
          <p className="text-black font-light text-xl">Explore More. Apply</p>
          <p className="text-2xl text-black font-light">
            Smarter.{" "}
            <span className="font-bold text-3xl text-">Get Hired.</span>
          </p>
        </div>

        <img
          src={image}
          alt="Resume stack"
          className="absolute left-40 top-[360px] z-10 -translate-x-1/2 -translate-y-1/3 w-60 md:w-72 drop-shadow-xl"
        />
      </div>
    </div>
  );
};

export default SignupLeftSection;
