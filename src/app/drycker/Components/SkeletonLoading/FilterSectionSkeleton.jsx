import React from 'react';

const FilterSectionSkeleton = () => {
  return (
    <div className="container mx-auto">
      <div className="mt-4 sm:mt-6 md:mt-10">
        <div className="flex flex-col lg:flex-row md:gap-8">
          {/* LeftSide */}
          <div className="w-full lg:w-[20%] mb-6 lg:mb-0 border-2 border-[#f5f5f5] p-4">
            <div className="lg:sticky lg:top-6 lg:max-h-screen flex flex-col">
              <div className="h-8 w-1/2 bg-gray-300 rounded animate-pulse mb-4"></div>
              <div className="h-64 w-full bg-gray-300 rounded animate-pulse"></div>
            </div>
          </div>
          {/* Rightside */}
          <div className="w-full lg:w-[80%] flex flex-col">
            <div className="h-8 w-1/2 bg-gray-300 rounded animate-pulse mx-auto mb-4 md:mb-6"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, index) => (
                <div key={index} className="h-64 bg-gray-300 rounded animate-pulse"></div>
              ))}
            </div>
            <div className="flex justify-center mt-6 md:mt-8">
              <div className="h-10 w-32 bg-gray-300 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSectionSkeleton;
