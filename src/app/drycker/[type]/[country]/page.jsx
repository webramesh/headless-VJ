import { getAllVinguidePosts } from '@/src/lib/api/vinguideApi';
import DryckerPage from '../../Components/DryckerPage';
import { getRegionsByCountry } from '@/src/lib/api/dryckerApi';

export default async function page({ params, searchParams }) {
  const { type, country } = params;
  const { name, regions } = await getRegionsByCountry(params.country);
  const vinguideData = await getAllVinguidePosts(name, `/drycker/${type}/${country}/`);
  return (
    <>
      <DryckerPage
        products={[]}
        searchParams={searchParams}
        params={params}
        page="CountryPage"
        vinguideData={vinguideData}
        countries={regions}
      />
    </>
  );
}
