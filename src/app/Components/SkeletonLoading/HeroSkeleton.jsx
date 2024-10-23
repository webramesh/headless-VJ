import React from 'react';

const HeroSkeleton = () => {
  return (
    <div className="container mt-10 mx-auto p-2">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Main Article Skeleton */}
        <div className="w-full lg:w-1/2 bg-[#f5f5f5] overflow-hidden">
          <div className="relative w-full h-0 pb-[66.67%] sm:pb-[50%] lg:pb-[66.67%] bg-gray-300 animate-pulse"></div>
          <div className="p-4">
            <div className="h-6 bg-gray-300 rounded w-3/4 mt-4 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4 mt-4 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-1/3 mt-2 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-full mt-4 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-full mt-2 animate-pulse"></div>
          </div>
        </div>

        {/* Side Articles Skeleton */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="flex flex-col sm:flex-row gap-4 bg-[#f5f5f5] overflow-hidden">
              <div className="relative h-48 sm:h-auto sm:w-1/3 bg-gray-300 animate-pulse"></div>
              <div className="p-4 sm:w-2/3">
                <div className="h-6 bg-gray-300 rounded w-3/4 animate-pulse"></div>
                <div className="h-4 bg-gray-300 rounded w-1/4 mt-2 animate-pulse"></div>
                <div className="h-4 bg-gray-300 rounded w-1/3 mt-2 animate-pulse"></div>
                <div className="h-4 bg-gray-300 rounded w-full mt-2 animate-pulse"></div>
                <div className="h-4 bg-gray-300 rounded w-full mt-2 animate-pulse"></div>
              </div>
            </div>
          ))}
          <div className="mt-8 h-10 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSkeleton;
