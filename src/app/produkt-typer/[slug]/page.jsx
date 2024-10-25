'use client';

import React from 'react';
import Head from 'next/head';
import ProduktContent from '../Components/ProduktContent';

export default function Home() {
  return (
    <>
      <Head>
        <title>Produkt Typer Page</title>
        <meta name="description" content="This is the Produkt Typer page of Vinjournalen" />
      </Head>
      <ProduktContent />
    </>
  );
}
