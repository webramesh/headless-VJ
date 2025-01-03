import DryckerPage from '../../../Components/DryckerPage';
import { getAllVinguidePosts, getProductByLander } from '@/src/lib/api/vinguideApi';
import { redirect } from 'next/navigation';
import { generateSeoMetadata } from '@/src/utils/utils';

export const revalidate = 60;
export async function generateMetadata({ params }) {
  const { type, country, region } = params;

  const vinguideData = await getAllVinguidePosts(`/drycker/${type}/${country}/${region}`);

  const seo = vinguideData?.seo;

  if (seo) {
    return generateSeoMetadata(seo);
  }
}

const page = async ({ params, searchParams }) => {
  const { type, country, region } = params;

  const vinguideData = await getAllVinguidePosts(`/drycker/${type}/${country}/${region}`);
  if (!vinguideData) {
    redirect('/not-found');
  }
  const products = await getProductByLander(region, type);
  const cardTitle = `Artiklar relaterade till ${vinguideData.title}`;

  return (
    <DryckerPage
      initialProducts={products}
      searchParams={searchParams}
      params={params}
      page="RegionPage"
      vinguideData={vinguideData}
      cardTitle={cardTitle}
    />
  );
};

export default page;
