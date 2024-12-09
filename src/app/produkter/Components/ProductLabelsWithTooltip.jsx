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

  return (
    <div className="flex flex-col items-center">
      {/* Stack images vertically */}
      {fieldsProduct?.productLabels?.map((label) => {
        const productLabel = label.toLowerCase();

        return (
          <div key={label} className="relative inline-block">
            {tooltip === productLabel && (
              <div className="absolute left-1/2 -translate-x-1/2 -top-8 mb-2 text-xs text-white bg-black px-2 py-1 rounded-md">
                {label}
              </div>
            )}
            <div
              onMouseEnter={() => handleMouseEnter(productLabel)}
              onMouseLeave={handleMouseLeave}
              className="inline-block"
            >
              {productLabel === 'new' && <Image src="/new.svg" width={50} height={50} alt="new" />}
              {productLabel === 'available only online' && (
                <Image src="/ekologisk.svg" width={50} height={50} alt="Available only online" />
              )}
              {productLabel === 'organic' && <Image src="/ekologisk.svg" width={50} height={50} alt="Ekologisk" />}
              {productLabel === 'vegan' && <Image src="/vegan.svg" width={50} height={50} alt="vegan" />}
              {productLabel === 'best seller' && (
                <Image src="/best-seller.svg" width={50} height={50} alt="best-seller" />
              )}
              {productLabel === 'family winery' && (
                <Image src="/family.svg" width={50} height={50} alt="Family Winery" />
              )}
              {productLabel === 'verified by vjse' && (
                <Image src="/verified.svg" width={50} height={50} alt="Verified By VJSE" />
              )}
              {productLabel === 'featured' && <Image src="/vegan.svg" width={50} height={50} alt="Featured" />}
              {productLabel === 'on sale' && <Image src="/vegan.svg" width={50} height={50} alt="On Sale" />}
              {productLabel === 'show wt information' && (
                <Image src="/vegan.svg" width={50} height={50} alt="Show WT Information" />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductLabelsWithTooltips;
