import React from 'react';
import { getAllBanners } from '../../lib/api/bannerApi';
import Link from 'next/link';
import Image from 'next/image';

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export default async function Banner({ variant }) {
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

  return (
    <div className={`container mx-auto ${variant === 'sidebar' ? 'mb-4' : ''}`}>
      <Link href={bannerUrl} target="_blank" rel="noopener noreferrer" className="block">
        <Image
          src={imageUrl || '/banner.webp'}
          alt={imageAlt}
          width={variant === 'sidebar' ? 300 : 1200}
          height={variant === 'sidebar' ? 250 : 400}
          className="object-cover cursor-pointer w-full hover:opacity-90 transition-opacity"
          priority={variant === 'sidebar' ? false : true}
          loading={variant === 'sidebar' ? 'lazy' : 'eager'}
        />
      </Link>
    </div>
  );
}
