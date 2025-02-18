import BreadCrumb from '../../Components/breadcrumb/BreadCrumb';
import Sidebar from '../../Components/Sidebar';
import SubscriptionForm from '../../Components/subscription/SubscriptionForm';
import { getOrdlistaCategoryBySlug } from '@/src/lib/api/ordilistaAPI';
import OrdlistaByCategory from '../components/OrdlistaByCategory';
import PostAccordion from '../../Components/PostAccordion';
import { generateSeoMetadata } from '@/src/utils/utils';
import { breadcrumbSchemaGenerator } from '@/src/utils/schemaUtils';

export async function generateMetadata({ params }) {
  const category = await getOrdlistaCategoryBySlug(params.category);

  const seo = category?.seo;

  if (seo) {
    return generateSeoMetadata(seo);
  }
}

export default async function page({ params }) {
  const category = await getOrdlistaCategoryBySlug(params.category);
  const totalOrdlista = category.count;
  const breadcrumbs = breadcrumbSchemaGenerator([
    { name: 'Ordlista arkiv - Vinjournalen.se', url: 'https://www.vinjournalen.se/ordlista/' },
    { name: category?.name, url: `https://www.vinjournalen.se/ordlista/${params.category}` },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        className="rank-math-schema"
        dangerouslySetInnerHTML={{ __html: breadcrumbs }}
      />
      <div className="container mx-auto px-4 my-10  grid grid-cols-4 gap-12">
        <div className="col-span-4 lg:col-span-3">
          <h2 className="text-3xl font-bold text-gray-800">{category?.name}</h2>
          <BreadCrumb title1="ordlista" link1="/ordlista" title2={params.category} />
          <p className="text-sm lg:text-base mb-1 lg:mb-2">{category?.description}</p>

          <OrdlistaByCategory category={params.category} totalOrdlista={totalOrdlista} />

          <div className="my-8">
            <SubscriptionForm />
          </div>
          <PostAccordion />
        </div>
        <div className="col-span-1 hidden lg:block sticky top-0 h-full">
          <Sidebar />
        </div>
      </div>
    </>
  );
}
