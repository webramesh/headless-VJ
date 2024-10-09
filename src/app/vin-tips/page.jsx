'use client'

import React from 'react';
import Head from "next/head";
import Navbar from "../Components/Navbar";
import PostTypeContent from "../Components/PostTypeContent";
import SideBar from "../Components/SideBar";
import Footer from "../Components/Footer";
import Card from '../Components/Card';
import AccordionNew from "../Components/AccordionNew";
import CatAccordion from "../[category]/Components/CatAccordion";

export default function VinTips() {
  return (
    <>
      <Head>
        <title>VinTips Page</title>
        <meta
          name="VinTips page"
          content="This is the VinTips page of Vinjournalen"
        />
      </Head>
      
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:gap-10">
          
          {/* Main Content Section (3/4) */}
          <div className="w-full lg:w-3/4 flex flex-col gap-6">
            <PostTypeContent
              title='Vin Tips'
              text1='Nedan tipsar vi om alla olika underbara viner vi tycker du bör prova. Vi upplyser om olika regioner, druvor och typer av vin. Det finns något för alla är vårt motto och förhoppningsvis kan vi hjälpa dig på vägen till att hitta din egen favorit.'
              text2=''
            />
            
            {/* Additional Content Below Main Text */}
            <div className="space-y-4">
              <Card />
              <Card />
              <AccordionNew />
                                        
              <CatAccordion />
            </div>
          </div>
          
          {/* Sidebar Section (1/4) */}
          {/* <div className="w-full lg:w-1/4"> */}
            <SideBar />
          {/* </div> */}
        </div>
      </div>
      
      <Footer />
    </>
  );
}

