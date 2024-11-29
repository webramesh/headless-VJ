'use client';
import Image from 'next/image';
import PieChart from './Piechart';
import message from '@/public/message.png';
import fb from '@/public/fbblack.png';
import twitter from '@/public/twitterblack.png';
import Link from 'next/link';
import { useState } from 'react';
import BreadCrumb from '../../Components/breadcrumb/BreadCrumb';
import jsPDF from 'jspdf';
import FactBoxMatCombinationer from '../../[category]/[slug]/components/FactBoxMatCombinationer';
import FactBoxDescription from '../../[category]/[slug]/components/FactBoxDescription';
import FactBoxMoreInfo from '../../[category]/[slug]/components/FactBoxMoreInfo';
export default function ProductSection({ product }) {
  const matkombinationer = product?.matkombinationer?.nodes;

  const smakar = product?.smakar?.nodes;
  const aromer = product?.aromer?.nodes;
  const fargers = product?.fargers?.nodes;

  const [showReadMore, setShowReadMore] = useState(false);
  const { title, featuredImage, fieldsProduct, produktslander, produktTyper } = product;
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
    vintage,
    tasteClock1FyllighetSotma,
    tasteClock2Fyllighetstravhet,
    tasteClock3Fruktsyra,

    caloriesInAlcPer15cl,
    caloriesInAlcPerContainerVolume,
    totalCaloriesPer15Cl,
    totalCaloriesPerLitter,
    totalCaloriesPerContainerVolume,
    allergener,
    pricePerLitter,
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

  const viwePdf = () => {
    // Create a new PDF document
    const doc = new jsPDF();

    // Add the logo at the top center
    const logoUrl =
      'https://static.vecteezy.com/system/resources/previews/012/667/615/non_2x/go-to-web-icon-for-your-web-design-logo-infographic-ui-vector.jpg'; // Path to the image in the public folder
    const pageWidth = doc.internal.pageSize.getWidth(); // Get the width of the page
    const logoWidth = 50; // Width of the logo
    const logoHeight = 20; // Height of the logo
    const centerX = (pageWidth - logoWidth) / 2; // Calculate the X position to center the logo

    if (logoUrl) {
      doc.addImage(logoUrl, 'JPEG', centerX, 10, logoWidth, logoHeight); // Add the logo image
    }

    // Set font size for the content
    doc.setFontSize(12);

    // Add product details
    let yOffset = 40; // Initial Y position after the logo

    doc.text('Price: ' + pice, 10, yOffset);
    yOffset += 10;
    doc.text('Artikel nr: ' + productCode, 10, yOffset);
    yOffset += 10;
    doc.text('Sortiment: ' + wineSortiment, 10, yOffset);
    yOffset += 10;
    doc.text('Årgång: ' + vintage, 10, yOffset);
    yOffset += 10;
    doc.text('Volym: ' + bottlePackageVolume, 10, yOffset);
    yOffset += 10;
    doc.text('Allergener: ' + allergener, 10, yOffset);
    yOffset += 10;

    // Add calorie details
    doc.text('Calories in Alcohol per 15cl: ' + caloriesInAlcPer15cl, 10, yOffset);
    yOffset += 10;
    doc.text('Calories in Alcohol per Container Volume: ' + caloriesInAlcPerContainerVolume, 10, yOffset);
    yOffset += 10;
    doc.text('Total Calories per 15cl: ' + totalCaloriesPer15Cl, 10, yOffset);
    yOffset += 10;
    doc.text('Total Calories per Liter: ' + totalCaloriesPerLitter, 10, yOffset);
    yOffset += 10;
    doc.text('Total Calories per Container Volume: ' + totalCaloriesPerContainerVolume, 10, yOffset);
    yOffset += 10;

    // Add price per liter
    doc.text('Price per Liter: ' + pricePerLitter, 10, yOffset);

    // Convert the PDF to a Blob
    const blob = doc.output('blob');

    // Create an object URL for the Blob
    const url = URL.createObjectURL(blob);

    // Open the PDF in a new window
    window.open(url);
  };
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
              <div className="absolute">
                {fieldsProduct?.productLabels?.map((label) => {
                  const productLabel = label.toLowerCase();
                  return (
                    <div key={Math.random()}>
                      {productLabel === 'new' && (
                        <Image src="/ekologisk.svg" width={50} height={50} className="my-1" alt="new" />
                      )}
                      {productLabel === 'available only online' && (
                        <Image src="/ekologisk.svg" width={50} height={50} className="my-1" alt="ekologisk" />
                      )}
                      {productLabel === 'organic' && (
                        <Image src="/vegan.svg" width={50} height={50} className="my-1" alt="vegan" />
                      )}
                      {productLabel === 'vegan' && (
                        <Image src="/vegan.svg" width={50} height={50} className="my-1" alt="vegan" />
                      )}
                      {productLabel === 'best seller' && (
                        <Image src="/best-seller.svg" width={50} height={50} className="my-1" alt="best-seller" />
                      )}
                      {productLabel === 'family winery' && (
                        <Image src="/family.svg" width={50} height={50} className="my-1" alt="Family Winery" />
                      )}
                      {productLabel === 'verified by vjse' && (
                        <Image src="/verified.svg" width={50} height={50} className="my-1" alt="Verified By VJSE" />
                      )}

                      {productLabel === 'featured' && (
                        <Image src="/vegan.svg" width={50} height={50} className="my-1" alt="Featured" />
                      )}
                      {productLabel === 'on sale' && (
                        <Image src="/vegan.svg" width={50} height={50} className="my-1" alt="On Sale" />
                      )}

                      {productLabel === 'show wt information' && (
                        <Image src="/vegan.svg" width={50} height={50} className="my-1" alt="Show WT Information" />
                      )}
                    </div>
                  );
                })}
              </div>
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
                  <button className="text-red-500" onClick={viwePdf}>
                    Skriv ut PDF
                  </button>
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
          {/* <FactBoxDescription fieldsProduct={fieldsProduct} /> */}
          <div className="mt-4 bg-[#f4f1ed] w-full">
            <FactBoxDescription fieldsProduct={fieldsProduct} />
          </div>
          {/* pie chart */}
          {total > 0 && (
            <div className="bg-gray-50 mt-4 pb-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <PieChart data={pieChartData1} title="Smakintensitet" total={total} />
                <PieChart data={pieChartData2} title="Fyllighet/Strävhet" total={total} />
                <PieChart data={pieChartData3} title="Syra" total={total} />
              </div>
            </div>
          )}

          {/* end of pie chart */}

          {((smakar && smakar.length > 0) || (aromer && aromer.length > 0) || (fargers && fargers.length > 0)) && (
            <div className=" bg-gray-50 mt-4 py-4">
              <FactBoxMoreInfo smakar={smakar} aromer={aromer} fargers={fargers} />
            </div>
          )}
          {/* <div className="m-8 py-3  text-xl  flex items-center justify-center">MAT SOM PASSAR TILL VINET</div> */}
          {matkombinationer.length > 0 && (
            <div className="bg-[#f4f1ed] mt-4 py-4">
              <h3 className="  text-xl  flex items-center justify-center">MAT SOM PASSAR TILL VINET</h3>
              <FactBoxMatCombinationer matkombinationer={matkombinationer} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
