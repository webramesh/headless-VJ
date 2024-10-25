'use client';

import React from 'react';
import Head from 'next/head';
import PostTypeContent from '../Components/PostTypeContent';
import Sidebar from '../Components/Sidebar';
import Card from '../Components/Card';
import AccordionNew from '../Components/AccordionNew';
import CatAccordion from '../[category]/Components/CatAccordion';
import SubscriptionForm from '../Components/subscription/SubscriptionForm';

export default function Online() {
  return (
    <>
      <Head>
        <title>Online Page</title>
        <meta name="Online Vin page" content="This is the Online vin page of Vinjournalen" />
      </Head>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:gap-10">
          {/* Main Content Section (3/4) */}
          <div className="w-full lg:w-3/4 flex flex-col gap-6">
            <PostTypeContent
              title="Online"
              text1="Sedan 2007 är det lagligt att importera vin privat via nätet i Sverige. Om du funderar på att ta vara på det utökade utbudet och de ofta billigare priserna guidar vi dig genom processen. Vi förklara steg för steg hur du går till väga och listar annan viktig information."
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
