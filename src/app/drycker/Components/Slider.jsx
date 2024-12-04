'use client';
import { useFilters } from '@/src/context/FilterContext';
import React, { useEffect, useRef } from 'react';

const Slider = ({ title, range, maxValue, rangeKey }) => {
  const { dispatch } = useFilters();
  const sliderRef = useRef(null);
  const minThumbRef = useRef(null);
  const maxThumbRef = useRef(null);

  function handleRangeChange(index, value, maxValue) {
    dispatch({ type: 'UPDATE_RANGE', payload: { rangeKey, index, value, maxValue } });
  }

  useEffect(() => {
    const slider = sliderRef.current;
    const minThumb = minThumbRef.current;
    const maxThumb = maxThumbRef.current;

    const updateSlider = () => {
      const min = range[0];
      const max = range[1];
      const percent1 = ((min - 0) / (maxValue - 0)) * 100;
      const percent2 = ((max - 0) / (maxValue - 0)) * 100;
      slider.style.background = `linear-gradient(to right, #e5e7eb ${percent1}%, #ef4444 ${percent1}%, #ef4444 ${percent2}%, #e5e7eb ${percent2}%)`;
      minThumb.style.left = `${percent1}%`;
      maxThumb.style.left = `${percent2}%`;
    };

    updateSlider();
  }, [range, maxValue]);

  const handleThumbMove = (index, clientX) => {
    const slider = sliderRef.current;
    const rect = slider.getBoundingClientRect();
    const percent = (clientX - rect.left) / rect.width;
    const value = Math.round(0 + percent * (maxValue - 0));
    handleRangeChange(index, value, maxValue);
  };

  const handleMouseDown = (index) => (e) => {
    e.preventDefault();
    const handleMouseMove = (moveEvent) => {
      handleThumbMove(index, moveEvent.clientX);
    };
    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleInputChange = (index) => (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= maxValue) {
      handleRangeChange(index, value, maxValue);
    }
  };

  return (
    <>
      <h3 className=" text-left text-lg  pl-3 py-1">
        <span>{title}</span>
      </h3>
      <div className="max-h-screen">
        <div className="pb-5 flex flex-col sm:flex-row sm:justify-start sm:gap-18 text-sm pl-3">
          <div className="w-full max-w-md mx-auto mt-2">
            <div className="flex justify-between mb-4">
              <input
                type="number"
                value={range[0]}
                onChange={handleInputChange(0)}
                className="w-20 px-2 py-1 border rounded"
              />
              <input
                type="number"
                value={range[1]}
                onChange={handleInputChange(1)}
                className="w-20 px-2 py-1 border rounded"
              />
            </div>
            <div className="relative h-1 bg-gray-200 rounded-full">
              <div ref={sliderRef} className="absolute top-0 left-0 right-0 bottom-0 rounded-full"></div>
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
      </div>
    </>
  );
};

export default Slider;
