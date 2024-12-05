import TrendingSkeleton from './Components/SkeletonLoading/TrendingPostSkeleton';
import HeroSkeleton from './Components/SkeletonLoading/HeroSkeleton';
import { SubscriptionSectionSkeleton } from './Components/SkeletonLoading/SubscriptionSkeleton';
import WineSkeleton from './Components/SkeletonLoading/WineSkeleton';
import NewsPostSkeleton from './Components/SkeletonLoading/NewsPostSkeleton';
import HomePageInfoSkeleton from './Components/SkeletonLoading/HomePageInfoSkeleton';

export default function DelayedLoadingPage() {
  return (
    <>
      <HeroSkeleton />
      <TrendingSkeleton />
      <SubscriptionSectionSkeleton />
      <WineSkeleton />
      <NewsPostSkeleton />

      <HomePageInfoSkeleton />
    </>
  );
}
