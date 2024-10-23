import React from 'react';
import Image from 'next/image';

const CountryCategoryItem = ({ isActive }) => {
  return (
    <div className="inline">
      <div className="text-gray-700">
        <Image src="/flag.png" width={60} height={60} className="mx-auto" />

        <p className={`"text-[2px]  mt-1 inline " ${isActive && 'border-b-2 border-b-[#D52D2D] '}`}>U.S.A</p>
      </div>
    </div>
  );
};

export default CountryCategoryItem;
