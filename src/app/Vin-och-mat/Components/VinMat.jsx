import React from 'react';
import Card from '../../../app/Components/Card';
import Accordion from '../../../app/Components/Accordion';
import CatAccordion from '../../[category]/Components/CatAccordion';
import Image from 'next/image';
import Link from 'next/link';
import grape from '@/public/grape.png';
import food1 from '@/public/food1.png';
import corkscrew from '@/public/corkscrew.png';
import SenasteNytt from '../../../app/Components/SenasteNytt';
import WineTourism from '../../../app/Components/WineTourism';

const VinMat = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:gap-10">
        {/* Content Section*/}
        <div className="w-full lg:w-3/4 flex flex-col gap-4 mt-8 lg:mt-12">
          <div className=" text-sm">
            <span className="text-red-600">Hem </span>» Vin & Mat
          </div>
          <h1 className=" text-3xl lg:text-4xl">Vin & Mat</h1>
          <p className=" text-base lg:text-lg text-slate-600">
            Dyk in i den fascinerande världen av vin och mat på Vinjournalen.se. Upptäck artiklar som tar upp allt från
            mat- och vinparning till djupgående utforskningar av olika vinsorter. Perfekt för nybörjare och vinälskare
            som vill utöka sin kunskap och uppskattning av mat och vin.
          </p>
          <p className=" text-slate-600 text-base lg:text-lg">
            Behöver du hjälp att hitta den perfekta kombinationen till din maträtt?
            <span className="text-red-600 ">Hör då av dig till oss på Vinjournalen så ska vi</span>
            hjälpa dig med några specifika förslag! Tjänsten är gratis.
          </p>

          <div className="space-y-4">
            <Card />
            <Card />
            <Accordion />
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
            <CatAccordion />
          </div>
        </div>

        {/* SideContent */}
        <div className="w-full lg:w-1/4 mt-8 lg:mt-12">
          <div className="lg:sticky lg:top-10 space-y-8">
            <div className="bg-[#f5f5f5] p-6 sm:p-8">
              <div className="space-y-8">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 flex-shrink-0">
                    <Image src={grape} alt="Grape" width={64} height={64} className="object-cover w-full h-full" />
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold">ETT VINORD</div>
                    <div className="text-sm">Druvbeskrivningar&gt;&gt;</div>
                  </div>
                </div>
                <hr className="border-t border-gray-300" />
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 flex-shrink-0">
                    <Image
                      src={corkscrew}
                      alt="Corkscrew"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="text-sm font-semibold">VECKANS OMRÅDE</div>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-[#eb7272] p-6 sm:p-8">
              <h2 className=" text-white text-2xl sm:text-3xl mb-4">Vill du ha vårt nyhetsbrev?</h2>
              <h3 className=" text-white text-sm mb-6">Få handplockat innehåll i vårt nyhetsbrev, det är gratis.</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border-4 border-[#eb7272] placeholder-gray-400 rounded-md"
                    placeholder="abc@gmail.com"
                    required
                  />
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="privacy" className="mr-2" />
                  <label htmlFor="privacy" className="text-white text-xs">
                    Jag godkänner integritet spolicy
                  </label>
                </div>
                <button
                  type="submit"
                  className="rounded-full  text-xs py-2 px-6 bg-red-600 text-white hover:bg-red-700 transition-colors"
                >
                  Ja, skicka till mig!
                </button>
              </form>
            </div>
            <SenasteNytt />
            <div className="space-y-8">
              {['/link1', '/link2', '/link3'].map((link, index) => (
                <Link href={link} key={index}>
                  <div className="cursor-pointer hover:shadow-lg transition-shadow">
                    <Image src={food1} alt={`Food ${index + 1}`} className="object-cover w-full h-48" />
                    <div className="p-4 bg-[#f5f5f5]">
                      <h3 className=" font-medium text-black text-lg">
                        Ekologiskt och hållbart vin till mer grön mat?
                      </h3>
                      <p className="mt-2  text-gray-900 text-xs">8 augusti, 2024</p>
                      <p className="text-[#694848] text-xs  mt-2">Jeanette Gardner</p>
                      <p className=" text-xs text-gray-900 font-extralight mt-2 leading-relaxed">
                        Är du alltid på jakt efter ekologiskt och hållbart vin och kanske vill ändra din mat till...
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <WineTourism />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VinMat;
