"use client";
import React, { useState } from "react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionItems = [
    { title: "Vin och Mat", id: 1 },
    { title: "Vinfakta", id: 2 },
    { title: "Vinskola", id: 3 },
    { title: "Vintips", id: 4 },
  ];

  const accordionContent = [
    "Experten tipsar: Vin till lax",
    "Experten tipsar: Vin till skaldjur",
    "Experten tipsar: Rött vin till fisk",
    "Tips på rött vin till oxfilé",
    "De bästa vita vinerna när risotto står på menyn",
    "Perfekt vin till din pasta",
    "Experten tipsar: vin till lamm",
    "Vin till fisk - en nybörjarguide",
    "Experten tipsar: Vin till räkor och skaldjur",
    "Experten tipsar: Rött vin till lax",
  ];

  return (
    <div className="container mx-auto px-4 lg:px-0">
      {accordionItems.map((item) => (
        <div key={item.id} className="border-b mb-2 border-slate-200">
          <button
            onClick={() => toggleAccordion(item.id)}
            className="w-full flex justify-between items-center bg-[#F5F5F5] pl-3 text-slate-800 py-2"
          >
            <h3 className="font-outfit text-left font-semibold text-xs sm:text-sm">
              <span>{item.title}</span>
            </h3>
            <span
              className={`text-slate-800 transition-transform duration-300 transform ${
                openIndex === item.id ? "rotate-60" : "rotate-0"
              }`}
            >
              {openIndex === item.id ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-6 h-6 sm:w-8 sm:h-8 text-red-600"
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
                  className="w-6 h-6 sm:w-8 sm:h-8 text-red-600"
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
              openIndex === item.id ? "max-h-screen" : "max-h-0"
            }`}
          >
            <div className="pb-5 bg-[#F5F5F5] flex flex-col sm:flex-row sm:justify-start sm:gap-8 lg:gap-24 text-xs sm:text-sm font-outfit pl-3 text-red-500">
              <div className="flex flex-col gap-2 mb-4 sm:mb-0">
                {accordionContent.slice(0, 5).map((content, index) => (
                  <div
                    key={index}
                    className="hover:text-red-700 cursor-pointer"
                  >
                    {content}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                {accordionContent.slice(5).map((content, index) => (
                  <div
                    key={index}
                    className="hover:text-red-700 cursor-pointer"
                  >
                    {content}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
