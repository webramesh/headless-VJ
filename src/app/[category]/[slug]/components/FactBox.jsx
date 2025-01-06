import Image from 'next/image';
import FactBoxDescription from './FactBoxDescription';
import CatPiechart from '../../Components/CatPiechart';
import FactBoxMoreInfo from './FactBoxMoreInfo';
import FactBoxMatCombinationer from './FactBoxMatCombinationer';

const FactBox = ({ recommendedProduct, smakar, aromer, fargers, matkombinationer }) => {
  const fieldsProduct = recommendedProduct?.fieldsProduct;

  const tasteClock1FyllighetSotma = fieldsProduct?.tasteClock1FyllighetSotma;
  const tasteClock2Fyllighetstravhet = fieldsProduct?.tasteClock2Fyllighetstravhet;
  const tasteClock3Fruktsyra = fieldsProduct?.tasteClock3Fruktsyra;

  const total = 12;

  const pieChartData1 = [{ value: tasteClock1FyllighetSotma }, { value: total - tasteClock1FyllighetSotma }];
  const pieChartData2 = [{ value: tasteClock2Fyllighetstravhet }, { value: total - tasteClock2Fyllighetstravhet }];
  const pieChartData3 = [{ value: tasteClock3Fruktsyra }, { value: total - tasteClock3Fruktsyra }];

  return (
    <>
      <div className="block xl:grid grid-cols-2 justify-items-stretch items-center pt-4">
        <div className="mb-4 xl:mb-0 text-left flex items-center gap-3 container mx-auto px-4">
          {recommendedProduct?.produktslander?.nodes?.map((node, index) =>
            node?.parent === null && node?.flag?.flagImage?.node?.sourceUrl ? (
              <Image key={index} src={node.flag.flagImage.node.sourceUrl} width={40} height={40} alt={node.name} />
            ) : null
          )}

          <div>
            <h3 className="text-sm xl:text-md text-black font-medium">{recommendedProduct?.title}</h3>
            <h2 className="text-left text-gray-600"> Pris: {fieldsProduct?.pice} :- </h2>
          </div>
        </div>

        <div className="block text-center mt-3 xl:mt-0 xl:text-left xl:flex justify-between items-center text-gray-600 text-sm">
          <h2 className=""> Artikel nr: {fieldsProduct?.productCode} </h2>

          {fieldsProduct?.buyLink ? (
            <div className="bg-[#ED0927] block mt-3 xl:mt-0 px-4 py-2 text-white rounded-md text-center hover:bg-[#fe4c5e] transition-colors">
              Köp på Systembolaget
            </div>
          ) : (
            <div className="w-full sm:w-[65%] text-center border rounded-md px-4 py-2 bg-red-200 text-gray-600 cursor-not-allowed">
              Produkten har utgått
            </div>
          )}
        </div>
      </div>
      <FactBoxDescription fieldsProduct={fieldsProduct} />
      <div className="mb-3">
        <>
          {(tasteClock1FyllighetSotma || tasteClock2Fyllighetstravhet || tasteClock3Fruktsyra) && <hr />}

          {/* for xl and larger screens */}
          <div className="hidden xl:grid grid-cols-6 justify-between items-center">
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
              <div className="before:absolute before:top-1/2 before:left-0 before:h-[40%] before:w-[2px] before:-translate-y-1/2 before:bg-gray-300">
                {matkombinationer?.length > 0 && <FactBoxMatCombinationer matkombinationer={matkombinationer} />}
              </div>
            </div>
          </div>

          {/* for screens up to xl */}
          <div className="xl:hidden block">
            {/* Pie Charts Row */}
            {tasteClock1FyllighetSotma || tasteClock2Fyllighetstravhet || tasteClock3Fruktsyra ? (
              <div className="grid grid-cols-3 justify-center items-center mb-8">
                <div className="col-span-1">
                  {tasteClock1FyllighetSotma && (
                    <CatPiechart data={pieChartData1} title="Smakintensitet" total={total} />
                  )}
                </div>
                <div className="col-span-1">
                  {tasteClock2Fyllighetstravhet && (
                    <CatPiechart data={pieChartData2} title="Fyllighet/Strävhet" total={total} />
                  )}
                </div>
                <div className="col-span-1">
                  {tasteClock3Fruktsyra && <CatPiechart data={pieChartData3} title="Syra" total={total} />}
                </div>
              </div>
            ) : null}

            {/* MatCombinationer Section */}
            {matkombinationer?.length > 0 && (
              <div className="mt-6">
                <FactBoxMatCombinationer matkombinationer={matkombinationer} />
              </div>
            )}
          </div>
        </>
      </div>
      <FactBoxMoreInfo smakar={smakar} aromer={aromer} fargers={fargers} />
    </>
  );
};

export default FactBox;
