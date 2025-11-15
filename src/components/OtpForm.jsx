import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function OtpForm() {
  const DIGIT_COUNT = 5;
  const [otp, setOtp] = useState(Array(DIGIT_COUNT).fill(""));
  const [error, setError] = useState("");
  const inputsRef = useRef([]);
  const navigate = useNavigate();

  const phoneFromState = useSelector((state) => state.signup.phone);
  useEffect(() => {
    if (!phoneFromState) {
      navigate("/signup");
    }
  }, [phoneFromState, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = otp.join("");
    if (value.length !== DIGIT_COUNT) {
      setError(`Please enter the ${DIGIT_COUNT}-digit OTP`);
      return;
    }

    const VALID_OTP = "12345";
    if (value === VALID_OTP) {
      navigate("/success");
    } else {
      setError("Invalid OTP");

      setOtp(Array(DIGIT_COUNT).fill(""));
      if (inputsRef.current[0]) inputsRef.current[0].focus();
    }
  };

  useEffect(() => {
    if (inputsRef.current[0]) inputsRef.current[0].focus();
  }, []);

  const handleChangeDigit = (index, e) => {
    const val = e.target.value.replace(/\D/g, "").slice(0, 1);
    const next = [...otp];
    next[index] = val;
    setOtp(next);
    setError("");
    if (val && inputsRef.current[index + 1]) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        const next = [...otp];
        next[index] = "";
        setOtp(next);
      } else if (inputsRef.current[index - 1]) {
        inputsRef.current[index - 1].focus();
      }
    } else if (e.key === "ArrowLeft" && inputsRef.current[index - 1]) {
      inputsRef.current[index - 1].focus();
    } else if (e.key === "ArrowRight" && inputsRef.current[index + 1]) {
      inputsRef.current[index + 1].focus();
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white  px-8 pt-6 pb-8 w-2xl max-w-md mx-auto my-auto flex flex-col items-center"
    >
      <p>Almost There!</p>
      <h2 className="text-4xl font-bold text-center text-cyan-500 mb-2">
        Verify your Phone
      </h2>
      <div className="border w-1/2 mx-auto mb-2"></div>
      <p className="text-sm text-gray-500 mb-4 text-center">
        We sent a {DIGIT_COUNT}-digit OTP to your phone {phoneFromState || ""}
      </p>

      <div className="w-full flex flex-col items-center">
        <div className="relative mt-6">
          <label className="absolute -top-5 left-0 block font-medium text-xs text-gray-600 ">
            Enter OTP <span className="text-red-500">*</span>
          </label>
          <div className="flex space-x-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                name={`otp-${index}`}
                value={digit}
                maxLength={1}
                onChange={(e) => handleChangeDigit(index, e)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={(el) => (inputsRef.current[index] = el)}
                className={`w-20 h-16 py-2 px-4 rounded-xl border outline-none text-center text-xl tracking-widest ${
                  error ? "border-red-400" : "border-gray-200"
                }`}
                placeholder=""
              />
            ))}
          </div>
        </div>
      </div>
      {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
      <button
        type="submit"
        className="w-1/3 rounded-full border border-cyan-500 text-cyan-500 py-2 font-semibold mt-6 hover:bg-cyan-50 transition"
      >
        Verify
      </button>
      <p className="mt-4 text-sm text-gray-600">Didn’t Get the OTP ?</p>
      <button
        type="button"
        className="text-xs text-cyan-500 mt-4 underline"
        onClick={() => {}}
      >
        Resend OTP
      </button>
    </form>
  );
}
