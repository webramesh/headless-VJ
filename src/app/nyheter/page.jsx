import React from 'react';
import { getAllNyheterPaginated, countNyheter } from '../../lib/api/newsApi';
import AllNews from './Components/AllNews';
import Sidebar from '../Components/Sidebar';
import Banner from '../Components/Banner';
import { getContentTypeSEO } from '@/src/lib/api/seoAPI';
import { generateSeoMetadata } from '@/src/utils/utils';
import { breadcrumbSchemaGenerator } from '@/src/utils/schemaUtils';

export async function generateMetadata() {
  const { seo } = await getContentTypeSEO('cG9zdF90eXBlOm55aGV0ZXI='); // id for nyheter

  if (seo) {
    return generateSeoMetadata(seo);
  }
}

export default async function NyheterPage() {
  const { nyheter, pageInfo } = await getAllNyheterPaginated(12, null, null, null);
  const totalNyheter = await countNyheter();

  const breadcrumbs = breadcrumbSchemaGenerator([
    { name: 'Nyheter arkiv', url: 'https://www.vinjournalen.se/nyheter/' },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        className="rank-math-schema"
        dangerouslySetInnerHTML={{ __html: breadcrumbs }}
      />
      <Banner variant="default" />
      <AllNews initialPosts={nyheter} initialPageInfo={pageInfo} totalPosts={totalNyheter} sidebar={<Sidebar />} />
    </>
  );
}
