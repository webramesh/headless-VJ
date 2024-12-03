import { getPageBySlug } from '../../lib/api/pageApi';
import PageContent from '../om-oss/Components/PageContent';

export async function generateMetadata() {
  try {
    const pageData = await getPageBySlug('anvandarvilkor');
    return {
      title: pageData.title,
      description: pageData.excerpt || 'Användarvillkor för Vinjournalen',
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Användarvillkor',
      description: 'Användarvillkor för Vinjournalen',
    };
  }
}

export default async function AnvandarvilkorPage() {
  try {
    const pageData = await getPageBySlug('anvandarvilkor');
    return <PageContent pageData={pageData} />;
  } catch (error) {
    console.error('Error fetching page:', error);
    return <div>Page not found</div>;
  }
}
