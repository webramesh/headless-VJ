import React from 'react';

const InformationCardsSkeleton = () => {
  return (
    <div className="mt-8 border-y-2">
      <div className="container mx-auto">
        <div className="flex gap-4 sm:gap-8 px-4 sm:px-8 py-2 font-outfit items-center justify-center overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="h-8 w-32 bg-gray-300 rounded animate-pulse"></div>
          ))}
        </div>

        <div className="container mx-auto p-4 sm:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex flex-col items-center p-4 sm:p-8 justify-center bg-[#f4f1ed]">
                <div className="h-6 w-3/4 bg-gray-300 rounded animate-pulse mb-4"></div>
                <div className="h-1 w-[90%] bg-gray-300 rounded animate-pulse mb-4"></div>
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="h-4 w-1/2 bg-gray-300 rounded animate-pulse mb-2"></div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-4xl mx-auto mb-16 px-4 sm:px-0">
          <div className="h-8 w-3/4 bg-gray-300 rounded animate-pulse mb-4 mx-auto"></div>
          <div className="flex justify-center mb-8">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="w-8 h-8 bg-gray-300 rounded-full animate-pulse mx-1"></div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col w-full md:w-1/2 gap-4">
              {[...Array(3)].map((_, index) => (
                <div key={index} className="h-10 bg-gray-300 rounded-2xl animate-pulse"></div>
              ))}
            </div>
            <div className="flex flex-col w-full md:w-1/2 gap-12">
              <div className="h-40 bg-gray-300 rounded-xl animate-pulse"></div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="h-10 w-full sm:w-[40%] bg-gray-300 rounded-full animate-pulse"></div>
                <div className="h-4 w-full sm:w-[60%] bg-gray-300 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationCardsSkeleton;