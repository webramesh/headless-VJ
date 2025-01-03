import { generateSeoMetadata } from '@/src/utils/utils';
import { getAllVinguidePosts } from '@/src/lib/api/vinguideApi';
import DryckerPage from '../Components/DryckerPage';
import { redirect } from 'next/navigation';

export const revalidate = 60;
export async function generateMetadata({ params }) {
  const vinguideData = await getAllVinguidePosts(`/drycker/${params.type}`);

  const seo = vinguideData?.seo;

  if (seo) {
    return generateSeoMetadata(seo);
  }
}

export default async function Home({ params, searchParams }) {
  const vinguideData = await getAllVinguidePosts(`/drycker/${params.type}`);
  if (!vinguideData) redirect('/not-found');
  const cardTitle = `Artiklar relaterade till ${vinguideData.title}`;

  return (
    <DryckerPage
      vinguideData={vinguideData}
      cardTitle={cardTitle}
      searchParams={searchParams}
      params={params}
      page="mainPage"
    />
  );
}
