'use client';
import React, { useState } from 'react';

const Accordion = ({ faqItems }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {faqItems.map((item, index) => (
        <div key={index} className="border-b mb-2 border-slate-200">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center bg-[#F5F5F5] pl-3 text-slate-800"
          >
            <h3 className="text-left text-black text-sm font-medium">
              <span>{item.faqQuestion}</span>
            </h3>
            <span
              className={`text-slate-800 transition-transform duration-300 transform ${
                openIndex === index ? 'rotate-60' : 'rotate-0'
              }`}
            >
              {openIndex === index ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-8 h-8 text-red-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-8 h-8 text-red-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-screen' : 'max-h-0'
            }`}
          >
            <div
              className="pb-5 text-xs md:text-sm pl-3 text-slate-500"
              dangerouslySetInnerHTML={{ __html: item.faqAnswer }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
