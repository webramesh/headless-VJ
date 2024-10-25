'use client';

import React from 'react';
import Head from 'next/head';
import Navbar from '../../../app/Components/Navbar';
import OmOssContent from '../Components/omossContent';

export default function Home() {
  return (
    <>
      <Head>
        <title>Om-Oss Page</title>
        <meta name="description" content="This is the Om-Oss page of Vinjournalen" />
      </Head>
      <Navbar />
      <OmOssContent />
    </>
  );
}
