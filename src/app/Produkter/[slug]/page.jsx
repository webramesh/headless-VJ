'use client'
import Head from "next/head";
import Navbar from "../Components/Navbar";
import React from "react";
import ProductSection from "../Components/ProductSection";
import InformationCards from "../Components/InformationCards";

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
        </>
    
    </>
  );
}