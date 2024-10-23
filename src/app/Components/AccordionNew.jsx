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
        <h3 className=" text-left text-black text-sm font-medium">
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
        <div className="pb-5 mt-2 mb-2 text-xs md:text-sm  pl-3 text-slate-500">{content}</div>
      </div>
    </div>
  );
};

const AccordionNew = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Heading */}
      <h2 className="text-2xl font-semibold text-black mb-4">Frågor och Svar</h2>

      {/* Accordion Items */}
      <AccordionItem
        index={1}
        openIndex={openIndex}
        toggleAccordion={toggleAccordion}
        title="Hur ofta kommer Vinjournalen.se ’s populära nyhetsbrev ut?"
        content="Vinjournalen.se skickar ut sitt nyhetsbrev varje fredag, inför storhelger ibland oftare. På så sätt får du tips direkt i din inbox från Vinjournalen.se!"
      />

      <AccordionItem
        index={2}
        openIndex={openIndex}
        toggleAccordion={toggleAccordion}
        title="Skriver Vinjournalen.se även om ekologiska och naturviner samt vegetrarisk/vegansk mat?"
        content="Vinjournalen.se skickar ut sitt nyhetsbrev varje fredag, inför storhelger ibland oftare. På så sätt får du tips direkt i din inbox från Vinjournalen.se!"
      />

      <AccordionItem
        index={3}
        openIndex={openIndex}
        toggleAccordion={toggleAccordion}
        title="Skriver Vinjournalen.se även om Vinturism?"
        content="Vinjournalen.se skickar ut sitt nyhetsbrev varje fredag, inför storhelger ibland oftare. På så sätt får du tips direkt i din inbox från Vinjournalen.se!"
      />

      <AccordionItem
        index={4}
        openIndex={openIndex}
        toggleAccordion={toggleAccordion}
        title="Hur ofta publicerar Vinjournalen.se nytt innehåll?"
        content="Vinjournalen.se skickar ut sitt nyhetsbrev varje fredag, inför storhelger ibland oftare. På så sätt får du tips direkt i din inbox från Vinjournalen.se!"
      />

      <AccordionItem
        index={5}
        openIndex={openIndex}
        toggleAccordion={toggleAccordion}
        title="Är Vinjournalen.se ett passande magasin om jag vill lära mig om vin?"
        content="Vinjournalen.se skickar ut sitt nyhetsbrev varje fredag, inför storhelger ibland oftare. På så sätt får du tips direkt i din inbox från Vinjournalen.se!"
      />

      <AccordionItem
        index={6}
        openIndex={openIndex}
        toggleAccordion={toggleAccordion}
        title="Vad skriver Vinjournalen.se om?"
        content="Vinjournalen.se skickar ut sitt nyhetsbrev varje fredag, inför storhelger ibland oftare. På så sätt får du tips direkt i din inbox från Vinjournalen.se!"
      />

      <AccordionItem
        index={7}
        openIndex={openIndex}
        toggleAccordion={toggleAccordion}
        title="Skriver Vinjournalen.se något om Vinprovningar?"
        content="Vinjournalen.se skickar ut sitt nyhetsbrev varje fredag, inför storhelger ibland oftare. På så sätt får du tips direkt i din inbox från Vinjournalen.se!"
      />

      <AccordionItem
        index={8}
        openIndex={openIndex}
        toggleAccordion={toggleAccordion}
        title="Har ni någon guide om vinimportörer och vinproducenter?"
        content="Vinjournalen.se skickar ut sitt nyhetsbrev varje fredag, inför storhelger ibland oftare. På så sätt får du tips direkt i din inbox från Vinjournalen.se!"
      />
    </div>
  );
};

export default AccordionNew;
