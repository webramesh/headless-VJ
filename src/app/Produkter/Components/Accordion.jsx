"use client";
import React, { useState } from "react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto">
      {/* Accordion Item 1 */}
      <div className="border-b mb-2  border-slate-200">
        <button
          onClick={() => toggleAccordion(1)}
          className="w-full flex justify-between items-center bg-[#F5F5F5] pl-3 text-slate-800"
        >
          <h3 className="font-outfit text-left font-semibold text-sm ">
            <span>Vin och Mat</span>
          </h3>
          <span
            className={`text-slate-800 transition-transform duration-300 transform ${
              openIndex === 1 ? "rotate-60" : "rotate-0"
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
            openIndex === 1 ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="pb-5 bg-[#F5F5F5] flex justify-start gap-24 text-sm font-outfit pl-3 text-red-500">
            <div className="flex flex-col gap-2">
              <div>Experten tipsar: Vin till lax </div>
              <div>Experten tipsar: Vin till skaldjur </div>
              <div>Experten tipsar: Rött vin till fisk </div>
              <div>Tips på rött vin till oxfilé </div>
              <div>De bästa vita vinerna när risotto står på menyn </div>
            </div>
            <div className="flex flex-col gap-2">
              <div>Perfekt vin till din pasta </div>
              <div>Experten tipsar: vin till lamm </div>
              <div>Vin till fisk – en nybörjarguide</div>
              <div>Experten tipsar: Vin till räkor och skaldjur </div>
              <div>Experten tipsar: Rött vin till lax </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accordion Item 2 */}
      <div className="border-b mb-2 border-slate-200">
        <button
          onClick={() => toggleAccordion(2)}
          className="w-full flex justify-between items-center bg-[#F5F5F5] pl-3 text-slate-800"
        >
          <h3 className="font-outfit text-left text-black text-sm font-semibold">
            <span>Vinfakta</span>
          </h3>
          <span
            className={`text-slate-800 transition-transform duration-300 transform ${
              openIndex === 2 ? "rotate-60" : "rotate-0"
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
            openIndex === 2 ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="pb-5 bg-[#F5F5F5] flex justify-start gap-24 text-sm font-outfit pl-3 text-red-500">
            <div className="flex flex-col gap-2">
              <div>Experten tipsar: Vin till lax </div>
              <div>Experten tipsar: Vin till skaldjur </div>
              <div>Experten tipsar: Rött vin till fisk </div>
              <div>Tips på rött vin till oxfilé </div>
              <div>De bästa vita vinerna när risotto står på menyn </div>
            </div>
            <div className="flex flex-col gap-2">
              <div>Perfekt vin till din pasta </div>
              <div>Experten tipsar: vin till lamm </div>
              <div>Vin till fisk – en nybörjarguide</div>
              <div>Experten tipsar: Vin till räkor och skaldjur </div>
              <div>Experten tipsar: Rött vin till lax </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accordion Item 3 */}
      <div className="border-b mb-2 border-slate-200">
        <button
          onClick={() => toggleAccordion(3)}
          className="w-full flex justify-between items-center bg-[#F5F5F5] pl-3 text-slate-800"
        >
          <h3 className="font-outfit text-left text-black text-sm font-semibold">
            <span>Vinskola</span>
          </h3>
          <span
            className={`text-slate-800 transition-transform duration-300 transform ${
              openIndex === 3 ? "rotate-60" : "rotate-0"
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
            openIndex === 3 ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="pb-5 bg-[#F5F5F5] flex justify-start gap-24 text-sm font-outfit pl-3 text-red-500">
            <div className="flex flex-col gap-2">
              <div>Experten tipsar: Vin till lax </div>
              <div>Experten tipsar: Vin till skaldjur </div>
              <div>Experten tipsar: Rött vin till fisk </div>
              <div>Tips på rött vin till oxfilé </div>
              <div>De bästa vita vinerna när risotto står på menyn </div>
            </div>
            <div className="flex flex-col gap-2">
              <div>Perfekt vin till din pasta </div>
              <div>Experten tipsar: vin till lamm </div>
              <div>Vin till fisk – en nybörjarguide</div>
              <div>Experten tipsar: Vin till räkor och skaldjur </div>
              <div>Experten tipsar: Rött vin till lax </div>
            </div>
          </div>
        </div>
      </div>
      {/* Accordion Item 4 */}
      <div className="border-b mb-2 border-slate-200">
        <button
          onClick={() => toggleAccordion(4)}
          className="w-full flex justify-between items-center bg-[#F5F5F5] pl-3 text-slate-800"
        >
          <h3 className="font-outfit text-left text-black text-sm font-semibold">
            <span>Vintips</span>
          </h3>
          <span
            className={`text-slate-800 transition-transform duration-300 transform ${
              openIndex === 4 ? "rotate-60" : "rotate-0"
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
            openIndex === 4 ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="pb-5 bg-[#F5F5F5] flex justify-start gap-24 text-sm font-outfit pl-3 text-red-500">
            <div className="flex flex-col gap-2">
              <div>Experten tipsar: Vin till lax </div>
              <div>Experten tipsar: Vin till skaldjur </div>
              <div>Experten tipsar: Rött vin till fisk </div>
              <div>Tips på rött vin till oxfilé </div>
              <div>De bästa vita vinerna när risotto står på menyn </div>
            </div>
            <div className="flex flex-col gap-2">
              <div>Perfekt vin till din pasta </div>
              <div>Experten tipsar: vin till lamm </div>
              <div>Vin till fisk – en nybörjarguide</div>
              <div>Experten tipsar: Vin till räkor och skaldjur </div>
              <div>Experten tipsar: Rött vin till lax </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
