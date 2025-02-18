import { generateSeoMetadata } from '@/src/utils/utils';
import { getVinguideData } from '@/src/lib/api/vinguideApi';
import DryckerPage from '../Components/DryckerPage';
import { redirect } from 'next/navigation';
import { breadcrumbSchemaGenerator } from '@/src/utils/schemaUtils';

export const revalidate = 60;
export async function generateMetadata({ params }) {
  const vinguideData = await getVinguideData(`/drycker/${params.type}`);

  const seo = vinguideData?.seo;

  if (seo) {
    return generateSeoMetadata(seo);
  }
}

export default async function Home({ params, searchParams }) {
  try {
    const vinguideData = await getVinguideData(`/drycker/${params.type}`);
    const cardTitle = `Artiklar relaterade till ${vinguideData.title}`;

    const breadcrumbs = breadcrumbSchemaGenerator([
      {
        name: 'Vinguide',
        url: 'https://www.vinjournalen.se/',
      },
      {
        name: params.type,
        url: `https://www.vinjournalen.se/drycker/${params.type}`,
      },
    ]);

    return (
      <DryckerPage
        vinguideData={vinguideData}
        cardTitle={cardTitle}
        searchParams={searchParams}
        params={params}
        page="mainPage"
        breadcrumbs={breadcrumbs}
      />
    );
  } catch (error) {
    console.error('Error fetching vinguide data:', error.message);
    redirect('/not-found');
  }
}
