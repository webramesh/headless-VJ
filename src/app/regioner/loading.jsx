import React from 'react';
import SidebarSkeleton from '../Components/SkeletonLoading/SidebarSkeleton';

const loading = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="lg:flex lg:flex-row lg:gap-10">
          <div className="w-full lg:w-3/4 flex flex-col gap-6">
            <div>
              <p className="h-6 w-3/12 bg-gray-300 rounded mt-12"></p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 items-center justify-between flex-wrap rounded-md mb-10">
              {/* Render multiple skeleton cards to simulate loading state */}
              {Array.from({ length: 12 }).map((_, index) => (
                <div key={index} className="flex flex-col items-start shadow-sm py-8 mt-6 px-4 bg-white animate-pulse">
                  <div className="h-24 w-full bg-gray-400 rounded"></div>
                  {/* Title Section */}
                  <div className="h-4 w-1/2 bg-gray-300 rounded mt-2"></div>

                  {/* Paragraph Skeleton */}
                  <p className="h-1 w-full bg-gray-400 rounded mt-1"></p>
                  <p className="h-1 w-full bg-gray-400 rounded mt-1"></p>
                  <p className="h-1 w-full bg-gray-400 rounded mt-1"></p>
                  <p className="h-1 w-full bg-gray-400 rounded mt-1"></p>
                  <p className="h-1 w-full bg-gray-400 rounded mt-1"></p>

                  {/* Bottom Title Section */}
                  <div className="h-4 w-1/2 bg-gray-300 rounded mt-2"></div>
                </div>
              ))}
            </div>
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
