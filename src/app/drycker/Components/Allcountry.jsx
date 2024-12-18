'use client';

import React, { useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

function sortCountriesWithFlagsFirst(countries) {
  return countries.sort((a, b) => {
    // Check if a flag image exists for each country
    const aHasFlag = a.categoriesImagesAndOtherFields?.categoriesImage?.node?.sourceUrl ? 1 : 0;
    const bHasFlag = b.categoriesImagesAndOtherFields?.categoriesImage?.node?.sourceUrl ? 1 : 0;

    // Sort such that countries with flags appear first
    return bHasFlag - aHasFlag;
  });
}

const Allcountry = ({ countries, params }) => {
  const sortedCountries = sortCountriesWithFlagsFirst(countries);
  const [displayCountries, setDisplayCountries] = useState(sortedCountries?.slice(0, 10));
  const { type, country, region, subRegion } = params;
  const [basePath, setBasePath] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setBasePath(window.location.pathname);
    }
  }, []);

  const loadMore = () => {
    setDisplayCountries((prevCountries) => countries.slice(0, prevCountries.length + 10));
  };

  const renderCountryLink = useCallback(
    (country) => {
      const url = `${basePath}/${country.slug}`;
      const imageUrl = country?.categoriesImagesAndOtherFields?.categoriesImage?.node?.sourceUrl;
      const imageAlt = country?.categoriesImagesAndOtherFields?.categoriesImage?.node?.altText || 'Flag';
      return (
        <Link key={country.slug} href={url} passHref>
          <button className="w-full flex py-1 px-2 justify-center items-center gap-2 text-sm sm:text-base hover:bg-red-100 border rounded-lg border-red-500 transition duration-300">
            {imageUrl && (
              <div className="w-5 h-5 relative overflow-hidden rounded-full">
                <Image
                  src={imageUrl}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            )}
            {country.name || country.title}
          </button>
        </Link>
      );
    },
    [basePath]
  );

  const displayText = subRegion || region || country || 'länder';

  if (displayCountries.length > 0)
    return (
      <div className="container mx-auto">
        <h2 className="font-semibold text-xl text-center">
          Vintips {type} från olika {`${!country ? 'länder' : `regioner i ${displayText}`}`}
        </h2>

        <div className="flex flex-wrap p-6 items-center justify-center gap-4">
          {displayCountries?.map(renderCountryLink)}
        </div>
        {displayCountries?.length < countries?.length && (
          <div className="col-span-2  text-center">
            <button
              onClick={loadMore}
              className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-300"
            >
              Se fler ursprung
            </button>
          </div>
        )}
      </div>
    );
};

export default Allcountry;
