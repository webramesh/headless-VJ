import { generateSeoMetadata } from '@/src/utils/utils';
import { getPageBySlug } from '../../lib/api/pageApi';
import PageContent from './Components/PageContent';

export async function generateMetadata() {
  const data = await getPageBySlug(`om-oss`);

  const seo = data?.seo;

  if (seo) {
    return generateSeoMetadata(seo);
  }
}

export default async function OmOssPage() {
  try {
    const pageData = await getPageBySlug('om-oss');
    return <PageContent pageData={pageData} />;
  } catch (error) {
    console.error('Error fetching page:', error);
    return <div>Sidan hittades inte</div>;
  }
}
