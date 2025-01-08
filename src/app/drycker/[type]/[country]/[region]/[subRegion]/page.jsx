import DryckerPage from '@/src/app/drycker/Components/DryckerPage';
import { getVinguideData, getProductByLander } from '@/src/lib/api/vinguideApi';
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
    return (
      <DryckerPage
        initialProducts={products}
        searchParams={searchParams}
        params={params}
        page="SubRegionPage"
        cardTitle={cardTitle}
        vinguideData={vinguideData}
      />
    );
  } catch (error) {
    console.error('Error fetching vinguide data:', error.message);
    redirect('/not-found');
  }
};

export default page;
