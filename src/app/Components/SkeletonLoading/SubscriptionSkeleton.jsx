'use client';
import React from 'react';

// Subscription Form Skeleton
const SubscriptionFormSkeleton = () => {
  return (
    <div className="w-full bg-[#eb7272] text-white animate-pulse">
      <div className="p-6 sm:p-8">
        <div className="h-10 bg-gray-200 w-3/4 mb-4"></div>
        <div className="h-6 bg-gray-200 w-1/2 mb-6"></div>
        <div className="space-y-4">
          <div>
            <div className="h-10 bg-gray-200 w-full lg:w-2/3 rounded-md"></div>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-gray-200 mr-2"></div>
            <div className="h-4 bg-gray-200 w-1/2"></div>
          </div>
          <div className="h-10 bg-gray-200 w-1/3 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

// Subscription Box Skeleton
const SubscriptionBoxSkeleton = () => {
  return (
    <div className="w-full bg-[#f5f5f5] p-6 sm:p-8 animate-pulse">
      <div className="space-y-8">
        {[1, 2].map((item) => (
          <div key={item} className="flex md:flex-col items-center gap-6 md:gap-0">
            <div className="w-12 h-12 bg-gray-300 flex-shrink-0"></div>
            <div className="flex-grow">
              <div className="h-4 bg-gray-200 w-1/2 mb-2"></div>
              <div className="h-4 bg-gray-200 w-3/4"></div>
            </div>
          </div>
        ))}
        <hr className="border-t border-gray-300" />
      </div>
    </div>
  );
};

// Subscription Section Skeleton
const SubscriptionSectionSkeleton = () => {
  return (
    <div className="container mx-auto block md:grid grid-cols-6 items-center justify-between gap-14 px-2 my-10">
      <div className="col-span-4">
        <SubscriptionFormSkeleton />
      </div>
      <div className="w-full grid col-span-2 mt-8 md:mt-0">
        <SubscriptionBoxSkeleton />
      </div>
    </div>
  );
};

// Export all components
export { SubscriptionSectionSkeleton, SubscriptionFormSkeleton, SubscriptionBoxSkeleton };
