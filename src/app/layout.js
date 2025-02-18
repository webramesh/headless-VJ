import './globals.css';

import Navbar from './Components/Navbar';
import dynamic from 'next/dynamic';
import Topbanner from './Components/Topbanner';
import { getLatestPost } from '../lib/api/postAPI';
import { navSchema } from '../utils/constants';
import Analytics from './Components/google/Analytics';
import PWA from './Components/PWA/PWA';
import Providers from './Components/Providers';
import CookieInfo from './Components/cookie/CookieInfo';

const ScrollToTopButton = dynamic(() => import('./Components/ScrollToTopButton'), {
  ssr: false,
});

const Footer = dynamic(() => import('./Components/Footer'), {
  ssr: false,
});

export default async function RootLayout({ children }) {
  const latestPost = await getLatestPost();

  return (
    <html lang="sv-SE">
      <head>
        <link
          rel="preload"
          href="/fonts/Outfit-VariableFont_wght.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
          fetchPriority="high"
        />
        <PWA />

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
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.GOOGLE_TAG_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        {/* <!-- End Google Tag Manager (noscript) --> */}
        <Providers>
          {latestPost && <Topbanner post={latestPost} />}
          <Navbar />
          <main>{children}</main>
          <ScrollToTopButton />
          <Footer />
        </Providers>

        <Analytics />
        <CookieInfo />
      </body>
    </html>
  );
}
