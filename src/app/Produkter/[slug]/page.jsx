'use client'
import Head from "next/head";
import Navbar from "../Components/Navbar";
import React from "react";
import ProductSection from "../Components/ProductSection";
import InformationCards from "../Components/InformationCards";
import Price from "../Components/Price";
import Subscription from "../Components/Subscription";
import ProductInfo from "../Components/ProductInfo";
import Footer from "../Components/Footer";
export default function Home() {
  return (
    <>
      <Head>
        <title>Product Page</title>
        <meta
          name="description"
          content="This is the product page of Vinjournalen"
        />
      </Head>
        <>
          <Navbar />
          <ProductSection />
          <InformationCards />
          <Price />
          <Subscription />
         <ProductInfo />
         <Footer />
        </>
    
    </>
  );
}