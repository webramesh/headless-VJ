'use client';
import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState, useEffect } from 'react';

// AccordionItem Component for better reusability
const AccordionItem = ({ index, openIndexes, toggleAccordion, title, content }) => {
  const isOpen = openIndexes.includes(index);

  return (
    <div className="border-b mb-2 border-slate-200">
      <button
        onClick={() => toggleAccordion(index)}
        className="w-full flex justify-between items-center bg-[#F5F5F5] pl-3 hover:bg-[#e6e6e6] transition-colors duration-200"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${index}`}
        id={`accordion-button-${index}`}
      >
        <span className="text-left text-sm md:text-md">{title}</span>
        <span className={`transition-transform duration-300 transform`}>
          {isOpen ? <ChevronUp className="size-8 text-red-600" /> : <ChevronDown className="size-8 text-red-600" />}
        </span>
      </button>
      <div
        id={`accordion-content-${index}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}
        role="region"
        aria-labelledby={`accordion-button-${index}`}
      >
        <div
          className="pb-5 mt-2 mb-2 text-sm md:text-md pl-3 text-slate-900"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
};

const Accordion = ({ faqItems = [] }) => {
  const [openIndexes, setOpenIndexes] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768); // Adjust this breakpoint as needed
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const toggleAccordion = (index) => {
    if (isMobile) {
      setOpenIndexes(openIndexes.includes(index) ? [] : [index]);
    } else {
      setOpenIndexes((prevIndexes) =>
        prevIndexes.includes(index) ? prevIndexes.filter((i) => i !== index) : [...prevIndexes, index]
      );
    }
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
          openIndexes={openIndexes}
          toggleAccordion={toggleAccordion}
          title={item.faqQuestion}
          content={item.faqAnswer}
          isMobile={isMobile}
        />
      ))}
    </div>
  );
};

export default Accordion;
