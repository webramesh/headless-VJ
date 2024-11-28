'use client';
import React, { useState } from 'react';

// AccordionItem Component for better reusability
const AccordionItem = ({ index, openIndex, toggleAccordion, title, content }) => {
  const isOpen = openIndex === index;

  return (
    <div className="border-b mb-2 border-slate-200">
      <button
        onClick={() => toggleAccordion(index)}
        className="w-full flex justify-between items-center bg-[#F5F5F5] pl-3 text-slate-800 hover:bg-[#e6e6e6] hover:text-slate-500 transition-colors duration-200"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${index}`}
        id={`accordion-button-${index}`}
        role="button"
      >
        <h3 className=" text-left text-black text-md font-medium">
          <span>{title}</span>
        </h3>
        <span
          className={`text-slate-800 transition-transform duration-300 transform ${isOpen ? 'rotate-60' : 'rotate-0'}`}
        >
          {isOpen ? (
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
        id={`accordion-content-${index}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
        role="region"
        aria-labelledby={`accordion-button-${index}`}
      >
        <div
          className="pb-5 mt-2 mb-2 text-sm md:text-md pl-3 text-slate-600"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

const Accordion = ({ faqItems = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Only render if there are FAQ items
  if (faqItems.length === 0) {
    return null;
  }

  return (
    <div>
      {faqItems.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          openIndex={openIndex}
          toggleAccordion={toggleAccordion}
          title={item.faqQuestion}
          content={item.faqAnswer}
        />
      ))}
    </div>
  );
};

export default Accordion;
