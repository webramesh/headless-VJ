'use client'
import Head from "next/head";
import Navbar from "../app/Components/Navbar.jsx";
import React from "react";
import Hero from "./Components/Hero.jsx";
import Card from "./Components/Card.jsx";
import Subscription from "./Components/Subscription.jsx";
import Wine from "./Components/Wine.jsx";
import SkeletonLoader from "./Components/SkeletonLoading/SkeletonLoader.jsx";
import { useState, useEffect } from 'react';
import Info from './Components/Info.jsx';
import Footer from './Components/Footer.jsx';
 

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, );
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta
          name="description"
          content="This is the home page of my Next.js app"
        />
      </Head>
      {loading ? (
        <SkeletonLoader />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Card
            title="TRENDIGT"
            subtitle="Artiklar värda att läsa från våra redaktörer"
          />
          <Subscription />
          <Wine />
          <Card
            title="NYHETER"
            subtitle="Den mest populära artikeln i dryckesvärlden"
          />
          <Info />
          <Footer />
        </>
      )}
    </>
  );
}