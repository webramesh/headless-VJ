import React from 'react';

const WineSkeleton = () => {
  return (
    <div className="container mx-auto p-1">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="relative w-full h-64 bg-gray-300 animate-pulse">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="h-8 bg-white/50 rounded w-24 mx-auto mb-2"></div>
                <div className="h-8 bg-white/50 rounded w-24 mx-auto"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WineSkeleton;
