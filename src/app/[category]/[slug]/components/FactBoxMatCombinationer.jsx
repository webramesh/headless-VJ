import React from 'react';
import Image from 'next/image';
import chicken from '@/public/chicken.png';

const FactBoxMatCombinationer = ({ matkombinationer }) => {
  const firstThreeMatKombinationer = matkombinationer?.slice(0, 3);

  return (
    <>
      <>
        <div className="grid grid-cols-3 justify-between items-center mt-4 pb-4">
          {firstThreeMatKombinationer?.map((item, index) => (
            <div key={index} className="text-center flex flex-col">
              <Image
                src={item.categoriesImagesAndOtherFields.categoriesImage?.node?.sourceUrl || chicken}
                alt={item.name}
                className="w-6 h-6 text-center"
                width={40}
                height={40}
              />
              <div className="text-xs text-gray-600 text-start mt-2">{item.name}</div>
            </div>
          ))}
        </div>
      </>
    </>
  );
};

export default FactBoxMatCombinationer;
