import Sidebar from '../Components/Sidebar';
import AccordionNew from '../Components/AccordionNew';
import SubscriptionForm from '../Components/subscription/SubscriptionForm';
import OrdlistaContainer from './components/OrdlistaContainer';
import BreadCrumb from '../Components/breadcrumb/BreadCrumb';
import { countOrdlista } from '@/src/lib/api/ordilistaAPI';
import PostAccordion from '../Components/PostAccordion';

export async function generateMetadata() {
  return {
    title: 'Ordlista arkiv - Vinjournalen.se',
    description: 'ORDLISTA DRUVOR, ORDLISTA SMAKDEFINITIONER, ORDLISTA FACKTERMER',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    googleSiteVerification: 'Rzshqb5By5Mx-OhTKEO4yA0-m_ey6ckD6U0bEyuvUDY',
    // viewport: 'width=device-width, initial-scale=1, minimum-scale=1',
    icons: {
      icon: '/favicon.png',
    },
    canonical: 'https://www.vinjournalen.se/ordlista/',
    openGraph: {
      locale: 'sv_SE',
      type: 'website',
      title: 'Ordlista arkiv - Vinjournalen.se',
      description: 'ORDLISTA DRUVOR, ORDLISTA SMAKDEFINITIONER, ORDLISTA FACKTERMER',
      url: 'https://www.vinjournalen.se/ordlista/',
      siteName: 'Vinjournalen.se',
      image: {
        url: 'https://www.vinjournalen.se/wp-content/uploads/2020/01/VinjournalenLogotype-scaled.jpg',
        width: 2048,
        height: 495,
        type: 'image/jpeg',
      },
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
  return (
    <>
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
