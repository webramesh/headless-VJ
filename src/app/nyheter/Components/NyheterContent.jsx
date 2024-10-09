import React from "react";
import Image from "next/image";
import food3 from "@/public/food3.png";
import CatAccordion from "../../[category]/Components/CatAccordion";

const NyheterContent = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col mt-12 gap-4 mx-4 sm:mx-8 md:mx-16 lg:mx-52 p-4 sm:p-6 shadow-2xl">
        <div className="font-outfit text-2xl sm:text-3xl md:text-4xl">
          <h1>Bordeaux: Borgmästare vill förbjuda kryssningsfartyg</h1>
        </div>
        <div className="font-outfit text-sm sm:text-base md:text-lg">
          <span className="text-red-500 font-outfit">Hem</span> » Nyheter »
          Bordeaux: Borgmästare vill förbjuda kryssningsfartyg
        </div>
        <div>
          <Image src={food3} alt="Food3" className="object-cover w-full" />
        </div>
        <div className="font-outfit text-base sm:text-lg">
          Pierre Hurmic, borgmästare i Bordeaux, trycker på för ett fullständigt
          förbud mot kryssningsfartyg som lägger till i stadens centrum eftersom
          de förstör platsens "skönhet" och att fartygen orsakar föroreningar.
          Han glömmer samtidigt bort att inresande turister vill prova regionens
          viner, dessa goda Bordeauxviner som gått sitt namn efter hamnstaden,
          eller besöka regionens kända vingårdar och både äta och dricka gott på
          restauranger och barer samt besöka det kända vinmuseet La Cité du
          Vin….
        </div>
        <div className="font-outfit text-base sm:text-lg">
          Styrande i Bordeaux har redan tidigare begränsat antalet
          kryssningsfartyg till bara 40 fartyg per år, men Pierre Hurmic, vill
          ha ett fullständigt förbud mot kryssningsfartyg
        </div>
        <div>Man baxnar.</div>
        <div className="font-outfit text-base sm:text-lg">
          Patrick Seguin, ordförande för Bordeaux-Girondes handels- och
          industrikammare, tror att detta kommer att få stora konsekvenser för
          Bordeaux handel. Det anser restauranger och vingårdar också.
        </div>
        <div className="font-outfit text-base sm:text-lg">
          Man försöker nu hitta en kompromisslösning.
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
          <div className="flex flex-col sm:flex-row flex-wrap mb-4">
            <textarea
              placeholder="Comment"
              className="w-full p-2 border rounded mb-4"
              rows="4"
              required
            ></textarea>
            <input
              type="text"
              placeholder="Name"
              className="w-full sm:w-full lg:w-1/3 p-2 border rounded mb-2 lg:mr-2"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full sm:w-full lg:w-1/3 p-2 border rounded mb-2 lg:mr-2"
              required
            />
            <input
              type="url"
              placeholder="Website"
              className="w-full sm:w-full lg:w-1/3 p-2 border rounded mb-2"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Are you a human? Please solve:</label>
            <input
              type="text"
              className="w-full sm:w-1/2 lg:w-1/5 p-2 border rounded"
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
        <div className="w-full mt-8 bg-[#eb7272]">
          <div className="p-4 lg:p-6">
            <h1 className="font-outfit text-white text-xl sm:text-2xl lg:text-4xl mb-4">
              Vill du ha vårt nyhetsbrev?
            </h1>
            <h3 className="font-outfit text-white text-xs sm:text-sm lg:text-base mb-6">
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
                  className="w-full sm:w-2/3 lg:w-2/3 p-2 border-4 border-[#eb7272] placeholder-gray-400 rounded-md"
                  placeholder="abc@gmail.com"
                  required
                />
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="privacy" className="mr-4" />
                <label
                  htmlFor="privacy"
                  className="text-white text-xs sm:text-sm"
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

        <div className="mt-6">
          <CatAccordion />
        </div>
      </div>
    </div>
  );
};

export default NyheterContent;
