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
import { getHomePagePosts, getPopularPosts } from '../lib/api/postAPI';

export default async function Home() {
  const [nyheter, trendingPosts, wineCategories] = await Promise.all([
    getAllNyheter(),
    getAllTrendingPosts(),
    getAllWineCategories(),
  ]);


  const [posts] = await Promise.all([getHomePagePosts()]);

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Hero posts={posts} />

        <Trending
          title="TRENDIGT"
          subtitle="Artiklar värda att läsa från våra redaktörer"
          trendingPosts={trendingPosts.slice(0, 6)}
        />
        <Subscription />
        <WineSlider categories={wineCategories} />
        <NewsPost
          title="NYHETER"
          subtitle="Den mest populära artikeln i dryckesvärlden"
          nyheter={nyheter.slice(0, 6)}
        />
        <Info />
      </Suspense>
    </div>
  );
}
