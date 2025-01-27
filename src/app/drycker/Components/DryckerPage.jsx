import { countProductsByCountry } from '@/src/utils/utils';
import Card from '../../Components/Card';
import Scrolltodown from '../../Components/Scrolltodown';
import Allcountry from './Allcountry';
import Content from './Content';
import FilterSection from './FilterSection';
import Hero from './Hero';
import Paragraph from './Paragraph';

export default function DryckerPage({
  initialProducts,
  vinguideData,
  cardTitle,
  searchParams,
  params,
  page,
  breadcrumbs,
}) {
  const vinguidePosts = vinguideData?.vinguidePosts?.vinguidePosts?.nodes || [];
  const vinguideDetails = vinguideData?.vinguidePosts || {};
  const { shortTitle, shortDescription, pageTitle, pageSubtitle, allProductTitle } = vinguideDetails;
  const countries = vinguideData?.children?.nodes || [];
  const products = vinguideData?.vinguideProducts?.vinguideproduct?.nodes || [];
  const countryCounts = countProductsByCountry(products);

  return (
    <>
      <script
        type="application/ld+json"
        className="rank-math-schema"
        dangerouslySetInnerHTML={{ __html: breadcrumbs }}
      />
      <Hero params={params} pageTitle={pageTitle} pageSubtitle={pageSubtitle} />
      <Paragraph shortTitle={shortTitle} shortDescription={shortDescription} />
      <Scrolltodown />
      <FilterSection
        products={products.length > 0 ? products : initialProducts}
        params={params}
        filters={searchParams}
        page={page}
        allProductTitle={allProductTitle}
      />
      <Allcountry countries={countries} params={params} countryCounts={countryCounts} />
      <Content pageData={vinguideData} />
      <Card title={cardTitle} subtitle="Från vår redaktion" posts={vinguidePosts.slice(0, 6)} />
    </>
  );
}
