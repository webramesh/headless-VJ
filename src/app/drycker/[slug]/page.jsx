'use client'
import Head from "next/head";
import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";

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
        </>
    
    </>
  );
}