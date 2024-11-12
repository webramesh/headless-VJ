import React from 'react';
import Image from 'next/image';
import chicken from '@/public/chicken.png';
const FactBoxMatCombinationer = ({ matkombinationer }) => {
  return (
    <>
      <>
        <div className="m-4 lg:m-8 text-sm lg:text-md  flex items-center justify-center">MAT SOM PASSAR TILL VINET</div>
        <div className="flex flex-wrap gap-4 items-center justify-center lg:justify-between px-4 lg:px-9">
          {matkombinationer?.map((item, index) => (
            <div key={index} className="flex flex-col items-center w-[20%] sm:w-[10%] mb-4 lg:mb-0">
              <Image
                src={item.categoriesImagesAndOtherFields.categoriesImage?.node?.sourceUrl || chicken}
                alt={item.name}
                className="object-cover w-10 h-10"
                width={40}
                height={40}
              />
              <div className="text-xs lg:text-sm mt-2 lg:mt-6 text-gray-600">{item.name}</div>
            </div>
          ))}
        </div>
      </>
    </>
  );
};

export default FactBoxMatCombinationer;
