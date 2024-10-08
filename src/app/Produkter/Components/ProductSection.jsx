import React from "react";
import Image from "next/image";
import PieChart from "./Piechart";
import wine from "@/public/winevj.png";
import message from "@/public/message.png";
import fb from "@/public/fbblack.png";
import twitter from "@/public/twitterblack.png";
import ellipse from "@/public/ellipse.png";
import lamb from "@/public/lamb.png";
import meat from "@/public/meat.png";
import vegetables from "@/public/vegetables.png";
import chicken from "@/public/chicken.png";

export default function ProductSection() {
  const pieChartData1 = [
    { name: "Filled", value: 5 },
    { name: "Empty", value: 7 },
  ];

  const pieChartData2 = [
    { name: "Filled", value: 6 },
    { name: "Empty", value: 6 },
  ];

  const pieChartData3 = [
    { name: "Filled", value: 9 },
    { name: "Empty", value: 3 },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row gap-6 mt-4 py-8 lg:py-16">
        {/* Left section */}
        <div className="w-full lg:w-1/3">
          <div className="lg:sticky lg:top-4">
            <div className="font-outfit text-xs text-black">
              <span className="text-red-500">Hem </span>&gt;&gt; Produkter
              &gt;&gt; Moulins de Citran 2012
            </div>
            <div className="mt-4">
              <Image
                src={wine}
                alt="Citran Wine"
                className="object-cover w-2/3 sm:w-1/2 md:w-2/3 lg:w-full h-auto mx-auto"
                width={300}
                height={500}
              />
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex flex-col w-full lg:w-2/3">
          <h1 className="font-outfit items-start text-black text-2xl w-full">
            Moulins de Citran 2012 | 750 ml
          </h1>
          <div className="font-outfit text-red-500 mt-2 text-sm">
            Rött Vin | Frankrike Bordeaux | Castillon Côtes de Bordeaux
          </div>
          <div className="font-outfit text-sm text-gray-600 mt-2">
            Moulins de Citran 2012 är ett elegant rött vin från Haut-Médoc i
            Bordeaux, Frankrike. Denna blend av 58% Cabernet Sauvignon och 42%
            Merlot skapar en harmonisk smakprofil med mogen frukt, mjuka
            tanniner och en aning kryddighet. Vinet bjuder på doftande toner av
            svarta vinbär, svarta körsbär och en subtil vaniljton från ekfat.
            Med sin balanserade struktur och långvariga eftersmak är Moulins de
            Citran 2012 en utmärkt följeslagare till rätter med nötkött eller
            lamm. En njutning för alla som uppskattar Bordeaux-viner av hög
            kvalitet.
          </div>
          <div className="font-outfit font-sm text-pink-500">Läs mer</div>
          <div className="bg-[#f9d7e1] mt-6 w-full">
            <div className="flex flex-col sm:flex-row w-full p-4 justify-between">
              <div className="font-outfit text-xl mb-2 sm:mb-0">
                pris: 222 :-
              </div>
              <div className="font-outfit text-xl text-gray-500">
                Artikel nr: 7661301
              </div>
            </div>
            <div className="relative p-4">
              <input
                type="file"
                id="pdf"
                className="opacity-0 absolute w-full h-full"
                required
              />
              <div className="w-full flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
                <div className="w-full sm:w-1/3 p-2 border-2 border-[#eb7272] rounded-full flex justify-center items-center bg-white">
                  <span className="text-red-500">Skriv ut PDF</span>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-[65%] text-white border-red-600 border bg-red-600 rounded-full px-4 py-2"
                >
                  Köp på Systembolaget
                </button>
              </div>
            </div>
            <div className="text-gray-500 text-sm font-outfit p-4">
              Vinjournalen.se har ingen egen försäljning utan hela köpet
              genomförs på systembolaget.se. Vinjournalen.se har heller ingen
              koppling till eller kommersiellt samarbete med Systembolaget.
            </div>
            <div className="flex p-4 gap-6">
              <Image src={message} alt="Messagebox" className="object-cover" />
              <Image src={fb} alt="Facebook icon" className="object-cover" />
              <Image src={twitter} alt="Twitter" className="object-cover" />
              <div className="font-outfit text-black text-sm">
                Berätta för en vän
              </div>
            </div>
          </div>
          <div className="mt-4 bg-[#f4f1ed] w-full">
            <div className="flex items-center p-8">
              <Image src={ellipse} alt="Citran Wine" className="object-cover" />
              <div className="flex-1 text-center font-outfit text-xl text-black font-medium">
                Faktaruta
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pl-8 mb-4 py-4">
              <div className="flex flex-col">
                <div className="font-outfit text-black text-sm">SORTIMENT</div>
                <div className="text-gray-500 text-xs">
                  Beställning sortimentet
                </div>
              </div>
              <div className="flex flex-col">
                <div className="font-outfit text-black text-sm">ALKOHOL</div>
                <div className="text-gray-500 text-xs">13%</div>
              </div>
              <div className="flex flex-col">
                <div className="font-outfit text-black text-sm">ÅRGÅNG</div>
                <div className="text-gray-500 text-xs">2012</div>
              </div>
              <div className="flex flex-col">
                <div className="font-outfit text-black text-sm">VOLYM</div>
                <div className="text-gray-500 text-xs">750 ml</div>
              </div>
              <div className="flex flex-col">
                <div className="font-outfit text-black text-sm">DRUVOR</div>
                <div className="text-gray-500 text-xs">
                  58% Cabernet Sauvignon <br /> 42% Merlot
                </div>
              </div>
              <div className="flex flex-col">
                <div className="font-outfit text-black text-sm">ALLERGENER</div>
                <div className="text-gray-500 text-xs">
                  Innehåller: Sulfiter
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <PieChart data={pieChartData1} title="Smakintensitet" />
              <PieChart data={pieChartData2} title="Fyllighet/Strävhet" />
              <PieChart data={pieChartData3} title="Syra" />
            </div>
          </div>
          <div className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="flex flex-col items-center p-6 bg-[#f4f1ed]">
                <div className="font-outfit text-black text-lg">SMAK</div>
                <div className="text-sm mt-4 text-gray-600 text-center">
                  äpplen, fat, fruktig, <br /> mandel, plommon, söt, <br />
                  röda vinbär
                </div>
              </div>
              <div className="flex flex-col items-center p-6 bg-[#f4f1ed]">
                <div className="font-outfit text-black text-lg">AROM</div>
                <div className="text-sm mt-4 text-gray-600 text-center">
                  äpplen, bär, fatkaraktär, <br />
                  fruktigt, mandel, <br /> plommon
                </div>
              </div>
              <div className="flex flex-col items-center p-6 bg-[#f4f1ed]">
                <div className="font-outfit text-black text-lg">FÄRG</div>
                <div className="text-sm mt-4 text-gray-600 text-center">
                  orangerosa, oklar
                </div>
              </div>
            </div>
          </div>
          <div className="m-8 text-xl font-outfit flex items-center justify-center">
            MAT SOM PASSAR TILL VINET
          </div>
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-col items-center w-1/2 sm:w-1/4 mb-8 sm:mb-0">
              <Image src={lamb} alt="Lamb" className="object-cover w-20 h-20" />
              <div className="text-sm mt-6 text-gray-600">grönsaker</div>
            </div>
            <div className="flex flex-col items-center w-1/2 sm:w-1/4 mb-8 sm:mb-0">
              <Image src={meat} alt="Meat" className="object-cover w-20 h-20" />
              <div className="text-sm mt-6 text-gray-600">lamm</div>
            </div>
            <div className="flex flex-col items-center w-1/2 sm:w-1/4">
              <Image
                src={vegetables}
                alt="Vegetables"
                className="object-cover w-20 h-20"
              />
              <div className="text-sm mt-6 text-gray-600">nöt</div>
            </div>
            <div className="flex flex-col items-center w-1/2 sm:w-1/4">
              <Image
                src={chicken}
                alt="Chicken"
                className="object-cover w-20 h-20"
              />
              <div className="text-sm mt-6 text-gray-600">vilt</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
