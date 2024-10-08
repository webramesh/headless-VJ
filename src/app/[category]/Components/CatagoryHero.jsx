import React from "react";
import Image from "next/image";
import food1 from "@/public/food1.png";
import fb from "@/public/fb.png";
import insta from "@/public/insta.png";
import Accordion from "../../../app/Components/Accordion";
import CatAccordion from "../Components/CatAccordion";
import ProductRecom from "../Components/ProductRecom";
import Link from "next/link";

const CatagoryHero = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row lg:gap-16 mx-4 lg:mx-52 lg:-mt-16 z-10">
        <div className="flex flex-col gap-2 bg-white w-full lg:w-auto">
          <div className="shadow-2xl p-4 lg:p-16">
            <div className="font-outfit text-base lg:text-lg text-gray-600 font-semibold">
              Blanc de blancs är en term för mousserande viner. Men det är inte
              helt enkelt att reda ut, då mousserande viner generellt kans göras
              av vita druvor till och med röda.
            </div>
            <div className="font-outfit text-gray-600 text-base lg:text-lg">
              Blanc de blancs är en fransk term som närmast förknippas med
              Champagne och översatt betyder "vitt av vitt". Den finns oftast
              som term på vinetiketter. I motsats till Blanc de Noir, "vitt av
              svart" som också kan stå på champagne-etiketten, där man alltså
              använder blåa druvor som Pint Noir eller Pinot Meunier.
            </div>

            <div className="font-outfit text-gray-600 text-base lg:text-lg">
              Men vänta, skrivs det med ett "s" eller två? Det finns alltså
              "Blanc de blancs" och "Blanc de blanc".
            </div>
            <div className="font-outfit text-gray-600 text-base lg:text-lg">
              Lite beroende på hur det skrivs och titta noga:
            </div>

            <div className="font-outfit text-gray-600 text-base lg:text-lg">
              "blanc de blancs" är mousserande viner som kan vara tillverkade av
              mer än en vit druvsort "blanc de blanc" är tillverkat på vita
              druvor och uteslutande av sorten Chardonnay
            </div>

            <div className="font-outfit text-gray-600 text-base lg:text-lg">
              Ser du nyansen? Det här är enkelt.
            </div>

            <div className="font-outfit text-gray-600 text-base lg:text-lg">
              När det gäller Champagne som är gjord enligt den traditionella
              champagne-metoden så skriver man utan "s" då man endast använt sig
              av Chardonnay-druvor. Eller? Det är ju Champagne? Men så är det
              inte alltid heller. Man kan ju faktiskt läsa denna term på
              etiketter även på mousserande eller sparkling viner som tillverkas
              runt om i världen. Dessa viner är ju inte Champagner, så de kan ju
              egentligen vara tillverkade av olika blandade druvor. Det finns
              ofta andra vita druvor förutom Chardonnay som är tillåtna. Men om
              en Champagne är en Blanc de blanc så är den gjord av endast
              Chardonnay.
            </div>
            <div className="font-outfit text-gray-600 text-base lg:text-lg">
              Så vad är skillnaden? Både Blanc de blanc och Blanc de blancs är
              ju mousserande viner?
            </div>
            <div className="mt-8 flex justify-center items-center">
              <div className="rounded-full overflow-hidden relative w-64 h-64 lg:w-84 lg:h-84 aspect-square">
                <Image
                  src={food1}
                  alt="Food 1"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="text-2xl lg:text-4xl font-outfit text-gray-600 mt-8">
              Blanc de Blancs – och varifrån?
            </div>
            <div className="font-outfit text-gray-600 text-base lg:text-lg">
              Överallt där man odlar Chardonnay kommer man antagligen att
              producera både Blanc de blanc och Blanc de blancs även om alla
              viner inte är gjorde enigt Champagne-metoden.
            </div>

            <div className="font-outfit text-gray-600 text-base lg:text-lg">
              Alla regioner som använder vita druvor, från spanska Cava till
              franska Crémant eller italienska Prosecco – använder ju olika
              druvor. Cava använder främst de lokala druvorna Macabeo, Xarel·lo
              och Parellada och kan ibland ha Blanc de blancs på etiketten.
              Prosecco, som är endast gjord på druvan Glera och med en helt
              annan metod. Här skriver man aldrig Blanc de Blanc. Så oavsett var
              vinerna tillverkas, så är det metoden som gäller.
            </div>
            <div className="font-outfit text-gray-600 text-base lg:text-lg">
              Champagne får endast tillverkas i regionen Champagne enligt
              champagne-metoden, men mousserande viner från andra platser kan
              också göras enligt champagne-metoden. Då är det förstås inte
              Champagne men det kan ändå stå märkt Blanc de blanc eller Blanc de
              blancs på etiketten.
            </div>

            <div className="text-2xl lg:text-4xl text-gray-600 font-outfit mt-8">
              Hur ska man kunna välja?
            </div>
            <div className="font-outfit text-gray-600 text-base lg:text-lg">
              Blanc de blanc görs av en enda sort och oftast då av en
              kvalitetsdruva, nämligen Chardonnay. Därför kan de verka dyrare än
              många andra mousserande viner, men det behöver ju inte alltid så
              när man tittar på priset. Vad tycker du? En Cava kan ju vara helt
              underbar men bara kosta lite över hundringen
            </div>

            <div className="font-outfit text-gray-600 text-base lg:text-lg">
              Alla regioner som använder vita druvor, från spanska Cava till
              franska Crémant eller italienska Prosecco – använder ju olika
              druvor. Cava använder främst de lokala druvorna Macabeo, Xarel·lo
              och Parellada och kan ibland ha Blanc de blancs på etiketten.
              Prosecco, som är endast gjord på druvan Glera och med en helt
              annan metod. Här skriver man aldrig Blanc de Blanc. Så oavsett var
              vinerna tillverkas, så är det metoden som gäller.
            </div>
            <div className="font-outfit text-gray-600 text-base lg:text-lg">
              Och när det gäller en bra matmatchning så passar både Blanc de
              blanc och Blanc de blancs bra med fisk, skaldjur, kaviar eller
              ostron. Allt beror på de unika smakegenskaperna hos ett unikt vin.
            </div>
            <div className="mt-8">
              <Image src={food1} alt="Food 1" className="object-cover w-full" />
            </div>
            <div className="mt-6 text-xl lg:text-2xl font-outfit">
              Vintips – 4 viner att prova nästa gång
            </div>
            <div className="text-base lg:text-lg font-outfit text-gray-600">
              Här är några klassade och oklassade men riktigt goda mousserande
              viner som vi vill tipsa om!
            </div>

            <div className="font-outfit text-red-600 text-base lg:text-lg mt-6">
              Cecilia Brut / nr 2389 / 149:-
            </div>
            <div className="text-gray-600 font-outfit text-base lg:text-lg">
              God sparkling från Marlborough Nya Zeeland. Druvor: Chardonnay och
              Pinot Noir.
            </div>
            <div className="font-outfit text-red-600 text-base lg:text-lg mt-6">
              Crémant de Bourgogne / nr 84299 / 169:-
            </div>
            <div className="text-gray-600 font-outfit text-base lg:text-lg">
              Fransk Crémant från Bourgogne, druva: Chardonnay
            </div>
            <div className="font-outfit text-red-600 text-base lg:text-lg mt-6">
              La Chouette de Champillon Blanc de Noirs / nr 77366 | 349:-
            </div>
            <div className="text-gray-600 font-outfit text-base lg:text-lg">
              En Champagne på endast röda druvor: Pinot Noir och Pinot Meunier.
            </div>
            <div className="font-outfit text-red-600 text-base lg:text-lg mt-6">
              Maria Rigol Ordi Gran Reserva Brut Nature Organic / nr 94721
              /219:-
            </div>
            <div className="text-gray-600 font-outfit text-base lg:text-lg">
              En spansk Cava enligt champagne-metoden, druvor: Macabeu, Xarel·lo
              och Parellada.
            </div>
            <div className="font-outfit text-lg lg:text-xl mt-12 pl-3">
              Frågor och svar
            </div>
            <Accordion />
            <div className="text-lg lg:text-xl mt-8 font-outfit">
              Mer om mousserande vin och Champagne:
            </div>
            <div className="text-base lg:text-lg font-outfit text-red-600">
              Brut Champagne <br />
              Rött mousserande vin <br /> Italienska mousserande viner
            </div>
          </div>

          <ProductRecom />
          <div className="w-full mt-8 bg-[#eb7272]">
            <div className="p-4 lg:p-6">
              <h1 className="font-outfit text-white text-2xl lg:text-4xl mb-4">
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
          <div className="bg-[#F9F9F9] shadow-lg mt-12 hover:shadow-xl p-4 lg:p-8">
            <div className="items-start font-outfit text-xl lg:text-2xl">
              Skribent
            </div>
            <div className="flex flex-col lg:flex-row mt-6 gap-4 lg:gap-8">
              <div className="rounded-full overflow-hidden w-16 h-16 lg:w-20 lg:h-20 flex-shrink-0">
                <div className="relative w-full h-full">
                  <Image
                    src={food1}
                    alt="Food 1"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="font-outfit text-lg lg:text-xl hover:text-red-600">
                  Jeanette Gardner
                </div>
                <div className="font-outfit text-sm lg:text-lg">
                  Jag är sedan 2014 redaktör och receptmakare för
                  Vinjournalen.se. Författare och skribent, har arbetat
                  internationellt i flera länder och i Sverige. Bor i skärgården
                  utanför Stockholm och brinner för mat och vin.
                </div>
                <div className="flex gap-2">
                  <div>
                    <Image
                      src={insta}
                      alt="Instagram"
                      width={24}
                      height={24}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <Image
                      src={fb}
                      alt="Facebook"
                      width={24}
                      height={24}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 font-outfit text-base lg:text-lg hover:text-red-600">
            Previous
          </div>
          <div className="font-outfit text-base lg:text-lg hover:text-red-600">
            Historien om de Chilenska vinerna
          </div>
          <div className="font-outfit text-xl lg:text-2xl mt-6">
            Lämna ett svar
          </div>
          <div className="font-outfit text-xs lg:text-sm">
            <i>
              Din e-postadress kommer inte publiceras. Obligatoriska fält är
              märkta *
            </i>
          </div>
          <form className="mt-8">
            <div className="flex flex-wrap mb-4">
              <textarea
                placeholder="Comment"
                className="w-full p-2 border rounded mb-4"
                rows="4"
                required
              ></textarea>
              <input
                type="text"
                placeholder="Name"
                className="w-full lg:w-1/3 p-2 border rounded mb-2 lg:mr-2"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full lg:w-1/3 p-2 border rounded mb-2 lg:mr-2"
                required
              />
              <input
                type="url"
                placeholder="Website"
                className="w-full lg:w-1/3 p-2 border rounded mb-2"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">
                Are you a human? Please solve:
              </label>
              <input
                type="text"
                className="w-full lg:w-1/5 p-2 border rounded"
                required
              />
            </div>
          </form>
          <button
            type="submit"
            className="rounded-md font-outfit text-base lg:text-lg py-2 px-6 bg-red-600 text-white hover:bg-red-700 transition-colors"
          >
            Publicera Kommentar
          </button>

          <div className="mt-6">
            <CatAccordion />
          </div>
        </div>

        {/* Right Section */}
      </div>
    </div>
  );
};

export default CatagoryHero;
