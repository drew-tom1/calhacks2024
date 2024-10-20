import React from 'react';

export default function Checkbox({ checked, onChange, label }) {
  return (
    <label className="p-2 flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="hidden" // Hide the default checkbox
      />
      <div className="w-6 h-6 border-2 border-gray-300 rounded-md flex items-center justify-center transition-colors duration-200 mr-2">
        {checked && (
          <div className="bg-blue-500 w-full h-full rounded-md flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-white w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
      </div>
      <span>{label}</span>
    </label>
  );
}
