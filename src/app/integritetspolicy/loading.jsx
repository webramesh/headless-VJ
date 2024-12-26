import React from 'react';
import BannerSkeleton from '../Components/SkeletonLoading/BannerSkeleton';

const loading = () => {
  return (
    <div className="container mx-auto px-4">
      <BannerSkeleton />
      <div className="bg-[#b0b0b0] h-36 flex text-white justify-center items-center">
        {/* Skeleton for the title */}
        <div className="bg-white w-3/4 h-8 sm:h-10 md:h-12 lg:h-14 animate-pulse rounded"></div>
      </div>
      <ParagraphSkeleton />
      <ParagraphSkeleton />
      <ParagraphSkeleton />
    </div>
  );
};

const ParagraphSkeleton = () => {
  return (
    <div className="space-y-3 mt-4">
      <div className="w-full h-4 bg-gray-300 animate-pulse rounded" />
      <div className="w-5/6 h-4 bg-gray-300 animate-pulse rounded" />
      <div className="w-2/3 h-4 bg-gray-300 animate-pulse rounded" />
    </div>
  );
};

export default loading;
