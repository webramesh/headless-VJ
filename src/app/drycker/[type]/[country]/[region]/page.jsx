import { getNameAndIdBySlug, getRegionsByCountry } from '@/src/lib/api/dryckerApi';
import DryckerPage from '../../../Components/DryckerPage';
import { getAllVinguidePosts } from '@/src/lib/api/vinguideApi';
import { redirect } from 'next/navigation';

const page = async ({ params, searchParams }) => {
  const { type, country, region } = params;
  const data = await getNameAndIdBySlug(region);
  if (!data) {
    redirect('/not-found');
  }
  const { name, id } = data;
  if (!name || !id) {
    redirect('/not-found');
  }
  const regions = await getRegionsByCountry(id);
  const vinguideData = await getAllVinguidePosts(`/drycker/${type}/${country}/${region}`);
  return (
    <DryckerPage
      products={[]}
      searchParams={searchParams}
      params={params}
      page="RegionPage"
      vinguideData={vinguideData}
      countries={regions}
    />
  );
};

export default page;
