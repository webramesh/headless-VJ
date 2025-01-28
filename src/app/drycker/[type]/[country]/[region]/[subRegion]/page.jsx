import DryckerPage from '@/src/app/drycker/Components/DryckerPage';
import { getVinguideData, getProductByLander } from '@/src/lib/api/vinguideApi';
import { breadcrumbSchemaGenerator } from '@/src/utils/schemaUtils';
import { generateSeoMetadata } from '@/src/utils/utils';
import { redirect } from 'next/navigation';
import React from 'react';

export const revalidate = 60;
export async function generateMetadata({ params }) {
  const { type, country, region, subRegion } = params;

  const vinguideData = await getVinguideData(`/drycker/${type}/${country}/${region}/${subRegion}`);

  const seo = vinguideData?.seo;

  if (seo) {
    return generateSeoMetadata(seo);
  }
}

const page = async ({ params, searchParams }) => {
  try {
    const { type, country, region, subRegion } = params;
    const vinguideData = await getVinguideData(`/drycker/${type}/${country}/${region}/${subRegion}`);
    const cardTitle = `Artiklar relaterade till ${vinguideData.title}`;
    const products = await getProductByLander(subRegion, type);

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
      {
        name: subRegion,
        url: `https://www.vinjournalen.se/drycker/${type}/${country}/${region}/${subRegion}`,
      },
    ]);

    return (
      <DryckerPage
        initialProducts={products}
        searchParams={searchParams}
        params={params}
        page="SubRegionPage"
        cardTitle={cardTitle}
        vinguideData={vinguideData}
        breadcrumbs={breadcrumbs}
      />
    );
  } catch (error) {
    console.error('Error fetching vinguide data:', error.message);
    redirect('/not-found');
  }
};

export default page;
