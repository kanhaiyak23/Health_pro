import React from 'react';


export function CheckboxGroup({ options, onChange }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
      {options.map((option) => (
        <label
          key={option.value}
          className="
            flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer
            hover:border-rose-200 transition-colors
          "
        >
          <input
            type="checkbox"
            value={option.value}
           
            onChange={(e) => {
              const value = e.target.value;
              const checked = e.target.checked;
              onChange(checked ? [value] : []);
            }}
            className="w-4 h-4 text-rose-600 border-gray-300 rounded focus:ring-rose-500"
          />
          <span className="ml-3 text-gray-700">{option.label}</span>
        </label>
      ))}
    </div>
  );
}