import React from 'react';

const SubscriptionSkeleton = () => {
  return (
    <div className="container mx-auto m-10 p-2">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3 bg-[#eb7272] animate-pulse">
          <div className="p-6 sm:p-8">
            <div className="h-8 bg-white/50 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-white/50 rounded w-1/2 mb-6"></div>
            <div className="space-y-4">
              <div className="h-10 bg-white/50 rounded w-full lg:w-2/3"></div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-white/50 rounded mr-4"></div>
                <div className="h-4 bg-white/50 rounded w-1/2"></div>
              </div>
              <div className="h-10 bg-white/50 rounded w-40"></div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 bg-[#f5f5f5] p-6 sm:p-8">
          <div className="space-y-8">
            <div className="flex md:flex-col items-center gap-12 md:gap-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div className="text-center">
                <div className="h-4 bg-gray-300 rounded w-20 mx-auto mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-24 mx-auto"></div>
              </div>
            </div>
            <div className="border-t border-gray-300"></div>
            <div className="flex md:flex-col items-center gap-12 md:gap-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div className="h-4 bg-gray-300 rounded w-24 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSkeleton;
