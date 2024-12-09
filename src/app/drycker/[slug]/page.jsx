import Hero from '../Components/Hero';
import Paragraph from '../Components/Paragraph';
import Scrolltodown from '../../Components/Scrolltodown';
import FilterSection from '../Components/FilterSection';
import Card from '../../Components/Card';
import { getProductsByType } from '@/src/lib/api/dryckerApi';
import Content from '../Components/Content';
import { getPageBySlug } from '@/src/lib/api/pageApi';
import { generateSeoMetadata } from '@/src/utils/utils';
import { getAllVinguidePosts } from '@/src/lib/api/vinguideApi';

export async function generateMetadata({ params }) {
  const data = await getPageBySlug(`drycker/${params.slug}`);

  const seo = data?.seo;
  if (seo) {
    return generateSeoMetadata(seo);
  }
}

export default async function Home({ params, searchParams }) {
  const { name, products } = await getProductsByType(params.slug);
  const pageData = await getPageBySlug(`drycker/${params.slug}`);
  const vinguideData = await getAllVinguidePosts(name);
  const vinguidePosts = vinguideData[0]?.vinguidePosts?.vinguidePosts?.nodes || [];
  const cardTitle = `Artiklar relaterade till ${name}`;

  return (
    <>
      <Hero name={name} />
      <Paragraph name={name} />
      <Scrolltodown />
      <FilterSection initialProducts={products} slug={params.slug} filters={searchParams} />
      <Content pageData={pageData} />
      <Card title={cardTitle} subtitle="Från vår redaktion" posts={vinguidePosts.slice(0, 6)} />
    </>
  );
}
