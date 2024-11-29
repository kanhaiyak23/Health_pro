import React from 'react';


export function RadioGroup({ options, value, onChange }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 ">
      {options.map((option) => (
        <label
          key={option.value}
          className={`
            flex items-center p-1  cursor-pointer transition-colors 
            
          `}
        >
          <input
            type="radio"
            value={option.value}
            checked={value === option.value}
            
            onChange={(e) => onChange(e.target.value)}
            className=" appearance-none h-5 w-5 cursor-pointer  rounded-full border-2 border-spacing-24  border-[#F48265] checked:border-[#F48265]  transition-all accent-[#F48265] checked:bg-[#F48265] "
       
          />
          <span className="ml-3 text-gray-700">{option.label}</span>
        </label>
      ))}
    </div>
  );
}