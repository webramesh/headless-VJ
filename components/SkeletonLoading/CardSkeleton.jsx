import React from 'react';

const CardSkeleton = ({ title, subtitle }) => {
  return (
    <div className="container mx-auto mt-10 p-2">
      <div className="h-4 bg-gray-300 rounded w-1/4 mx-auto animate-pulse"></div>
      <div className="h-6 bg-gray-300 rounded w-1/2 mx-auto mt-4 animate-pulse"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mt-8">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="flex flex-col">
            <div className="bg-gray-300 w-full h-48 md:h-56 lg:h-64 animate-pulse"></div>
            <div className="p-4 bg-[#f5f5f5] flex-grow">
              <div className="h-6 bg-gray-300 rounded w-3/4 animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded w-1/4 mt-2 animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded w-1/3 mt-2 animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded w-full mt-2 animate-pulse"></div>
              <div className="h-4 bg-gray-300 rounded w-full mt-2 animate-pulse"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardSkeleton;