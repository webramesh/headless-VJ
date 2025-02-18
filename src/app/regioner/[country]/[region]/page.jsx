import Image from 'next/image';
import BreadCrumb from '@/src/app/Components/breadcrumb/BreadCrumb';
import { getRegionByURL } from '@/src/lib/api/regionerAPI';
import { generateSeoMetadata } from '@/src/utils/utils';
import AccordionNew from '@/src/app/Components/AccordionNew';
import { breadcrumbSchemaGenerator } from '@/src/utils/schemaUtils';

export const revalidate = 60;
export async function generateMetadata({ params }) {
  const { country, region } = params;
  const selectedRegion = await getRegionByURL(`/regioner/${region}`);

  const { seo } = selectedRegion;

  if (seo) {
    return generateSeoMetadata(seo, `https://www.vinjournalen.se/regioner/${country}/${region}/`);
  }
}

async function Page({ params }) {
  const { country, region } = params;
  const selectedRegion = await getRegionByURL(`/regioner/${region}`);

  const { content, faq } = selectedRegion;
  const faqItems = faq?.faq || [];

  const breadcrumbs = breadcrumbSchemaGenerator([
    {
      name: `Regioner Arkiv`,
      url: `https://www.vinjournalen.se/regioner/`,
    },
    {
      name: country,
      url: `https://www.vinjournalen.se/lander/${country}`,
    },
    {
      name: selectedRegion?.title,
      url: `https://www.vinjournalen.se/regioner/${country}/${region}`,
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        className="rank-math-schema"
        dangerouslySetInnerHTML={{ __html: breadcrumbs }}
      />
      <h1 className="text-2xl lg:text-3xl font-semibold uppercase">{selectedRegion?.title}</h1>
      <BreadCrumb title1="Regioner" link1="/regioner" title2={country} link2={`/lander/${country}`} title3={region} />
      {selectedRegion?.featuredImage?.node?.sourceUrl && (
        <Image
          src={selectedRegion?.featuredImage?.node?.sourceUrl}
          alt={region}
          className="w-full my-4 lg:my-10 object-contain"
          width={250}
          height={250}
        />
      )}

      <div className="text-sm lg:text-base mb-1 lg:mb-2">
        <div dangerouslySetInnerHTML={{ __html: content }} className="content" />
      </div>

      {faqItems.length > 0 && (
        <div className="mt-10">
          <h2 className="text-2xl pl-3 font-medium mb-4">Frågor och Svar</h2>
          <AccordionNew faqItems={faqItems} />
        </div>
      )}
    </>
  );
}

export default Page;
