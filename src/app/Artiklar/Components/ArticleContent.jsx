import React from "react";
import Image from "next/image";
import Link from "next/link";
import grape from "@/public/grape.png";
import corkscrew from "@/public/corkscrew.png";
import food1 from "@/public/food1.png";
import SenasteNytt from "../../../app/Components/SenasteNytt";
import WineTourism from "../../../app/Components/WineTourism";
import Card from "../../../app/Components/Card";

const ArticleContent = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:gap-10">
        <div className="w-full lg:w-[75%] mt-4 space-y-6">
          <div className="text-sm font-outfit">
            <span className="text-red-500">Hem </span>» Artiklar om vin
          </div>
          <div className="text-3xl sm:text-4xl font-outfit -mb-8 sm:-mb-16">
            <h1>Artiklar om vin</h1>
          </div>
          <Card />
          <div className="-mt-6 sm:-mt-12">
            <Card />
          </div>
          <div className="-mt-6 sm:-mt-12">
            <Card />
          </div>
        </div>
        {/* Right Section */}
        <div className="w-full lg:w-[25%] mt-8 lg:mt-10">
          <div className="lg:sticky lg:top-8 space-y-8">
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
                        Är du alltid på jakt efter ekologiskt och hållbart vin
                        och kanske vill ändra din mat till...
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

export default ArticleContent;
