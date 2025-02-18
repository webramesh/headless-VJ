import { getVinguideData } from '@/src/lib/api/vinguideApi';
import DryckerPage from '../../Components/DryckerPage';
import { redirect } from 'next/navigation';
import { generateSeoMetadata } from '@/src/utils/utils';
import { breadcrumbSchemaGenerator } from '@/src/utils/schemaUtils';

export const revalidate = 60;
export async function generateMetadata({ params }) {
  const vinguideData = await getVinguideData(`/drycker/${params.type}/${params.country}`);

  const seo = vinguideData?.seo;

  if (seo) {
    return generateSeoMetadata(seo);
  }
}

export default async function page({ params, searchParams }) {
  try {
    const { type, country } = params;
    const vinguideData = await getVinguideData(`/drycker/${type}/${country}`);
    const typeVinguideData = await getVinguideData(`/drycker/${type}`);
    const allProducts = typeVinguideData?.vinguideProducts?.vinguideproduct?.nodes || [];

    const products = allProducts.filter((product) => {
      return product.produktslander.nodes.some((node) => node.slug === country);
    });
    const cardTitle = `Artiklar relaterade till ${vinguideData.title}`;

    const breadcrumbs = breadcrumbSchemaGenerator([
      {
        name: 'Vinguide',
        url: 'https://www.vinjournalen.se/',
      },
      {
        name: type,
        url: `https://www.vinjournalen.se/drycker/${type}`,
      },
      {
        name: country,
        url: `https://www.vinjournalen.se/drycker/${type}/${country}`,
      },
    ]);

    return (
      <DryckerPage
        initialProducts={products}
        searchParams={searchParams}
        params={params}
        page="CountryPage"
        cardTitle={cardTitle}
        vinguideData={vinguideData}
        breadcrumbs={breadcrumbs}
      />
    );
  } catch (error) {
    console.error('Error fetching vinguide data:', error.message);
    redirect('/not-found');
  }
}
