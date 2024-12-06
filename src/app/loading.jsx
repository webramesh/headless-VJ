import TrendingSkeleton from './Components/SkeletonLoading/TrendingPostSkeleton';
import HeroSkeleton from './Components/SkeletonLoading/HeroSkeleton';
import { SubscriptionSectionSkeleton } from './Components/SkeletonLoading/SubscriptionSkeleton';
import WineSkeleton from './Components/SkeletonLoading/WineSkeleton';
import NewsPostSkeleton from './Components/SkeletonLoading/NewsPostSkeleton';
import HomePageInfoSkeleton from './Components/SkeletonLoading/HomePageInfoSkeleton';
import BannerSkeleton from './Components/SkeletonLoading/BannerSkeleton';

export default function DelayedLoadingPage() {
  return (
    <>
      <BannerSkeleton />
      <HeroSkeleton />
      <TrendingSkeleton />
      <SubscriptionSectionSkeleton />
      <WineSkeleton />
      <NewsPostSkeleton />

      <HomePageInfoSkeleton />
    </>
  );
}
