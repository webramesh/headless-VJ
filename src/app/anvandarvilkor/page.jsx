import { generateSeoMetadata } from '@/src/utils/utils';
import { getPageBySlug } from '../../lib/api/pageApi';
import PageContent from '../om-oss/Components/PageContent';

export async function generateMetadata() {
  const data = await getPageBySlug('anvandarvilkor');

  const seo = data?.seo;

  if (seo) {
    return generateSeoMetadata(seo);
  }
}

// anvandarvilkor

export default async function AnvandarvilkorPage() {
  try {
    const pageData = await getPageBySlug('anvandarvilkor');
    return <PageContent pageData={pageData} />;
  } catch (error) {
    console.error('Error fetching page:', error);
    return <div>Page not found</div>;
  }
}
