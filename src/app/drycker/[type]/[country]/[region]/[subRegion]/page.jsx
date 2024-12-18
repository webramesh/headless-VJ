import DryckerPage from '@/src/app/drycker/Components/DryckerPage';
import { getNameAndIdBySlug, getRegionsByCountry } from '@/src/lib/api/dryckerApi';
import { getAllVinguidePosts } from '@/src/lib/api/vinguideApi';
import React from 'react';

const page = async ({ params, searchParams }) => {
  const { type, country, region, subRegion } = params;
  const { name, id } = await getNameAndIdBySlug(subRegion);
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
