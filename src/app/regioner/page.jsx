import SubscriptionForm from '../Components/subscription/SubscriptionForm';
import Sidebar from '../Components/Sidebar.jsx';
import BreadCrumb from '../Components/breadcrumb/BreadCrumb';
import RegionerContainer from './components/RegionerContainer';
import { countRegioners } from '@/src/lib/api/regionerAPI';
import { generateSeoMetadata } from '@/src/utils/utils';
import { getContentTypeSEO } from '@/src/lib/api/seoAPI';
import PostAccordion from '../Components/PostAccordion';
import { breadcrumbSchemaGenerator } from '@/src/utils/schemaUtils';

export async function generateMetadata() {
  const { seo } = await getContentTypeSEO('cG9zdF90eXBlOnJlZ2lvbmVy'); // id for regioner

  return generateSeoMetadata(seo);
}

const Page = async () => {
  const totalRegioners = await countRegioners();
  const breadcrumbs = breadcrumbSchemaGenerator([
    {
      name: `Regioner Arkiv`,
      url: `https://www.vinjournalen.se/regioner/`,
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        className="rank-math-schema"
        dangerouslySetInnerHTML={{ __html: breadcrumbs }}
      />
      <div className="container mx-auto mt-5 px-4 md:px-0">
        <BreadCrumb title1="Regioner" />
        <div className="block md:grid md:grid-cols-4 md:gap-8">
          <div className="md:col-span-3 w-full">
            <h1 className="text-2xl lg:text-3xl mb-4 font-bold uppercase">Regioner</h1>
            <RegionerContainer totalRegioners={totalRegioners} />

            <div className="mt-8 mx-4 md:mx-0">
              <SubscriptionForm />
            </div>

            <div className="mt-8 mx-4 md:mx-0">
              <PostAccordion />
            </div>
          </div>
          <div className="md:col-span-1 w-full">
            <div className="hidden md:block sticky top-0">
              <Sidebar />
            </div>
          </div>
        </div>

        <div className="md:hidden mx-4 mt-8">
          <Sidebar />
        </div>
      </div>
    </>
  );
};

export default Page;
