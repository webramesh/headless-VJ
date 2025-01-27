import { countProductsByTaxonomy } from '@/src/lib/api/taxonomyApi';
import Sidebar from '../../Components/Sidebar';
import SubscriptionForm from '../../Components/subscription/SubscriptionForm';
import ProductsByTaxonomy from './ProductsByTaxonomy';
import PostAccordion from '../../Components/PostAccordion';
import { redirect } from 'next/navigation';
import { breadcrumbSchemaGenerator } from '@/src/utils/schemaUtils';

async function TaxonomyPage({ params }) {
  const taxonomyData = await countProductsByTaxonomy(params.category, params.slug);
  if (!taxonomyData) {
    redirect('/not-found');
  }
  const { name, totalProducts } = taxonomyData;

  const breadcrumbs = breadcrumbSchemaGenerator([
    {
      name: params.category,
      url: `https://www.vinjournalen.se/`,
    },
    {
      name: name,
      url: `https://www.vinjournalen.se/${params.category}/${params.slug}`,
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        className="rank-math-schema"
        dangerouslySetInnerHTML={{ __html: breadcrumbs }}
      />
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-10 mt-12">
          {/* Main Content Section (3/4) */}
          <div className="w-full lg:w-3/4 flex flex-col gap-6">
            <h1 className="text-2xl lg:text-3xl mb-4 font-semibold">{name}</h1>

            <ProductsByTaxonomy params={params} totalProducts={totalProducts} />
            <SubscriptionForm />
            <PostAccordion />
          </div>

          {/* Sidebar Section (1/4) */}
          <div className="w-1/4 hidden lg:block sticky top-0 h-full">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default TaxonomyPage;
