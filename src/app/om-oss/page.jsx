import { getPageBySlug } from '../../lib/api/pageApi';
import PageContent from './Components/PageContent';

export async function generateMetadata() {
  try {
    const pageData = await getPageBySlug('om-oss');
    return {
      title: pageData.title,
      description: pageData.excerpt || 'Learn more about Vinjournalen',
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Om Oss',
      description: 'Learn more about Vinjournalen',
    };
  }
}

export default async function OmOssPage() {
  try {
    const pageData = await getPageBySlug('om-oss');
    return <PageContent pageData={pageData} />;
  } catch (error) {
    console.error('Error fetching page:', error);
    return <div>Page not found</div>;
  }
}
