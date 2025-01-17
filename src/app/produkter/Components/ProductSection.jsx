'use client';
import Image from 'next/image';
import PieChart from './Piechart';
import message from '@/public/message.png';
import fb from '@/public/fbblack.png';
import twitter from '@/public/twitterblack.png';
import Link from 'next/link';
import { useState } from 'react';
import BreadCrumb from '../../Components/breadcrumb/BreadCrumb';
import FactBoxMatCombinationer from '../../[category]/[slug]/components/FactBoxMatCombinationer';
import FactBoxDescription from '../../[category]/[slug]/components/FactBoxDescription';
import FactBoxMoreInfo from '../../[category]/[slug]/components/FactBoxMoreInfo';
import ProductLabelsWithTooltips from './ProductLabelsWithTooltip';
import { generatePdf } from '@/src/utils/generatePDF';
import { EmailShareButton, FacebookShareButton, TwitterShareButton } from 'react-share';
import { findDepth } from '@/src/utils/utils';

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
    tasteClock1FyllighetSotma,
    tasteClock2Fyllighetstravhet,
    tasteClock3Fruktsyra,
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

  const viwePdf = () => {
    generatePdf(fieldsProduct, product);
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
                {updatedLinks.map((item, i, arr) => (
                  <Link key={i} href={`/drycker/${item.slug}/`}>
                    {i < arr.length - 1 ? item.name + ' | ' : item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mt-4 relative flex  gap-6">
              <div className="w-[10%]">
                {/* The container with absolute positioning */} {/* Add any necessary positioning like top/left */}
                <ProductLabelsWithTooltips fieldsProduct={fieldsProduct} />
              </div>
              <div className="object-cover ">
                {/* Featured Image */}
                <div className="relative">
                  <Image
                    src={featuredImage?.node?.sourceUrl}
                    alt={title}
                    className="mx-auto h-[500px]  "
                    width={300} // Specify the width you want
                    height={500} // Specify the height you want
                    priority={true}
                  />
                  <span className="absolute top-0 right-0">
                    {fieldsProduct?.salePrice && (
                      <span className="bg-red-600 inline text-white right-0 px-[8px] py-1 rounded-md   text-xs">
                        {/* On Sale */}
                        Prissänkt
                      </span>
                    )}
                  </span>
                </div>
                {/* Add image to the bottom right of the featured image */}
                <div className="absolute bottom-0 right-0">
                  {wineSortiment && (
                    <div>
                      {wineSortiment[0] === 'Beställning sortimentet' && (
                        <Image src="/bestalling.svg" width={100} height={100} className="my-1" alt="Beställning" />
                      )}

                      {wineSortiment[0] === 'Fasta Sortimentet' && (
                        <Image src="/fasta.svg" width={100} height={100} className="my-1" alt="Fasta Sortimentet" />
                      )}

                      {wineSortiment[0] === 'Exklusiva sortimentet' && (
                        <Image src="/fasta.svg" width={100} height={100} className="my-1" alt="Exklusiva sortimentet" />
                      )}

                      {wineSortiment[0] === 'Tillfälliga sortimentet' && (
                        <Image
                          src="/tillfalliga.svg"
                          width={100}
                          height={100}
                          className="my-1"
                          alt="Tillfälliga sortimentet"
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>
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
              {updatedLinks.map((item, i, arr) => (
                <Link key={i} href={`/drycker/${item.slug}/`}>
                  {i < arr.length - 1 ? item.name + ' | ' : item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className=" text-sm text-gray-600 mt-2">{productShortText}</div>
          {extraReadMore1 ||
            extraReadMore2 ||
            (extraReadMore3 && (
              <span
                className="inline font-sm text-pink-500 cursor-pointer decoration-dotted hover:underline underline-offset-4 w-1/3 md:w-3/12"
                onClick={() => setShowReadMore(!showReadMore)}
              >
                Läs mer
              </span>
            ))}
          <div
            className={`${showReadMore ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} transition-all duration-500 ease-in-out `}
          >
            <p className="text-sm text-gray-600 mt-2">{extraReadMore1}</p>
            <p className="text-sm text-gray-600 mt-2">{extraReadMore2}</p>
            <p className="text-sm text-gray-600 mt-2">{extraReadMore3}</p>
          </div>
          <div className="bg-[#f9d7e1] mt-6 w-full py-8 px-4 rounded-md">
            <div className="flex flex-col sm:flex-row w-full p-4 justify-between">
              <div className="text-lg">
                {fieldsProduct.salePrice ? (
                  <>
                    <span className="text-xl mb-2 sm:mb-0">Pris: {fieldsProduct.salePrice}:-</span>
                    <span className="ml-2 text-red-600 line-through"> {pice}:-</span>
                  </>
                ) : (
                  <span>Pris: {pice}:-</span>
                )}
              </div>
              <div className=" text-xl text-gray-500">Artikel: {productCode}</div>
            </div>

            <div className="relative p-4">
              <div className="w-full flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
                <div className="w-full sm:w-1/3 p-2 border-2 border-[#eb7272] rounded-full flex justify-center items-center bg-white">
                  <button className="text-gray-700 w-full" onClick={viwePdf}>
                    Skriv ut PDF
                  </button>
                </div>

                {buyLink ? (
                  <Link
                    href={buyLink}
                    target="_blank"
                    className="w-full sm:w-[65%] text-center border rounded-full px-4 py-2 bg-red-600 text-white block "
                  >
                    Köp på Systembolaget
                  </Link>
                ) : (
                  <div className="w-full sm:w-[65%] text-center border rounded-full px-4 py-2 bg-red-200 text-gray-600  cursor-not-allowed">
                    Produkten har utgått
                  </div>
                )}
              </div>
            </div>
            <div className="text-gray-500 text-sm  p-4">
              Vinjournalen.se har ingen egen försäljning utan hela köpet genomförs på systembolaget.se. Vinjournalen.se
              har heller ingen koppling till eller kommersiellt samarbete med Systembolaget.
            </div>
            <div className="flex p-4 gap-6 items-center">
              <EmailShareButton url={typeof window !== 'undefined' ? window.location.href : ''} title={title}>
                <Image src={message} alt="Messagebox" className="object-cover" />
              </EmailShareButton>
              <FacebookShareButton url={typeof window !== 'undefined' ? window.location.href : ''} title={title}>
                <Image src={fb} alt="Facebook icon" className="object-cover cursor-pointer" />
              </FacebookShareButton>
              <TwitterShareButton url={typeof window !== 'undefined' ? window.location.href : ''} title={title}>
                <Image src={twitter} alt="Twitter" className="object-cover cursor-pointer" />
              </TwitterShareButton>
              <div className="text-black text-sm">Berätta för en vän</div>
            </div>
          </div>

          <div className="mt-4 bg-[#f4f1ed] w-full py-8 px-4 rounded-md">
            <div className="flex items-center justify-between mt-4 mb-4 px-6">
              {product?.produktslander?.nodes?.map((node, index) =>
                node?.parent === null && node?.flag?.flagImage?.node?.sourceUrl ? (
                  <Link key={index} href={`/lander/${node?.slug}/`}>
                    <Image src={node.flag.flagImage.node.sourceUrl} width={40} height={40} alt={node.name} />
                  </Link>
                ) : null
              )}
              <h2 className="text-2xl  text-center ">Faktaruta</h2>
              <span></span>
            </div>
            <FactBoxDescription fieldsProduct={fieldsProduct} />
          </div>

          {((smakar && smakar.length > 0) || (aromer && aromer.length > 0) || (fargers && fargers.length > 0)) && (
            <div className=" bg-gray-50 mt-4 py-4">
              <FactBoxMoreInfo smakar={smakar} aromer={aromer} fargers={fargers} />
            </div>
          )}
          {[tasteClock1FyllighetSotma, tasteClock2Fyllighetstravhet, tasteClock3Fruktsyra].filter(Boolean).length >=
          2 ? (
            <div className="bg-gray-50 mt-4 pb-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {tasteClock1FyllighetSotma && <PieChart data={pieChartData1} title="Smakintensitet" total={total} />}
                {tasteClock2Fyllighetstravhet && (
                  <PieChart data={pieChartData2} title="Fyllighet/Strävhet" total={total} />
                )}
                {tasteClock3Fruktsyra && <PieChart data={pieChartData3} title="Syra" total={total} />}
              </div>
            </div>
          ) : null}

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
