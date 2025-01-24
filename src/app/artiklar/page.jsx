import { countArticles } from '../../lib/api/articleApi';
import ArticleContent from './Components/ArticleContent';
import Sidebar from '../Components/Sidebar';
import Banner from '../Components/Banner';

export async function generateMetadata() {
  return {
    metadataBase: new URL('https://www.vinjournalen.se/'),
    title: 'Artiklar om vin - Vinjournalen.se',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    description:
      'Denna sida innehåller artiklar om vin, mat och dryck, samt information om viner och vinodlingar från hela världen.',
    focusKeywords: ['vin', 'vinartiklar', 'vinodlingar', 'viner', 'mat och dryck'],
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
      images: [
        {
          height: 630,
          type: 'image/jpeg',
          url: '/vj-og.jpg',
          width: 1200,
        },
      ],
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
    alternates: {
      canonical: 'https://www.vinjournalen.se/artiklar/',
    },
  };
}

export default async function ArticlarPage() {
  const totalPosts = await countArticles();

  const jsonLd =
    '<script type="application/ld+json" class="rank-math-schema">{"@context":"https://schema.org","@graph":[{"@type":"NewsMediaOrganization","@id":"https://www.vinjournalen.se/#organization","name":"Vinjournalen","url":"https://www.vinjournalen.se","sameAs":["https://www.facebook.com/vinjournalen/","https://x.com/vinjournalense"],"logo":{"@type":"ImageObject","@id":"https://www.vinjournalen.se/#logo","url":"https://www.vinjournalen.se/wp-content/uploads/2024/05/vinjournalen-logo-1.webp","contentUrl":"https://www.vinjournalen.se/wp-content/uploads/2024/05/vinjournalen-logo-1.webp","caption":"Vinjournalen","inLanguage":"sv-SE"}},{"@type":"WebSite","@id":"https://www.vinjournalen.se/#website","url":"https://www.vinjournalen.se","name":"Vinjournalen.se","publisher":{"@id":"https://www.vinjournalen.se/#organization"},"inLanguage":"sv-SE"},{"@type":"BreadcrumbList","@id":"https://www.vinjournalen.se/artiklar/#breadcrumb","itemListElement":[{"@type":"ListItem","position":"1","item":{"@id":"https://www.vinjournalen.se","name":"Hem"}},{"@type":"ListItem","position":"2","item":{"@id":"https://www.vinjournalen.se/artiklar/","name":"Artiklar om vin"}}]},{"@type":"CollectionPage","@id":"https://www.vinjournalen.se/artiklar/#webpage","url":"https://www.vinjournalen.se/artiklar/","name":"Artiklar om vin - Vinjournalen.se","isPartOf":{"@id":"https://www.vinjournalen.se/#website"},"inLanguage":"sv-SE","breadcrumb":{"@id":"https://www.vinjournalen.se/artiklar/#breadcrumb"}}]}</script>';

  return (
    <>
      <section dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <Banner variant="default" /> <ArticleContent totalPosts={totalPosts} sidebar={<Sidebar />} />
    </>
  );
}
