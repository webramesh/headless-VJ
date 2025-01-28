import { countImportors } from '@/src/lib/api/vinimportorAPI';
import SubscriptionForm from '../Components/subscription/SubscriptionForm';
import VinImportorContainer from './components/VinImportorContainer';
import PostAccordion from '../Components/PostAccordion';
import { breadcrumbSchemaGenerator } from '@/src/utils/schemaUtils';

export async function generateMetadata() {
  const description =
    'Upptäck vinimportörer i Sverige som säljer sina viner på Systembolaget. Hitta dina favoritviner, utforska unika sortiment och lägg till dina favoriter i din inköpslista idag.';
  return {
    metadataBase: new URL('https://www.vinjournalen.se/'),
    title: 'Vinimportörer Sverige - Vinjournalen.se',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    description: description,
    alternates: {
      canonical: 'https://www.vinjournalen.se/vinimportor/',
    },
    icons: {
      icon: '/favicon.png',
    },
    openGraph: {
      locale: 'sv_SE',
      type: 'website',
      title: 'Vinimportörer Archive - Vinjournalen.se',
      description: description,
      url: 'https://www.vinjournalen.se/vinimportor/',
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
    twitterMeta: {
      card: 'summary_large_image',
      description: null, // Not explicitly mentioned
      image: null, // Not explicitly mentioned
      creator: null, // Not explicitly mentioned
      title: 'Vinimportörer Archive - Vinjournalen.se',
      site: '@vinjournalense',
    },
  };
}

const Vinimportor = async () => {
  const totalVinImportors = await countImportors();
  const breadcrumbs = breadcrumbSchemaGenerator([
    {
      name: `Vinimportörer Sverige`,
      url: `https://www.vinjournalen.se/vinimportor/`,
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        className="rank-math-schema"
        dangerouslySetInnerHTML={{ __html: breadcrumbs }}
      />
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 py-8 ">
          <h1 className="text-4xl font-bold my-8">Vinimportörer</h1>

          <VinImportorContainer totalVinImportors={totalVinImportors} />

          {/* Subscription  */}
          <div className="my-10 max-w-4xl mx-auto">
            <SubscriptionForm />
          </div>
          {/* End Subscription  */}
          <div className="max-w-4xl mx-auto">
            <PostAccordion />
          </div>
        </div>
      </div>
    </>
  );
};

export default Vinimportor;
