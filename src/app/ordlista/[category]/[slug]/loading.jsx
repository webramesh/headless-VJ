import SidebarSkeleton from '@/src/app/Components/SkeletonLoading/SidebarSkeleton';
import { SubscriptionFormSkeleton } from '@/src/app/Components/SkeletonLoading/SubscriptionSkeleton';
import React from 'react';

const loading = () => {
  return (
    <div className=" bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="lg:flex lg:flex-row lg:gap-10">
          <div className="w-full lg:w-3/4 flex flex-col gap-6">
            <div className="">
              {/* Render multiple skeleton cards to simulate loading state */}
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index} className="animate-pulse">
                  {/* Title Skeleton */}
                  <div className="h-6 w-3/12 bg-gray-300 rounded mt-4"></div>

                  <p className="h-2   bg-gray-300 rounded mt-2 "></p>
                  <p className="h-2   bg-gray-300 rounded mt-2 "></p>
                  <p className="h-2   bg-gray-300 rounded mt-2 "></p>
                  <p className="h-2   bg-gray-300 rounded mt-2 "></p>
                  <p className="h-2   bg-gray-300 rounded mt-2 "></p>
                  <p className="h-2   bg-gray-300 rounded mt-2 "></p>
                  <p className="h-2   bg-gray-300 rounded mt-2 "></p>
                  <p className="h-2   bg-gray-300 rounded mt-2 "></p>
                </div>
              ))}
            </div>
            <SubscriptionFormSkeleton />
          </div>

          {/* Sidebar Section (1/4) */}
          <div className="w-1/4 hidden lg:block sticky top-0 h-full mt-12">
            <SidebarSkeleton />

            {/* <Sidebar /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
