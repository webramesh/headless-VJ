import { redirect } from 'next/navigation';
import { getAllCategories, getCategoryBySlug } from '../../lib/api/postAPI';
import PostTypeContent from '../Components/PostTypeContent';
import Sidebar from '../Components/Sidebar';
import SubscriptionForm from '../Components/subscription/SubscriptionForm';
import CategoryPage from './CategoryPage';
import CatAccordion from './Components/CatAccordion';

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((category) => ({
    category: category.slug,
  }));
}

export default async function Page({ params }) {
  const category = await getCategoryBySlug(params.category);
  
  if (!category) {
    redirect('/');
  }
  const totalPostsByCategory = category?.count;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:gap-10">
        {/* Main Content Section (3/4) */}
        <div className="w-full lg:w-3/4 flex flex-col gap-6">
          <PostTypeContent
            title={category?.name || 'Online'}
            description={category?.description}
            fallbackText="Sedan 2007 är det lagligt att importera vin privat via nätet i Sverige. Om du funderar på att ta vara på det utökade utbudet och de ofta billigare priserna guidar vi dig genom processen. Vi förklara steg för steg hur du går till väga och listar annan viktig information."
          />
          <CategoryPage category={params.category} totalPosts={totalPostsByCategory} />
          <SubscriptionForm />
          <CatAccordion />
        </div>

        {/* Sidebar Section (1/4) */}
        <div className="w-1/4 hidden lg:block sticky top-0 h-full mt-12">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }) {
  return {
    title: `Category: ${params.category || 'Online'}`,
    description: `Posts in the ${params.category || 'Online'} category`,
  };
}
