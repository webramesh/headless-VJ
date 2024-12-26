import React from 'react';

const loading = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col mt-12 gap-4 mx-4 sm:mx-8 md:mx-16 lg:mx-52 p-4 sm:p-6 shadow-2xl">
        {/* <Breadcrumb title1="nyheter" link1="/nyheter" title2={nyhet.title} /> */}
        <div className="text-2xl sm:text-3xl md:text-4xl">
          {/* Loading */}

          <div className="p-6 max-w-4xl mx-auto space-y-6">
            {/* Breadcrumb */}
            <div className="h-4  bg-gray-300 rounded animate-pulse w-3/12"></div>

            {/* Title */}
            <div className="h-8  bg-gray-300 rounded animate-pulse w-4/12"></div>

            {/* Paragraph 1 */}
            <div className="space-y-3">
              <div className="h-4 w-full bg-gray-300 rounded animate-pulse"></div>
              <div className="h-4  bg-gray-300 rounded animate-pulse"></div>
              <div className="h-4  bg-gray-300 rounded animate-pulse"></div>
            </div>

            {/* Paragraph 2 */}
            <div className="space-y-3">
              <div className="h-4  bg-gray-300 rounded animate-pulse"></div>
              <div className="h-4  bg-gray-300 rounded animate-pulse"></div>
              <div className="h-4  bg-gray-300 rounded animate-pulse"></div>
            </div>

            {/* Quote Section */}
            <div className="space-y-3">
              <div className="h-4  bg-gray-300 rounded animate-pulse"></div>
              <div className="h-4  bg-gray-300 rounded animate-pulse"></div>
              <div className="h-4  bg-gray-300 rounded animate-pulse"></div>
            </div>

            {/* Footer Paragraph */}
            <div className="space-y-3">
              <div className="h-4  bg-gray-300 rounded animate-pulse"></div>
              <div className="h-4  bg-gray-300 rounded animate-pulse"></div>
            </div>
            <div className="space-y-3">
              <div className="h-4  bg-gray-300 rounded animate-pulse"></div>
              <div className="h-4  bg-gray-300 rounded animate-pulse"></div>
            </div>
            <div className="space-y-3">
              <div className="h-4  bg-gray-300 rounded animate-pulse"></div>
              <div className="h-4  bg-gray-300 rounded animate-pulse"></div>
            </div>
            <div className="space-y-3">
              <div className="h-4  bg-gray-300 rounded animate-pulse"></div>
              <div className="h-4  bg-gray-300 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default loading;
