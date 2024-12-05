import React from 'react';

const BannerSkeleton = ({ variant }) => {
  return (
    <div className={`container mx-auto ${variant === 'sidebar' ? 'mb-4' : ''}`}>
      <div className={`w-full h-[35vh] bg-gray-300 animate-pulse '}`}></div>
    </div>
  );
};

export default BannerSkeleton;
