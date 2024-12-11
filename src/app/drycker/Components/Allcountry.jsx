'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import flag from '@/public/flag.png';

const Allcountry = ({ countries, type }) => {
  const [displayCountries, setDisplayCountries] = useState(countries);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const loadMore = () => {
    setDisplayCountries((prevCountries) => countries.slice(0, prevCountries.length + 10));
  };

  const renderCountryLink = useCallback(
    (country) => {
      const imageUrl = country?.categoriesImagesAndOtherFields?.categoriesImage?.node?.sourceUrl || flag;
      const imageAlt = country?.categoriesImagesAndOtherFields?.categoriesImage?.node?.altText || 'Flag';
      return (
        <Link key={country.slug} href={`${type}/${country.slug}`} passHref>
          <button className="w-full flex py-1 px-2 justify-center items-center gap-2 text-sm sm:text-base text-red-500 hover:bg-red-100 border rounded-full border-red-500 transition duration-300">
            <div className="w-5 h-5 relative overflow-hidden rounded-full">
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
            {country.name}
          </button>
        </Link>
      );
    },
    [type]
  );

  return (
    <div className="w-full grid grid-cols-2 md:flex md:flex-wrap px-12 py-6 md:px-24 md:py-12 md:items-center md:justify-center gap-8 md:gap-4">
      {displayCountries.map(renderCountryLink)}
      {isMobile && displayCountries.length < countries.length && (
        <div className="col-span-2 mt-8 text-center">
          <button
            onClick={loadMore}
            className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Allcountry;
