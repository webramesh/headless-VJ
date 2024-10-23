import React from 'react';

const PriceSkeleton = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="h-8 w-1/2 bg-gray-300 rounded animate-pulse mx-auto mb-8"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="border-2 shadow-md p-6">
            <div className="flex flex-col gap-2 items-start">
              <div className="w-full h-48 bg-gray-300 rounded animate-pulse mb-4"></div>
              <div className="h-4 w-1/3 bg-gray-300 rounded animate-pulse"></div>
              <div className="h-6 w-full bg-gray-300 rounded animate-pulse"></div>
              <div className="h-6 w-full bg-gray-300 rounded animate-pulse"></div>
              <div className="flex gap-2 mt-4 items-center">
                <div className="h-4 w-4 bg-gray-300 rounded-full animate-pulse"></div>
                <div className="h-4 w-2/3 bg-gray-300 rounded animate-pulse"></div>
              </div>
              <div className="h-6 w-1/4 bg-gray-300 rounded animate-pulse mt-2"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceSkeleton;
