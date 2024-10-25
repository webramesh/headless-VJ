'use client';

import React from 'react';
import Head from 'next/head';
import Content from './Components/Content';

export default function Home() {
  return (
    <>
      <Head>
        <title>Annonsera Page</title>
        <meta name="description" content="This is the Annonsera page of Vinjournalen" />
      </Head>
      <Content />
    </>
  );
}
