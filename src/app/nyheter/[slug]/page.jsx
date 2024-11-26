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
      <NyheterContent nyhet={nyhet} />
    </>
  );
}

export async function generateMetadata({ params }) {
  const { slug } = params;

  // Fetch the specific news article data
  const nyhet = await getAllNyheterBySlug(slug);

  const { seo } = nyhet;

  const robotsMeta = seo?.robots?.join(', ') || 'index, follow';
  const keywords = seo?.focusKeywords?.join(', ') || '';
  if (seo) {
    return {
      title: seo?.title,
      description: seo?.description,
      robots: robotsMeta,
      canonical: seo?.canonicalUrl,
      keywords,
      openGraph: {
        locale: seo?.openGraph?.locale,
        type: seo?.openGraph?.type,
        title: seo?.openGraph?.title,
        description: seo?.openGraph?.description,
        url: seo?.openGraph?.url,
        siteName: seo?.openGraph?.siteName,
        image: {
          height: seo?.openGraph?.image?.height,
          secureUrl: seo?.openGraph?.image?.secureUrl,
          type: seo?.openGraph?.image?.type,
          url: seo?.openGraph?.image?.url,
          width: seo?.openGraph?.image?.width,
        },
        twitterMeta: {
          card: seo?.openGraph?.twitterMeta?.card,
          description: seo?.openGraph?.twitterMeta?.description,
          image: seo?.openGraph?.twitterMeta?.image,
          creator: seo?.openGraph?.twitterMeta?.creator,
          title: seo?.openGraph?.twitterMeta?.title,
          site: seo?.openGraph?.twitterMeta?.site,
        },
      },
    };
  }
}

// Generate static params for all possible slugs
export async function generateStaticParams() {
  const posts = await getAllNyheter();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
