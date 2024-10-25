import Head from 'next/head';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';

import Subscription from './Components/Subscription';
import Info from './Components/Info';
import Footer from './Components/Footer';
import Wine from './Components/Wine.jsx';
import { Suspense } from 'react';
import Loading from './loading';
import { getHomePagePosts, getPopularPosts } from '../lib/api/postAPI';
import TrendingPosts from './Components/posts/TrendingPosts';

const HomePage = async () => {
  const [posts, popularPosts] = await Promise.all([getHomePagePosts(), getPopularPosts()]);

  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Head>
          <title>Home Page</title>
          <meta name="description" content="This is the home page of my Next.js app" />
        </Head>
        {/* <Navbar /> */}

        <Hero posts={posts} />

        <TrendingPosts posts={popularPosts} />
        <Subscription />
        <Wine />
        <Info />
      </Suspense>

      <Footer />
    </div>
  );
};

export default HomePage;
