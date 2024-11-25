import React from 'react';
import { getAllArticles, countArticles } from '../../lib/api/articleApi';
import ArticleContent from './Components/ArticleContent';
import Sidebar from '../Components/Sidebar';

export const metadata = {
  title: 'Artiklar om vin | Vinjournalen',
  description: 'Utforska våra artiklar om vin, vinproduktion, och vinkultur på Vinjournalen.',
};

export default async function ArticlarPage() {
  const { posts, pageInfo } = await getAllArticles();
  const totalPosts = await countArticles();

  return <ArticleContent totalPosts={totalPosts} sidebar={<Sidebar />} />;
}
