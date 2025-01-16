'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SquareArrowOutUpRight } from 'lucide-react';

function CountryItem({ country }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? (
          <div className="absolute inset-0 flex items-center justify-center bg-red-50">
            <div className="text-center">
              <span className="text-xl sm:text-2xl font-bold">{country.count}</span>
              <br />
              <span className="text-sm sm:text-base">producenter</span>
            </div>
          </div>
        ) : (
          <div className="relative w-full h-full">
            <Image
              src={country.categoriesImagesAndOtherFields?.categoriesImage?.node?.sourceUrl || '/flag1.webp'}
              alt={`${country.name} Flag`}
              fill
              sizes="(max-width: 640px) 100px, (max-width: 768px) 150px, 200px"
              className="rounded-full object-cover"
              loading="lazy"
              quality={75}
              placeholder="blur"
              blurDataURL="/flag1.webp"
            />
          </div>
        )}
      </div>
      <Link
        href={`/produktion-land/${country.slug}/`}
        className="flex items-center gap-2 text-red-500 hover:text-red-600 cursor-pointer"
      >
        <span className="text-base sm:text-md max-w-[120px] truncate" title={country.name}>
          {country.name}
        </span>
        <SquareArrowOutUpRight className="size-3 sm:size-4" strokeWidth={3} />
      </Link>
    </div>
  );
}

const CountryProduce = ({ countries }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {countries.map((country, index) => (
          <CountryItem key={index} country={country} />
        ))}
      </div>
    </div>
  );
};

export default CountryProduce;
