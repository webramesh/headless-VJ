'use client'
import Head from "next/head";
import Navbar from "../Components/Navbar";
import React from "react";
import ProductSection from "../Components/ProductSection";

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
        </>
    
    </>
  );
}