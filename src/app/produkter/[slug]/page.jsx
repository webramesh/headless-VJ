'use client';

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '../../Components/Navbar';
import ProductSection from '../Components/ProductSection';
import InformationCards from '../Components/InformationCards';
import Price from '../Components/Price';
import Subscription from '../Components/Subscription';
import ProductInfo from '../Components/ProductInfo';
import SkeletonLoader from '../Components/SkeletonLoading/SkeletonLoader';
import Footer from '../../Components/Footer';

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
          <ProductSection />
          <InformationCards />
          <Price />
          <Subscription />
          <ProductInfo />
          <Footer />
        </>
      )}
    </>
  );
}
