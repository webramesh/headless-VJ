import Card from '../../Components/Card';
import Scrolltodown from '../../Components/Scrolltodown';
import Allcountry from './Allcountry';
import Content from './Content';
import FilterSection from './FilterSection';
import Hero from './Hero';
import Paragraph from './Paragraph';

export default function DryckerPage({
  name,
  products,
  countries,
  vinguideData,
  cardTitle,
  searchParams,
  params,
  page,
}) {
  const vinguidePosts = vinguideData[0]?.vinguidePosts?.vinguidePosts?.nodes || [];

  return (
    <>
      <Hero name={name} />
      <Paragraph name={name} />
      <Scrolltodown />
      <FilterSection initialProducts={products} slug={params.slug} filters={searchParams} page={page} />
      <Allcountry countries={countries} type={params.slug} />
      <Content pageData={vinguideData[0]} />
      <Card title={cardTitle} subtitle="Från vår redaktion" posts={vinguidePosts.slice(0, 6)} />
    </>
  );
}
