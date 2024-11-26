import React from 'react';
import { getAllNyheterPaginated, countNyheter } from '../../lib/api/newsApi';
import AllNews from './Components/AllNews';
import Sidebar from '../Components/Sidebar';
import { PageProvider } from '@/src/context/PageContext';
import Banner from '../Components/Banner';

export const metadata = {
  title: 'Nyheter | Vinjournalen',
  description: 'Läs de senaste nyheterna om vin, vinproduktion och vinkultur på Vinjournalen.',
};

export default async function NyheterPage() {
  const { nyheter, pageInfo } = await getAllNyheterPaginated(12, null, null, null);
  const totalNyheter = await countNyheter();

  return (
    <PageProvider>
      <Banner variant="default" />
      <AllNews initialPosts={nyheter} initialPageInfo={pageInfo} totalPosts={totalNyheter} sidebar={<Sidebar />} />
    </PageProvider>
  );
}
