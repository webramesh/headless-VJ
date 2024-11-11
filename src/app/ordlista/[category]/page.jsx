import BreadCrumb from '../../Components/breadcrumb/BreadCrumb';
import Sidebar from '../../Components/Sidebar';
import SubscriptionForm from '../../Components/subscription/SubscriptionForm';
import CatAccordion from '../../[category]/Components/CatAccordion';
import { countOrdlistaByCategory, getOrdlistaCategoryBySlug } from '@/src/lib/api/ordilistaAPI';
import OrdlistaByCategory from '../components/OrdlistaByCategory';

export default async function page({ params }) {
  const category = await getOrdlistaCategoryBySlug(params.category);
  const totalOrdlista = await countOrdlistaByCategory(params.category);
  return (
    <>
      <div className="container mx-auto px-4 my-10  grid grid-cols-4 gap-12">
        <div className="col-span-4 lg:col-span-3">
          <h2 className="text-3xl font-bold text-gray-800">{category?.name}</h2>
          <BreadCrumb title1="ordlista" link1="/ordlista" title2={params.category} />
          <p className="text-sm lg:text-base mb-1 lg:mb-2">{category?.description}</p>

          <OrdlistaByCategory category={params.category} totalOrdlista={totalOrdlista} />

          <div className="my-8">
            <SubscriptionForm />
          </div>
          <CatAccordion />
        </div>
        <div className="col-span-1 hidden lg:block sticky top-0 h-full">
          <Sidebar />
        </div>
      </div>
    </>
  );
}
