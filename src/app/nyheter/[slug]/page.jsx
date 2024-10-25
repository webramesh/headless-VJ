import React from 'react';
import Head from 'next/head';
import NyheterContent from '../Components/NyheterContent';
import { getAllNyheter, getAllNyheterBySlug } from '../../../lib/api/newsApi';

export const revalidate = 60;

// This is an async Server Component
export default async function Page({ params }) {
  // Get the slug from the URL parameters
  const { slug } = params;

  // Fetch the specific news article data
  const nyhet = await getAllNyheterBySlug(slug);

  return (
    <>
      <Head>
        <title>{nyhet?.title || 'Nyheter'} | Vinjournalen</title>
        <meta name="description" content={nyhet?.excerpt || 'This is the Nyheter page of Vinjournalen'} />
      </Head>
      <NyheterContent nyhet={nyhet} />
    </>
  );
}

// Generate static params for all possible slugs
export async function generateStaticParams() {
  const posts = await getAllNyheter();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
