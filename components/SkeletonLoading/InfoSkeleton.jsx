import React from 'react';

const InfoSkeleton = () => {
  return (
    <div className="container mx-auto mt-10 p-2">
      <div className="flex flex-col gap-4 md:flex-row md:gap-14">
        <div className="w-full md:w-[64%] flex flex-col">
          <div className="h-8 bg-gray-300 rounded w-3/4 animate-pulse"></div>
          <div className="mt-4 h-20 bg-gray-300 rounded w-full animate-pulse"></div>
          <div className="mt-4 h-6 bg-gray-300 rounded w-1/2 animate-pulse"></div>
          <div className="mt-4 h-32 bg-gray-300 rounded w-full animate-pulse"></div>
          <div className="mt-4 h-6 bg-gray-300 rounded w-2/3 animate-pulse"></div>
          <div className="mt-4">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="mb-2 h-12 bg-gray-300 rounded w-full animate-pulse"></div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/3">
          <div className="flex flex-start flex-col gap-4">
            <div className="h-12 bg-gray-300 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
            <div className="h-12 bg-gray-300 rounded w-full animate-pulse"></div>
            <div className="h-12 bg-gray-300 rounded w-full animate-pulse"></div>
          </div>
          <div className="mt-8">
            <div className="h-6 bg-gray-300 rounded w-1/2 animate-pulse"></div>
          </div>
          <div className="mt-4">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="flex justify-between items-center pt-3">
                <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>
                <div className="h-4 w-4 bg-gray-300 rounded-full animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSkeleton;