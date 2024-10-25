'use client';

import React from 'react';
import Head from 'next/head';
import Navbar from '../Components/Navbar';
import AtlasContent from './Components/AtlasContent';

export default function Home() {
  return (
    <>
      <Head>
        <title>Atlas Producentera Page</title>
        <meta name="description" content="This is the Atlas Producentera page of Vinjournalen" />
      </Head>
      <Navbar />
      <AtlasContent />
    </>
  );
}
