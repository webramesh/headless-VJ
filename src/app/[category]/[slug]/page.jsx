'use client'
import Head from "next/head";
import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";

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
          <Footer/>
        
        </>
    
    </>
  );
}