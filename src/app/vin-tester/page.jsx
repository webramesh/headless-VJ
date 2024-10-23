'use client';

import React from 'react';
import Head from 'next/head';
import Navbar from '../Components/Navbar';
import PostTypeContent from '../Components/PostTypeContent';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';
import Card from '../Components/Card';
import AccordionNew from '../Components/AccordionNew';
import CatAccordion from '../[category]/Components/CatAccordion';
import SubscriptionForm from '../Components/subscription/SubscriptionForm';

export default function VinTester() {
  return (
    <>
      <Head>
        <title>VinTester Page</title>
        <meta name="VinTester page" content="This is the VinTester page of Vinjournalen" />
      </Head>

      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:gap-10">
          {/* Main Content Section (3/4) */}
          <div className="w-full lg:w-3/4 flex flex-col gap-6">
            <PostTypeContent
              title="Vin Tester"
              text1="I denna kategori listar vi olika kvaliteter du bör ta hänsyn till när du testar olika viner. Vi introducerar druvor, områden och prisindikationer som hjälper dig på vägen att hitta rätt dryck för just dig. Vi tipsar även om olika viner vi tycker du borde prova och njuta av. Observera att viner kan utgå ur Systembolagets sortiment efter en tid."
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

      <Footer />
    </>
  );
}
