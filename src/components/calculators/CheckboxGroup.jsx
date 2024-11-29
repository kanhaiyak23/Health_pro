import React from 'react';


export function CheckboxGroup({ options, onChange }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 ">
      {options.map((option) => (
        <label
          key={option.value}
          className="
            flex items-center p-2  cursor-pointer
            transition-colors
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
            className="w-4 h-4 text-rose-600 border-2 border-[#F48265] rounded-full   accent-[#F48265]"
          />
          <span className="ml-3 text-gray-700">{option.label}</span>
        </label>
      ))}
    </div>
  );
}