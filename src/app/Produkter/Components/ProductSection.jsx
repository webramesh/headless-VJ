import React from "react";
import Image from "next/image";
import wine from "@/public/winevj.png";
import message from "@/public/message.png";
import fb from "@/public/fbblack.png";
import twitter from "@/public/twitterblack.png";
import ellipse from "@/public/ellipse.png";
import download1 from "@/public/download1.png";
import download2 from "@/public/download2.png";
import download3 from "@/public/download3.png";
import lamb from "@/public/lamb.png";
import meat from "@/public/meat.png";
import vegetables from "@/public/vegetables.png";
import chicken from "@/public/chicken.png";

const ProductSection = () => {
  return (
    <div className="container mx-auto border-2">
      {/* Flex container for left and right sections */}
      <div className="flex gap-6 mt-4 p-16 ">
        {/* Left section */}
        <div className=" w-1/3 flex flex-col items-start">
          <div className="font-outfit text-xs text-black">
            <span className="text-red-500">Hem </span>&gt;&gt; Produkter
            &gt;&gt; Moulins de Citran 2012
          </div>
          <div className="">
            <Image
              src={wine}
              alt="Citran Wine"
              className="object-cover"
              width={300}
              height={500}
            />
          </div>
        </div>
        {/* Right Section */}
        <div className="flex flex-col  w-2/3">
          <h1 className="font-outfit items-start text-black text-2xl w-full">
            Moulins de Citran 2012 | 750 ml
          </h1>
          <div className="font-outfit text-red-500 mt-2 text-sm ">
            Rött Vin | Frankrike Bordeaux | Castillon Côtes de Bordeaux
          </div>
          <div className="font-outfit text-sm text-gray-600 mt-2 ">
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
            <div className="flex w-full p-4 justify-between">
              <div className="font-outfit text-xl">pris: 222 :-</div>
              <div className="font-outfit text-xl text-gray-500">
                Artikel nr: 7661301
              </div>
            </div>
            <div className=" relative p-4">
              <input
                type="file"
                id="pdf"
                className="opacity-0 absolute w-full h-full "
                required
              />
              <div className="w-full flex justify-between">
                <div className="w-1/3 p-2 border-2 border-[#eb7272] rounded-full flex justify-center items-center bg-white">
                  <span className="text-red-500 ">Skriv ut PDF</span>
                </div>
                <button
                  type="submit"
                  placeholder="Köp på Systembolaget"
                  className="w-[65%] text-white border-red-600 border bg-red-600 rounded-full px-4"
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
              <Image
                src={message}
                alt="Messagebox"
                className="object-cover"
                width={15}
                height={10}
              />
              <Image
                src={fb}
                alt="Facebook icon"
                className="object-cover"
                width={15}
                height={10}
              />
              <Image
                src={twitter}
                alt="Twitter"
                className="object-cover"
                width={15}
                height={10}
              />
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
            <div className="flex justify-between pb-8">
              <div className="flex flex-col px-8 ">
                <div className="flex flex-col">
                  <span className="font-outfit text-black text-sm">
                    SORTIMENT
                  </span>
                  <span className="text-gray-500  text-xs">
                    Beställning sortimentet
                  </span>
                  <div className="mt-8 flex flex-col">
                    <span className="font-outfit text-black text-sm">
                      ALKOHOL
                    </span>
                    <span className="text-gray-500  text-xs">13%</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col px-8">
                <div className="flex flex-col">
                  <span className="font-outfit text-black text-sm">ÅRGåNG</span>
                  <span className="text-gray-500  text-xs">2012</span>
                  <div className="mt-8 flex flex-col">
                    <span className="font-outfit text-black text-sm">
                      VOLYM
                    </span>
                    <span className="text-gray-500  text-xs">750 ml</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col px-8">
                <div className="flex flex-col">
                  <span className="font-outfit text-black text-sm">DRUVOR</span>
                  <span className="text-gray-500  text-xs">
                    58% Cabernet Sauvignon <br /> 42% Merlot
                  </span>
                  <div className="mt-4 flex flex-col">
                    <span className="font-outfit text-black text-sm">
                      ALLERGENER
                    </span>
                    <span className="text-gray-500  text-xs">
                      Innehåller: Sulfiter
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4">
            <div className="flex gap-32">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={download1}
                  alt="Download1"
                  className="object-cover w-36 h-36"
                />
                <div className="mt-4 ">Smakintensitet</div>
              </div>

              <div className="flex flex-col items-center justify-center">
                <Image
                  src={download2}
                  alt="Download2"
                  className="object-cover w-36 h-36"
                />
                <div className="mt-4 ">Fyllighet/Strävhet</div>
              </div>

              <div className="flex flex-col items-center justify-center">
                <Image
                  src={download3}
                  alt="Download3"
                  className="object-cover w-36 h-36"
                />
                <div className="mt-4 ">Syra</div>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex gap-20">
              <div className="flex flex-col items-center p-6 bg-[#f4f1ed]">
                <div className="font-outfit text-black text-lg">SMAK</div>
                <div className=" text-sm mt-4 text-gray-600">
                  äpplen, fat, fruktig, <br /> mandel, plommon, söt, <br />
                  röda vinbär
                </div>
              </div>

              <div className="flex flex-col items-center p-6  bg-[#f4f1ed]">
                <div className="font-outfit text-black text-lg">AROM</div>
                <div className=" text-sm mt-4 text-gray-600">
                  äpplen, bär, fatkaraktär, <br />
                  fruktigt, mandel, <br /> plommon
                </div>
              </div>

              <div className="flex flex-col items-center p-6 bg-[#f4f1ed]">
                <div className="font-outfit text-black text-lg">FARG</div>
                <div className=" text-sm  mt-4 text-gray-600">
                  orangerosa, oklar
                </div>
              </div>
            </div>
          </div>

          <div className="m-8 text-xl font-outfit flex items-center justify-center">
            MAT SOM PASSER TILL VINET
          </div>
          <div className="flex gap-32">
            <div className="flex flex-col items-center">
              <Image src={lamb} alt="Lamb" className="object-cover w-20 h-20" />
              <div className="text-sm mt-6 text-gray-600">grönsaker</div>
            </div>

            <div className="flex flex-col items-center">
              <Image src={meat} alt="Meat" className="object-cover w-20 h-20" />
              <div className="text-sm mt-6 text-gray-600">lamm</div>
            </div>
            <div className="flex flex-col items-center">
              <Image
                src={vegetables}
                alt="Vegetables"
                className="object-cover w-20 h-20"
              />
              <div className="text-sm mt-6 text-gray-600">nöt</div>
            </div>
            <div className="flex flex-col items-center">
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
};

export default ProductSection;
