import React from 'react';
import SidebarSkeleton from '../Components/SkeletonLoading/SidebarSkeleton';

const loading = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <div className="bg-[#b0b0b0] h-36 flex text-white justify-center items-center">
          {/* Skeleton for the title */}
          <div className="bg-white w-3/4 h-8 sm:h-10 md:h-12 lg:h-14 animate-pulse rounded"></div>
        </div>
      </div>
      {/* section for flags */}

      <div className="grid grid-cols-1 lg:grid-cols-4 mt-6">
        <div className="col-span-3">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {[...Array(9)].map((_, index) => (
              <CountryItem key={index} />
            ))}
          </div>
        </div>
        <div className="col-span-1 hidden lg:block">
          <SidebarSkeleton />
        </div>
      </div>
    </div>
  );
};

const CountryItem = () => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gray-300 animate-pulse" />
      <div className="h-4 w-16 bg-gray-300 animate-pulse rounded-sm" />
    </div>
  );
};

export default loading;
