import ellipse from '@/public/ellipse.png';
import Image from 'next/image';
import FactBoxDescription from './FactBoxDescription';
import CatPiechart from '../../Components/CatPiechart';
import FactBoxMoreInfo from './FactBoxMoreInfo';
import FactBoxMatCombinationer from './FactBoxMatCombinationer';

const FactBox = ({ recommendedProduct, smakar, aromer, fargers, matkombinationer }) => {
  const fieldsProduct = recommendedProduct[0]?.produkter?.nodes[0]?.fieldsProduct;
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
      <div className="text-center flex items-center justify-center gap-3">
        <Image src={ellipse} alt="Citran Wine" className="object-cover" />
        <div className=" text-base lg:text-lg text-black font-medium">Faktaruta</div>
      </div>
      <FactBoxDescription fieldsProduct={fieldsProduct} />

      {/* <div className="flex justify-center items-center"> */}
      <div className="">
        {total > 0 && (
          <div className="grid grid-cols-3 gap-4 mt-4">
            <CatPiechart data={pieChartData1} title="Smakintensitet" total={total} />
            <CatPiechart data={pieChartData2} title="Fyllighet/Strävhet" total={total} />
            <CatPiechart data={pieChartData3} title="Syra" total={total} />
          </div>
        )}
      </div>
      {/* <div className="">
          {matkombinationer?.length > 0 && <FactBoxMatCombinationer matkombinationer={matkombinationer} />}
        </div> */}
      {/* </div> */}

      {/* </div> */}
      {/* <FactBoxMoreInfo smakar={smakar} aromer={aromer} fragers={fargers} /> */}
      {/* {(smakar.length > 0 || aromer.length > 0 || fargers.length > 0) && <FactBoxMoreInfo />} */}
      <FactBoxMoreInfo smakar={smakar} aromer={aromer} fargers={fargers} />
      {matkombinationer?.length > 0 && <FactBoxMatCombinationer matkombinationer={matkombinationer} />}
    </>
  );
};
export default FactBox;
