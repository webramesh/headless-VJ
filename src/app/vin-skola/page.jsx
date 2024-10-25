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

export default function VinSkola() {
  return (
    <>
      <Head>
        <title>VinSkola Page</title>
        <meta name="VinSkola page" content="This is the VinSkola page of Vinjournalen" />
      </Head>

      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:gap-10">
          {/* Main Content Section (3/4) */}
          <div className="w-full lg:w-3/4 flex flex-col gap-6">
            <PostTypeContent
              title="Vin Skola"
              text1="Att dricka vin är en njutning. För att säkerställa dess njutning bör man ta hänsyn till vissa viktiga saker som hjälper en att säkerställa kvaliteten på vinet. I vår vinskola listar vi förklaringar och guidning till olika ämnen inom vinkulturen. Vi lär dig att både sabrera en Champagne och öppna den på vanligt sätt."
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
