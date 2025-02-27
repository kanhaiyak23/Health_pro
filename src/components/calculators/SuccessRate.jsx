import React from "react";

export function SuccessRateCircle({ percentage, cycles }) {
  const radius = 60;
  const strokeWidth = 12;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-56 h-56">
      <svg
        className="w-full h-full transform -rotate-90"
        viewBox="0 0 160 160"
      >
        {/* Background Circle */}
        <circle
          cx="80"
          cy="80"
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-emerald-100"
        />

        {/* Progress Circle */}
        <circle
          cx="80"
          cy="80"
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="text-[#5BD489] transition-all duration-1000 ease-out"
        />
      </svg>

      {/* Percentage in the center */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <span className="text-5xl font-bold text-white">{percentage}%</span>
      </div>

      {/* IVF Cycle Text below the circle */}
      <p className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-sm text-white mt-1 text-center">
        With {cycles} IVF Cycle
      </p>
    </div>
  );
}
