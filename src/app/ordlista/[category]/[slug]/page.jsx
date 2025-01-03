import { getOrdlistaBySlug } from '@/src/lib/api/ordilistaAPI';
import Sidebar from '@/src/app/Components/Sidebar';
import SubscriptionForm from '@/src/app/Components/subscription/SubscriptionForm';
import BreadCrumb from '@/src/app/Components/breadcrumb/BreadCrumb';
import PostAccordion from '@/src/app/Components/PostAccordion';
import AccordionNew from '../../../Components/AccordionNew';
import { getPageBySlug } from '@/src/lib/api/pageApi';
import { generateSeoMetadata } from '@/src/utils/utils';

export async function generateMetadata({ params }) {
  const data = await getPageBySlug(`ordlista/${params.slug}`);

  const seo = data?.seo;

  if (seo) {
    return generateSeoMetadata(seo);
  }
}
export const revalidate = 60;

const page = async ({ params }) => {
  const { slug } = params;
  const ordlista = await getOrdlistaBySlug(slug);
  const category = ordlista?.ordlistaCategories?.nodes[0];
  const faqItems = ordlista?.faq?.faq || [];

  // if (!ordlista)

  return (
    <>
      <div className="container mx-auto px-4 my-10  grid grid-cols-4 gap-12">
        <div className="col-span-4 lg:col-span-3">
          <h2 className="text-3xl font-bold text-gray-800">{ordlista?.title}</h2>
          <BreadCrumb
            title1="ordlista"
            link1="/ordlista"
            title2={category?.name}
            link2={`/ordlista/${category?.slug}`}
            title3={ordlista?.title}
          />

          {/* ordlista content */}
          <div className="content" dangerouslySetInnerHTML={{ __html: ordlista?.content }} />

          {faqItems.length > 0 && (
            <div className="mt-10">
              <h2 className="text-2xl pl-3 font-medium mb-4">Frågor och Svar</h2>
              <AccordionNew faqItems={faqItems} />
            </div>
          )}

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
};

export default page;
