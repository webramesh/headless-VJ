'use client';
import { useFilters } from '@/src/context/FilterContext';
import React, { useEffect, useRef, useState } from 'react';

const Slider = ({ title, range, maxValue, rangeKey }) => {
  const { dispatch } = useFilters();
  const sliderRef = useRef(null);
  const minThumbRef = useRef(null);
  const maxThumbRef = useRef(null);
  const timeoutRef = useRef(null);
  const [localRange, setLocalRange] = useState([]);

  useEffect(() => {
    setLocalRange(range);
  }, [range]);

  const updateVisualPosition = (index, clientX) => {
    const rect = sliderRef.current.getBoundingClientRect();
    const percent = ((clientX - rect.left) / rect.width) * 100;
    const thumb = index === 0 ? minThumbRef.current : maxThumbRef.current;
    thumb.style.left = `${percent}%`;
  };

  function handleRangeChange(index, value, maxValue) {
    dispatch({ type: 'UPDATE_RANGE', payload: { rangeKey, index, value, maxValue } });
  }

  useEffect(() => {
    const slider = sliderRef.current;
    const minThumb = minThumbRef.current;
    const maxThumb = maxThumbRef.current;

    const updateSlider = () => {
      const min = localRange[0];
      const max = localRange[1];
      const percent1 = ((min - 0) / (maxValue - 0)) * 100;
      const percent2 = ((max - 0) / (maxValue - 0)) * 100;
      slider.style.background = `linear-gradient(to right, #e5e7eb ${percent1}%, #ef4444 ${percent1}%, #ef4444 ${percent2}%, #e5e7eb ${percent2}%)`;
      minThumb.style.left = `${percent1}%`;
      maxThumb.style.left = `${percent2}%`;
    };

    updateSlider();
  }, [localRange, maxValue]);

  const handleThumbMove = (index, clientX) => {
    updateVisualPosition(index, clientX);
    const slider = sliderRef.current;
    const rect = slider.getBoundingClientRect();
    const percent = (clientX - rect.left) / rect.width;
    const value = Math.round(0 + percent * (maxValue - 0));
    setLocalRange((prev) => (index === 0 ? [value, prev[1]] : [prev[0], value]));

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => handleRangeChange(index, value, maxValue), 300);
  };

  const handleInteractionStart = (index) => {
    const handleMove = (moveEvent) => {
      const positionX = moveEvent.touches ? moveEvent.touches[0].clientX : moveEvent.clientX;
      handleThumbMove(index, positionX);
    };
    const handleEnd = () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('touchmove', handleMove);
      document.removeEventListener('mouseup', handleEnd);
      document.removeEventListener('touchend', handleEnd);
    };
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('touchmove', handleMove);
    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchend', handleEnd);
  };

  return (
    <>
      <h3 className=" text-left text-lg pl-3 py-1">
        <span>{title}</span>
      </h3>
      <div className="max-h-screen">
        <div className="pb-5 flex flex-col sm:flex-row sm:justify-start sm:gap-18 text-sm lg:pl-3">
          <div className="w-full max-w-md mx-auto mt-2">
            <div className="flex justify-between mb-4">
              <span className="w-20 px-2 py-1 ">{localRange[0]}</span>
              <span className="w-20 px-2 py-1 ">{localRange[1]}</span>
            </div>
            <div className="relative h-1 bg-gray-200 rounded-full">
              <div ref={sliderRef} className="absolute top-0 left-0 right-0 bottom-0 rounded-full"></div>
              <div
                ref={minThumbRef}
                className="absolute top-1/2 md:size-3 size-4 -mt-2 md:-mt-1.5 -ml-1.5 bg-white border-2 border-red-500 rounded-full cursor-pointer"
                onMouseDown={() => handleInteractionStart(0)}
                onTouchStart={() => handleInteractionStart(0)}
              ></div>
              <div
                ref={maxThumbRef}
                className="absolute top-1/2 md:size-3 size-4 -mt-2 md:-mt-1.5 -ml-1.5 bg-white border-2 border-red-500 rounded-full cursor-pointer"
                onMouseDown={() => handleInteractionStart(1)}
                onTouchStart={() => handleInteractionStart(1)}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
