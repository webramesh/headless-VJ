import './globals.css';

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
import Script from 'next/script';

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
        {/* google analytics */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-QTFVGQ97WC"></Script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-QTFVGQ97WC');`,
          }}
        />
        {/* google tag manager */}
        <Script
          id="google_tag_manager"
          dangerouslySetInnerHTML={{
            __html: `
          (function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, 'script', 'dataLayer', 'GTM-5ZJLP9N');
            `,
          }}
        />

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
      </head>

      <body>
        {/* <!-- Google Tag Manager (noscript) --> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5ZJLP9N"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
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
