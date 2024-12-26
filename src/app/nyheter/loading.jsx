import React from 'react';
import BannerSkeleton from '../Components/SkeletonLoading/BannerSkeleton';
import SidebarSkeleton from '../Components/SkeletonLoading/SidebarSkeleton';

const NewsPageSkeleton = () => {
  return (
    <div>
      <BannerSkeleton />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 animate-pulse mt-4">
        {/* Breadcrumb Skeleton */}
        <div className="flex gap-2 mb-4">
          <div className="h-4 bg-gray-300 rounded w-16"></div>
          <div className="h-4 bg-gray-300 rounded w-16"></div>
          <div className="h-4 bg-gray-300 rounded w-16"></div>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-10">
          {/* Left Section Skeleton */}
          <div className="w-full lg:w-[75%] mt-4 space-y-6">
            {/* Title Skeleton */}
            <div className="h-8 bg-gray-300 rounded w-1/4 mb-8"></div>

            {/* Card Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="flex flex-col bg-gray-200 rounded shadow h-full">
                  <div className="h-40 bg-gray-300 rounded-t"></div>
                  <div className="p-4 space-y-2">
                    <div className="h-5 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                    <div className="h-3 bg-gray-300 rounded w-1/3"></div>
                    <div className="h-10 bg-gray-300 rounded w-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section Skeleton */}
          <div className="w-full lg:w-[25%] mt-8 lg:mt-10">
            <SidebarSkeleton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPageSkeleton;
