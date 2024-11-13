import { countProductsByTaxonomy } from '@/src/lib/api/taxonomyApi';
import Sidebar from '../../Components/Sidebar';
import SubscriptionForm from '../../Components/subscription/SubscriptionForm';
import CatAccordion from './CatAccordion';
import ProductsByTaxonomy from './ProductsByTaxonomy';

async function TaxonomyPage({ params }) {
  const totalProducts = await countProductsByTaxonomy(params.category, params.slug);
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:gap-10 mt-12">
        {/* Main Content Section (3/4) */}
        <div className="w-full lg:w-3/4 flex flex-col gap-6">
          <ProductsByTaxonomy params={params} totalProducts={totalProducts} />
          <SubscriptionForm />
          <CatAccordion />
        </div>

        {/* Sidebar Section (1/4) */}
        <div className="w-1/4 hidden lg:block sticky top-0 h-full">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export default TaxonomyPage;
