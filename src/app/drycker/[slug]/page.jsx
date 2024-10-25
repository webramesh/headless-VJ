'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../../Components/Navbar';
import Hero from '../Components/Hero';
import Paragraph from '../Components/Paragraph';
import Scrolltodown from '../../Components/Scrolltodown';
import FilterSection from '../Components/FilterSection';
import CountrySection from '../Components/CountrySection';
import Content from '../Components/Content';
import Card from '../../Components/Card';
import SkeletonLoader from '../Components/SkeletonLoading/SkeletonLoader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Product Page</title>
        <meta name="description" content="This is the product page of Vinjournalen" />
      </Head>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Paragraph />
          <Scrolltodown />
          <FilterSection />
          <CountrySection />
          <Content />
          <Card title="Artiklar relaterade till Röda Viner Frankrike" subtitle="Från vår redaktion" />
        </>
      )}
    </>
  );
}
