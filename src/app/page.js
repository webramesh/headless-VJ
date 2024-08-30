import Head from 'next/head';
import Navbar from '../app/Components/Navbar.jsx';
import React from 'react';
import Hero from './Components/Hero.jsx';
import Card from './Components/Card.jsx';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="This is the home page of my Next.js app" />
      </Head>
      <Navbar />
      <Hero />
      <Card />
    </>
  );
}
