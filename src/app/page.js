import Head from 'next/head';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Trending from './Components/Trending';
import Subscription from './Components/Subscription';
import Info from './Components/Info';
import WineSlider from './Components/WineSlider';
import { Suspense } from 'react';
import Loading from './loading';
import { getAllNyheter } from '../lib/api/newsApi';
import { getAllTrendingPosts } from '../lib/api/trendingpostApi';
import { getAllWineCategories } from '../lib/api/wineApi';
import NewsPost from './Components/NewsPost';


export const revalidate = 60; 

export default async function Home() {
  const [posts, trendingPosts, wineCategories] = await Promise.all([
    getAllNyheter(),
    getAllTrendingPosts(),
    getAllWineCategories(),
  ]);

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Head>
          <title>Home Page</title>
          <meta name="description" content="This is the home page of my Next.js app" />
        </Head>
        <Navbar />
        <Hero />
        <Trending
          title="TRENDIGT"
          subtitle="Artiklar värda att läsa från våra redaktörer"
          posts={trendingPosts.slice(0, 6)}
        />
        <Subscription />
        <WineSlider categories={wineCategories} />
        <NewsPost title="NYHETER" subtitle="Den mest populära artikeln i dryckesvärlden" posts={posts.slice(0, 6)} />
        <Info />
      </Suspense>
    </div>
  );
}
