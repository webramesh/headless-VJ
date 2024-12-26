import React from 'react';
import BannerSkeleton from '../Components/SkeletonLoading/BannerSkeleton';
import SidebarSkeleton from '../Components/SkeletonLoading/SidebarSkeleton';
import { SubscriptionFormSkeleton } from '../Components/SkeletonLoading/SubscriptionSkeleton';
import AccordionSkeleton from '../Components/SkeletonLoading/AccordionSkeleton';

const loading = () => {
  return (
    <div>
      <BannerSkeleton />

      <div className="container mx-auto mt-6 grid grid-cols-4 gap-8">
        <div className=" col-span-3">
          {/* Skeleton for paragraph */}
          <div className="h-3 bg-gray-300 rounded animate-pulse mb-4"></div>
          <div className="h-3 bg-gray-300 rounded animate-pulse mb-4"></div>
          <div className="h-3 bg-gray-300 rounded animate-pulse mb-4"></div>
          <div className="h-3 bg-gray-300 rounded animate-pulse mb-4"></div>
          <div className="h-3 bg-gray-300 rounded animate-pulse mb-4"></div>
          <div className="h-3 bg-gray-300 rounded animate-pulse mb-4"></div>

          <div className="mt-8">
            <SubscriptionFormSkeleton />
          </div>
          <div className="mt-6">
            <AccordionSkeleton />
          </div>
        </div>
        <div className="gird-cols-1">
          <SidebarSkeleton />
        </div>
      </div>
    </div>
  );
};

export default loading;
