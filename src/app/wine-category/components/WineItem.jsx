import React from 'react';
import Image from 'next/image';

const WineItem = () => {
  return (
    <div className="col-span-1  shadow-sm ">
      <div className="bg-white px-2 py-4 rounded-md ">
        <div className="overflow-hidden">
          <Image
            src="/wine2.png"
            alt="Wine Category"
            width={300}
            height={300}
            className="
                        cursor-pointer
                        hover:scale-125 transition-all duration-300 overflow-hidden rounded-xl w-56 h-72 "
          />
        </div>
        <h3 className=" text-sm font-extralight px-2   my-2 text-left  ">White Wine</h3>
        <p className="text-xs font-extralight px-2 text-left text-gray-500">$1000.00</p>
      </div>
    </div>
  );
};

export default WineItem;
