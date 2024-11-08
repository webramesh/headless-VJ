import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import grape from '@/public/grape.png';
import corkscrew from '@/public/corkscrew.png';
import food1 from '@/public/food1.png';
import SenasteNytt from '../../Components/SenasteNytt';
import WineTourism from '../../Components/WineTourism';
import AuthorHero from '../../author/Components/AuthorHero';
import CatAccordion from '../../[category]/Components/CatAccordion';

const PageContent = ({ pageData }) => {
  if (!pageData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <AuthorHero title={pageData.title} />
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-8 lg:mt-12">
        <div className="w-full lg:w-[75%]">
          <div className="lg:sticky lg:top-8">
            <div className="flex flex-col gap-4 lg:gap-6 lg:pr-4">
              <div dangerouslySetInnerHTML={{ __html: pageData.content }} className="text-base lg:text-lg" />
              <div className="w-full mt-6 lg:mt-8 bg-[#eb7272]">
                <div className="p-4 lg:p-6">
                  <h2 className="text-white text-xl sm:text-2xl lg:text-4xl mb-2 lg:mb-4">
                    Vill du ha vårt nyhetsbrev?
                  </h2>
                  <h3 className="text-white text-xs sm:text-sm lg:text-base mb-4 lg:mb-6">
                    Få handplockat innehåll i vårt nyhetsbrev, det är gratis.
                  </h3>
                  <form className="space-y-3 lg:space-y-4">
                    <div>
                      <label htmlFor="email" className="sr-only">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full sm:w-2/3 lg:w-2/3 p-2 border-4 border-[#eb7272] placeholder-gray-400 rounded-md"
                        placeholder="abc@gmail.com"
                        required
                      />
                    </div>
                    <div className="flex items-center">
                      <input type="checkbox" id="privacy" className="mr-2 lg:mr-4" />
                      <label htmlFor="privacy" className="text-white text-xs sm:text-sm">
                        Jag godkänner integritetspolicy
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="rounded-full text-sm py-2 px-4 lg:px-6 bg-red-600 text-white hover:bg-red-700 transition-colors"
                    >
                      Ja, skicka till mig!
                    </button>
                  </form>
                </div>
              </div>
              <div className="mt-8 lg:mt-12">
                <CatAccordion />
              </div>
            </div>
          </div>
        </div>
        {/* RightSection */}
        <div className="w-full lg:w-[25%] mt-8 lg:mt-0">
          <div className="space-y-6 lg:space-y-8">
            <div className="bg-[#f5f5f5] p-4 sm:p-6 lg:p-8">
              <div className="space-y-6 lg:space-y-8">
                <div className="flex flex-col items-center gap-3 lg:gap-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 flex-shrink-0">
                    <Image src={grape} alt="Grape" width={64} height={64} className="object-cover w-full h-full" />
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold">ETT VINORD</div>
                    <div className="text-sm">Druvbeskrivningar&gt;&gt;</div>
                  </div>
                </div>
                <hr className="border-t border-gray-300" />
                <div className="flex flex-col items-center gap-3 lg:gap-4">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 flex-shrink-0">
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
            <div className="my-6 lg:my-8">
              <SenasteNytt />
            </div>
            <div className="my-6 lg:my-8 grid gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-1">
              {['/link1', '/link2', '/link3'].map((link, index) => (
                <Link href={link} key={index}>
                  <div className="cursor-pointer hover:shadow-lg transition-shadow">
                    <Image src={food1} alt={`Food ${index + 1}`} className="object-cover w-full h-40 lg:h-48" />
                    <div className="p-3 lg:p-4 bg-[#f5f5f5]">
                      <h3 className="font-medium text-black text-base lg:text-lg">
                        Ekologiskt och hållbart vin till mer grön mat?
                      </h3>
                      <p className="mt-1 lg:mt-2 text-gray-900 text-xs">8 augusti, 2024</p>
                      <p className="text-[#694848] text-xs mt-1 lg:mt-2">Jeanette Gardner</p>
                      <p className="text-xs text-gray-900 font-extralight mt-1 lg:mt-2 leading-relaxed">
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

export default PageContent;
