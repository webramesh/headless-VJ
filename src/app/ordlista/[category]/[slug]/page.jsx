import { getOrdlistaBySlug } from '@/src/lib/api/ordilistaAPI';
import Sidebar from '@/src/app/Components/Sidebar';
import SubscriptionForm from '@/src/app/Components/subscription/SubscriptionForm';
import CatAccordion from '@/src/app/Components/Accordion';
import BreadCrumb from '@/src/app/Components/breadcrumb/BreadCrumb';

const page = async ({ params }) => {
  const { slug } = params;
  const ordlista = await getOrdlistaBySlug(slug);
  const category = ordlista?.ordlistaCategories?.nodes[0];

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
          <div
            className="ordlista-content-style prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: ordlista?.content }}
          />

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
};

export default page;
