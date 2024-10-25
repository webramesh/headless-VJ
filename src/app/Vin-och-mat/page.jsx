'use client';

import Head from 'next/head';
import Navbar from '../Components/Navbar';
import PostTypeContent from '../Components/PostTypeContent';
import Sidebar from '../Components/Sidebar';
import Card from '../Components/Card';
import AccordionNew from '../Components/AccordionNew';
import CatAccordion from '../[category]/Components/CatAccordion';
import SubscriptionForm from '../Components/subscription/SubscriptionForm';

export default function VinOchMatPage() {
  return (
    <>
      <Head>
        <title>Vin & Mat Page</title>
        <meta name="Vin & Matpage" content="This is the Vin & Mat page of Vinjournalen" />
      </Head>

      <Navbar />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:gap-10">
          {/* Main Content Section (3/4) */}
          <div className="w-full lg:w-3/4 flex flex-col gap-6">
            <PostTypeContent
              title="Vin & Mat"
              text1="Dyk in i den fascinerande världen av vin och mat på Vinjournalen.se. Upptäck artiklar som tar upp allt från mat- och vinparning till djupgående utforskningar av olika vinsorter. Perfekt för nybörjare och vinälskare som vill utöka sin kunskap och uppskattning av mat och vin."
              text2="Behöver du hjälp att hitta den perfekta kombinationen till din maträtt?Hör då av dig till oss på Vinjournalen så ska vihjälpa dig med några specifika förslag! Tjänsten är gratis."
            />

            {/* Additional Content Below Main Text */}
            <div className="space-y-4">
              <Card />
              <Card />
              <AccordionNew />

              <div className=" text-base lg:text-lg pl-3 text-slate-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos distinctio quibusdam fugit nobis
                modi itaque vero porro sunt, dolore corrupti quidem deleniti consequatur, eum culpa earum maxime illum
                dolores ratione cum quae?
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptas adipisci architecto recusandae
                mollitia velit maiores accusantium voluptatum possimus ut odit cumque id, reiciendis ab consectetur
                dolorum optio quam harum, voluptate dolor! Minima temporibus, eum itaque provident ratione cum animi
                quisquam nisi quas corrupti tenetur fugit! Nesciunt est accusamus repudiandae ea veniam ipsum beatae!
                Magnam rem repudiandae laboriosam dignissimos provident minima quaerat, laudantium dolor!
              </div>
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
