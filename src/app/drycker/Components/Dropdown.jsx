'use client';
import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';

const Dropdown = ({ title, options }) => {
  const [openIndex, setOpenIndex] = useState(false);

  return (
    <>
      <div className="border-b mb-6 border-slate-200">
        <button
          className="w-full flex justify-between items-center bg-[#F5F5F5] pl-3 py-1"
          onClick={() => setOpenIndex((prev) => !prev)}
        >
          <h3 className="text-left text-lg">
            <span>{title}</span>
          </h3>

          <span className={`text-slate-800 transition-transform ${openIndex ? 'rotate-60' : 'rotate-0'}`}>
            {openIndex ? <ChevronUp /> : <ChevronDown />}
          </span>
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 
            ${openIndex ? 'max-h-screen' : 'max-h-0'}
            `}
        >
          <div className="pb-5 flex flex-col text-sm pl-3 my-2">
            {options.map((option, index) => (
              <div key={index} value={option}>
                {option} {index}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
