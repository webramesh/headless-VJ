import React from 'react';
import { getAllArticles } from '../../lib/api/postAPI';
import ArticleContent from './Components/ArticleContent';

export const metadata = {
  title: 'Artiklar om vin | Vinjournalen',
  description: 'Utforska våra artiklar om vin, vinproduktion, och vinkultur på Vinjournalen.',
};

export default async function ArticlarPage() {
  const posts = await getAllArticles();
  return <ArticleContent posts={posts} />;
}
