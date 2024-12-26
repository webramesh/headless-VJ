import BannerSkeleton from '../Components/SkeletonLoading/BannerSkeleton';

import SidebarSkeleton from '../Components/SkeletonLoading/SidebarSkeleton';

import TrendingSkeleton from '../Components/SkeletonLoading/TrendingPostSkeleton';

const loading = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <BannerSkeleton />
      <div className="flex flex-col lg:flex-row lg:gap-10">
        {/* Main Content Section */}
        <div className="w-full lg:w-[75%] mt-4 space-y-6">
          {/* Skeleton for Breadcrumb */}
          <div className="h-6 bg-gray-300 rounded w-32 animate-pulse"></div>

          {/* Skeleton for Title */}
          <div className="h-10 bg-gray-300 rounded w-48 animate-pulse"></div>

          {/* Skeleton for Cards */}
          <TrendingSkeleton />
          <TrendingSkeleton />
          <TrendingSkeleton />
        </div>

        {/* Sidebar Section */}
        <div className="w-full lg:w-[25%] mt-8 lg:mt-10">
          <div className="space-y-8">
            <SidebarSkeleton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
