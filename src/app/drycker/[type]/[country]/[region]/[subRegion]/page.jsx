import DryckerPage from '@/src/app/drycker/Components/DryckerPage';
import { getNameAndIdBySlug, getRegionsByCountry } from '@/src/lib/api/dryckerApi';
import { getAllVinguidePosts } from '@/src/lib/api/vinguideApi';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async ({ params, searchParams }) => {
  const { type, country, region, subRegion } = params;
  const data = await getNameAndIdBySlug(subRegion);
  if (!data) {
    redirect('/not-found');
  }
  const { name, id } = data;
  if (!name || !id) {
    redirect('/not-found');
  }
  const regions = await getRegionsByCountry(id);
  const vinguideData = await getAllVinguidePosts(name, `/drycker/${type}/${country}/${region}/${subRegion}`);
  return (
    <DryckerPage
      products={[]}
      searchParams={searchParams}
      params={params}
      page="SubRegionPage"
      vinguideData={vinguideData}
      countries={regions}
    />
  );
};

export default page;
