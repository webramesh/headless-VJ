import { Suspense } from 'react';
import { getAllBanners } from '../../lib/api/bannerApi';
import Link from 'next/link';
import BannerSkeleton from './SkeletonLoading/BannerSkeleton';
import BannerImage from './BannerImage';

export default async function Banner({ variant = 'default' }) {
  const randomBanner = await getAllBanners();

  if (!randomBanner) return null;

  const isSidebar = variant === 'sidebar';

  const imageUrl = isSidebar
    ? randomBanner.bannerFields?.sidebarBannerImage?.node?.sourceUrl
    : randomBanner.featuredImage?.node?.sourceUrl;

  const imageAlt = isSidebar
    ? randomBanner.bannerFields?.sidebarBannerImage?.node?.altText || 'Sidebar Banner'
    : randomBanner.featuredImage?.node?.altText || 'Banner';

  const bannerUrl = randomBanner.bannerFields?.bannerUrl || '/artiklar';

  return (
    <Suspense fallback={<BannerSkeleton variant={variant} />}>
      <div className={`container mx-auto ${isSidebar ? 'mb-4' : ''}`}>
        <Link href={bannerUrl} target="_blank" rel="noopener noreferrer" prefetch={false}>
          <BannerImage imageUrl={imageUrl} imageAlt={imageAlt} isSidebar={isSidebar} />
        </Link>
      </div>
    </Suspense>
  );
}
