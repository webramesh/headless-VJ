import { getAllVinguidePosts } from '@/src/lib/api/vinguideApi';
import DryckerPage from '../../Components/DryckerPage';
import { redirect } from 'next/navigation';
import { generateSeoMetadata } from '@/src/utils/utils';

export const revalidate = 60;
export async function generateMetadata({ params }) {
  const vinguideData = await getAllVinguidePosts(`/drycker/${params.type}/${params.country}`);

  const seo = vinguideData?.seo;

  if (seo) {
    return generateSeoMetadata(seo);
  }
}

export default async function page({ params, searchParams }) {
  const { type, country } = params;
  const vinguideData = await getAllVinguidePosts(`/drycker/${type}/${country}`);
  if (!vinguideData) redirect('/not-found');
  const typeVinguideData = await getAllVinguidePosts(`/drycker/${type}`);
  const allProducts = typeVinguideData?.vinguideProducts?.vinguideproduct?.nodes || [];

  const products = allProducts.filter((product) => {
    return product.produktslander.nodes.some((node) => node.slug === country);
  });
  const cardTitle = `Artiklar relaterade till ${vinguideData.title}`;

  return (
    <DryckerPage
      initialProducts={products}
      searchParams={searchParams}
      params={params}
      page="CountryPage"
      cardTitle={cardTitle}
      vinguideData={vinguideData}
    />
  );
}
