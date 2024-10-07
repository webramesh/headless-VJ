import React from "react";
import Image from "next/image";
import Link from "next/link";
import grape from "@/public/grape.png";
import corkscrew from "@/public/corkscrew.png";
import food1 from "@/public/food1.png";
import AuthorHero from "../../../app/author/Components/AuthorHero";
import CatAccordion from "../../../app/[category]/Components/CatAccordion";
import SenasteNytt from "../../../app/Components/SenasteNytt";
import WineTourism from "../../../app/Components/WineTourism";

const Content = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <AuthorHero title="Annonsera" />
      <div className="flex flex-col lg:flex-row lg:gap-12 mt-8 lg:mt-12">
        {/* Left-Side */}
        <div className="w-full lg:w-[75%] lg:sticky lg:top-0 lg:self-start">
          <div className="flex flex-col gap-6">
            <div className="text-base lg:text-lg font-outfit">
              Vinjournalen.se är ett magasin online om dryck och mat som växer i
              rask takt. Magasinet har en bred geografisk målgrupp och idag cirka
              100 000+ unika besökare, varav 95% är organisk trafik. Idag så
              jobbar vi nära importörer och producenter och partners för att
              leverera bra redaktionellt innehåll till våra läsare, men vi har
              även visa utrymmen för annonsering.
            </div>
            <div className="text-base lg:text-lg font-outfit">
              Är du intresserade av att nå ut till en vinsugen målgrupp? Kontakta
              oss idag så berättar vi mer om möjligheterna att annonsera på
              VinJournalen.se! Du kan också ta kontakt med Jeanette om du är
              intresserad av att tipsa om oss relevanta nyheter för vår målgrupp,
              exempelvis nya drycker eller kommande producent besök som riktar sig
              mot konsument.
            </div>
            <div className="font-outfit text-base lg:text-lg text-semibold text-gray-600">
              <i>Annonsering</i>
            </div>
            <div className="text-base lg:text-lg font-outfit">sales@vinjournalen.se</div>

            <div className="font-outfit text-base lg:text-lg text-semibold text-gray-600">
              <i>För redaktionella samarbeten och tips</i>
            </div>
            <div className="text-base lg:text-lg font-outfit">Jeanette Gardner</div>
            <div className="text-base lg:text-lg font-outfit">jeanette@vinjournalen.se</div>

            <div className="w-full mt-8 bg-[#eb7272]">
              <div className="p-4 lg:p-6">
                <h1 className="font-outfit text-white text-xl lg:text-2xl xl:text-4xl mb-4">
                  Vill du ha vårt nyhetsbrev?
                </h1>
                <h3 className="font-outfit text-white text-sm lg:text-base mb-6">
                  Få handplockat innehåll i vårt nyhetsbrev, det är gratis.
                </h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full lg:w-2/3 p-2 border-4 border-[#eb7272] placeholder-gray-400 rounded-md"
                      placeholder="abc@gmail.com"
                      required
                    />
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="privacy" className="mr-4" />
                    <label
                      htmlFor="privacy"
                      className="text-white text-xs lg:text-sm"
                    >
                      Jag godkänner integritetspolicy
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="rounded-full font-outfit text-sm py-2 px-6 bg-red-600 text-white hover:bg-red-700 transition-colors"
                  >
                    Ja, skicka till mig!
                  </button>
                </form>
              </div>
            </div>
            <CatAccordion />
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full lg:w-[25%] flex flex-col mt-8 lg:mt-0">
          <div className="bg-[#f5f5f5] p-4 sm:p-6 lg:p-8">
            <div className="space-y-8">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 flex-shrink-0">
                  <Image
                    src={grape}
                    alt="Grape"
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
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
          <div className="my-8">
            <SenasteNytt />
          </div>
        
          <div className="my-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
            {["/link1", "/link2", "/link3"].map((link, index) => (
              <Link href={link} key={index}>
                <div className="cursor-pointer hover:shadow-lg transition-shadow">
                  <Image
                    src={food1}
                    alt={`Food ${index + 1}`}
                    className="object-cover w-full h-48"
                  />
                  <div className="p-4 bg-[#f5f5f5]">
                    <h3 className="font-outfit font-medium text-black text-lg">
                      Ekologiskt och hållbart vin till mer grön mat?
                    </h3>
                    <p className="mt-2 font-outfit text-gray-900 text-xs">
                      8 augusti, 2024
                    </p>
                    <p className="text-[#694848] text-xs font-outfit mt-2">
                      Jeanette Gardner
                    </p>
                    <p className="font-outfit text-xs text-gray-900 font-extralight mt-2 leading-relaxed">
                      Är du alltid på jakt efter ekologiskt och hållbart vin och
                      kanske vill ändra din mat till...
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
  );
};

export default Content;