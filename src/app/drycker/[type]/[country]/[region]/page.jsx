import { getNameAndIdBySlug, getRegionsByCountry } from '@/src/lib/api/dryckerApi';
import DryckerPage from '../../../Components/DryckerPage';
import { getAllVinguidePosts } from '@/src/lib/api/vinguideApi';

const page = async ({ params, searchParams }) => {
  const { type, country, region } = params;
  const { name, id } = await getNameAndIdBySlug(region);
  const regions = await getRegionsByCountry(id);
  const vinguideData = await getAllVinguidePosts(name, `/drycker/${type}/${country}/${region}`);
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
