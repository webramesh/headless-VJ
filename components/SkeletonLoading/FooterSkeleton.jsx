import React from 'react';

const FooterSkeleton = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="container mx-auto">
        <div className="p-3 mt-12 flex flex-col gap-2 md:gap-4 lg:flex-row justify-between items-center">
          <div className="h-10 w-40 bg-gray-300 rounded animate-pulse mb-4 md:mb-0 md:ml-8"></div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-4 mb-4 md:mb-0">
            {[...Array(7)].map((_, index) => (
              <div key={index} className="h-4 w-20 bg-gray-300 rounded animate-pulse"></div>
            ))}
          </div>
          <div className="flex gap-2">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="h-8 w-8 bg-gray-300 rounded-full animate-pulse"></div>
            ))}
          </div>
        </div>
        <div className="h-4 w-full bg-gray-300 rounded animate-pulse mt-4"></div>
      </div>
    </div>
  );
};

export default FooterSkeleton;