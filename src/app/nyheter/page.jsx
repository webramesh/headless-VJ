import React from 'react';
import { getAllNyheter } from '../../lib/api/newsApi';
import AllNews from './Components/AllNews';

export const metadata = {
  title: 'Nyheter | Vinjournalen',
  description: 'Läs de senaste nyheterna om vin, vinproduktion och vinkultur på Vinjournalen.',
};

export default async function NyheterPage() {
  const posts = await getAllNyheter();
  return <AllNews posts={posts} />;
}