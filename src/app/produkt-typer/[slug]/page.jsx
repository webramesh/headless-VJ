'use client';

import React from 'react';
import Head from 'next/head';
import Navbar from '../../../app/Components/Navbar';
import ProduktContent from '../Components/ProduktContent';
import Footer from '../../../app/Components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Produkt Typer Page</title>
        <meta name="description" content="This is the Produkt Typer page of Vinjournalen" />
      </Head>
      <Navbar />
      <ProduktContent />
      <Footer />
    </>
  );
}
