import { countArticles } from '../../lib/api/articleApi';
import ArticleContent from './Components/ArticleContent';
import Sidebar from '../Components/Sidebar';

export async function generateMetadata() {
  return {
    title: 'Artiklar om vin - Vinjournalen.se',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    description:
      'Denna sida innehåller artiklar om vin, mat och dryck, samt information om viner och vinodlingar från hela världen.',
    focusKeywords: ['vin', 'vinartiklar', 'vinodlingar', 'viner', 'mat och dryck'],
    canonicalUrl: 'https://www.vinjournalen.se/artiklar/',
    icons: {
      icon: '/favicon.png',
    },

    openGraph: {
      locale: 'sv_SE',
      type: 'article',
      title: 'Artiklar om vin - Vinjournalen.se',
      description:
        'En omfattande samling artiklar om vin, mat och dryck, samt information om vinodlingar och världens viner.',
      url: 'https://www.vinjournalen.se/artiklar/',
      siteName: 'Vinjournalen.se',
      image: {
        height: 495,
        secureUrl: 'https://www.vinjournalen.se/wp-content/uploads/2020/01/VinjournalenLogotype-scaled.jpg',
        type: 'image/jpeg',
        url: 'https://www.vinjournalen.se/wp-content/uploads/2020/01/VinjournalenLogotype-scaled.jpg',
        width: 2048,
      },
      twitterMeta: {
        card: 'summary_large_image',
        description:
          'Utforska artiklar om vin, mat och dryck på Vinjournalen.se, den svenska portalen för vinentusiaster.',
        image: 'https://www.vinjournalen.se/wp-content/uploads/2020/01/VinjournalenLogotype-scaled.jpg',
        creator: '@vinjournalense',
        title: 'Artiklar om vin - Vinjournalen.se',
        site: '@vinjournalense',
      },
      icon: {
        url: 'https://www.vinjournalen.se/wp-content/uploads/2022/02/favicon-16x16-1.png', // Link to the favicon
        type: 'image/png', // Favicon format
        sizes: '16x16', // Icon dimensions
      },
    },
  };
}

export default async function ArticlarPage() {
  const totalPosts = await countArticles();

  return <ArticleContent totalPosts={totalPosts} sidebar={<Sidebar />} />;
}
