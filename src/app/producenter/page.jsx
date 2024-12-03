import { countProducenters } from '@/src/lib/api/producenterAPI';
import BreadCrumb from '../Components/breadcrumb/BreadCrumb';
import ProducenterContainer from './components/ProducenterContainer';
import SubscriptionForm from '../Components/subscription/SubscriptionForm';
import Sidebar from '../Components/Sidebar';
import PostAccordion from '../Components/PostAccordion';
import { generateSeoMetadata } from '@/src/utils/utils';
import { getContentTypeSEO } from '@/src/lib/api/seoAPI';

export async function generateMetadata() {
  const { seo } = await getContentTypeSEO('cG9zdF90eXBlOnByb2R1Y2VudGVy'); // id for producenter

  if (seo) {
    return generateSeoMetadata(seo);
  }
}

export default async function page() {
  const totalProducenters = await countProducenters();
  return (
    <>
      <div className="container mx-auto flex  lg:flex-row gap-6 lg:gap-12 mt-4 lg:mt-10 bg-slate-50  p-4">
        <div className="md:w-3/4 ">
          <div className=" text-xs lg:text-sm flex gap-1 my-2">
            <BreadCrumb title1="Producenter" />
          </div>
          <h1 className="text-2xl lg:text-3xl  mb-4 font-bold uppercase">Producenter</h1>
          <ProducenterContainer totalProducenters={totalProducenters} />
          <div className="space-y-10 my-10">
            <SubscriptionForm />
            {/* <CatAccordion /> */}

            <PostAccordion />
          </div>
        </div>

        <div className="w-1/4 hidden md:block sticky top-0 h-full">
          <Sidebar />
        </div>
      </div>
    </>
  );
}
