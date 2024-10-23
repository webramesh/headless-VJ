'use client';
import React, { useState } from 'react';

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* Accordion Item 1 */}
      <div className="border-b mb-2 border-slate-200">
        <button
          onClick={() => toggleAccordion(1)}
          className="w-full flex justify-between items-center bg-[#F5F5F5] pl-3 text-slate-800"
        >
          <h3 className=" text-left text-black text-sm font-medium">
            <span>Hur ofta kommer Vinjournalen.se ’s populära nyhetsbrev ut?</span>
          </h3>
          <span
            className={`text-slate-800 transition-transform duration-300 transform ${
              openIndex === 1 ? 'rotate-60' : 'rotate-0'
            }`}
          >
            {openIndex === 1 ? (
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
            openIndex === 1 ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <div className="pb-5 text-xs md:text-sm  pl-3 text-slate-500">
            Vinjournalen.se skickar ut sitt nyhetsbrev varje fredag, inför storhelger ibland oftare. På så sätt får du
            tips direkt i din inbox från Vinjournalen.se!
          </div>
        </div>
      </div>

      {/* Accordion Item 2 */}
      <div className="border-b mb-2 border-slate-200">
        <button
          onClick={() => toggleAccordion(2)}
          className="w-full flex justify-between items-center bg-[#F5F5F5] pl-3 text-slate-800"
        >
          <h3 className=" text-left text-black text-sm font-medium">
            <span>Skriver Vinjournalen.se även om ekologiska och naturviner samt vegetrarisk/vegansk mat?</span>
          </h3>
          <span
            className={`text-slate-800 transition-transform duration-300 transform ${
              openIndex === 2 ? 'rotate-60' : 'rotate-0'
            }`}
          >
            {openIndex === 2 ? (
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
            openIndex === 2 ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <div className="pb-5 text-xs md:text-sm  pl-3 text-slate-500">
            Vinjournalen.se skickar ut sitt nyhetsbrev varje fredag, inför storhelger ibland oftare. På så sätt får du
            tips direkt i din inbox från Vinjournalen.se!
          </div>
        </div>
      </div>

      {/* Accordion Item 3 */}
      <div className="border-b mb-2 border-slate-200">
        <button
          onClick={() => toggleAccordion(3)}
          className="w-full flex justify-between items-center bg-[#F5F5F5] pl-3 text-slate-800"
        >
          <h3 className=" text-black text-left text-sm font-medium">
            <span>Skriver Vinjournalen.se även om Vinturism?</span>
          </h3>
          <span
            className={`text-slate-800 transition-transform duration-300 transform ${
              openIndex === 3 ? 'rotate-60' : 'rotate-0'
            }`}
          >
            {openIndex === 3 ? (
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
            openIndex === 3 ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <div className="pb-5 text-xs md:text-sm  pl-3 text-slate-500">
            Vinjournalen.se skickar ut sitt nyhetsbrev varje fredag, inför storhelger ibland oftare. På så sätt får du
            tips direkt i din inbox från Vinjournalen.se!
          </div>
        </div>
      </div>

      {/* Accordion Item 4 */}
      <div className="border-b mb-2 border-slate-200">
        <button
          onClick={() => toggleAccordion(4)}
          className="w-full flex justify-between items-center bg-[#F5F5F5] pl-3 text-slate-800"
        >
          <h3 className=" text-left text-black text-sm font-medium">
            <span>Hur ofta publicerar Vinjournalen.se nytt innehåll?</span>
          </h3>
          <span
            className={`text-slate-800 transition-transform duration-300 transform ${
              openIndex === 4 ? 'rotate-60' : 'rotate-0'
            }`}
          >
            {openIndex === 4 ? (
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
            openIndex === 4 ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <div className="pb-5 text-xs md:text-sm  pl-3 text-slate-500">
            Vinjournalen.se skickar ut sitt nyhetsbrev varje fredag, inför storhelger ibland oftare. På så sätt får du
            tips direkt i din inbox från Vinjournalen.se!
          </div>
        </div>
      </div>

      {/* Accordion Item 5 */}
      <div className="border-b mb-2 border-slate-200">
        <button
          onClick={() => toggleAccordion(5)}
          className="w-full flex justify-between items-center bg-[#F5F5F5] pl-3 text-slate-800"
        >
          <h3 className=" text-left text-black text-sm font-medium">
            <span>Är Vinjournalen.se ett passande magasin om jag vill lära mig om vin?</span>
          </h3>
          <span
            className={`text-slate-800 transition-transform duration-300 transform ${
              openIndex === 5 ? 'rotate-60' : 'rotate-0'
            }`}
          >
            {openIndex === 5 ? (
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
            openIndex === 5 ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <div className="pb-5 text-xs md:text-sm  pl-3 text-slate-500">
            Vinjournalen.se skickar ut sitt nyhetsbrev varje fredag, inför storhelger ibland oftare. På så sätt får du
            tips direkt i din inbox från Vinjournalen.se!
          </div>
        </div>
      </div>

      {/* Accordion Item 6 */}
      <div className="border-b mb-2 border-slate-200">
        <button
          onClick={() => toggleAccordion(6)}
          className="w-full flex justify-between items-center bg-[#F5F5F5] pl-3 text-slate-800"
        >
          <h3 className=" text-left text-black text-sm font-medium">
            <span>Vad skriver Vinjournalen.se om?</span>
          </h3>
          <span
            className={`text-slate-800 transition-transform duration-300 transform ${
              openIndex === 6 ? 'rotate-60' : 'rotate-0'
            }`}
          >
            {openIndex === 6 ? (
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
            openIndex === 6 ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <div className="pb-5 text-xs md:text-sm  pl-3 text-slate-500">
            Vinjournalen.se skickar ut sitt nyhetsbrev varje fredag, inför storhelger ibland oftare. På så sätt får du
            tips direkt i din inbox från Vinjournalen.se!
          </div>
        </div>
      </div>
      {/* Accordion Item 7 */}
      <div className="border-b mb-2 border-slate-200">
        <button
          onClick={() => toggleAccordion(7)}
          className="w-full flex justify-between items-center bg-[#F5F5F5] pl-3 text-slate-800"
        >
          <h3 className=" text-left text-black text-sm font-medium">
            <span>Skriver Vinjournalen.se något om Vinprovningar?</span>
          </h3>
          <span
            className={`text-slate-800 transition-transform duration-300 transform ${
              openIndex === 7 ? 'rotate-60' : 'rotate-0'
            }`}
          >
            {openIndex === 7 ? (
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
            openIndex === 7 ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <div className="pb-5 text-xs md:text-sm  pl-3 text-slate-500">
            Vinjournalen.se skickar ut sitt nyhetsbrev varje fredag, inför storhelger ibland oftare. På så sätt får du
            tips direkt i din inbox från Vinjournalen.se!
          </div>
        </div>
      </div>
      {/* Accordion Item 8 */}
      <div className="border-b mb-2 border-slate-200">
        <button
          onClick={() => toggleAccordion(8)}
          className="w-full flex justify-between items-center bg-[#F5F5F5] pl-3 text-slate-800"
        >
          <h3 className=" text-left text-black text-sm font-medium">
            <span>Har ni någon guide om vinimportörer och vinproducenter?</span>
          </h3>
          <span
            className={`text-slate-800 transition-transform duration-300 transform ${
              openIndex === 8 ? 'rotate-60' : 'rotate-0'
            }`}
          >
            {openIndex === 8 ? (
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
            openIndex === 8 ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <div className="pb-5 text-xs md:text-sm  pl-3 text-slate-500">
            Vinjournalen.se skickar ut sitt nyhetsbrev varje fredag, inför storhelger ibland oftare. På så sätt får du
            tips direkt i din inbox från Vinjournalen.se!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
