import React from 'react';

const HomePageInfoSkeleton = () => {
  return (
    <div className="container mx-auto mt-10 p-2 animate-pulse">
      <div className="flex flex-col gap-4 md:flex-row md:gap-14">
        <div className="w-full md:w-[64%] flex flex-col">
          {/* Main Content Skeleton */}
          <div className="mt-4 text-sm p-3 w-full">
            <div className="h-4 bg-gray-200 mb-2 w-full"></div>
            <div className="h-4 bg-gray-200 mb-2 w-11/12"></div>
            <div className="h-4 bg-gray-200 mb-2 w-10/12"></div>
            <div className="h-4 bg-gray-200 mb-2 w-9/12"></div>
          </div>

          {/* FAQ Title Skeleton */}
          <div className="h-8 bg-gray-200 mt-8 mb-4 w-1/2"></div>

          {/* FAQ Accordion Skeleton */}
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-100 p-4 rounded-md">
                <div className="h-6 bg-gray-200 w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 w-full"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Skeleton */}
        <div className="w-full md:w-[36%]">
          {/* Wine Tourism Skeleton */}
          <div className="bg-gray-100 p-6 mb-6 rounded-md">
            <div className="h-6 bg-gray-200 w-1/2 mb-4"></div>
            <div className="h-40 bg-gray-200"></div>
          </div>

          {/* Senaste Nytt Skeleton */}
          <div className="bg-gray-100 p-6 rounded-md">
            <div className="h-6 bg-gray-200 w-1/2 mb-4"></div>
            {[1, 2].map((item) => (
              <div key={item} className="mb-4">
                <div className="h-4 bg-gray-200 w-full mb-2"></div>
                <div className="h-4 bg-gray-200 w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageInfoSkeleton;