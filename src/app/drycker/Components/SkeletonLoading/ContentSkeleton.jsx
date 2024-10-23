import React from 'react';

const ContentSkeleton = () => {
  return (
    <div className="container mx-auto px-4 lg:px-0" id="arrow">
      <div className="mt-4 sm:mt-8">
        <div className="flex flex-col lg:flex-row lg:gap-10">
          {/* Left Section */}
          <div className="w-full lg:w-[70%] flex flex-col items-start lg:pl-7 gap-4 sm:gap-6">
            {[...Array(5)].map((_, index) => (
              <React.Fragment key={index}>
                <div className="h-8 w-3/4 bg-gray-300 rounded animate-pulse"></div>
                <div className="h-32 w-full bg-gray-300 rounded animate-pulse"></div>
              </React.Fragment>
            ))}
            <div className="h-64 w-full bg-gray-300 rounded animate-pulse"></div>
          </div>
          {/* Right Section */}
          <div className="w-full lg:w-[30%] mt-8 lg:mt-0">
            <div className="h-96 w-full bg-gray-300 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentSkeleton;
