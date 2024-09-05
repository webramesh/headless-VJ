import React from "react";
import Accordion from "./Accordion";
import Image from "next/image";
import winetourismlogo from "@/public/winetourism.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRight } from "@fortawesome/free-solid-svg-icons";

const Info = () => {
  return (
    <div className=" container mx-auto">
      <div className=" mt-4 mx-4 flex flex-col gap-4 md:flex-row md:mt-14 md:ml-12 md:gap-14">
        <div className="w-full md:w-[64%] flex flex-col">
          <h1 className="font-outfit font-medium text-2xl text-black tracking-normal ">
            Ett vinmagasin om mat och vin samt andra drycker
          </h1>
          <div className="mt-4">
            <h3 className="font-outfit text-sm text-gray-500 w-full justify-normal leading-4">
              {" "}
              Vi skriver om mat och vin samt andra drycker. Du kan även läsa om
              annat som händer i vinvärlden. Vinjournalen.se har ständigt kunnat
              överträffa våra förväntningar och vi strävar efter att
              kontinuerligt öka trafiken till vår webb och på sociala medier och
              fånga alltfler våra entusiastiska vinälskande läsare till vår
              tidning och vårt populära nyhetsbrev om vin.{" "}
            </h3>
          </div>
          <div className="mt-4">
            <h2 className="font-outfit font-medium text-xl text-black tracking-normal">
              Vinjournalen.se Ditt magasin på nätet
            </h2>
          </div>
          <div className="mt-4">
            <h3 className="font-outfit text-sm text-gray-500 w-full justify-normal leading-4">
              Vinjournalen.se startade 2011 och är Sveriges ledande online
              tidning för vinentusiaster med allt som du behöver veta om vin. Vi
              siktar mot att bli en portal om vin och andra alkoholhaltiga
              drycker så att du har allt på samma ställe! Du hittar vin, mat,
              vin-skola, recensioner om vin från hela världen, intervjuer med
              vinmakare, kockar och kända vinprofiler, producenter, regioner och
              vindruvor. Vi täcker in både den lokala och internationella
              dryckesindustrins nyheter men även recept på maträtter, vinskola,
              vinturism, skriver om breda vetenskapliga frågor om vin, samlar
              nyheter om vin och sprit - det du vill läsa om, helt enkelt, det
              skriver vi om!
            </h3>
          </div>
          <div className="mt-4">
            <h2 className="font-outfit font-medium  text-lg md:text-xl text-black tracking-normal">
              Frågor och Svar om Vinjournalen.se
            </h2>
          </div>
          <div className="mt-4">
            <Accordion />
          </div>
        </div>
        <div className="">
          <div className="flex flex-start flex-col gap-4">
            <Image src={winetourismlogo} alt="Logo" className="object-cover" />
            <div className="font-outfit text-base font-medium text-red-500">
              Vinturism | boka vingårdsbesök
            </div>
            <div className="font-outfit text-lg text-gray-500 font-extralight  w-full justify-normal leading-5">
              Besök winetourism.com och upptäck spännande
              <br /> vindestinationer över hela världen.
            </div>
            <div className="font-outfit text-lg text-gray-500 font-extralight  w-full justify-normal leading-5">
              Mer läsning om vingårdsbesök på <br /> vinjournalen.se
            </div>
          </div>
          <div className="mt-8">
            <h1 className="font-outfit text-xl text-black">Senaste nytt</h1>
          </div>
          <div className="font-outfit text-lg mt-4 text-gray-500 font-extralight  w-full justify-normal leading-5">
            <div>
              <h3>Vingårdar kämpar mot mögel</h3>
              <FontAwesomeIcon
                icon={faArrowUpRight}
                className="w-5 h-5 text-black"
              />
            </div>
            <div>
              <h3 className="pt-3">Malmös presenterar en ny dryckesmässa!</h3>
              <FontAwesomeIcon
                icon={faArrowUpRight}
                className="w-5 h-5 text-black"
              />
            </div>
            <div>
              <h3 className="pt-3">
                Missa inte Tranås Vinfestival i september!
              </h3>
              <FontAwesomeIcon
                icon={faArrowUpRight}
                className="w-5 h-5 text-black"
              />
            </div>
            <div>
              <h3 className="pt-3">
                Missa inte Tranås Vinfestival i september!
              </h3>
              <FontAwesomeIcon
                icon={faArrowUpRight}
                className="w-5 h-5 text-black"
              />
            </div>
            <div>
              <h3 className="pt-3">Påskön får egen vinappellation</h3>
              <FontAwesomeIcon
                icon={faArrowUpRight}
                className="w-5 h-5 text-black"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
