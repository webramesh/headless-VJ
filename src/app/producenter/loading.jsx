import React from 'react';
import { SubscriptionFormSkeleton } from '../Components/SkeletonLoading/SubscriptionSkeleton';
import SidebarSkeleton from '../Components/SkeletonLoading/SidebarSkeleton';

const loading = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="pt-12">
          <p className="h-6 w-3/12  bg-gray-300 rounded  "></p>
        </div>
        <div className="lg:flex lg:flex-row lg:gap-10">
          <div className="w-full lg:w-3/4 flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-between flex-wrap rounded-md mb-10">
              {/* Render multiple skeleton cards to simulate loading state */}
              {Array.from({ length: 9 }).map((_, index) => (
                <div key={index} className="flex flex-col items-start shadow-sm py-8 px-4 mt-6 bg-white animate-pulse">
                  {/* Title Skeleton aligned to the left */}
                  <div className="h-6 w-3/4 bg-gray-300 rounded mt-24"></div>
                  <div className="h-6 w-3/12 bg-gray-300 rounded mt-4"></div>
                </div>
              ))}
            </div>
            <SubscriptionFormSkeleton />
          </div>

          {/* Sidebar Section (1/4) */}
          <div className="w-1/4 hidden lg:block sticky top-0 h-full mt-12">
            <SidebarSkeleton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
