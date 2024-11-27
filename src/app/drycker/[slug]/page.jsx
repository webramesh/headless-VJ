import Hero from '../Components/Hero';
import Paragraph from '../Components/Paragraph';
import Scrolltodown from '../../Components/Scrolltodown';
import FilterSection from '../Components/FilterSection';
import CountrySection from '../Components/CountrySection';
import Content from '../Components/Content';
import Card from '../../Components/Card';
import { getProductsByType } from '@/src/lib/api/dryckerApi';

export default async function Home({ params, searchParams }) {
  const { name, products } = await getProductsByType(params.slug);

  return (
    <>
      <Hero name={name} />
      <Paragraph name={name} />
      <Scrolltodown />
      <FilterSection initialProducts={products} slug={params.slug} filters={searchParams} />
      <CountrySection />
      {/* <Content /> */}
      <Card title="Artiklar relaterade till Röda Viner Frankrike" subtitle="Från vår redaktion" />
    </>
  );
}
