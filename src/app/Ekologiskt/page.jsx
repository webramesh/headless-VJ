'use client';

import React from 'react';
import Head from 'next/head';
import Navbar from '../Components/Navbar';
import PostTypeContent from '../Components/PostTypeContent';
import Sidebar from '../Components/Sidebar';
import Card from '../Components/Card';
import AccordionNew from '../Components/AccordionNew';
import CatAccordion from '../[category]/Components/CatAccordion';
import SubscriptionForm from '../Components/subscription/SubscriptionForm';

export default function EkologisktPage() {
  return (
    <>
      <Head>
        <title>Ekologiskt Page</title>
        <meta name="Ekologiskt Vin page" content="This is the Ekologiskt vin page of Vinjournalen" />
      </Head>

      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:gap-10">
          {/* Main Content Section (3/4) */}
          <div className="w-full lg:w-3/4 flex flex-col gap-6">
            <PostTypeContent
              title="Ekologiskt Viner"
              text1="Ekologiska viner är på stark frammarsch och vi ser idag fler och fler certifierade viner på hyllan. Begreppet ekologiskt vin är för många väldigt difust och det är svårt att veta vad som faktiskt menas med ekologiskt. På grund av ett ökat interesse har vi valt att sätta ihop en liten guide om ekologiskt vin, olika märkningar men också olika viner som finns tillgängliga på den Svenska marknaden."
              text2=""
            />

            {/* Additional Content Below Main Text */}
            <div className="space-y-4">
              <Card />
              <Card />
              <AccordionNew />
              <SubscriptionForm />
              <CatAccordion />
            </div>
          </div>

          {/* Sidebar Section (1/4) */}
          <div className="w-1/4 hidden lg:block sticky top-0 h-full mt-12">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
