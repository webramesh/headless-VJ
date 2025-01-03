'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const ProductLabelsWithTooltips = ({ fieldsProduct }) => {
  const [tooltip, setTooltip] = useState(null);

  const handleMouseEnter = (label) => {
    setTooltip(label);
  };

  const handleMouseLeave = () => {
    setTooltip(null);
  };

  // Tooltip content mapping
  const tooltipLabel = {
    newWine: 'Nyhet',

    organicWine: 'Ekologisk',
    veganWine: 'Veganskt',
    bestSeller: 'Bästsäljare',
    verifiedByVjse: 'Många betyg',
    familyWinery: 'Familjevingård',
    sustainable: 'Hållbart val',
  };

  const imageMap = {
    bestSeller: '/best-seller.svg',
    organicWine: '/ekologisk.svg',
    familyWinery: '/family.svg',
    newWine: '/new.svg',
    sustainable: '/sustainable.svg',

    veganWine: '/vegan.svg',
    verifiedByVjse: '/verified.svg',
  };

  return (
    <div className="flex flex-col items-center">
      {/* Stack images vertically */}
      {fieldsProduct?.productLabels &&
        Object.entries(fieldsProduct.productLabels)
          .filter(([key, value]) => value && key !== '__typename') // Exclude __typename and filter labels with true values
          .map(([key]) => {
            return (
              <div key={key} className="relative inline-block">
                {tooltip === key && (
                  <div className="absolute left-1/2 -translate-x-1/2 -top-8 text-xs text-white bg-black px-2 py-1 rounded-md">
                    {tooltipLabel[key]}
                  </div>
                )}
                <div onMouseEnter={() => handleMouseEnter(key)} onMouseLeave={handleMouseLeave} className="my-1">
                  <Image
                    src={imageMap[key]}
                    width={50}
                    height={50}
                    alt={tooltipLabel[key]}
                    className={`cursor-pointer`}
                  />
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default ProductLabelsWithTooltips;
