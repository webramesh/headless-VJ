import React from 'react';
import Image from 'next/image';
import chicken from '@/public/chicken.png';

const FactBoxMatCombinationer = ({ matkombinationer }) => {
  const firstThreeMatKombinationer = matkombinationer?.slice(0, 3);

  return (
    <>
      <>
        <div className="grid grid-cols-3 justify-between items-center mt-6 pb-8 xl:mt-11 xl:pb-5">
          {firstThreeMatKombinationer?.map((item, index) => (
            <div key={index} className="text-center flex flex-col justify-center items-center">
              <Image
                src={item.categoriesImagesAndOtherFields.categoriesImage?.node?.sourceUrl || chicken}
                alt={item.name}
                className="w-14 h-14 text-center"
                width={70}
                height={70}
              />
              <div className="text-xs xl:text-sm mt-8 xl:mt-6 text-gray-600 text-center">{item.name}</div>
            </div>
          ))}
        </div>
      </>
    </>
  );
};

export default FactBoxMatCombinationer;
