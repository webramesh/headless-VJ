import SubscriptionForm from '../Components/subscription/SubscriptionForm';
import Sidebar from '../Components/Sidebar.jsx';
import BreadCrumb from '../Components/breadcrumb/BreadCrumb';
import LanderContainer from './Components/LanderContainer';
import { countLanders } from '@/src/lib/api/landerAPI';
import PostAccordion from '../Components/PostAccordion';

// wait for 3 seconds
async function wait() {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}

export async function generateMetadata() {
  return {
    title: 'VINATLAS - Vinjournalen.se',
    description:
      'I varje vinland så produceras viner inom olika områden. Varje område har sin egen karaktär som skiljer sig från grannliggande område.',
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    // viewport: 'width=device-width, initial-scale=1, minimum-scale=1',
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
      locale: 'sv_SE',
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
      title: 'VINATLAS - Vinjournalen.se',
      description:
        'I varje vinland så produceras viner inom olika områden. Varje område har sin egen karaktär som skiljer sig från grannliggande område.',
      image: 'https://www.vinjournalen.se/wp-content/uploads/2020/01/VinjournalenLogotype-scaled.jpg',
    },
  };
}

const Page = async () => {
  wait();
  const totalLanders = await countLanders();

  return (
    <>
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
