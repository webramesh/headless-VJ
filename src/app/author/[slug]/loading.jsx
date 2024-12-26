import React from 'react';

const loading = () => {
  return (
    <div className=" px-0 sm:px-6 ">
      <div>
        <div className="bg-[#b0b0b0] h-36 flex text-white justify-center items-center">
          {/* Skeleton for the title */}
          <div className="bg-white w-3/4 h-8 sm:h-10 md:h-12 lg:h-14 animate-pulse rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default loading;
