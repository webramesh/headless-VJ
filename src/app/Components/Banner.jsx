import React from 'react';
import { getAllBanners } from '../../lib/api/bannerApi';
import BannerImage from './BannerImage';

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
      <BannerImage bannerUrl={bannerUrl} imageUrl={imageUrl} imageAlt={imageAlt} variant={variant} />
    </div>
  );
}
