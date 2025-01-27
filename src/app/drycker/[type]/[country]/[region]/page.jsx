import DryckerPage from '../../../Components/DryckerPage';
import { getVinguideData, getProductByLander } from '@/src/lib/api/vinguideApi';
import { redirect } from 'next/navigation';
import { generateSeoMetadata } from '@/src/utils/utils';
import { breadcrumbSchemaGenerator } from '@/src/utils/schemaUtils';

export const revalidate = 60;
export async function generateMetadata({ params }) {
  const { type, country, region } = params;

  const vinguideData = await getVinguideData(`/drycker/${type}/${country}/${region}`);

  const seo = vinguideData?.seo;

  if (seo) {
    return generateSeoMetadata(seo);
  }
}

const page = async ({ params, searchParams }) => {
  try {
    const { type, country, region } = params;
    const vinguideData = await getVinguideData(`/drycker/${type}/${country}/${region}`);
    const products = await getProductByLander(region, type);
    const cardTitle = `Artiklar relaterade till ${vinguideData.title}`;

    const breadcrumbs = breadcrumbSchemaGenerator([
      {
        name: 'Vinguide',
        url: 'https://www.vinjournalen.se/',
      },
      {
        name: type,
        url: `https://www.vinjournalen.se/drycker/${type}`,
      },
      {
        name: country,
        url: `https://www.vinjournalen.se/drycker/${type}/${country}`,
      },
      {
        name: region,
        url: `https://www.vinjournalen.se/drycker/${type}/${country}/${region}`,
      },
    ]);

    return (
      <DryckerPage
        initialProducts={products}
        searchParams={searchParams}
        params={params}
        page="RegionPage"
        vinguideData={vinguideData}
        cardTitle={cardTitle}
        breadcrumbs={breadcrumbs}
      />
    );
  } catch (error) {
    console.error('Error fetching vinguide data:', error.message);
    redirect('/not-found');
  }
};

export default page;
