import './critical.css';
import Script from 'next/script';
import ApolloProvider from '../app/Components/ApolloProvider';
import Navbar from './Components/Navbar';
import { fetchMenu } from '../lib/api/menuAPI';
import { PageProvider } from '../context/PageContext';
import { OrdlistaProvider } from '../context/OrdlistaContext';
import { getAllOrdlistaCategories } from '../lib/api/ordilistaAPI';
import { CategoryAndPostsProvider } from '../context/CategoriesAndPostsContext';
import { FilterProvider } from '../context/FilterContext';
import { getAllCategoriesWithSuggestedPosts } from '../lib/api/postaccordion';
import dynamic from 'next/dynamic';
import Topbanner from './Components/Topbanner';
import { PostHogProvider } from './providers';
import PgBanner from './PgBanner';
import { getHomePagePosts } from '../lib/api/postAPI';
import { navSchema } from '../utils/schemaUtils';
import { GoogleTagManager } from '@next/third-parties/google';

const ScrollToTopButton = dynamic(() => import('./Components/ScrollToTopButton'), {
  ssr: false,
});

const Footer = dynamic(() => import('./Components/Footer'));

export default async function RootLayout({ children }) {
  const [menuData, footerMenu, ordlista, categoriesWithSuggestedPosts, posts] = await Promise.all([
    fetchMenu('primary-menu'),
    fetchMenu('top-secondary-menu'),
    getAllOrdlistaCategories(),
    getAllCategoriesWithSuggestedPosts(),
    getHomePagePosts(),
  ]);

  return (
    <html lang="sv-SE">
      <head>
        <GoogleTagManager gtmId="GTM-MVC4G9ZN" />
        {/* PWA Primary */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0,maximum-scale=5.0" />
        <meta name="theme-color" content="#F3EFE0" />

        {/* Android */}
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="icon" type="image/png" sizes="192x192" href="/icons/icon512_maskable.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icons/icon512_maskable.png" />

        {/* iOS */}
        <link rel="apple-touch-icon" href="/icons/icon192.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon512_maskable.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon512_maskable.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icons/icon512_maskable.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Vinjournalen" />

        {/* Microsoft */}
        <meta name="msapplication-TileImage" content="/icons/icon512_maskable.png" />
        <meta name="msapplication-TileColor" content="#F3EFE0" />
        <meta name="msapplication-tap-highlight" content="no" />

        <script
          type="application/ld+json"
          className="rank-math-schema"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(navSchema) }}
        />
        {/* <link rel="stylesheet" href="/global.css" media="print" /> */}
        <Script id="load-css">{`document.querySelector('link[href="/global.css"]').media='all'`}</Script>

        {/* this css should be non-critical */}
        {/* <link rel="preload" href="/global.css" as="style" /> */}
      </head>

      <body>
        <PostHogProvider>
          <ApolloProvider>
            <FilterProvider>
              <PageProvider>
                <CategoryAndPostsProvider categoriesWithSuggestedPosts={categoriesWithSuggestedPosts}>
                  <OrdlistaProvider ordlista={ordlista}>
                    <Topbanner post={posts[0]} />
                    <Navbar menuData={menuData} />
                    {children}
                    <PgBanner />
                    <ScrollToTopButton />
                    <Footer menuItems={footerMenu} />
                  </OrdlistaProvider>
                </CategoryAndPostsProvider>
              </PageProvider>
            </FilterProvider>
          </ApolloProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return [];
}

export const dynamicParams = true;
