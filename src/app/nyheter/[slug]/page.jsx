import React from 'react';
import NyheterContent from '../Components/NyheterContent';
import { getAllNyheter, getAllNyheterBySlug } from '../../../lib/api/newsApi';
import { generateSeoMetadata } from '@/src/utils/utils';
import { breadcrumbSchemaGenerator, newsSchemaGenerator } from '@/src/utils/schemaUtils';

export const revalidate = 60;

// This is an async Server Component
export default async function Page({ params }) {
  // Get the slug from the URL parameters
  const { slug } = params;

  // Fetch the specific news article data
  const nyhet = await getAllNyheterBySlug(slug);
  const nyhetSchema = newsSchemaGenerator(nyhet);

  const breadcrumbs = breadcrumbSchemaGenerator([
    { name: 'Nyheter arkiv', url: 'https://www.vinjournalen.se/nyheter/' },
    { name: nyhet.title, url: `https://www.vinjournalen.se/nyheter/${slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        className="rank-math-schema"
        dangerouslySetInnerHTML={{ __html: nyhetSchema }}
      />
      <script
        type="application/ld+json"
        className="rank-math-schema"
        dangerouslySetInnerHTML={{ __html: breadcrumbs }}
      />

      <NyheterContent nyhet={nyhet} />
    </>
  );
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const nyhet = await getAllNyheterBySlug(slug);

  const { seo } = nyhet;
  if (seo) {
    return generateSeoMetadata(seo);
  }
}

// Generate static params for all possible slugs
export async function generateStaticParams() {
  const posts = await getAllNyheter();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
