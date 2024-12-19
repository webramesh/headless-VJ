import { getAllVinguidePosts } from '@/src/lib/api/vinguideApi';
import DryckerPage from '../../Components/DryckerPage';
import { getNameAndIdBySlug, getRegionsByCountry } from '@/src/lib/api/dryckerApi';
import { redirect } from 'next/navigation';

export default async function page({ params, searchParams }) {
  const { type, country } = params;

  const data = await getNameAndIdBySlug(country);
  if (!data) redirect('/not-found');
  const { name, id } = data;
  if (!name || !id) {
    redirect('/not-found');
  }

  const regions = await getRegionsByCountry(id);
  const vinguideData = await getAllVinguidePosts(name, `/drycker/${type}/${country}/`);
  return (
    <DryckerPage
      products={[]}
      searchParams={searchParams}
      params={params}
      page="CountryPage"
      vinguideData={vinguideData}
      countries={regions}
    />
  );
}
