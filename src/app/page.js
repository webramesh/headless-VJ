import Hero from './Components/Hero';
import Trending from './Components/Trending';
import Info from './Components/Info';
import WineSlider from './Components/WineSlider';
import { Suspense } from 'react';
import Loading from './loading';
import { getAllNyheter } from '../lib/api/newsApi';
import { getAllTrendingPosts } from '../lib/api/trendingpostApi';
import { getAllWineCategories } from '../lib/api/wineApi';
import NewsPost from './Components/NewsPost';
import { getHomePagePosts, getPopularPosts } from '../lib/api/postAPI';
import SubscriptionForm from './Components/subscription/SubscriptionForm';
import SubscriptionBox from './Components/subscription/SubscriptionBox';
import { getAllOrdlista } from '../lib/api/  ordlistaAPI';

export const revalidate = 60;

export default async function Home() {
  const [nyheter, trendingPosts, wineCategories] = await Promise.all([
    getAllNyheter(),
    getAllTrendingPosts(),
    getAllWineCategories(),
  ]);

  const [posts] = await Promise.all([getHomePagePosts()]);
  const [ordlista] = await Promise.all([getAllOrdlista()]);
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Hero posts={posts} />

        <Trending
          title="TRENDIGT"
          subtitle="Artiklar värda att läsa från våra redaktörer"
          trendingPosts={trendingPosts.slice(0, 6)}
        />
        {/* <Subscription /> */}
        <div className="container mx-auto block md:grid grid-cols-6 items-center justify-between gap-14 px-2 my-10">
          <div className="col-span-4">
            <SubscriptionForm />
          </div>
          <div className="w-full grid col-span-2">
            {/* <SubscriptionBox ordlista={ordlista} /> */}
            <SubscriptionBox />
          </div>
        </div>
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
