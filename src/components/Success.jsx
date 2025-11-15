import React, { useEffect, useState, useRef } from "react";
import SuccessImage from "../assets/New Project (3).png";

const Success = () => {
  const [count, setCount] = useState(3);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCount((c) => Math.max(0, c - 1));
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    if (count === 0 && timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, [count]);

  return (
    <div className="flex flex-col items-center justify-center p-6 md:p-10">
      <img className="w-48 h-48 md:w-72 md:h-72" src={SuccessImage} alt="Success" />
      <p>Yeeeeeeee!</p>
      <h1 className="text-[#13bde8] text-4xl font-bold my-5">
        You are all Set
      </h1>
      <hr className="w-1/2" />
      <p className="mt-3">Taking you to your Dashboard</p>
      <div>
        <p className=" text-[#13bde8] font-semibold">in {count}sec</p>
      </div>
    </div>
  );
};

export default Success;
