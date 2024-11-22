import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllBanners } from '../../lib/api/bannerApi';

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

async function Banner() {
  const banners = await getAllBanners();

  if (!banners || banners.length === 0) {
    return null;
  }

  // Get a random banner from the array
  const randomBanner = getRandomItem(banners);

  const imageUrl = randomBanner.featuredImage?.node?.sourceUrl;
  const imageAlt = randomBanner.featuredImage?.node?.altText || 'Banner';
  const bannerUrl = randomBanner.bannerFields?.bannerUrl || '/artiklar';

  // Add a key prop with current timestamp to force re-render
  const timestamp = new Date().getTime();

  return (
    <div className="container mx-auto" key={timestamp}>
      <div>
        <Link href={bannerUrl} target="_blank" rel="noopener noreferrer" className="block">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={1200}
              height={400}
              className="object-cover cursor-pointer w-full hover:opacity-90 transition-opacity"
              priority
            />
          ) : (
            <Image
              src="/banner.webp"
              alt="Default Banner"
              width={1200}
              height={400}
              className="object-cover cursor-pointer w-full hover:opacity-90 transition-opacity"
              priority
            />
          )}
        </Link>
      </div>
    </div>
  );
}

export default Banner;
