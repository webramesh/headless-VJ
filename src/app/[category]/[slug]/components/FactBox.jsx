import Image from 'next/image';
import FactBoxDescription from './FactBoxDescription';
import CatPiechart from '../../Components/CatPiechart';
import FactBoxMoreInfo from './FactBoxMoreInfo';
import FactBoxMatCombinationer from './FactBoxMatCombinationer';
import Link from 'next/link';

const FactBox = ({ recommendedProduct, smakar, aromer, fargers, matkombinationer }) => {
  const fieldsProduct = recommendedProduct?.fieldsProduct;

  // const { tasteClock3Fruktsyra, tasteClock2Fyllighetstravhet, tasteClock1FyllighetSotma } = fieldsProduct;
  const tasteClock1FyllighetSotma = fieldsProduct?.tasteClock1FyllighetSotma;
  const tasteClock2Fyllighetstravhet = fieldsProduct?.tasteClock2Fyllighetstravhet;
  const tasteClock3Fruktsyra = fieldsProduct?.tasteClock3Fruktsyra;

  // const total = tasteClock1FyllighetSotma + tasteClock2Fyllighetstravhet + tasteClock3Fruktsyra;
  const total = 12;

  const pieChartData1 = [{ value: tasteClock1FyllighetSotma }, { value: total - tasteClock1FyllighetSotma }];

  const pieChartData2 = [{ value: tasteClock2Fyllighetstravhet }, { value: total - tasteClock2Fyllighetstravhet }];

  const pieChartData3 = [{ value: tasteClock3Fruktsyra }, { value: total - tasteClock3Fruktsyra }];

  return (
    <>
      <div className="block  md:grid grid-cols-2  justify-items-stretch items-center pt-4  ">
        <div className="text-center mb-4  md:mb-0 md:text-left flex items-center  gap-3 container mx-auto px-4">
          <Image
            src={recommendedProduct?.produktslander?.nodes[0]?.flag?.flagImage?.node?.sourceUrl}
            alt={recommendedProduct?.produktslander?.nodes[0]?.name}
            width={30}
            height={30}
            className="object-cover lg:ml-3"
          />
          <div>
            <h3 className="text-sm  lg:text-md  text-black font-medium ">
              {/* {recommendedProduct.title}
           Faktarutaaaa */}
              {recommendedProduct?.title}
            </h3>
            <h2 className="text-left text-gray-600"> Pris: {fieldsProduct?.pice} :- </h2>
          </div>
        </div>

        <div className="block text-center mt-3 md:mt-0  md:text-left md:flex justify-between items-center text-gray-600 text-sm">
          <h2 className=""> Artikel nr: {fieldsProduct?.productCode} </h2>

          {/* <Link
            // href="/"
            href={'buyLink'}
            target="_blank"
            className="bg-[#ED0927]  block  mt-3 md:mt-0 px-4 py-2 text-white rounded-md text-center hover:bg-[#fe4c5e] transition-colors"
          >
            Köp på Systembolaget{' '}
          </Link> */}

          {fieldsProduct?.buyLink ? (
            <Link
              href={fieldsProduct?.buyLink}
              target="_blank"
              // className="w-full sm:w-[65%] text-center border rounded-full px-4 py-2 bg-red-600 text-white block "
              className="bg-[#ED0927]  block  mt-3 md:mt-0 px-4 py-2 text-white rounded-md text-center hover:bg-[#fe4c5e] transition-colors"
            >
              Köp på Systembolaget
            </Link>
          ) : (
            <div className="w-full sm:w-[65%] text-center border rounded-md px-4 py-2 bg-red-200 text-gray-600  cursor-not-allowed">
              Produkten har utgått
            </div>
          )}
        </div>
      </div>
      <FactBoxDescription fieldsProduct={fieldsProduct} />

      <div className="mb-3">
        <>
          {/* for medium to large screen */}
          {(tasteClock1FyllighetSotma || tasteClock2Fyllighetstravhet || tasteClock3Fruktsyra) && <hr />}
          <div className="hidden   md:grid grid-cols-6 justify-between items-center">
            {tasteClock1FyllighetSotma || tasteClock2Fyllighetstravhet || tasteClock3Fruktsyra ? (
              <>
                <div className="col-span-1">
                  <CatPiechart data={pieChartData1} title="Smakintensitet" total={total} />
                </div>
                <div className="col-span-1">
                  <CatPiechart data={pieChartData2} title="Fyllighet/Strävhet" total={total} />
                </div>
                <div className="col-span-1">
                  <CatPiechart data={pieChartData3} title="Syra" total={total} />
                </div>
              </>
            ) : null}

            <div className="col-span-3 relative pl-4">
              {/* Custom Tailwind style for the partial left border */}
              <div className=" before:absolute before:top-1/2 before:left-0 before:h-[40%] before:w-[2px] before:-translate-y-1/2 before:bg-gray-300">
                {matkombinationer?.length > 0 && (
                  <>
                    <FactBoxMatCombinationer matkombinationer={matkombinationer} />
                  </>
                )}
              </div>
            </div>
          </div>
          {/* end of for medium to large screen */}

          {/* for small screen */}
          <div className=" sm:grid sm:grid-cols-2  md:hidden justify-between items-center">
            {tasteClock1FyllighetSotma || tasteClock2Fyllighetstravhet || tasteClock3Fruktsyra ? (
              <div className="grid grid-cols-3 justify-center items-center mb-2">
                <div className="col-span-1">
                  {/* <CatPiechart data={pieChartData1} title="Smakintensitet" total={total} /> */}
                  {tasteClock1FyllighetSotma && (
                    <CatPiechart data={pieChartData1} title="Smakintensitet" total={total} />
                  )}
                </div>
                <div className="col-span-1">
                  {/* <CatPiechart data={pieChartData2} title="Fyllighet/Strävhet" total={total} /> */}
                  {tasteClock2Fyllighetstravhet && (
                    <CatPiechart data={pieChartData2} title="Fyllighet/Strävhet" total={total} />
                  )}
                </div>
                <div className="col-span-1">
                  {/* <CatPiechart data={pieChartData3} title="Syra" total={total} /> */}
                  {tasteClock3Fruktsyra && <CatPiechart data={pieChartData3} title="Syra" total={total} />}
                </div>
              </div>
            ) : null}
            <div className="relative pl-4  ">
              <div className="">
                {matkombinationer?.length > 0 && <FactBoxMatCombinationer matkombinationer={matkombinationer} />}
              </div>
            </div>
          </div>
          {/* end of for small screen */}
        </>
      </div>

      <FactBoxMoreInfo smakar={smakar} aromer={aromer} fargers={fargers} />
    </>
  );
};
export default FactBox;
