import React from 'react';

const ParagraphSkeleton = () => {
  return (
    <div className="mx-auto container">
      <div className="flex flex-col gap-4 items-center justify-center mt-8 sm:mt-10 md:mt-12 px-4">
        <div className="h-6 sm:h-8 w-3/4 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-24 sm:h-32 w-full sm:w-3/4 bg-gray-300 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default ParagraphSkeleton;