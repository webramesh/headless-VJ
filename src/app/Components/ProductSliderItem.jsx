'use client';
import Image from 'next/image';
import PieChart from '../produkter/Components/Piechart';

import Link from 'next/link';
import { useState, useEffect } from 'react';

import FactBoxMatCombinationer from '../[category]/[slug]/components/FactBoxMatCombinationer';

import ProductLabelsWithTooltips from '../produkter/Components/ProductLabelsWithTooltip';

import { findDepth } from '@/src/utils/utils';

export default function ProductSliderItem({ product }) {
  const producenterData = product?.fieldsProduct?.produkterproducer?.nodes[0];
  const matkombinationer = product?.matkombinationer?.nodes;

  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { title, featuredImage, fieldsProduct, produktslander, produktTyper, wineStyles } = product;
  const {
    productShortText,
    pice,
    vintage,
    productCode,
    buyLink,
    tasteClock1FyllighetSotma,
    tasteClock2Fyllighetstravhet,
    tasteClock3Fruktsyra,
    salePrice,
    bottlePackageVolume,
    alcohol,
    composition,
    wineSortiment,
  } = fieldsProduct;

  const typer = produktTyper?.nodes?.filter((type) => type.parent !== null);
  const sortedLanders = [...produktslander.nodes].sort((a, b) => {
    const depthB = findDepth(b, produktslander.nodes);
    const depthA = findDepth(a, produktslander.nodes);
    return depthA - depthB;
  });
  const links = [...typer, ...sortedLanders];
  const updatedLinks = links.reduce((acc, current, index) => {
    if (index === 0) {
      acc.push(current);
    } else {
      const newSlug = `${acc[index - 1].slug}/${current.slug}`;
      acc.push({ ...current, slug: newSlug });
    }
    return acc;
  }, []);

  const total = 12;
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

  //Function to get the main wine type and characteristic type
  const getDisplayTypes = () => {
    if (!produktTyper?.nodes) return [];
    const mainType = produktTyper.nodes.find((type) => type.parent !== null && type.name !== 'Vin');
    const characteristicType = produktTyper.nodes.find((type) => type.parent === null && type.name !== 'Vin');
    return [mainType, characteristicType].filter(Boolean);
  };

  const displayTypes = getDisplayTypes();

  return (
    <div className="container mx-auto p-4 mt-0 md:mt-2">
      {/* Mobile and Tablet Layout */}
      <div className="block lg:hidden">
        {/* Wine Type and Article */}
        <div className="flex justify-between items-center mb-2 text-xs md:text-sm">
          <div className="flex gap-2 flex-wrap">
            {displayTypes.map((type, index) => (
              <div
                key={index}
                className={`text-white rounded px-2 text-sm`}
                style={{
                  backgroundColor: type?.categoriesImagesAndOtherFields?.categorycolorpicker || '#dc2626', // Fallback to red-600
                }}
              >
                {type.name}
              </div>
            ))}
            {wineStyles?.nodes.map((style, index) => (
              <div
                key={index}
                className={`text-white rounded px-2 text-sm`}
                style={{
                  backgroundColor:
                    style?.categoriesImagesAndOtherFields?.categorycolorpicker || // Dynamic color
                    (index === 0 ? '#919788' : '#8B8C88'), // Fallback colors
                }}
              >
                {style.name}
              </div>
            ))}
          </div>
          <div className="text-md text-gray-500">Artikel: {productCode}</div>
        </div>
        {/* Title */}
        {isMobile ? (
          <div className="text-black text-xl md:text-2xl mb-2 z-10">
            {title} {vintage && <span className="text-gray-400">{` ${vintage}`}</span>}
          </div>
        ) : (
          <div className="text-black text-xl md:text-2xl mb-2 z-10">
            {title} {vintage && <span className="text-gray-400">{` ${vintage}`}</span>}
          </div>
        )}
        {/* Country and Type */}
        <div className="flex gap-2 items-center mb-4 z-10">
          {produktslander?.nodes?.map((node, index) =>
            node?.parent === null && node?.flag?.flagImage?.node?.sourceUrl ? (
              <Image
                src={node.flag.flagImage.node.sourceUrl || '/placeholder.svg'}
                width={20}
                height={20}
                alt={node.name}
                key={index}
              />
            ) : null
          )}
          <div className="text-red-600 hover:text-red-500 text-sm md:text-base z-10">
            {updatedLinks.map((item, i) => (
              <Link key={i} href={`/drycker/${item.slug}/`}>
                {i < updatedLinks.length - 1 ? `${item.name} | ` : item.name}
              </Link>
            ))}
          </div>
        </div>
        {/* Price */}
        <div className="text-xl md:text-2xl mb-6 z-10">
          {salePrice ? (
            <>
              <span className="mb-2">{pice}:-</span>
              <span className="ml-2 text-red-600 line-through"> {salePrice}:-</span>
            </>
          ) : (
            <span>{pice}:-</span>
          )}
        </div>
        {/* Wine Image and Details Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <div className="md:col-span-1 relative">
            <div className="absolute left-0 top-7 z-10">
              <ProductLabelsWithTooltips fieldsProduct={fieldsProduct} />
            </div>

            <Link href={`/produkter/${product.slug}`}>
              <Image
                src={featuredImage?.node?.sourceUrl || '/placeholder.svg'}
                alt={`${title} från www.vinjournalen.se`}
                title={`${title} - Vinjournalen.se`}
                className="h-[300px] md:h-[400px] w-auto object-contain z-1"
                width={300}
                height={500}
                loading="lazy"
              />
            </Link>
            <span className="absolute top-0 ">
              {salePrice && (
                <span className="bg-red-600 inline text-white right-0 px-[8px] py-1 rounded-md text-xs">Prissänkt</span>
              )}
            </span>
          </div>
          {/* Product Details Column */}
          <div className="flex flex-col gap-4 md:col-span-2">
            {/* Basic Details - Tablet 2-column layout */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col text-xs md:text-sm text-left">
                <div className="text-gray-500 font-light">VOLYM</div>
                <div className="font-light ">{bottlePackageVolume ? <p>{bottlePackageVolume} ml </p> : <p>N/A</p>}</div>
              </div>
              <div className="flex flex-col text-xs md:text-sm text-left">
                <div className="text-gray-500 font-light">ALKOHOL</div>
                <div className="font-light">{alcohol ? <p>{alcohol} % </p> : <p>N/A</p>}</div>
              </div>
              <div className="flex flex-col text-left text-xs md:text-sm">
                <div className="text-gray-500 font-light">DRUVOR</div>
                <div className="font-light">{composition ? <p>{composition} </p> : <p>N/A</p>}</div>
              </div>
              <div className="flex flex-col text-left text-xs md:text-sm">
                <div className="text-gray-500 font-light">SORTIMENT</div>
                <div className="font-light">{wineSortiment ? <p>{wineSortiment[0]}</p> : <p>N/A</p>}</div>
              </div>
              <div className="flex flex-col text-xs md:text-sm text-left">
                <div className="text-gray-500 font-light">PRODUCENT</div>
                <div className="font-light ">
                  {producenterData?.title ? <span>{producenterData.title}</span> : 'N/A'}
                </div>
              </div>
            </div>

            {/* Food Pairing - Tablet layout */}
            <div>
              {matkombinationer?.length > 0 && (
                <div className="">
                  <div className="text-gray-500 font-light text-left mb-4">MAT SOM PASSAR</div>
                  <div className="">
                    <FactBoxMatCombinationer matkombinationer={matkombinationer} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Description */}

        {/* Buy Section */}
        <div className=" p-2 md:px-4 rounded-sm  -mt-2">
          {buyLink ? (
            <Link
              href={buyLink || '#'}
              target="_blank"
              className="w-full text-center border rounded-xl p-2 bg-[#0C7054] text-white block mb-2 relative overflow-hidden animate-shine"
            >
              Köp på Systembolaget
            </Link>
          ) : (
            <div className="w-full text-center  border-[#0C7054] border rounded-xl p-2 bg-gray-200 text-gray-600 cursor-not-allowed block mb-2">
              Produkten har utgått
            </div>
          )}
        </div>
      </div>
      {/* Desktop Layout */}
      <div className="hidden lg:flex gap-6 items-center">
        <div className="w-1/3">
          <div className="flex flex-col gap-1">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 z-10 flex-wrap">
                {displayTypes.map((type, index) => (
                  <div
                    key={index}
                    className={`text-white rounded px-2 text-sm`}
                    style={{
                      backgroundColor: type?.categoriesImagesAndOtherFields?.categorycolorpicker || '#dc2626', // Fallback to red-600
                    }}
                  >
                    {type.name}
                  </div>
                ))}
                {wineStyles?.nodes.map((style, index) => (
                  <div
                    key={index}
                    className={`text-white rounded px-2 text-sm`}
                    style={{
                      backgroundColor:
                        style?.categoriesImagesAndOtherFields?.categorycolorpicker || // Dynamic color
                        (index === 0 ? '#919788' : '#8B8C88'), // Fallback colors
                    }}
                  >
                    {style.name}
                  </div>
                ))}
              </div>
              <div className="mr-0 lg:mr-10 xl:mr-20 2xl:mr-32 z-10">
                {salePrice && (
                  <span className="bg-red-600 inline text-white right-0 px-[8px] py-1 rounded-md text-xs">
                    Prissänkt
                  </span>
                )}
              </div>
            </div>
            <div className="text-base text-gray-500 z-10">Artikel: {productCode}</div>
            <div className="relative">
              <div className="absolute left-0 top-0 z-10">
                <ProductLabelsWithTooltips fieldsProduct={fieldsProduct} />
              </div>
              <Link href={`/produkter/${product.slug}`}>
                <Image
                  src={featuredImage?.node?.sourceUrl || '/placeholder.svg'}
                  alt={`${title} från www.vinjournalen.se`}
                  title={`${title} - Vinjournalen.se`}
                  className="mx-auto -mt-16 h-[450px] z-0"
                  width={250}
                  height={450}
                  loading="lazy"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-2/3">
          <div className="flex gap-4">
            <div className="w-[70%] flex flex-col gap-2 pr-2">
              {isMobile ? (
                <div className="items-start text-2xl">
                  {title} {vintage && <span className="text-gray-400">{` ${vintage}`}</span>}
                </div>
              ) : (
                <div className="items-start text-2xl">
                  {title} {vintage && <span className="text-gray-400">{` ${vintage}`}</span>}
                </div>
              )}
              <div className="flex gap-2 items-center text-center">
                <div>
                  {produktslander?.nodes?.map((node, index) =>
                    node?.parent === null && node?.flag?.flagImage?.node?.sourceUrl ? (
                      <Image
                        src={node.flag.flagImage.node.sourceUrl || '/placeholder.svg'}
                        width={20}
                        height={20}
                        alt={node.name}
                        key={index}
                      />
                    ) : null
                  )}
                </div>
                <div className="text-red-600 hover:text-red-500 text-md">
                  {updatedLinks.map((item, i) => (
                    <Link key={i} href={`/drycker/${item.slug}/`}>
                      {i < updatedLinks.length - 1 ? `${item.name} | ` : item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="text-xl">
                {salePrice ? (
                  <>
                    <span className="mb-0">{pice}:-</span>
                    <span className="ml-2 text-red-600 line-through"> {salePrice}:-</span>
                  </>
                ) : (
                  <span>{pice}:-</span>
                )}
              </div>
              <div className="text-sm text-gray-600 mt-2">{productShortText}</div>

              <div className=" mt-1 w-full p-1 rounded-md">
                {buyLink ? (
                  <Link
                    href={buyLink || '#'}
                    target="_blank"
                    className="w-full text-center text border rounded-xl p-2 bg-[#0C7054] text-white block mb-2 "
                  >
                    Köp på Systembolaget
                  </Link>
                ) : (
                  <div className="w-full text-center  border-[#0C7054] border rounded-xl p-2 bg-gray-200 text-gray-600 cursor-not-allowed block mb-2">
                    Produkten har utgått
                  </div>
                )}
              </div>
              <div>
                {[tasteClock1FyllighetSotma, tasteClock2Fyllighetstravhet, tasteClock3Fruktsyra].filter(Boolean)
                  .length >= 2 && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 ">
                    {tasteClock1FyllighetSotma && (
                      <PieChart data={pieChartData1} title="Smakintensitet" total={total} />
                    )}
                    {tasteClock2Fyllighetstravhet && (
                      <PieChart data={pieChartData2} title="Fyllighet/Strävhet" total={total} />
                    )}
                    {tasteClock3Fruktsyra && <PieChart data={pieChartData3} title="Syra" total={total} />}
                  </div>
                )}
              </div>
            </div>
            <div className="w-[30%] flex flex-col gap-2 items-start justify-center border-l-2 pl-10 border-gray-200 ">
              <div className="flex flex-col text-start">
                <div className="text-gray-500 font-light text-sm">VOLYM</div>
                <div className="font-light text-sm">
                  {bottlePackageVolume ? <p>{bottlePackageVolume} ml </p> : <p>N/A</p>}
                </div>
              </div>
              <div className="flex flex-col text-start">
                <div className="text-gray-500 font-light text-sm">ALKOHOL</div>
                <div className="font-light text-sm">{alcohol ? <p>{alcohol} % </p> : <p>N/A</p>}</div>
              </div>
              <div className="flex flex-col text-start">
                <div className="text-gray-500 font-light text-sm">DRUVOR</div>
                <div className="font-light text-sm">{composition ? <p>{composition} </p> : <p>N/A</p>}</div>
              </div>
              <div className="flex flex-col text-start">
                <div className="text-gray-500 font-light text-sm">SORTIMENT</div>
                <div className="font-light text-sm">{wineSortiment ? <p>{wineSortiment[0]}</p> : <p>N/A</p>}</div>
              </div>
              <div className="flex flex-col text-center md:text-left">
                <div className="text-gray-500 text-sm font-light"> PRODUCENT</div>
                <div className="font-light text-sm ">{producenterData.title}</div>
              </div>
              {matkombinationer?.length > 0 && (
                <div>
                  <div className="mt-2 text-gray-500 font-light text-sm">MAT SOM PASSAR</div>
                  <FactBoxMatCombinationer matkombinationer={matkombinationer} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
