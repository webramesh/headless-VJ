import Sidebar from '../Components/Sidebar';
import AccordionNew from '../Components/AccordionNew';
import SubscriptionForm from '../Components/subscription/SubscriptionForm';
import OrdlistaContainer from './components/OrdlistaContainer';
import BreadCrumb from '../Components/breadcrumb/BreadCrumb';
import { countOrdlista } from '@/src/lib/api/ordilistaAPI';
import PostAccordion from '../Components/PostAccordion';

export async function generateMetadata() {
  return {
    metadataBase: new URL('https://www.vinjournalen.se/'),
    title: 'Ordlista arkiv - Vinjournalen.se',
    description: 'ORDLISTA DRUVOR, ORDLISTA SMAKDEFINITIONER, ORDLISTA FACKTERMER',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    googleSiteVerification: 'Rzshqb5By5Mx-OhTKEO4yA0-m_ey6ckD6U0bEyuvUDY',
    // viewport: 'width=device-width, initial-scale=1, minimum-scale=1',
    icons: {
      icon: '/favicon.png',
    },
    alternates: {
      canonical: 'https://www.vinjournalen.se/ordlista/',
    },
    openGraph: {
      locale: 'sv_SE',
      type: 'website',
      title: 'Ordlista arkiv - Vinjournalen.se',
      description: 'ORDLISTA DRUVOR, ORDLISTA SMAKDEFINITIONER, ORDLISTA FACKTERMER',
      url: 'https://www.vinjournalen.se/ordlista/',
      siteName: 'Vinjournalen.se',
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
      card: 'summary_large_image',
      site: '@vinjournalense',
      title: 'Ordlista arkiv - Vinjournalen.se',
      description: 'ORDLISTA DRUVOR, ORDLISTA SMAKDEFINITIONER, ORDLISTA FACKTERMER',
      image: 'https://www.vinjournalen.se/wp-content/uploads/2020/01/VinjournalenLogotype-scaled.jpg',
    },
  };
}

export default async function Ordlista() {
  const totalOrdlista = await countOrdlista();

  const jsonLd =
    '<script type="application/ld+json" class="rank-math-schema">{"@context":"https://schema.org","@graph":[{"@type":"NewsMediaOrganization","@id":"https://www.vinjournalen.se/#organization","name":"Vinjournalen","url":"https://www.vinjournalen.se","sameAs":["https://www.facebook.com/vinjournalen/","https://x.com/vinjournalense"],"logo":{"@type":"ImageObject","@id":"https://www.vinjournalen.se/#logo","url":"https://www.vinjournalen.se/wp-content/uploads/2024/05/vinjournalen-logo-1.webp","contentUrl":"https://www.vinjournalen.se/wp-content/uploads/2024/05/vinjournalen-logo-1.webp","caption":"Vinjournalen","inLanguage":"sv-SE"}},{"@type":"WebSite","@id":"https://www.vinjournalen.se/#website","url":"https://www.vinjournalen.se","name":"Vinjournalen.se","publisher":{"@id":"https://www.vinjournalen.se/#organization"},"inLanguage":"sv-SE"},{"@type":"BreadcrumbList","@id":"https://www.vinjournalen.se/ordlista/#breadcrumb","itemListElement":[{"@type":"ListItem","position":"1","item":{"@id":"https://www.vinjournalen.se","name":"Hem"}},{"@type":"ListItem","position":"2","item":{"@id":"https://www.vinjournalen.se/ordlista/","name":"Ordlista"}}]},{"@type":"CollectionPage","@id":"https://www.vinjournalen.se/ordlista/#webpage","url":"https://www.vinjournalen.se/ordlista/","name":"Ordlista arkiv - Vinjournalen.se","description":"ORDLISTA DRUVOR, ORDLISTA SMAKDEFINITIONER, ORDLISTA FACKTERMER","isPartOf":{"@id":"https://www.vinjournalen.se/#website"},"inLanguage":"sv-SE","breadcrumb":{"@id":"https://www.vinjournalen.se/ordlista/#breadcrumb"}}]}</script>';
  return (
    <>
      <section dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div className=" bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="lg:flex lg:flex-row lg:gap-10">
            <div className="w-full lg:w-3/4 flex flex-col gap-6">
              <div>
                <h3 className="text-3xl font-bold  mt-10 ">Ordlista</h3>
                <BreadCrumb title1="Ordlista" />
              </div>
              <OrdlistaContainer totalOrdlista={totalOrdlista} />
              <AccordionNew />
              <SubscriptionForm />

              <PostAccordion />
            </div>

            {/* Sidebar Section (1/4) */}
            <div className="w-1/4 hidden lg:block sticky top-0 h-full mt-12">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
