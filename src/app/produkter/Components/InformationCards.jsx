'use client';
import { useState } from 'react';
import RenderBox from './RenderBox';
import AlcoholInfo from './AlcoholInfo';
import CommentForm from '../../Components/CommentForm';
import Link from 'next/link';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const QNA = ({ productTitle, produktslander, wineSaleStartDate, sugarBites }) => {
  return (
    <div className="w-full px-4 sm:px-20">
      <div className="flex flex-col mt-4 text-center  text-lg font-medium">Frågor och svar om {productTitle}</div>
      <div className="flex flex-col">
        {/* <div className="bg-[#f5f5f5] pt-6 pl-2">
          <div className=" text-sm font-medium">I vilket land proudceras {productTitle}?</div>
        </div> */}

        <div className="bg-[#f5f5f5] py-4 pl-2">
          <div className=" text-sm font-medium">I vilket land proudceras {productTitle}?</div>
        </div>
        <div className="text-gray-600 text-sm  pl-2 my-1">
          Vinet produceras i{' '}
          {produktslander.nodes.map((region, i, arr) => (
            <span key={i}>{i < arr.length - 1 ? region.name + ', ' : region.name}</span>
          ))}
        </div>
        <div className="mt-4">
          {productTitle && sugarBites && (
            <div>
              {/* <div className="bg-[#f5f5f5] pt-6 pl-2">
                <div className=" text-sm font-medium"> Vad är {productTitle} sockermängd?</div>
              </div> */}

              <div className="bg-[#f5f5f5] py-4 pl-2">
                <div className=" text-sm font-medium"> Vad är {productTitle} sockermängd?</div>
              </div>
              <div className="text-gray-600 text-sm  pl-2 my-1">
                {productTitle} har en sockermängd på cirka {sugarBites ? `${sugarBites}` : 'N/A'} gram per liter.
              </div>
            </div>
          )}

          {wineSaleStartDate && (
            <div className="mt-4">
              <div className="bg-[#f5f5f5] pt-6 pl-2">
                <div className=" text-sm font-medium">
                  Hur länge har produkten {productTitle} sålts på systembolaget?
                </div>
              </div>
              <div className="text-gray-600 text-sm  pl-2">
                {wineSaleStartDate ? new Date(wineSaleStartDate).toLocaleDateString('sv-SE') : 'Datum ej tillgängligt'}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const InformationCards = ({ fieldsProduct, productTitle, typer, produktslander, data }) => {
  const {
    caloriesInAlcPer15cl,
    caloriesInAlcPerContainerVolume,
    caloriesInAlcPerLitter,
    caloriesInSugarPer15cl,
    caloriesInSugarPerContainerVolume,
    caloriesInSugarPerLitter,
    totalCaloriesPer15Cl,
    totalCaloriesPerContainerVolume,
    totalCaloriesPerLitter,
    sugarLevelIn1Litter,
    produktPackaging,
    wineSaleStartDate,
    sugarBites,
    alcoholPerSek,
    closure,
  } = fieldsProduct;

  // Static price history data
  const priceHistoryData = [
    { date: 'Sep 2023', price: 45 },
    { date: 'Oct 2023', price: 45 },
    { date: 'Nov 2023', price: 45 },
    { date: 'Dec 2023', price: 45 },
    { date: 'Jan 2024', price: 44 },
    { date: 'Feb 2024', price: 44 },
    { date: 'Mar 2024', price: 44 },
    { date: 'Apr 2024', price: 44 },
    { date: 'May 2024', price: 43 },
    { date: 'Jun 2024', price: 43 },
    { date: 'Jul 2024', price: 43 },
    { date: 'Aug 2024', price: 43 },
  ];

  const productsLander = data?.produktslander?.nodes;

  const [selected, setSelected] = useState(4);

  const vinimporterData = data?.fieldsProduct?.vinimporter?.nodes[0];
  const producenterData = data?.fieldsProduct?.produkterproducer?.nodes[0];

  const handleClick = (index) => {
    setSelected((prevSelected) => (prevSelected === index ? null : index));
  };

  return (
    <div className="mt-8 border-y-2">
      <div className="container mx-auto">
        <div className="flex gap-2 md:gap-4 px-4 py-2 items-center overflow-x-auto scroll-smooth lg:justify-center ">
          {['Hälsa ', 'Övrigt', 'Omdömen', 'Frågor & Svar', 'Prishistorik'].map((item, index) => (
            <div
              key={index}
              className={`px-2 py-2 w-auto text-center hover:bg-[#f4f1ed] hover:shadow-md cursor-pointer ${
                selected === index + 1 && 'border-b-2 border-red-500'
              }`}
              onClick={() => handleClick(index + 1)}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="container mx-auto">
          {selected === 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 p-4 sm:p-8">
              <RenderBox title="Kalorier (baserat på alkoholmängd)">
                <AlcoholInfo
                  per15cl={caloriesInAlcPer15cl}
                  perLitre={caloriesInAlcPerLitter}
                  perVolume={caloriesInAlcPerContainerVolume}
                  closure={closure}
                />
              </RenderBox>
              <RenderBox title="Kalorier (baserat på ungefärlig sockermängd)">
                <AlcoholInfo
                  per15cl={caloriesInSugarPer15cl}
                  perLitre={caloriesInSugarPerLitter}
                  perVolume={caloriesInSugarPerContainerVolume}
                  closure={closure}
                />
              </RenderBox>
              <RenderBox title="Total mängd kalorier">
                <AlcoholInfo
                  per15cl={totalCaloriesPer15Cl}
                  perLitre={totalCaloriesPerLitter}
                  perVolume={totalCaloriesPerContainerVolume}
                  closure={closure}
                />
              </RenderBox>
              <RenderBox title="Sockerdetaljer">
                <div className="text-xs  text-center mt-2">
                  Socker g/l <br /> {sugarLevelIn1Litter ? <p> {sugarLevelIn1Litter}</p> : <p>N/A</p>}
                </div>
                <div className="text-xs  text-center mb-9 mt-2">
                  Socker Per Liter <br />
                  {sugarBites ? <p> {sugarBites}</p> : <p>N/A</p>}
                </div>
              </RenderBox>
            </div>
          )}

          {selected === 2 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 p-4 sm:p-8">
              <RenderBox title="Förpackning">
                <div className="text-xs  text-center mt-2">
                  Förslutning <br /> {closure ? <p>{closure}</p> : <p>N/A</p>}
                </div>
                <div className="text-xs  text-center mt-2">
                  Förpackning <br /> {produktPackaging ? <p>{produktPackaging}</p> : <p>N/A</p>}
                </div>
              </RenderBox>

              <RenderBox title="Alkhol">
                <div className="text-xs  text-center mt-2">
                  APK (Alkhol per krona) <br />
                  {alcoholPerSek ? <p> {alcoholPerSek} :-</p> : <p>N/A</p>}
                </div>
                <div className="text-xs  text-center text-gray-500 mt-2">
                  Alkohol per krona är ett mått som anger mängden alkohol som erhålls per <br />
                  nedlagd krona, vid köp av en alkoholhaltig dryck. APK stiger då dryckens pris <br />
                  sjunker eller alkoholhalten stiger.
                </div>
              </RenderBox>

              <RenderBox title="Om Producenten">
                <div className="text-xs  text-center mt-2">
                  Producent <br />
                  <div className="text-red-500 font-bold">
                    {producenterData?.title && producenterData?.slug ? (
                      <Link href={`#more-on-product`}>{producenterData?.title}</Link>
                    ) : (
                      <p> N/A </p>
                    )}
                  </div>
                </div>
                <div className="text-xs  text-center mt-2">
                  Land <br />
                  <div className="text-red-500 font-bold">
                    {productsLander
                      ?.filter((land) => land.parent === null)
                      .map((land, i) => {
                        const { name, slug } = land;
                        return <p key={i}>{name && slug ? <Link href={`/lander/${slug}`}>{name}</Link> : 'N/A'}</p>;
                      })}
                  </div>
                </div>
              </RenderBox>

              <RenderBox title="Om Importören">
                <div className="text-xs  text-center mt-2">
                  Importör <br />
                  <div className="text-red-500 font-bold mb-9">
                    {' '}
                    {vinimporterData?.title && vinimporterData?.slug ? (
                      <Link href={`#more-on-product`}>{vinimporterData?.title}</Link>
                    ) : (
                      <p> N/A </p>
                    )}
                  </div>
                </div>
              </RenderBox>
            </div>
          )}

          {selected === 3 && (
            <>
              <div className="flex flex-col items-center mt-6 justify-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <CommentForm data={data} />
                </div>
              </div>
            </>
          )}

          {selected === 4 && (
            <div className="flex flex-col items-center mt-6 justify-center mb-12">
              <QNA
                productTitle={productTitle}
                typer={typer}
                produktslander={produktslander}
                wineSaleStartDate={wineSaleStartDate}
                sugarBites={sugarBites}
              />
            </div>
          )}

          {selected === 5 && (
            <div className="w-full max-w-4xl mx-auto p-4">
              <h2 className="text-xl font-semibold mb-4 text-center">Prishistorik</h2>
              <div className="w-full h-[200px] sm:h-[300px] md:h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={priceHistoryData} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                    <XAxis
                      dataKey="date"
                      tick={{ fontSize: 10, fill: '#666' }}
                      tickMargin={10}
                      interval="preserveStartEnd"
                    />
                    <YAxis domain={[-10, 100]} tick={{ fontSize: 10, fill: '#666' }} tickMargin={10} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        padding: '8px',
                        fontSize: '12px',
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="price"
                      stroke="#22c55e"
                      strokeWidth={2}
                      dot={{ fill: '#22c55e', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InformationCards;
