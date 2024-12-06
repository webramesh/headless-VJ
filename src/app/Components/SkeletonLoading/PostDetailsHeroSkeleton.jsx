import React from 'react';

const PostDetailsHeroSkeleton = () => {
  return (
    <div className="container mx-auto px-4 lg:px-0 z-5">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 lg:pt-8 bg-slate-50 p-4">
        {/* Left Section: Image Skeleton */}
        <div className="w-full lg:w-[50%] flex flex-col gap-2">
          <div className="h-6 bg-gray-300 rounded w-1/4 animate-pulse"></div>
          <div className="bg-gray-300 w-full h-[50vh] animate-pulse"></div> {/* Image height set to 50vh */}
        </div>

        {/* Right Section: Text Skeleton */}
        <div className="w-full lg:w-[50%] flex flex-col justify-center items-start gap-3 mt-4 lg:mt-0">
          <div className="h-6 bg-gray-300 rounded w-3/4 animate-pulse"></div>
          <div className="flex gap-4 items-center">
            <div className="rounded-full w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] bg-gray-300 animate-pulse"></div>
            {/* Loader for the author name and date */}
            <div className="text-xs lg:text-sm text-gray-600 w-full flex flex-wrap items-center gap-2">
              {/* Author name loader */}
              <div className="h-4 bg-gray-300 rounded w-1/3 animate-pulse"></div>

              {/* Separator loader */}
              <span className="text-gray-800 font-semibold animate-pulse w-[300px]"></span>

              {/* Date loader */}
              <div className="h-4 bg-gray-300 rounded w-[200px] animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailsHeroSkeleton;
