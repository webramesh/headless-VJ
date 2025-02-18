'use client';
import Image from 'next/image';
import PieChart from './Piechart';
import message from '@/public/message.png';
import fb from '@/public/fbblack.png';
import twitter from '@/public/twitterblack.png';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import BreadCrumb from '../../Components/breadcrumb/BreadCrumb';
import FactBoxMatCombinationer from '../../[category]/[slug]/components/FactBoxMatCombinationer';
import FactBoxMoreInfo from '../../[category]/[slug]/components/FactBoxMoreInfo';
import ProductLabelsWithTooltips from './ProductLabelsWithTooltip';
import { generatePdf } from '@/src/utils/generatePDF';
import { EmailShareButton, FacebookShareButton, TwitterShareButton } from 'react-share';
import DryckerLinks from './DryckerLinks';

export default function NewProdSection({ product, producenterData, dryckerURIs }) {
  const matkombinationer = product?.matkombinationer?.nodes;

  const smakar = product?.smakar?.nodes;
  const aromer = product?.aromer?.nodes;

  const [showReadMore, setShowReadMore] = useState(false);
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
    extraReadMore1,
    extraReadMore2,
    extraReadMore3,
    pice,
    vintage,
    productCode,
    buyLink,
    tasteClock1FyllighetSotma,
    tasteClock2Fyllighetstravhet,
    tasteClock3Fruktsyra,
  } = fieldsProduct;

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

  const viwePdf = () => {
    generatePdf(fieldsProduct, product);
  };

  const words = productShortText.split(' ');
  const shortDescription = words.slice(0, 50).join(' ');
  const longDescription = words.slice(50).join(' ');

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
        {/* Breadcrumb */}
        <div className="text-xs md:text-sm mb-2">
          <BreadCrumb title1="Produkter" link1="/produkter" title2={title} />
        </div>
        {/* Wine Type and Article */}
        <div className="flex justify-between items-center mb-2 text-xs md:text-sm">
          <div className="flex gap-2 flex-wrap">
            {displayTypes.map((type, index) => (
              <div
                key={index}
                className={`text-white rounded px-2`}
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
        </div>
        <div className="text-md text-gray-500">Artikel: {productCode}</div>
        {/* Title */}
        {isMobile ? (
          <h1 className="text-black text-xl md:text-2xl mb-2 z-10">
            {title} {vintage && <span className="text-gray-400">{` ${vintage}`}</span>}
          </h1>
        ) : (
          <div className="text-black text-xl md:text-2xl mb-2 z-10">
            {title} {vintage && <span className="text-gray-400">{` ${vintage}`}</span>}
          </div>
        )}
        {/* Country and Type */}
        <div className="flex gap-2 items-center mb-4 z-10">
          {product?.produktslander?.nodes?.map((node, index) =>
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
          <DryckerLinks produktTyper={produktTyper} produktslander={produktslander} dryckerURIs={dryckerURIs} />
        </div>
        {/* Price */}
        <div className="text-xl md:text-2xl mb-6 z-10">
          {fieldsProduct.salePrice ? (
            <>
              <span className="mb-2">{pice}:-</span>
              <span className="ml-2 text-red-600 line-through"> {fieldsProduct.salePrice}:-</span>
            </>
          ) : (
            <span>{pice}:-</span>
          )}
        </div>
        {/* Wine Image and Details Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="md:col-span-1 relative">
            <div className="absolute left-0 top-6 z-10">
              <ProductLabelsWithTooltips fieldsProduct={fieldsProduct} />
            </div>
            <Image
              src={featuredImage?.node?.sourceUrl || '/wine-placeholder.webp'}
              alt={`${title} från www.vinjournalen.se`}
              title={`${title} - Vinjournalen.se`}
              className="h-[300px] md:h-[400px] w-auto object-contain z-1"
              width={300}
              height={500}
              priority={true}
            />
            <span className="absolute top-0 ">
              {fieldsProduct?.salePrice && (
                <span className="bg-red-600 inline text-white right-0 px-[8px] py-1 rounded-md text-xs">Prissänkt</span>
              )}
            </span>
          </div>
          {/* Product Details Column */}
          <div className="flex flex-col gap-4 md:col-span-2 md:justify-center">
            {/* Basic Details - Tablet 2-column layout */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex flex-col text-xs md:text-sm text-left">
                <div className="text-gray-500 font-light">VOLYM</div>
                <div className="font-light ">
                  {fieldsProduct?.bottlePackageVolume ? <p>{fieldsProduct?.bottlePackageVolume} ml </p> : <p>N/A</p>}
                </div>
              </div>
              <div className="flex flex-col text-xs md:text-sm text-left">
                <div className="text-gray-500 font-light">ALKOHOL</div>
                <div className="font-light">
                  {fieldsProduct?.alcohol ? <p>{fieldsProduct?.alcohol} % </p> : <p>N/A</p>}
                </div>
              </div>
              <div className="flex flex-col text-left text-xs md:text-sm">
                <div className="text-gray-500 font-light">DRUVOR</div>
                <div className="font-light">
                  {fieldsProduct?.composition ? <p>{fieldsProduct?.composition} </p> : <p>N/A</p>}
                </div>
              </div>
              <div className="flex flex-col text-left text-xs md:text-sm">
                <div className="text-gray-500 font-light">SORTIMENT</div>
                <div className="font-light">
                  {fieldsProduct?.wineSortiment ? <p>{fieldsProduct?.wineSortiment[0]}</p> : <p>N/A</p>}
                </div>
              </div>
              <div className="flex flex-col text-xs md:text-sm text-left">
                <div className="text-gray-500 font-light">PRODUCENT</div>
                <div className="font-light text-red-500">
                  {producenterData?.title ? <Link href={`#more-on-product`}>{producenterData.title}</Link> : 'N/A'}
                </div>
              </div>
            </div>

            {/* Food Pairing - Tablet layout */}
            {matkombinationer?.length > 0 && (
              <div className="mt-2 border-t-2 border-gray-200">
                <div className="text-gray-500 font-light text-left mb-4">MAT SOM PASSAR</div>
                <FactBoxMatCombinationer matkombinationer={matkombinationer} />
              </div>
            )}
          </div>
        </div>
        {/* Description */}
        <div className="text-xs text-gray-600 mb-2 md:mb-4">
          {shortDescription}
          {words.length > 30 && (
            <>
              {showReadMore ? (
                <>
                  {longDescription}
                  <span
                    className="inline font-sm text-pink-500 cursor-pointer decoration-dotted hover:underline underline-offset-4 w-1/3 md:w-3/12"
                    onClick={() => setShowReadMore(false)}
                  >
                    {' Läs mindre'}
                  </span>
                </>
              ) : (
                <span
                  className="inline font-sm text-pink-500 cursor-pointer decoration-dotted hover:underline underline-offset-4 w-1/3 md:w-3/12"
                  onClick={() => setShowReadMore(true)}
                >
                  {' Läs mer'}
                </span>
              )}
            </>
          )}
        </div>
        {showReadMore && (
          <div className="text-xs text-gray-600 mb-4">
            {extraReadMore1}
            {extraReadMore2}
            {extraReadMore3}
          </div>
        )}
        {/* Buy Section */}
        <div className="bg-[#dfece2] p-2 md:px-4 rounded-md mb-2">
          {buyLink ? (
            <Link
              href={buyLink || '#'}
              target="_blank"
              className="w-full text-center text-sm border rounded-full p-1 bg-[#0C7054] text-white block mb-2"
            >
              Köp på Systembolaget
            </Link>
          ) : (
            <div className="w-full text-center text-sm border-[#0C7054] border rounded-full p-1 bg-gray-200 text-gray-600 cursor-not-allowed block mb-2">
              Produkten har utgått
            </div>
          )}

          <div className="text-gray-500 text-[0.7rem] mb-2">
            Vinjournalen.se har ingen egen försäljning utan hela köpet genomförs på systembolaget.se. Vinjournalen.se
            har heller ingen koppling till eller kommersiellt samarbete med Systembolaget.
          </div>
          <div className="flex justify-between items-center">
            <div className="text-black text-xs">Berätta för en vän</div>
            <div className="flex gap-4 md:gap-6">
              <EmailShareButton url={typeof window !== 'undefined' ? window.location.href : ''} title={title}>
                <Image src={message || '/placeholder.svg'} alt="Messagebox" className="object-cover w-3 h-3" />
              </EmailShareButton>
              <FacebookShareButton url={typeof window !== 'undefined' ? window.location.href : ''} title={title}>
                <Image
                  src={fb || '/placeholder.svg'}
                  alt="Facebook icon"
                  className="object-cover cursor-pointer w-3 h-3"
                />
              </FacebookShareButton>
              <TwitterShareButton url={typeof window !== 'undefined' ? window.location.href : ''} title={title}>
                <Image
                  src={twitter || '/placeholder.svg'}
                  alt="Twitter"
                  className="object-cover cursor-pointer w-3 h-3"
                />
              </TwitterShareButton>
            </div>
            <div className="w-fit p-[2px] border text-gray-500 text-[0.7rem] border-[#0C7054]  rounded items-center bg-white">
              <button className="text-gray-700 w-full" onClick={viwePdf}>
                Skriv ut PDF
              </button>
            </div>
          </div>
        </div>
        <div>
          {[tasteClock1FyllighetSotma, tasteClock2Fyllighetstravhet, tasteClock3Fruktsyra].filter(Boolean).length >=
            2 && (
            <div className="grid grid-cols-3 gap-2">
              {tasteClock1FyllighetSotma && <PieChart data={pieChartData1} title="Smakintensitet" total={total} />}
              {tasteClock2Fyllighetstravhet && (
                <PieChart data={pieChartData2} title="Fyllighet/Strävhet" total={total} />
              )}
              {tasteClock3Fruktsyra && <PieChart data={pieChartData3} title="Syra" total={total} />}
            </div>
          )}
        </div>
        {((smakar && smakar.length > 0) || (aromer && aromer.length > 0)) && (
          <div className="bg-gray-50 mt-4 py-4">
            <FactBoxMoreInfo smakar={smakar} aromer={aromer} />
          </div>
        )}
      </div>
      {/* Desktop Layout */}
      <div className="hidden lg:flex gap-6 items-center">
        <div className="w-1/3">
          <div className="flex flex-col gap-1">
            <div className="text-xs z-10 -my-2">
              <BreadCrumb title1="Produkter" link1="/produkter" title2={title} />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-wrap gap-2 z-10 w-full">
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
                {fieldsProduct?.salePrice && (
                  <span className="bg-red-600 inline text-white right-0 px-[8px] py-1 rounded-md text-xs">
                    Prissänkt
                  </span>
                )}
              </div>
            </div>
            <div className="text-sm text-gray-500 z-10">Artikel: {productCode}</div>
            <div className="relative">
              <div className="absolute left-0 top-0 z-10">
                <ProductLabelsWithTooltips fieldsProduct={fieldsProduct} />
              </div>
              <Image
                src={featuredImage?.node?.sourceUrl || '/wine-placeholder.webp'}
                alt={`${title} från www.vinjournalen.se`}
                title={`${title} - Vinjournalen.se`}
                className="mx-auto -mt-16 h-[450px] z-0"
                width={250}
                height={450}
                priority={true}
              />
            </div>
          </div>
        </div>
        <div className="w-2/3">
          <div className="flex gap-4 items-center">
            <div className="w-[70%] flex flex-col gap-2 pr-2">
              {isMobile ? (
                <div className="items-start text-2xl">
                  {title} {vintage && <span className="text-gray-400">{` ${vintage}`}</span>}
                </div>
              ) : (
                <h1 className="items-start text-2xl">
                  {title} {vintage && <span className="text-gray-400">{` ${vintage}`}</span>}
                </h1>
              )}
              <div className="flex gap-2 items-center text-center">
                <div>
                  {product?.produktslander?.nodes?.map((node, index) =>
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
                <DryckerLinks produktTyper={produktTyper} produktslander={produktslander} dryckerURIs={dryckerURIs} />
              </div>
              <div className="text-xl">
                {fieldsProduct.salePrice ? (
                  <>
                    <span className="mb-0">{pice}:-</span>
                    <span className="ml-2 text-red-600 line-through"> {fieldsProduct.salePrice}:-</span>
                  </>
                ) : (
                  <span>{pice}:-</span>
                )}
              </div>
              <div className="text-xs text-gray-600 mt-2">
                {shortDescription}
                {words.length > 30 && (
                  <>
                    {showReadMore ? (
                      <>
                        {longDescription}
                        <span
                          className="inline text-pink-500 cursor-pointer decoration-dotted hover:underline underline-offset-4 w-1/3 md:w-3/12"
                          onClick={() => setShowReadMore(false)}
                        >
                          {' Läs mindre'}
                        </span>
                      </>
                    ) : (
                      <span
                        className="inline text-pink-500 cursor-pointer decoration-dotted hover:underline underline-offset-4 w-1/3 md:w-3/12"
                        onClick={() => setShowReadMore(true)}
                      >
                        {' Läs mer'}
                      </span>
                    )}
                  </>
                )}
              </div>
              {showReadMore && (
                <div className="text-sm text-gray-600 mt-2">
                  {extraReadMore1}
                  {extraReadMore2}
                  {extraReadMore3}
                </div>
              )}
              <div className="bg-[#dfece2] mt-1 w-full px-1 py-2 rounded-md">
                {buyLink ? (
                  <Link
                    href={buyLink || '#'}
                    target="_blank"
                    className="w-full text-center border text-sm rounded-full p-1 bg-[#0C7054] text-white block hover:bg-[#0A5A40] hover:text-white hover:shadow-lg transition-all duration-300"
                  >
                    Köp på Systembolaget
                  </Link>
                ) : (
                  <div className="w-full text-center text-sm border rounded-full p-1 text-gray-600 bg-gray-200 cursor-not-allowed block border-[#0C7054]">
                    Produkten har utgått
                  </div>
                )}
                <div className="text-gray-500 text-xs p-2">
                  Vinjournalen.se har ingen egen försäljning utan hela köpet genomförs på systembolaget.se.
                  Vinjournalen.se har heller ingen koppling till eller kommersiellt samarbete med Systembolaget.
                </div>
                <div className="flex gap-2 px-2 items-center">
                  <div className="text-black text-sm pr-8">Berätta för en vän</div>
                  <EmailShareButton url={typeof window !== 'undefined' ? window.location.href : ''} title={title}>
                    <Image
                      src={message || '/placeholder.svg'}
                      alt="Messagebox"
                      width={12}
                      height={12}
                      className="object-cover"
                    />
                  </EmailShareButton>
                  <FacebookShareButton url={typeof window !== 'undefined' ? window.location.href : ''} title={title}>
                    <Image
                      src={fb || '/placeholder.svg'}
                      alt="Facebook icon"
                      width={12}
                      height={12}
                      className="object-cover cursor-pointer"
                    />
                  </FacebookShareButton>
                  <TwitterShareButton url={typeof window !== 'undefined' ? window.location.href : ''} title={title}>
                    <Image
                      src={twitter || '/placeholder.svg'}
                      alt="Twitter"
                      width={12}
                      height={12}
                      className="object-cover cursor-pointer"
                    />
                  </TwitterShareButton>
                </div>
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
              {((smakar && smakar.length > 0) || (aromer && aromer.length > 0)) && (
                <div className="bg-gray-50 mt-4 py-2 w-full">
                  <FactBoxMoreInfo smakar={smakar} aromer={aromer} />
                </div>
              )}
            </div>
            <div className="w-[30%] flex flex-col gap-2 items-start border-l-2 pl-10 border-gray-200">
              <div className="flex flex-col text-start">
                <div className="text-gray-500 font-light text-sm">VOLYM</div>
                <div className="font-light text-sm">
                  {fieldsProduct?.bottlePackageVolume ? <p>{fieldsProduct?.bottlePackageVolume} ml </p> : <p>N/A</p>}
                </div>
              </div>
              <div className="flex flex-col text-start">
                <div className="text-gray-500 font-light text-sm">ALKOHOL</div>
                <div className="font-light text-sm">
                  {fieldsProduct?.alcohol ? <p>{fieldsProduct?.alcohol} % </p> : <p>N/A</p>}
                </div>
              </div>
              <div className="flex flex-col text-start">
                <div className="text-gray-500 font-light text-sm">DRUVOR</div>
                <div className="font-light text-sm">
                  {fieldsProduct?.composition ? <p>{fieldsProduct?.composition} </p> : <p>N/A</p>}
                </div>
              </div>
              <div className="flex flex-col text-start">
                <div className="text-gray-500 font-light text-sm">SORTIMENT</div>
                <div className="font-light text-sm">
                  {fieldsProduct?.wineSortiment ? <p>{fieldsProduct?.wineSortiment[0]}</p> : <p>N/A</p>}
                </div>
              </div>
              <div className="flex flex-col text-center md:text-left">
                <div className="text-gray-500 text-sm font-light">PRODUCENT</div>
                <div className="font-light text-sm text-red-500">
                  {producenterData?.title ? <Link href={`#more-on-product`}>{producenterData.title}</Link> : 'N/A'}
                </div>
              </div>
              {matkombinationer?.length > 0 && (
                <div className="w-full">
                  <div className="mt-2 text-gray-500 font-light text-sm">MAT SOM PASSAR</div>
                  <FactBoxMatCombinationer matkombinationer={matkombinationer} />
                </div>
              )}
              <div className="w-full px-2 py-1 border text-xs border-black rounded items-center bg-white hover:shadow-sm hover:bg-gray-50">
                <button className="w-full" onClick={viwePdf}>
                  Skriv ut PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
