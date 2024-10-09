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

export default function VinFakta() {
  return (
    <>
      <Head>
        <title>Vinfakta Page</title>
        <meta
          name="Vinfakta page"
          content="This is the Vinfakta page of Vinjournalen"
        />
      </Head>
      
      <Navbar />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:gap-10">
          
          {/* Main Content Section (3/4) */}
          <div className="w-full lg:w-3/4 flex flex-col gap-6">
            <PostTypeContent
              title='Vinfakta'
              text1='För dig som alltid undrat över vilka viner som bör lagras eller hur Champagnens bubblor skapas, listar vi fakta om olika vinrelaterade ämnen. Vi förklarar olika produktionsmetoder, tipsar om hur du bäst lagrar vin och presenterar kuriosa fakta. Besök även vår vinordlista för förklaringar av vintermer eller vår vinatlas.'
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

