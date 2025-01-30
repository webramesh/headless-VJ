import { redirect } from 'next/navigation';
import { getAllCategories, getCategoryBySlug } from '../../lib/api/postAPI';
import PostTypeContent from '../Components/PostTypeContent';
import Banner from '../Components/Banner';
import Sidebar from '../Components/Sidebar';
import SubscriptionForm from '../Components/subscription/SubscriptionForm';
import CategoryPage from './CategoryPage';
import AccordionNew from '../Components/AccordionNew';
import { generateSeoMetadata } from '@/src/utils/utils';
import PostAccordion from '../Components/PostAccordion';
import { breadcrumbSchemaGenerator } from '@/src/utils/schemaUtils';
import { Suspense } from 'react';
import BannerSkeleton from '../Components/SkeletonLoading/BannerSkeleton';
import AccordionSkeleton from '../Components/SkeletonLoading/AccordionSkeleton';
import SidebarSkeleton from '../Components/SkeletonLoading/SidebarSkeleton';

export async function generateStaticParams() {
  const categories = await getAllCategories();
  return categories.map((category) => ({
    category: category.slug,
  }));
}
export const revalidate = 60;

export default async function Page({ params }) {
  const category = await getCategoryBySlug(params.category);

  if (!category) {
    redirect('/not-found');
  }
  const totalPostsByCategory = category?.count;
  const faqItems = category?.faq?.faq || [];

  const breadcrumbs = breadcrumbSchemaGenerator([
    { name: category.name, url: `https://www.vinjournalen.se/${params.category}/` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        className="rank-math-schema"
        dangerouslySetInnerHTML={{ __html: breadcrumbs }}
      />

      <div className="container mx-auto px-2">
        <Suspense fallback={<BannerSkeleton />}>
          <Banner variant="default" />
        </Suspense>
        <div className="flex flex-col lg:flex-row lg:gap-10">
          {/* Main Content Section (3/4) */}
          <main className="w-full lg:w-3/4 flex flex-col gap-6">
            <PostTypeContent
              title={category?.name || 'Online'}
              description={category?.description}
              fallbackText="Sedan 2007 är det lagligt att importera vin privat via nätet i Sverige. Om du funderar på att ta vara på det utökade utbudet och de ofta billigare priserna guidar vi dig genom processen. Vi förklara steg för steg hur du går till väga och listar annan viktig information."
            />

            <CategoryPage category={params.category} totalPosts={totalPostsByCategory} />

            {faqItems.length > 0 && (
              <section className="mt-10">
                <h3 className="text-2xl pl-3 font-medium mb-4">Frågor och Svar</h3>
                <Suspense fallback={<AccordionSkeleton />}>
                  <AccordionNew faqItems={faqItems} />
                </Suspense>
              </section>
            )}

            <SubscriptionForm />
            <PostAccordion />
          </main>

          {/* Sidebar Section (1/4) */}
          <aside className="w-1/4 hidden lg:block sticky top-0 h-full mt-12">
            <Suspense fallback={<SidebarSkeleton />}>
              <Sidebar />
            </Suspense>
          </aside>
        </div>
      </div>
    </>
  );
}

export async function generateMetadata({ params }) {
  const { category } = params;

  // Fetch category data for dynamic metadata
  const categoryData = await getCategoryBySlug(category);

  const seo = categoryData?.seo;
  if (seo) {
    return generateSeoMetadata(seo);
  }
}
