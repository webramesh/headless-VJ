import { countImportors } from '@/src/lib/api/vinimportorAPI';
import SubscriptionForm from '../Components/subscription/SubscriptionForm';
import VinImportorContainer from './components/VinImportorContainer';
import PostAccordion from '../Components/PostAccordion';

export async function generateMetadata() {
  return {
    title: 'Vinimportörer Archive - Vinjournalen.se',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    description: null, // No description provided in the data
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
      description: 'Information om vin på nätet', // Derived from OpenGraph description
      url: 'https://www.vinjournalen.se/vinimportor/',
      siteName: 'Vinjournalen.se',
      image: {
        height: 495,
        secureUrl: null, // Not explicitly mentioned
        type: 'image/jpeg',
        url: 'https://www.vinjournalen.se/wp-content/uploads/2020/01/VinjournalenLogotype-scaled.jpg',
        width: 2048,
      },
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

  return (
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
  );
};

export default Vinimportor;
