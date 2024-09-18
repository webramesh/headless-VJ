'use client'
import Head from "next/head";
import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Paragraph from "../Components/Paragraph";
import FilterSection from "../Components/FilterSection";

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
          <Hero />
          <Paragraph />
          <FilterSection />
        </>
    
    </>
  );
}