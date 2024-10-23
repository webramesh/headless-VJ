import React from 'react';

const CountrySectionSkeleton = () => {
  return (
    <div className="container mx-auto">
      <div className="mt-12">
        <div className="h-8 w-1/2 bg-gray-300 rounded animate-pulse mx-auto mb-8"></div>
        <div className="w-full grid grid-cols-2 md:flex md:flex-wrap px-12 py-6 md:px-24 md:py-12 md:items-center md:justify-center gap-8 md:gap-4">
          {[...Array(20)].map((_, index) => (
            <div key={index} className="h-10 w-full bg-gray-300 rounded-full animate-pulse"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountrySectionSkeleton;
