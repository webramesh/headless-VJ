import { getProductsByType } from '@/src/lib/api/dryckerApi';
import { getPageBySlug } from '@/src/lib/api/pageApi';
import { generateSeoMetadata } from '@/src/utils/utils';
import { getAllVinguidePosts } from '@/src/lib/api/vinguideApi';
import { getAllCountries } from '@/src/lib/api/countryApi';
import DryckerPage from '../Components/DryckerPage';
import { redirect } from 'next/navigation';

export const revalidate = 60;
export async function generateMetadata({ params }) {
  const data = await getPageBySlug(`drycker/${params.slug}`);

  const seo = data?.seo;
  if (seo) {
    return generateSeoMetadata(seo);
  }
}

export default async function Home({ params, searchParams }) {
  const data = await getProductsByType(params.type);
  if (!data) redirect('/not-found');
  const { name, products } = data;
  const vinguideData = await getAllVinguidePosts(name);
  const cardTitle = `Artiklar relaterade till ${name}`;
  const countries = await getAllCountries();

  return (
    <DryckerPage
      products={products}
      countries={countries}
      vinguideData={vinguideData}
      cardTitle={cardTitle}
      searchParams={searchParams}
      params={params}
      page="mainPage"
    />
  );
}
