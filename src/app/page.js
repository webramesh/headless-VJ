import dynamic from 'next/dynamic';
import SubscriptionForm from './Components/subscription/SubscriptionForm';
import SubscriptionBox from './Components/subscription/SubscriptionBox';
import Banner from './Components/Banner';
import HomeContent from './Components/HomeContent';
import { generateSeoMetadata } from '../utils/utils';
//skeletons
import HeroSkeleton from './Components/SkeletonLoading/HeroSkeleton';
import TrendingSkeleton from './Components/SkeletonLoading/TrendingPostSkeleton';
import WineSkeleton from './Components/SkeletonLoading/WineSkeleton';
import NewsPostSkeleton from './Components/SkeletonLoading/NewsPostSkeleton';
import HomePageInfoSkeleton from './Components/SkeletonLoading/HomePageInfoSkeleton';
//api calls
import { getAllNyheter } from '../lib/api/newsApi';
import { getAllTrendingPosts } from '../lib/api/trendingpostApi';
import { getAllWineCategories } from '../lib/api/wineApi';
import { getHomePagePosts, getHomePageSEO } from '../lib/api/postAPI';
import { getProductSlider } from '../lib/api/productsAPI';
import Hero from './Components/Hero';
import { Suspense } from 'react';

export const revalidate = 60;

export async function generateMetadata() {
  // Fetch SEO data for the given slug
  const seo = await getHomePageSEO('/home-page');
  if (seo) {
    return generateSeoMetadata(seo);
  }
}
// Dynamically import components that need data fetching
const NewsPost = dynamic(() => import('./Components/NewsPost'));
const Trending = dynamic(() => import('./Components/Trending'));
const WineSlider = dynamic(() => import('./Components/WineSlider'));
const ProductSlider = dynamic(() => import('./Components/ProductSlider'));
const Info = dynamic(() => import('./Components/Info'));

async function HeroSection() {
  const posts = await getHomePagePosts();
  return (
    <Suspense fallback={<HeroSkeleton />}>
      <Hero posts={posts} />
    </Suspense>
  );
}

async function ProductSliderSection() {
  const productSlider = await getProductSlider('cG9zdDo1NTM=');
  return <ProductSlider productSlider={productSlider} />;
}

async function TrendingSection() {
  const trendingPosts = await getAllTrendingPosts();
  return (
    <Suspense fallback={<TrendingSkeleton />}>
      <Trending
        title="TRENDIGT"
        subtitle="Artiklar värda att läsa från våra redaktörer"
        trendingPosts={trendingPosts}
      />
    </Suspense>
  );
}

async function NewsSection() {
  const nyheter = await getAllNyheter();
  return (
    <Suspense fallback={<NewsPostSkeleton />}>
      <NewsPost title="NYHETER" subtitle="Den mest populära artikeln i dryckesvärlden" nyheter={nyheter.slice(0, 6)} />
    </Suspense>
  );
}

async function WineSliderSection() {
  const wineCategories = await getAllWineCategories();
  return (
    <Suspense fallback={<WineSkeleton />}>
      <WineSlider categories={wineCategories} />
    </Suspense>
  );
}

export default async function Home() {
  return (
    <>
      <Banner variant="default" />
      <HomeContent />

      <HeroSection />

      <section className="my-12 container mx-auto px-4 max-w-7xl  ">
        <h2 className="text-center font-outfit text-xl md:text-2xl font-medium my-4 md:my-6">
          Redaktionens utvalda produkter
        </h2>
        <div className=" border shadow-xl border-gray-300 md:py-8 rounded-md ">
          <ProductSliderSection />
        </div>
      </section>

      <TrendingSection />

      <section className="container mx-auto block md:grid grid-cols-6 items-center justify-between gap-14 px-2 my-10">
        <div className="col-span-4">
          <SubscriptionForm />
        </div>
        <div className="w-full grid col-span-2 mt-8 md:mt-0">
          <SubscriptionBox />
        </div>
      </section>

      <WineSliderSection />

      <NewsSection />

      <Suspense fallback={<HomePageInfoSkeleton />}>
        <Info />
      </Suspense>
    </>
  );
}
