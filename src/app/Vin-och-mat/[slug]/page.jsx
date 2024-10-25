'use client';

import React from 'react';
import Head from 'next/head';
import Navbar from '../../../app/Components/Navbar';
import VinMat from '../Components/VinMat';

export default function Home() {
  return (
    <>
      <Head>
        <title>Vin-och-mat Page</title>
        <meta name="description" content="This is the Vin-och-mat page of Vinjournalen" />
      </Head>
      <Navbar />
      <VinMat />
    </>
  );
}
