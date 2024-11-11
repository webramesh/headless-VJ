import { getPageBySlug } from '../../lib/api/pageApi';
import PageContent from '../om-oss/components/PageContent';

export async function generateMetadata() {
  try {
    const pageData = await getPageBySlug('annonsera');
    return {
      title: pageData.title,
      description: pageData.excerpt || 'Advertise with Vinjournalen',
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Annonsera',
      description: 'Advertise with Vinjournalen',
    };
  }
}

export default async function AnnonseraPage() {
  try {
    const pageData = await getPageBySlug('annonsera');
    return <PageContent pageData={pageData} />;
  } catch (error) {
    console.error('Error fetching page:', error);
    return <div>Page not found</div>;
  }
}
