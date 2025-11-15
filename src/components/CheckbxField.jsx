import React from "react";
export default function CheckboxField({ checked, onChange, error }) {
  return (
    <div className="flex items-center ml-4 my-2">
      <label
        className={
          "inline-flex items-center cursor-pointer text-xs " +
          (error ? "text-red-600" : "text-gray-700")
        }
      >
        <input
          type="checkbox"
          className="peer sr-only"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span className="w-4 h-4 mr-2 p-1 rounded-full border border-gray-300 bg-white flex items-center justify-center peer-checked:bg-[#13bde8] peer-checked:border-black">
          <svg
            className="hidden w-2 h-2 text-white peer-checked:block"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </span>
        <span>
          I agree to the Job Media{" "}
          <a href="#" className="text-[#13bde8] font-bold hover:underline">
            Terms & Conditions
          </a>
        </span>
      </label>
    </div>
  );
}
