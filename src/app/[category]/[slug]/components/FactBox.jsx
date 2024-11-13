import ellipse from '@/public/ellipse.png';
import Image from 'next/image';
import FactBoxDescription from './FactBoxDescription';
import CatPiechart from '../../Components/CatPiechart';
import FactBoxMoreInfo from './FactBoxMoreInfo';
import FactBoxMatCombinationer from './FactBoxMatCombinationer';

const FactBox = ({ recommendedProduct, smakar, aromer, fargers, matkombinationer }) => {
  const fieldsProduct = recommendedProduct?.fieldsProduct;
  // const { tasteClock3Fruktsyra, tasteClock2Fyllighetstravhet, tasteClock1FyllighetSotma } = fieldsProduct;
  const tasteClock1FyllighetSotma = fieldsProduct?.tasteClock1FyllighetSotma;
  const tasteClock2Fyllighetstravhet = fieldsProduct?.tasteClock2Fyllighetstravhet;
  const tasteClock3Fruktsyra = fieldsProduct?.tasteClock3Fruktsyra;

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
    <>
      <div className="block  md:grid grid-cols-2  justify-items-stretch items-center pt-4  ">
        <div className="text-center mb-4  md:mb-0 md:text-left flex items-center  gap-3 container mx-auto px-4">
          <Image src={ellipse} alt="Citran Wine" className="object-cover" />
          <h3 className="text-sm  lg:text-lg  text-black font-medium ">
            {/* {recommendedProduct.title}
           Faktarutaaaa */}
            {recommendedProduct?.title}
          </h3>
        </div>

        <div className="block text-center mt-3 md:mt-0  md:text-left md:flex justify-between items-center text-gray-600 text-sm">
          <h2 className=""> Pris: {fieldsProduct?.pice} :- </h2>
          <h2 className=""> Artikel nr: {fieldsProduct?.productCode} </h2>
        </div>
      </div>
      <FactBoxDescription fieldsProduct={fieldsProduct} />
      <hr />

      <div className="mb-3">
        <>
          {/* for medium to large screen */}
          <div className="hidden   md:grid grid-cols-6 justify-between items-center">
            {total > 0 && (
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
            )}

            <div className="col-span-3 relative pl-4">
              {/* Custom Tailwind style for the partial left border */}
              <div className=" before:absolute before:top-1/2 before:left-0 before:h-[40%] before:w-[2px] before:-translate-y-1/2 before:bg-gray-300">
                {matkombinationer?.length > 0 && <FactBoxMatCombinationer matkombinationer={matkombinationer} />}
              </div>
            </div>
          </div>
          {/* end of for medium to large screen */}

          {/* for small screen */}
          <div className=" sm:grid sm:grid-cols-2  md:hidden justify-between items-center">
            {total > 0 && (
              <div className="grid grid-cols-3 justify-center items-center">
                <div className="col-span-1">
                  <CatPiechart data={pieChartData1} title="Smakintensitet" total={total} />
                </div>
                <div className="col-span-1">
                  <CatPiechart data={pieChartData2} title="Fyllighet/Strävhet" total={total} />
                </div>
                <div className="col-span-1">
                  <CatPiechart data={pieChartData3} title="Syra" total={total} />
                </div>
              </div>
            )}
            <div className="col-span- relative pl-4">
              <div className="">
                {matkombinationer?.length > 0 && <FactBoxMatCombinationer matkombinationer={matkombinationer} />}
              </div>
            </div>
          </div>
          {/* end of for small screen */}
        </>
      </div>
      <hr />
      <FactBoxMoreInfo smakar={smakar} aromer={aromer} fargers={fargers} />
    </>
  );
};
export default FactBox;
