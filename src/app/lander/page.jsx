import SubscriptionForm from '../Components/subscription/SubscriptionForm';
import Sidebar from '../Components/Sidebar.jsx';
import BreadCrumb from '../Components/breadcrumb/BreadCrumb';
import LanderContainer from './Components/LanderContainer';
import { countLanders } from '@/src/lib/api/landerAPI';
import PostAccordion from '../Components/PostAccordion';

export async function generateMetadata() {
  return {
    metadataBase: new URL('https://www.vinjournalen.se/'),
    title: 'VINATLAS - Vinjournalen.se',
    description:
      'I varje vinland så produceras viner inom olika områden. Varje område har sin egen karaktär som skiljer sig från grannliggande område.',
    robots: 'index, follow, max-image-preview:standard, max-snippet:-1, max-video-preview:-1',
    icons: {
      icon: '/favicon.png',
    },
    openGraph: {
      title: 'VINATLAS - Vinjournalen.se',
      description:
        'I varje vinland så produceras viner inom olika områden. Varje område har sin egen karaktär som skiljer sig från grannliggande område.',
      url: 'https://www.vinjournalen.se/vin-atlas/',
      type: 'article',
      siteName: 'Vinjournalen.se',
      locale: 'SV_SE',
      images: [
        {
          height: 630,
          type: 'image/jpeg',
          url: '/vj-og.jpg',
          width: 1200,
        },
      ],
    },
    twitter: {
      card: 'SUMMARY_LARGE_IMAGE',
      site: '@vinjournalense',
      title: 'VINATLAS - Vinjournalen.se',
      description:
        'I varje vinland så produceras viner inom olika områden. Varje område har sin egen karaktär som skiljer sig från grannliggande område.',
      image: '/vj-og.jpg',
      creator: '@vinjournalense',
    },
    alternates: {
      canonical: 'https://www.vinjournalen.se/lander/',
    },
  };
}

const Page = async () => {
  const totalLanders = await countLanders();

  const jsonLd =
    '<script type="application/ld+json" class="rank-math-schema">{"@context":"https://schema.org","@graph":[{"@type":"NewsMediaOrganization","@id":"https://www.vinjournalen.se/#organization","name":"Vinjournalen","url":"https://www.vinjournalen.se","sameAs":["https://www.facebook.com/vinjournalen/","https://x.com/vinjournalense"],"logo":{"@type":"ImageObject","@id":"https://www.vinjournalen.se/#logo","url":"https://www.vinjournalen.se/wp-content/uploads/2024/05/vinjournalen-logo-1.webp","contentUrl":"https://www.vinjournalen.se/wp-content/uploads/2024/05/vinjournalen-logo-1.webp","caption":"Vinjournalen","inLanguage":"sv-SE"}},{"@type":"WebSite","@id":"https://www.vinjournalen.se/#website","url":"https://www.vinjournalen.se","name":"Vinjournalen.se","publisher":{"@id":"https://www.vinjournalen.se/#organization"},"inLanguage":"sv-SE"},{"@type":"BreadcrumbList","@id":"https://www.vinjournalen.se/lander/#breadcrumb","itemListElement":[{"@type":"ListItem","position":"1","item":{"@id":"https://www.vinjournalen.se","name":"Hem"}},{"@type":"ListItem","position":"2","item":{"@id":"https://www.vinjournalen.se/lander/","name":"Lander"}}]},{"@type":"CollectionPage","@id":"https://www.vinjournalen.se/lander/#webpage","url":"https://www.vinjournalen.se/lander/","name":"Lander - Vinjournalen.se","description":"I varje vinland så produceras viner inom olika områden. Varje område har sin egen karaktär som skiljer sig från grannliggande område. I olika områden så","isPartOf":{"@id":"https://www.vinjournalen.se/#website"},"inLanguage":"sv-SE","breadcrumb":{"@id":"https://www.vinjournalen.se/lander/#breadcrumb"}}]}</script>';

  return (
    <>
      <section dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div className="container mx-auto mt-5 px-4 md:px-0">
        <BreadCrumb title1="Lander" />
        <div className="block md:grid md:grid-cols-4 md:gap-8">
          <div className="md:col-span-3 w-full">
            <h1 className="text-2xl lg:text-3xl mb-4 font-bold uppercase">Lander</h1>
            <LanderContainer totalLanders={totalLanders} />

            <div className="mt-8 mx-4 md:mx-0">
              <SubscriptionForm />
            </div>

            <div className="mt-8 mx-4 md:mx-0">
              <PostAccordion />
            </div>
          </div>
          <div className="md:col-span-1 w-full">
            <div className="hidden md:block sticky top-0">
              <Sidebar />
            </div>
          </div>
        </div>

        <div className="md:hidden mx-4 mt-8">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Page;
