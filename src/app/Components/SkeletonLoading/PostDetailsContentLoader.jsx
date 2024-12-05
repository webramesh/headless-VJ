import React from 'react';

const PostDetailsContentLoader = () => {
  return (
    <div className="container mx-auto w-full min-h-[300px] ">
      <div className="flex flex-col lg:flex-row lg:gap-16  lg:mx-52 lg:-mt-16 z-50 w-full container mx-auto ">
        <div className="flex flex-col gap-2 bg-white w-full lg:w-[70%] px-6  py-8 pb-8 z-50">
          {/* Image loader */}
          {/* <div className="bg- container mx-auto w-full h-[50vh] animate-pulse mb-6 rounded"></div> */}

          {/* Title loader */}
          {/* <div className="h-8  rounded w-3/4 animate-pulse mb-4"></div> */}

          {/* Author & Date loader */}
          <div className="flex gap-4 items-center mb-4">
            <div className="rounded-full overflow-hidden w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] relative flex-shrink-0">
              {/* <div className="bg-gray-300 w-full h-full animate-pulse rounded-full"></div> */}
            </div>
            <div className="text-xs lg:text-sm text-gray-600 flex gap-2">
              <div className="h-4 bg-gray-300 w-1/2 animate-pulse"></div>
              <div className="h-4 bg-gray-300 w-1/3 animate-pulse"></div>
            </div>
          </div>

          {/* Content loader */}
          <div className="space-y-6  pb-8">
            {/* Heading loader */}
            <div className="h-6 bg-gray-300 rounded w-3/4 animate-pulse"></div>

            {/* Paragraph loader */}
            <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6 animate-pulse"></div>
            <div className="h-4 bg-gray-300 rounded w-4/6 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetailsContentLoader;
