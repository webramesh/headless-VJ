import Hero from './Components/Hero';
import Trending from './Components/Trending';
import Info from './Components/Info';
import WineSlider from './Components/WineSlider';
import { getAllNyheter } from '../lib/api/newsApi';
import { getAllTrendingPosts } from '../lib/api/trendingpostApi';
import { getAllWineCategories } from '../lib/api/wineApi';
import NewsPost from './Components/NewsPost';
import { getHomePagePosts, getHomePageSEO } from '../lib/api/postAPI';
import SubscriptionForm from './Components/subscription/SubscriptionForm';
import SubscriptionBox from './Components/subscription/SubscriptionBox';
import Banner from './Components/Banner';
import { generateSeoMetadata } from '../utils/utils';
import HomeContent from './Components/HomeContent';
import { Suspense } from 'react';
import BannerSkeleton from './Components/SkeletonLoading/BannerSkeleton';
import HeroSkeleton from './Components/SkeletonLoading/HeroSkeleton';
import TrendingSkeleton from './Components/SkeletonLoading/TrendingPostSkeleton';
import WineSkeleton from './Components/SkeletonLoading/WineSkeleton';
import NewsPostSkeleton from './Components/SkeletonLoading/NewsPostSkeleton';
import HomePageInfoSkeleton from './Components/SkeletonLoading/HomePageInfoSkeleton';
import { getProductSlider } from '../lib/api/productsAPI';
import ProductSlider from './Components/ProductSlider';

export const revalidate = 60;

export async function generateMetadata() {
  // Fetch SEO data for the given slug
  const seo = await getHomePageSEO('/home-page');
  if (seo) {
    return generateSeoMetadata(seo);
  }
}

export default async function Home() {
  const [nyheter, trendingPosts, wineCategories, posts, productSlider] = await Promise.all([
    getAllNyheter(),
    getAllTrendingPosts(),
    getAllWineCategories(),
    getHomePagePosts(),
    getProductSlider('cG9zdDo1NTM='),
  ]);

  return (
    <div>
      <Suspense fallback={<BannerSkeleton />}>
        <Banner variant="default" />
      </Suspense>
      <HomeContent />

      <Suspense fallback={<HeroSkeleton />}>
        <Hero posts={posts} />
      </Suspense>

      <div className="my-12 container mx-auto px-4 max-w-7xl  ">
        <div className="text-center font-outfit text-xl md:text-2xl font-medium my-4 md:my-6">
          Redaktionens utvalda produkter
        </div>
        <div className=" border shadow-xl border-gray-300 md:py-8 rounded-md ">
          <ProductSlider productSlider={productSlider} />
        </div>
      </div>

      <Suspense fallback={<TrendingSkeleton />}>
        <Trending
          title="TRENDIGT"
          subtitle="Artiklar värda att läsa från våra redaktörer"
          trendingPosts={trendingPosts}
        />
      </Suspense>

      <div className="container mx-auto block md:grid grid-cols-6 items-center justify-between gap-14 px-2 my-10">
        <div className="col-span-4">
          <SubscriptionForm />
        </div>
        <div className="w-full grid col-span-2 mt-8 md:mt-0">
          <SubscriptionBox />
        </div>
      </div>

      <Suspense fallback={<WineSkeleton />}>
        <WineSlider categories={wineCategories} />
      </Suspense>

      <Suspense fallback={<NewsPostSkeleton />}>
        <NewsPost
          title="NYHETER"
          subtitle="Den mest populära artikeln i dryckesvärlden"
          nyheter={nyheter.slice(0, 6)}
        />
      </Suspense>

      <Suspense fallback={<HomePageInfoSkeleton />}>
        <Info />
      </Suspense>
    </div>
  );
}
