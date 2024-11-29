import React from 'react';

export function Slider({ value, onChange, min, max }) {
  const sliderPercentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="relative pt-8">
      {/* Slider Value with SVG */}
      <div className="relative flex items-center justify-center mb-4">
        <div
          className="absolute -top- flex items-center justify-center text-[#F48265]"
          style={{
            left: `${sliderPercentage}%`,
            transform: "translateX(-50%)",
            transition: "left 0.2s ease-out",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
            />
          </svg>
          <span className="absolute top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm font-bold text-[#F48265]">
            {value}
          </span>
        </div>
      </div>

      {/* Slider Input */}
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
        style={{
          background: `linear-gradient(to right, #F48265 ${sliderPercentage}%, #e5e7eb ${sliderPercentage}%)`,
        }}
      />

      {/* Min/Max Labels */}
      <div className="flex justify-between text-xs text-gray-600 px-2 mt-2">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
}
