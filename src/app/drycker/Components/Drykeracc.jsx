"use client";

import React, { useState, useRef, useEffect } from "react";

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const [storlekRange, setStorlekRange] = useState([0, 18000]);
  const [prisRange, setPrisRange] = useState([0, 85000]);
  const [typOptions, setTypOptions] = useState([]);
  const [sortimentOptions, setSortimentOptions] = useState([]);
  const [isEkologisk, setIsEkologisk] = useState(false);
  const [isHallbar, setIsHallbar] = useState(false);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleInputChange = (setter, index) => (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= 85000) {
      setter((prev) => {
        const newRange = [...prev];
        newRange[index] = value;
        return newRange.sort((a, b) => a - b);
      });
    }
  };

  const handleDropdownChange = (setter) => (e) => {
    const value = e.target.value;
    setter((prev) => {
      if (prev.includes(value)) {
        return prev.filter((item) => item !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  const accordionItems = [
    { title: "Storlek", id: 1 },
    { title: "Pris", id: 2 },
    { title: "Typ", id: 3 },
    { title: "Ekologisk", id: 4 },
    { title: "Sortiment", id: 5 },
    { title: "Hallbar", id: 6 },
  ];

  const renderRangeSlider = (title, range, setRange) => {
    const sliderRef = useRef(null);
    const minThumbRef = useRef(null);
    const maxThumbRef = useRef(null);

    useEffect(() => {
      const slider = sliderRef.current;
      const minThumb = minThumbRef.current;
      const maxThumb = maxThumbRef.current;

      const updateSlider = () => {
        const min = range[0];
        const max = range[1];
        const maxValue = title === "Pris" ? 85000 : 18000;
        const percent1 = ((min - 0) / (maxValue - 0)) * 100;
        const percent2 = ((max - 0) / (maxValue - 0)) * 100;
        slider.style.background = `linear-gradient(to right, #e5e7eb ${percent1}%, #ef4444 ${percent1}%, #ef4444 ${percent2}%, #e5e7eb ${percent2}%)`;
        minThumb.style.left = `${percent1}%`;
        maxThumb.style.left = `${percent2}%`;
      };

      updateSlider();
    }, [range, title]);

    const handleThumbMove = (index, clientX) => {
      const slider = sliderRef.current;
      const rect = slider.getBoundingClientRect();
      const percent = (clientX - rect.left) / rect.width;
      const maxValue = title === "Pris" ? 85000 : 18000;
      const value = Math.round(0 + percent * (maxValue - 0));
      setRange((prev) => {
        const newRange = [...prev];
        newRange[index] = Math.max(0, Math.min(maxValue, value));
        return newRange.sort((a, b) => a - b);
      });
    };

    const handleMouseDown = (index) => (e) => {
      e.preventDefault();
      const handleMouseMove = (moveEvent) => {
        handleThumbMove(index, moveEvent.clientX);
      };
      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    return (
      <div className="pb-5  flex flex-col sm:flex-row sm:justify-start sm:gap-18 text-sm font-outfit pl-3 ">
        <div className="w-full max-w-md mx-auto mt-2">
          <div className="flex justify-between mb-4">
            <input
              type="number"
              value={range[0]}
              onChange={handleInputChange(setRange, 0)}
              className="w-20 px-2 py-1 border rounded"
            />
            <input
              type="number"
              value={range[1]}
              onChange={handleInputChange(setRange, 1)}
              className="w-20 px-2 py-1 border rounded"
            />
          </div>
          <div className="relative h-1 bg-gray-200 rounded-full">
            <div
              ref={sliderRef}
              className="absolute top-0 left-0 right-0 bottom-0 rounded-full"
            ></div>
            <div
              ref={minThumbRef}
              className="absolute top-1/2 w-3 h-3 -mt-1.5 -ml-1.5 bg-white border-2 border-red-500 rounded-full cursor-pointer"
              onMouseDown={handleMouseDown(0)}
            ></div>
            <div
              ref={maxThumbRef}
              className="absolute top-1/2 w-3 h-3 -mt-1.5 -ml-1.5 bg-white border-2 border-red-500 rounded-full cursor-pointer"
              onMouseDown={handleMouseDown(1)}
            ></div>
          </div>
        </div>
      </div>
    );
  };

  const renderDropdown = (title, options, setOptions) => (
    <div className="pb-5  flex flex-col sm:flex-row sm:justify-start sm:gap-24 text-sm font-outfit pl-3 text-red-500">
      <div className="w-full max-w-md mx-auto mt-4">
        {title === "Typ"
          ? Array.from({ length: 4 }, (_, i) => (
              <select
                key={i}
                value=""
                onChange={handleDropdownChange(setOptions)}
                className="w-full px-2 py-1 border rounded mb-2"
              >
                <option value="">
                  Select {title} {i + 1}
                </option>
                <option value={`${title.toLowerCase()}${i + 1}_1`}>
                  {title} {i + 1} Option 1
                </option>
                <option value={`${title.toLowerCase()}${i + 1}_2`}>
                  {title} {i + 1} Option 2
                </option>
                <option value={`${title.toLowerCase()}${i + 1}_3`}>
                  {title} {i + 1} Option 3
                </option>
              </select>
            ))
          : Array.from({ length: 4 }, (_, i) => (
              <select
                key={i}
                value=""
                onChange={handleDropdownChange(setOptions)}
                className="w-full px-2 py-1 border rounded mb-2"
              >
                <option value="">
                  Select {title} {i + 1}
                </option>
                <option value={`${title.toLowerCase()}${i + 1}_1`}>
                  {title} {i + 1} Option 1
                </option>
                <option value={`${title.toLowerCase()}${i + 1}_2`}>
                  {title} {i + 1} Option 2
                </option>
                <option value={`${title.toLowerCase()}${i + 1}_3`}>
                  {title} {i + 1} Option 3
                </option>
              </select>
            ))}
      </div>
    </div>
  );

  const renderCheckbox = (title, isChecked, setIsChecked) => (
    <div className="pb-5 flex flex-col sm:flex-row sm:justify-start sm:gap-24 text-sm font-outfit pl-3 text-red-500">
      <div className="w-full max-w-md mx-auto mt-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            className="mr-2"
          />
          <span className="text-lg font-medium">{title}</span>
        </label>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto">
      {accordionItems.map((item) => (
        <div key={item.id} className="border-b mb-6 border-slate-200">
          {item.id <= 2 ? (
            <div>
              <h3 className="font-outfit text-left text-lg  pl-3 py-1">
                <span>{item.title}</span>
              </h3>
              <div className="max-h-screen">
                {item.id === 1 &&
                  renderRangeSlider("Storlek", storlekRange, setStorlekRange)}
                {item.id === 2 &&
                  renderRangeSlider("Pris", prisRange, setPrisRange)}
              </div>
            </div>
          ) : (
            <>
              <button
                onClick={() => toggleAccordion(item.id)}
                className="w-full flex justify-between items-center bg-[#F5F5F5] pl-3 py-1"
              >
                <h3 className="font-outfit text-left text-lg">
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
                  openIndex === item.id ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className="pb-5 bg-[#F5F5F5] flex flex-col sm:flex-row sm:justify-start sm:gap-24 text-sm font-outfit pl-3 text-red-500">
                  {item.id === 3 &&
                    renderDropdown("Typ", typOptions, setTypOptions)}
                  {item.id === 4 &&
                    renderCheckbox("Ekologisk", isEkologisk, setIsEkologisk)}
                  {item.id === 5 &&
                    renderDropdown(
                      "Sortiment",
                      sortimentOptions,
                      setSortimentOptions
                    )}
                  {item.id === 6 &&
                    renderCheckbox("Hallbar", isHallbar, setIsHallbar)}
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
