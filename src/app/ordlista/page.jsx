import React from 'react';
import Head from 'next/head';
import PostTypeContent from '../Components/PostTypeContent';
import Sidebar from '../Components/Sidebar';
import ImageCardRow from '../Components/ImageCardRow';
import AccordionNew from '../Components/AccordionNew';
import CatAccordion from '../[category]/Components/CatAccordion';
import SubscriptionForm from '../Components/subscription/SubscriptionForm';
import OrdilistaCard from './components/OrdilistaCard';
import { getAllOrdlista } from '@/src/lib/api/ordilistaAPI';

export default async function Ordlista() {
  const [allOrdlista] = await Promise.all([getAllOrdlista()]);
  console.log(allOrdlista, 'oordilista');

  return (
    <>
      <div className=" bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="flex flex-col lg:flex-row lg:gap-10">
            {/* Main Content Section (3/4) */}
            <div className="w-full lg:w-3/4 flex flex-col gap-6">
              <h3 className="text-3xl font-bold  mt-10 ">Ordlista</h3>

              {/* Additional Content Below Main Text */}
              <div className="">
                {/* <div className="space-y-4"> */}
                {/* <ImageCardRow /> */}
                <OrdilistaCard allOrdlista={allOrdlista} />

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
      </div>
    </>
  );
}
