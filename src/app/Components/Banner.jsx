import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getAllBanners } from '../../lib/api/bannerApi';

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

async function Banner({ variant }) {
  const banners = await getAllBanners();

  if (!banners || banners.length === 0) {
    return null;
  }

  // Get a random banner from the array
  const randomBanner = getRandomItem(banners);

  let imageUrl, imageAlt;

  if (variant === 'sidebar') {
    imageUrl = randomBanner.bannerFields?.sidebarBannerImage?.node?.sourceUrl;
    imageAlt = randomBanner.bannerFields?.sidebarBannerImage?.node?.altText || 'Sidebar Banner';
  } else {
    imageUrl = randomBanner.featuredImage?.node?.sourceUrl;
    imageAlt = randomBanner.featuredImage?.node?.altText || 'Banner';
  }

  const bannerUrl = randomBanner.bannerFields?.bannerUrl || '/artiklar';

  // Add a key prop with current timestamp to force re-render
  const timestamp = new Date().getTime();

  return (
    <div className={`container mx-auto ${variant === 'sidebar' ? 'mb-4' : ''}`} key={timestamp}>
      <div>
        <Link href={bannerUrl} target="_blank" rel="noopener noreferrer" className="block">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={variant === 'sidebar' ? 300 : 1200}
              height={variant === 'sidebar' ? 250 : 400}
              className="object-cover cursor-pointer w-full hover:opacity-90 transition-opacity"
              priority
            />
          ) : (
            <Image
              src="/banner.webp"
              alt="Default Banner"
              width={variant === 'sidebar' ? 300 : 1200}
              height={variant === 'sidebar' ? 250 : 400}
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
