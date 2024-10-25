'use client';

import React from 'react';
import Head from 'next/head';
import ArticleContent from '../Components/ArticleContent';

export default function Home() {
  return (
    <>
      <Head>
        <title>Artiklar Page</title>
        <meta name="description" content="This is the Artiklar page of Vinjournalen" />
      </Head>
      <ArticleContent />
    </>
  );
}
