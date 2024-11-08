import { getPageBySlug, getAllPages } from '@/lib/api/pageApi';
import PageContent from '../om-oss/components/PageContent';

export async function generateMetadata({ params }) {
  try {
    const pageData = await getPageBySlug(params.slug);
    return {
      title: pageData.title,
      description: pageData.excerpt || 'Explore more on Vinjournalen',
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Unknown Page',
      description: 'Explore more on Vinjournalen',
    };
  }
}

export default async function DynamicPage({ params }) {
  try {
    const pageData = await getPageBySlug(params.slug);
    return <PageContent pageData={pageData} />;
  } catch (error) {
    console.error('Error fetching page:', error);
    return <div>Page not found</div>;
  }
}

export async function generateStaticParams() {
  try {
    const pages = await getAllPages();
    return pages.map((page) => ({
      slug: page.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}
