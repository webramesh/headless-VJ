import { countProducts } from '@/src/lib/api/productsAPI';
import Sidebar from '../Components/Sidebar';
import SubscriptionForm from '../Components/subscription/SubscriptionForm';
import ProdukterPage from './Components/ProdukterPage';
import PostAccordion from '../Components/PostAccordion';
import { generateSeoMetadata } from '@/src/utils/utils';
import { getContentTypeSEO } from '@/src/lib/api/seoAPI';
import { Suspense } from 'react';
import SidebarSkeleton from '../Components/SkeletonLoading/SidebarSkeleton';

export async function generateMetadata() {
  const { seo } = await getContentTypeSEO('cG9zdF90eXBlOnByb2R1a3Rlcg=='); // id for produkter

  if (seo) {
    return generateSeoMetadata(seo);
  }
}

const page = async () => {
  const { seo } = await getContentTypeSEO('cG9zdF90eXBlOnByb2R1a3Rlcg=='); // id for produkter
  const totalProducts = await countProducts();
  const jsonLd = seo?.jsonLd?.raw || null;
  return (
    <>
      <section dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <div className="container mx-auto flex  lg:flex-row gap-6 lg:gap-12 mt-4 lg:mt-10  p-4">
        <div className="lg:w-3/4">
          <h1 className="text-2xl lg:text-3xl mb-4 font-semibold">Produkter</h1>
          <ProdukterPage totalProducts={totalProducts} />
          <div className="space-y-10 my-10">
            <SubscriptionForm />
            <PostAccordion />
          </div>
        </div>
        <div className="w-1/4 hidden lg:block sticky top-0 h-full">
          <Suspense fallback={<SidebarSkeleton />}>
            <Sidebar />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default page;
