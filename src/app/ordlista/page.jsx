'use client';

import React from 'react';
import Head from 'next/head';
import Navbar from '../Components/Navbar';
import PostTypeContent from '../Components/PostTypeContent';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import ImageCardRow from '../Components/ImageCardRow';
import AccordionNew from '../Components/AccordionNew';
import CatAccordion from '../[category]/Components/CatAccordion';
import SubscriptionForm from '../Components/subscription/SubscriptionForm';

export default function Ordlista() {
  return (
    <>
      <Head>
        <title>Ordlista Page</title>
        <meta name="Ordlista page" content="This is the Ordlista page of Vinjournalen" />
      </Head>

      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:gap-10">
          {/* Main Content Section (3/4) */}
          <div className="w-full lg:w-3/4 flex flex-col gap-6">
            <PostTypeContent title="Ordlista" text1="" text2="" />

            {/* Additional Content Below Main Text */}
            <div className="space-y-4">
              <ImageCardRow />

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

      <Footer />
    </>
  );
}
