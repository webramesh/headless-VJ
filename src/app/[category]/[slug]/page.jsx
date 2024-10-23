'use client';

import React from 'react';
import Head from 'next/head';
import Navbar from '../../Components/Navbar';
import CategoryHero from '../Components/CatagoryHero';
import Title from '../Components/Title';
import Footer from '../../Components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Product Page</title>
        <meta name="description" content="This is the category page of Vinjournalen" />
      </Head>
      <Navbar />
      <Title />
      <CategoryHero />
      <Footer />
    </>
  );
}
