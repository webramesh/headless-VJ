'use client';
import Image from 'next/image';
import PieChart from './Piechart';
import message from '@/public/message.png';
import fb from '@/public/fbblack.png';
import twitter from '@/public/twitterblack.png';
import ellipse from '@/public/ellipse.png';
import lamb from '@/public/lamb.png';
import meat from '@/public/meat.png';
import vegetables from '@/public/vegetables.png';
import chicken from '@/public/chicken.png';
import Link from 'next/link';
import { useState } from 'react';
import BreadCrumb from '../../Components/breadcrumb/BreadCrumb';

export default function ProductSection({ product }) {
  const [showReadMore, setShowReadMore] = useState(false);
  const { title, featuredImage, fieldsProduct, produktslander, produktTyper, smakar, aromer, fragers } = product;
  const {
    productShortText,
    extraReadMore1,
    extraReadMore2,
    extraReadMore3,
    pice,
    bottlePackageVolume,
    productCode,
    buyLink,
    wineSortiment,
    alcohol,
    vintage,
    allergener,
    tasteClock1FyllighetSotma,
    tasteClock2Fyllighetstravhet,
    tasteClock3Fruktsyra,
  } = fieldsProduct;
  const typer = produktTyper?.nodes?.filter((recommendation) => recommendation.name !== 'Vin');

  const total = tasteClock1FyllighetSotma + tasteClock2Fyllighetstravhet + tasteClock3Fruktsyra;
  const pieChartData1 = [
    { name: 'Filled', value: tasteClock1FyllighetSotma },
    { name: 'Empty', value: total - tasteClock1FyllighetSotma },
  ];

  const pieChartData2 = [
    { name: 'Filled', value: tasteClock2Fyllighetstravhet },
    { name: 'Empty', value: total - tasteClock2Fyllighetstravhet },
  ];

  const pieChartData3 = [
    { name: 'Filled', value: tasteClock3Fruktsyra },
    { name: 'Empty', value: total - tasteClock3Fruktsyra },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row gap-6 mt-4 py-8 lg:py-16">
        {/* Left section */}
        <div className="w-full md:w-1/3">
          <BreadCrumb title1="Produkter" link1="/produkter" title2={title} />
          <div className="md:sticky md:top-10 lg:top-28">
            <div className="md:hidden">
              <h1 className=" items-start text-black text-2xl w-full">
                {title} | {bottlePackageVolume} ml
              </h1>
              <div className=" text-red-600 hover:text-red-500 mt-2 text-sm">
                {typer?.map((item, i) => (
                  <span key={i}>{item.name} | </span>
                ))}
                {produktslander.nodes.map((region, i, arr) => (
                  <span key={i}>{i < arr.length - 1 ? region.name + ' | ' : region.name}</span>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <Image
                src={featuredImage?.node?.sourceUrl}
                alt={title}
                className="object-cover w-2/3 md:w-4/5 lg:w-[63%] h-auto mx-auto"
                width={300}
                height={500}
              />
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex flex-col w-full md:w-2/3">
          <div className="hidden md:block">
            <h1 className="items-start text-black text-2xl w-full">
              {title} | {bottlePackageVolume} ml
            </h1>
            <div className="text-red-600 hover:text-red-500 mt-2 text-sm">
              {typer?.map((item, i) => (
                <span key={i}>{item.name} | </span>
              ))}
              {produktslander.nodes.map((region, i, arr) => (
                <span key={i}>{i < arr.length - 1 ? region.name + ' | ' : region.name}</span>
              ))}
            </div>
          </div>
          <div className=" text-sm text-gray-600 mt-2">{productShortText}</div>
          <span
            className="inline font-sm text-pink-500 cursor-pointer decoration-dotted hover:underline underline-offset-4 w-1/3 md:w-3/12"
            onClick={() => setShowReadMore(!showReadMore)}
          >
            Läs mer
          </span>
          <div
            className={`${showReadMore ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} transition-all duration-500 ease-in-out `}
          >
            <p className="text-sm text-gray-600 mt-2">{extraReadMore1}</p>
            <p className="text-sm text-gray-600 mt-2">{extraReadMore2}</p>
            <p className="text-sm text-gray-600 mt-2">{extraReadMore3}</p>
          </div>
          <div className="bg-[#f9d7e1] mt-6 w-full">
            <div className="flex flex-col sm:flex-row w-full p-4 justify-between">
              <div className=" text-xl mb-2 sm:mb-0">pris: {pice} :-</div>
              <div className=" text-xl text-gray-500">Artikel nr: {productCode}</div>
            </div>
            <div className="relative p-4">
              <div className="w-full flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
                <div className="w-full sm:w-1/3 p-2 border-2 border-[#eb7272] rounded-full flex justify-center items-center bg-white">
                  <span className="text-red-500">Skriv ut PDF</span>
                </div>
                <Link
                  href={buyLink}
                  target="_blank"
                  type="submit"
                  className="w-full sm:w-[65%] text-center text-white border-red-600 border bg-red-600 rounded-full px-4 py-2"
                >
                  Köp på Systembolaget
                </Link>
              </div>
            </div>
            <div className="text-gray-500 text-sm  p-4">
              Vinjournalen.se har ingen egen försäljning utan hela köpet genomförs på systembolaget.se. Vinjournalen.se
              har heller ingen koppling till eller kommersiellt samarbete med Systembolaget.
            </div>
            <div className="flex p-4 gap-6">
              <Image src={message} alt="Messagebox" className="object-cover" />
              <Image src={fb} alt="Facebook icon" className="object-cover" />
              <Image src={twitter} alt="Twitter" className="object-cover" />
              <div className=" text-black text-sm">Berätta för en vän</div>
            </div>
          </div>
          <div className="mt-4 bg-[#f4f1ed] w-full">
            <div className="flex items-center p-8">
              <Image src={ellipse} alt="Citran Wine" className="object-cover" />
              <div className="flex-1 text-center  text-xl text-black font-medium">Faktaruta</div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pl-8 mb-4 py-4">
              <div className="flex flex-col">
                <div className=" text-black text-sm">SORTIMENT</div>
                <div className="text-gray-500 text-xs">{wineSortiment}</div>
              </div>
              <div className="flex flex-col">
                <div className=" text-black text-sm">ALKOHOL</div>
                <div className="text-gray-500 text-xs">{alcohol}%</div>
              </div>
              <div className="flex flex-col">
                <div className=" text-black text-sm">ÅRGÅNG</div>
                <div className="text-gray-500 text-xs">{vintage}</div>
              </div>
              <div className="flex flex-col">
                <div className=" text-black text-sm">VOLYM</div>
                <div className="text-gray-500 text-xs">{bottlePackageVolume} ml</div>
              </div>
              <div className="flex flex-col">
                <div className=" text-black text-sm">DRUVOR</div>
                <div className="text-gray-500 text-xs">
                  58% Cabernet Sauvignon <br /> 42% Merlot
                </div>
              </div>
              <div className="flex flex-col">
                <div className=" text-black text-sm">ALLERGENER</div>
                <div className="text-gray-500 text-xs">Innehåller: {allergener}</div>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <PieChart data={pieChartData1} title="Smakintensitet" total={total} />
              <PieChart data={pieChartData2} title="Fyllighet/Strävhet" total={total} />
              <PieChart data={pieChartData3} title="Syra" total={total} />
            </div>
          </div>
          <div className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="flex flex-col items-center p-6 bg-[#f4f1ed]">
                <div className=" text-black text-lg">SMAK</div>
                <div className="text-sm mt-4 text-gray-600 text-center">
                  äpplen, fat, fruktig, <br /> mandel, plommon, söt, <br />
                  röda vinbär
                </div>
              </div>
              <div className="flex flex-col items-center p-6 bg-[#f4f1ed]">
                <div className=" text-black text-lg">AROM</div>
                <div className="text-sm mt-4 text-gray-600 text-center">
                  äpplen, bär, fatkaraktär, <br />
                  fruktigt, mandel, <br /> plommon
                </div>
              </div>
              <div className="flex flex-col items-center p-6 bg-[#f4f1ed]">
                <div className=" text-black text-lg">FÄRG</div>
                <div className="text-sm mt-4 text-gray-600 text-center">orangerosa, oklar</div>
              </div>
            </div>
          </div>
          <div className="m-8 text-xl  flex items-center justify-center">MAT SOM PASSAR TILL VINET</div>
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
              <Image src={vegetables} alt="Vegetables" className="object-cover w-20 h-20" />
              <div className="text-sm mt-6 text-gray-600">nöt</div>
            </div>
            <div className="flex flex-col items-center w-1/2 sm:w-1/4">
              <Image src={chicken} alt="Chicken" className="object-cover w-20 h-20" />
              <div className="text-sm mt-6 text-gray-600">vilt</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
