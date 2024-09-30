import React from 'react';

const ProductSectionSkeleton = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-6 mt-4 py-8 lg:py-16">
        {/* Left section */}
        <div className="w-full lg:w-1/3">
          <div className="lg:sticky lg:top-4">
            <div className="h-4 w-2/3 bg-gray-300 rounded animate-pulse"></div>
            <div className="mt-4">
              <div className="w-2/3 sm:w-1/2 md:w-2/3 lg:w-full h-[500px] bg-gray-300 rounded animate-pulse mx-auto"></div>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex flex-col w-full lg:w-2/3">
          <div className="h-8 w-3/4 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-4 w-1/2 bg-gray-300 rounded animate-pulse mt-2"></div>
          <div className="h-4 w-full bg-gray-300 rounded animate-pulse mt-2"></div>
          <div className="h-4 w-full bg-gray-300 rounded animate-pulse mt-2"></div>
          <div className="h-4 w-full bg-gray-300 rounded animate-pulse mt-2"></div>
          <div className="h-4 w-1/4 bg-gray-300 rounded animate-pulse mt-2"></div>
          
          <div className="bg-[#f9d7e1] mt-6 w-full p-4">
            <div className="flex flex-col sm:flex-row w-full justify-between">
              <div className="h-6 w-1/4 bg-gray-300 rounded animate-pulse"></div>
              <div className="h-6 w-1/4 bg-gray-300 rounded animate-pulse mt-2 sm:mt-0"></div>
            </div>
            <div className="mt-4">
              <div className="w-full flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
                <div className="w-full sm:w-1/3 h-10 bg-gray-300 rounded-full animate-pulse"></div>
                <div className="w-full sm:w-[65%] h-10 bg-gray-300 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="h-16 w-full bg-gray-300 rounded animate-pulse mt-4"></div>
            <div className="flex mt-4 gap-6">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="h-8 w-8 bg-gray-300 rounded-full animate-pulse"></div>
              ))}
            </div>
          </div>
          
          <div className="mt-4 bg-[#f4f1ed] w-full p-8">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-gray-300 rounded-full animate-pulse"></div>
              <div className="h-6 w-1/3 bg-gray-300 rounded animate-pulse ml-4"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-4">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="flex flex-col">
                  <div className="h-4 w-20 bg-gray-300 rounded animate-pulse"></div>
                  <div className="h-3 w-16 bg-gray-300 rounded animate-pulse mt-2"></div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="h-40 bg-gray-300 rounded animate-pulse"></div>
              ))}
            </div>
          </div>
          
          <div className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="flex flex-col items-center p-6 bg-[#f4f1ed]">
                  <div className="h-6 w-20 bg-gray-300 rounded animate-pulse"></div>
                  <div className="h-16 w-full bg-gray-300 rounded animate-pulse mt-4"></div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="m-8 flex justify-center">
            <div className="h-6 w-1/2 bg-gray-300 rounded animate-pulse"></div>
          </div>
          
          <div className="flex flex-wrap justify-between">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex flex-col items-center w-1/2 sm:w-1/4 mb-8 sm:mb-0">
                <div className="h-20 w-20 bg-gray-300 rounded animate-pulse"></div>
                <div className="h-4 w-16 bg-gray-300 rounded animate-pulse mt-6"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSectionSkeleton;