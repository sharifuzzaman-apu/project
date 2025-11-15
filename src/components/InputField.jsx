import React, { useState } from "react";

const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  icon,
  showPasswordToggle = false,
  isPhone = false,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className="mb-4">
      <label
        className={`block font-medium text-xs mb-1 ml-4 ${
          error ? "text-red-600" : "text-gray-600"
        }`}
      >
        {label} <span className="text-red-500">*</span>
      </label>

      <div
        className={`relative w-full bg-white rounded-full flex items-center overflow-hidden pl-3 ${
          error ? "border border-red-500" : "border border-gray-200"
        }`}
      >
        {isPhone ? (
          <>
            <div className="flex items-center space-x-2">
              {icon}
              <span className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-600"></span>
              </span>
              <span className="text-gray-500 font-medium text-xs">+88</span>
            </div>
            <div className="border-l border-gray-200 h-4 mx-2"></div>
          </>
        ) : (
          icon && <span className="ml-1 mr-2">{icon}</span>
        )}

        <input
          name={name}
          type={isPassword ? (showPassword ? "text" : "password") : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          maxLength={isPhone ? 11 : undefined}
          inputMode={isPhone ? "numeric" : undefined}
          pattern={isPhone ? "[0-9]*" : undefined}
          className={`flex-1 bg-transparent pl-3 ${
            isPassword && showPasswordToggle ? "pr-10" : "pr-2"
          } py-2 text-gray-700 placeholder-gray-300 focus:outline-none tracking-widest text-sm`}
        />

        {isPassword && showPasswordToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.269-2.943-9.543-7a9.958 9.958 0 012.223-3.49M6.1 6.1A9.953 9.953 0 0112 5c4.478 0 8.269 2.943 9.543 7a9.965 9.965 0 01-1.52 3.1M3 3l18 18"
                />
              </svg>
            ) : (
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
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            )}
          </button>
        )}
      </div>

      {error && <p className="text-xs text-red-500 ml-4 mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
