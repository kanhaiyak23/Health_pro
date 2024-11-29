import React from 'react';


export function RadioGroup({ options, value, onChange }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {options.map((option) => (
        <label
          key={option.value}
          className={`
            flex items-center p-4 border-2 rounded-lg cursor-pointer transition-colors
            ${
              value === option.value
                ? 'border-rose-600 bg-rose-50'
                : 'border-gray-200 hover:border-rose-200'
            }
          `}
        >
          <input
            type="radio"
            value={option.value}
            checked={value === option.value}
            
            onChange={(e) => onChange(e.target.value)}
            className="w-4 h-4 text-rose-600 border-gray-300 focus:ring-rose-500"
          />
          <span className="ml-3 text-gray-700">{option.label}</span>
        </label>
      ))}
    </div>
  );
}