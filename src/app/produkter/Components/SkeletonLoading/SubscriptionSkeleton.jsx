import React from 'react';

const SubscriptionSkeleton = () => {
  return (
    <div className="container mx-auto m-10 p-2">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3 bg-[#eb7272]">
          <div className="p-6 sm:p-8">
            <div className="h-8 w-3/4 bg-gray-300 rounded animate-pulse mb-4"></div>
            <div className="h-4 w-1/2 bg-gray-300 rounded animate-pulse mb-6"></div>
            <div className="space-y-4">
              <div className="h-10 w-full lg:w-2/3 bg-gray-300 rounded-md animate-pulse"></div>
              <div className="flex items-center">
                <div className="h-4 w-4 bg-gray-300 rounded animate-pulse mr-4"></div>
                <div className="h-4 w-1/2 bg-gray-300 rounded animate-pulse"></div>
              </div>
              <div className="h-10 w-1/3 bg-gray-300 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 bg-[#f5f5f5] p-6 sm:p-8">
          <div className="space-y-8">
            <div className="flex md:flex-col items-center gap-12 md:gap-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full animate-pulse"></div>
              <div className="text-center">
                <div className="h-4 w-20 bg-gray-300 rounded animate-pulse mb-2"></div>
                <div className="h-4 w-24 bg-gray-300 rounded animate-pulse"></div>
              </div>
            </div>
            <div className="h-1 w-full bg-gray-300 rounded animate-pulse"></div>
            <div className="flex md:flex-col items-center gap-12 md:gap-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full animate-pulse"></div>
              <div className="h-4 w-24 bg-gray-300 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSkeleton;