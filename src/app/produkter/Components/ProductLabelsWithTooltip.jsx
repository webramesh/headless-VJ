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

        const tooltipLabel = {
          new: 'Nyhet',
          'available only online': 'Endast tillgänglig online',
          organic: 'Ekologisk',
          vegan: 'Veganskt',
          'verified by vjse': 'Många betyg',
          'family winery': 'Familjevingård',
          'best seller': 'Bästsäljare',
          sustainable: 'Hållbart val',
          'on sale': 'Rea',
        };
        return (
          <div key={label} className="relative inline-block">
            {tooltip === productLabel && (
              <div className="absolute left-1/2 -translate-x-1/2 -top-8  text-xs text-white bg-black px-2 py-1 rounded-md">
                {/* {label} */}
                {tooltipLabel[productLabel]}
              </div>
            )}
            <div onMouseEnter={() => handleMouseEnter(productLabel)} onMouseLeave={handleMouseLeave} className="my-1 ">
              {productLabel === 'new' && <Image src="/new.svg" width={50} height={50} alt="Nyhet" />}

              {productLabel === 'organic' && <Image src="/ekologisk.svg" width={50} height={50} alt="Ekologisk" />}
              {productLabel === 'vegan' && <Image src="/vegan.svg" width={50} height={50} alt="Veganskt" />}
              {productLabel === 'best seller' && (
                <Image src="/best-seller.svg" width={50} height={50} alt="best-seller" />
              )}
              {productLabel === 'family winery' && (
                <Image src="/family.svg" width={50} height={50} alt="Family Winery" />
              )}
              {productLabel === 'verified by vjse' && (
                <Image src="/verified.svg" width={50} height={50} alt="Verified By VJSE" />
              )}
              {productLabel === 'sustainable' && (
                <Image src="/verified.svg" width={50} height={50} alt="Verified By VJSE" />
              )}
              {/* do same for sustainable */}

              {productLabel === 'on sale' && <p className="bg-red-600 text-white px-2 py-3 rounded-full">Sale</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductLabelsWithTooltips;
