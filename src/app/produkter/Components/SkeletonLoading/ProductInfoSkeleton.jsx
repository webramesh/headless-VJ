import React from 'react';

const ProductInfoSkeleton = () => {
  return (
    <div className="container mx-auto mt-6 px-4 lg:px-0">
      <div className="flex flex-col lg:flex-row lg:gap-8">
        {/* Left side */}
        <div className="w-full lg:w-2/3 mb-8 lg:mb-0">
          <div className="h-6 w-1/3 bg-gray-300 rounded animate-pulse mb-4"></div>
          {[...Array(3)].map((_, index) => (
            <div key={index} className="mb-4">
              <div className="h-10 w-full bg-gray-300 rounded animate-pulse mb-2"></div>
              <div className="h-20 w-full bg-gray-300 rounded animate-pulse"></div>
            </div>
          ))}
        </div>
        {/* Right side */}
        <div className="w-full lg:w-1/3">
          <div className="h-6 w-1/2 bg-gray-300 rounded animate-pulse mb-4"></div>
          <div className="space-y-4">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="h-4 w-3/4 bg-gray-300 rounded animate-pulse"></div>
                <div className="h-3 w-3 bg-gray-300 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoSkeleton;
