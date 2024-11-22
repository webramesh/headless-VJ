import { Suspense } from 'react';
import SenasteNytt from './SenasteNytt';
import RecentPostCard from './RecentPostCard';
import Banner from '../Components/Banner';
import SubscriptionBox from './subscription/SubscriptionBox';
import WineTourism from './WineTourism';
import { getAllTrendingPosts } from '../../lib/api/trendingpostApi';

export default async function Sidebar() {
  const trendingPosts = await getAllTrendingPosts();

  return (
    <aside className="w-full">
      <Suspense>
        <Banner variant="sidebar" />
      </Suspense>
      <SubscriptionBox />
      <SenasteNytt />
      <div className="mt-4">
        {trendingPosts.slice(0, 3).map((post) => (
          <RecentPostCard key={post.id} post={post} />
        ))}
      </div>

      <div className="my-10">
        <WineTourism />
      </div>
    </aside>
  );
}
