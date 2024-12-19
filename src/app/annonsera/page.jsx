import { generateSeoMetadata } from '@/src/utils/utils';
import { getPageBySlug } from '../../lib/api/pageApi';
import PageContent from '../om-oss/Components/PageContent';

export async function generateMetadata() {
  const data = await getPageBySlug(`annonsera`);

  const seo = data?.seo;

  if (seo) {
    return generateSeoMetadata(seo);
  }
}

export default async function AnnonseraPage() {
  try {
    const pageData = await getPageBySlug('annonsera');
    return <PageContent pageData={pageData} />;
  } catch (error) {
    console.error('Error fetching page:', error);
    return <div>Sidan hittades inte</div>;
  }
}
