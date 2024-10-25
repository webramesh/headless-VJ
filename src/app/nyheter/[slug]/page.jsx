'use client';

import React from 'react';
import Head from 'next/head';
import Navbar from '../../../app/Components/Navbar';
import NyheterContent from '../Components/NyheterContent';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nyheter Page</title>
        <meta name="description" content="This is the Nyheter page of Vinjournalen" />
      </Head>
      <Navbar />
      <NyheterContent />
    </>
  );
}
