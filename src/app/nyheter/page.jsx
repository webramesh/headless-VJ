import React from 'react';
import { getAllNyheterPaginated, countNyheter } from '../../lib/api/newsApi';
import AllNews from './Components/AllNews';
import Sidebar from '../Components/Sidebar';
import { PageProvider } from '@/src/context/PageContext';
import Banner from '../Components/Banner';
import { getContentTypeSEO } from '@/src/lib/api/seoAPI';
import { generateSeoMetadata } from '@/src/utils/utils';

export async function generateMetadata() {
  const { seo } = await getContentTypeSEO('cG9zdF90eXBlOm55aGV0ZXI='); // id for nyheter

  if (seo) {
    return generateSeoMetadata(seo);
  }
}

export default async function NyheterPage() {
  const { nyheter, pageInfo } = await getAllNyheterPaginated(12, null, null, null);
  const totalNyheter = await countNyheter();
  const { seo } = await getContentTypeSEO('cG9zdF90eXBlOm55aGV0ZXI='); // id for nyheter
  const jsonLd = seo?.jsonLd?.raw || null;
  return (
    <PageProvider>
      <section dangerouslySetInnerHTML={{ __html: jsonLd }} />

      <Banner variant="default" />
      <AllNews initialPosts={nyheter} initialPageInfo={pageInfo} totalPosts={totalNyheter} sidebar={<Sidebar />} />
    </PageProvider>
  );
}
