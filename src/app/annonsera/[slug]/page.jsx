'use client';

import React from 'react';
import Head from 'next/head';
import Navbar from '../../../app/Components/Navbar';
import Content from '../Components/Content';
import Footer from '../../../app/Components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Annonsera Page</title>
        <meta name="description" content="This is the Annonsera page of Vinjournalen" />
      </Head>
      <Navbar />
      <Content />
      <Footer />
    </>
  );
}
