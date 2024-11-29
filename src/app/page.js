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

export const revalidate = 60;

export async function generateMetadata() {
  // Fetch SEO data for the given slug
  const seo = await getHomePageSEO('/home-page');
  console.log(seo, ' new seo page');

  // Convert robots array to string format
  const robotsMeta = seo?.robots?.join(', ') || 'index, follow';

  // Convert focus keywords array to comma-separated string
  const keywords = seo?.focusKeywords?.join(', ') || '';

  if (seo) {
    return {
      title: seo?.title,
      description: seo?.description,
      canonicalUrl: seo?.canonicalUrl,
      robots: robotsMeta,
      keywords,
      openGraph: {
        locale: seo?.openGraph?.locale,
        type: seo?.openGraph?.type,
        title: seo?.openGraph?.title,
        description: seo?.openGraph?.description,
        url: seo?.openGraph?.url,
        siteName: seo?.openGraph?.siteName,
        image: {
          height: seo?.openGraph?.image?.height,
          secureUrl: seo?.openGraph?.image?.secureUrl,
          type: seo?.openGraph?.image?.type,
          url: seo?.openGraph?.image?.url,
          width: seo?.openGraph?.image?.width,
        },
        twitterMeta: {
          card: seo?.openGraph?.twitterMeta?.card,
          description: seo?.openGraph?.twitterMeta?.description,
          image: seo?.openGraph?.twitterMeta?.image,
          creator: seo?.openGraph?.twitterMeta?.creator,
          title: seo?.openGraph?.twitterMeta?.title,
          site: seo?.openGraph?.twitterMeta?.site,
        },
      },
    };
  }
}

export default async function Home() {
  const [nyheter, trendingPosts, wineCategories, posts] = await Promise.all([
    getAllNyheter(),
    getAllTrendingPosts(),
    getAllWineCategories(),
    getHomePagePosts(),
  ]);

  return (
    <div>
      <Banner variant="default" />
      <Hero posts={posts} />

      <Trending
        title="TRENDIGT"
        subtitle="Artiklar värda att läsa från våra redaktörer"
        trendingPosts={trendingPosts.slice(0, 6)}
      />
      <div className="container mx-auto block md:grid grid-cols-6 items-center justify-between gap-14 px-2 my-10">
        <div className="col-span-4">
          <SubscriptionForm />
        </div>
        <div className="w-full grid col-span-2 mt-8 md:mt-0">
          <SubscriptionBox />
        </div>
      </div>

      <WineSlider categories={wineCategories} />

      <NewsPost title="NYHETER" subtitle="Den mest populära artikeln i dryckesvärlden" nyheter={nyheter.slice(0, 6)} />

      <Info />
    </div>
  );
}
