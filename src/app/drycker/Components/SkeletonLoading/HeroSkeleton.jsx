import React from 'react';

const HeroSkeleton = () => {
  return (
    <div className="relative h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden">
      <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
      <div className="absolute inset-0 bg-black bg-opacity-25 flex flex-col gap-2 sm:gap-3 md:gap-4 justify-center items-center p-4">
        <div className="h-6 w-48 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-8 sm:h-10 md:h-12 lg:h-14 w-3/4 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-6 sm:h-8 md:h-10 lg:h-12 w-2/3 bg-gray-300 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default HeroSkeleton;
