import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setField,
  setAgree,
  setErrors,
  setAuthenticated,
} from "../store/signupSlice";
import Divider from "./Divider";
import CheckboxField from "./CheckbxField";
import InputField from "./InputField";
import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name, email, phone, password, agree, errors } = useSelector(
    (state) => state.signup
  );

  const validate = ({ name, email, phone, password, agree }) => {
    const newErrors = {};
    if (!name || name.trim().length < 2) newErrors.name = "Enter a valid name";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email))
      newErrors.email = "Enter a valid email";
    const phoneRegex = /^01[3-9][0-9]{8}$/;
    if (!phone || !phoneRegex.test(phone))
      newErrors.phone = "Enter a valid phone";
    if (!password || password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!agree) newErrors.agree = "You must agree to Terms & Conditions";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const values = { name, email, phone, password, agree };
    const newErrors = validate(values);
    if (Object.keys(newErrors).length > 0) {
      dispatch(setErrors(newErrors));
      return;
    }
    dispatch(setErrors({}));
    dispatch(setAuthenticated(true));
    navigate("/otp");
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "phone") {
      newValue = value.replace(/\D/g, "").slice(0, 11);
    }

    dispatch(setField({ field: name, value: newValue }));
    if (errors[name]) {
      const copy = { ...errors };
      delete copy[name];
      dispatch(setErrors(copy));
    }
  };

  const personIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5.121 17.804A9 9 0 1118.879 6.196 9 9 0 015.12 17.804z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );

  const emailIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-18-2h18a2 2 0 012 2v8a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2z"
      />
    </svg>
  );

  const phoneIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4 text-gray-400"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 5a2 2 0 012-2h2.6a1 1 0 01.95.68l.7 2.1a1 1 0 01-.21 1.02L7.5 9.5a11.05 11.05 0 005 5l2.7-1.35a1 1 0 011.02-.21l2.1.7a1 1 0 01.68.95V19a2 2 0 01-2 2H19A16 16 0 013 5z"
      />
    </svg>
  );

  const passIcon = (
    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 11c1.657 0 3-1.343 3-3V6a3 3 0 10-6 0v2c0 1.657 1.343 3 3 3z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 11h14a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2z"
        />
      </svg>
    </span>
  );

  return (
    <div className="w-full max-w-md mx-auto flex flex-col justify-center px-6 py-8 gap-y-6">
      <div className="text-center mb-2">
        <p className="font-semibold text-xs">Ready To Start</p>
        <h2 className="text-4xl font-bold mb-2 text-[#13bde8]">
          Let's Sign You Up
        </h2>
        <div className="border w-1/2 mx-auto mb-2"></div>
      </div>

      <form onSubmit={handleSubmit}>
        <InputField
          name="name"
          label="Full Name"
          value={name}
          icon={personIcon}
          onChange={handleInput}
          placeholder="e.g. Sharifuzzaman"
          error={errors.name}
        />
        <InputField
          name="email"
          label="Email"
          type="email"
          value={email}
          icon={emailIcon}
          onChange={handleInput}
          placeholder="e.g. sharifapuzaman@gmail.com"
          error={errors.email}
        />
        <InputField
          name="phone"
          label="Phone Number"
          value={phone}
          icon={phoneIcon}
          onChange={handleInput}
          placeholder="XXXXXXXXXXX"
          error={errors.phone}
          isPhone={true}
        />
        <InputField
          name="password"
          label="Password"
          type="password"
          value={password}
          icon={passIcon}
          onChange={handleInput}
          placeholder="********"
          error={errors.password}
          showPasswordToggle={true}
        />

        <CheckboxField
          checked={agree}
          onChange={(checked) => {
            dispatch(setAgree(checked));
            if (errors.agree) {
              const copy = { ...errors };
              delete copy.agree;
              dispatch(setErrors(copy));
            }
          }}
          error={errors.agree}
        />

        <button
          type="submit"
          className="w-full bg-white text-[#13bde8] py-2 rounded-full border hover:bg-[#13bde8] hover:text-white transition-all text-sm"
        >
          Create Account
        </button>

        <Divider />

        <div className="text-center">
          <p className="text-xs text-gray-700 mb-1">
            Create Account with Social Media
          </p>
          <div className="flex items-center justify-center space-x-4 my-1">
            <button
              type="button"
              aria-label="Sign up with Google"
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.72 1.22 9.2 3.22l6.86-6.86C35.6 2.6 30.05 0 24 0 14.88 0 6.99 5.44 3.02 13.17l7.98 6.19C12.96 14.05 18.97 9.5 24 9.5z"
                />
                <path
                  fill="#34A853"
                  d="M46.5 24c0-1.6-.15-3.14-.43-4.61H24v9.06h12.7c-.55 2.96-2.2 5.46-4.7 7.14l7.33 5.68C43.9 36.86 46.5 30.79 46.5 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M10.99 29.36A14.97 14.97 0 0110 24c0-1.6.28-3.14.79-4.61L2.8 13.2C.97 16.44 0 20.07 0 24c0 3.93.97 7.56 2.8 10.8l8.19-5.44z"
                />
                <path
                  fill="#4285F4"
                  d="M24 48c6.05 0 11.6-2.6 15.86-6.74l-7.33-5.68C30.72 36.78 27.54 38 24 38c-5.03 0-11.04-4.55-12-11.36L4 30.8C6.99 38.56 14.88 44 24 44z"
                />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Sign up with LinkedIn"
              className="p-1 rounded-full hover:bg-gray-100"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="#0A66C2"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.036-1.849-3.036-1.85 0-2.134 1.445-2.134 2.94v5.665H9.356V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.369-1.849 3.604 0 4.27 2.373 4.27 5.457v6.283zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM6.989 20.452H3.684V9h3.305v11.452z" />
              </svg>
            </button>
          </div>
        </div>

        <p className="text-xs text-gray-500 text-center mt-1">
          Already have an account?{" "}
          <a href="#" className="text-[#13bde8] font-bold hover:underline">
            Sign In
          </a>{" "}
          instead
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
