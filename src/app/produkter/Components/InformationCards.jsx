'use client';
import { useState } from 'react';
import RenderBox from './RenderBox';
import AlcoholInfo from './AlcoholInfo';

const ratingbox = () => (
  <div className="w-full px-4 sm:px-0">
    <div className="flex flex-col items-center mt-6 justify-center">
      <div className=" text-xl text-center">Vad tycker du om Takasago Umeshu?</div>
      <div className="flex items-center mt-4">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-8 h-8 ms-3 ${index < 4 ? 'text-red-500' : 'text-gray-300 dark:text-gray-500'}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
      </div>
    </div>
  </div>
);

const formfield = () => (
  <div className="w-full max-w-4xl mx-auto mb-16 px-4 sm:px-0">
    <div className="flex flex-col md:flex-row gap-8 mt-8">
      <div className="flex flex-col w-full md:w-1/2 gap-4">
        <div>
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="p-2 pl-3 w-full bg-[#d9d9d9] rounded-2xl"
            placeholder="Namn*"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="p-2 pl-3 w-full bg-[#d9d9d9] rounded-2xl"
            placeholder="E-Postadress*"
            required
          />
        </div>
        <div>
          <label htmlFor="captcha" className="sr-only">
            Captcha
          </label>
          <legend className=" text-sm mb-1">Are you human? Please solve:</legend>
          <input
            type="text"
            id="captcha"
            className="p-2 pl-3 w-full bg-[#d9d9d9] rounded-2xl"
            placeholder=""
            required
          />
        </div>
      </div>
      <div className="flex flex-col w-full md:w-1/2 gap-12">
        <div className="flex flex-col flex-grow">
          <label htmlFor="message" className="sr-only">
            Message
          </label>
          <textarea
            id="message"
            className="p-2 bg-[#d9d9d9] rounded-xl flex-grow resize-none"
            placeholder="Skriv ditt omdömme här!"
            required
          />
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <button className="px-2 py-1 w-full sm:w-[40%] bg-[#e13768] text-white rounded-full">Sticka</button>
          <div className="text-xs ">
            Denna webbplats använder Akismet för att minska skräppost.
            <span className="text-red-600 font-bold">Lär dig hur din kommentardata bearbetas.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const QNA = ({ productTitle, produktslander, wineSaleStartDate }) => (
  <div className="w-full px-4 sm:px-20">
    <div className="flex flex-col mt-4 text-center  text-lg font-medium">Frågor och svar om {productTitle}</div>
    <div className="flex flex-col">
      <div className="bg-[#f5f5f5] pt-6 pl-2">
        <div className=" text-sm font-medium">I vilket land proudceras {productTitle}?</div>
      </div>
      <div className="text-gray-600 text-sm  pl-2">
        Vinet produceras i{' '}
        {produktslander.nodes.map((region, i, arr) => (
          <span key={i}>{i < arr.length - 1 ? region.name + ', ' : region.name}</span>
        ))}
      </div>
      <div className="mt-4">
        <div className="bg-[#f5f5f5] pt-6 pl-2">
          <div className=" text-sm font-medium"> Vad är {productTitle} sockermängd?</div>
        </div>
        <div className="text-gray-600 text-sm  pl-2">{productTitle} har en sockermängd på cirka gram per liter.</div>
        <div className="mt-4">
          <div className="bg-[#f5f5f5] pt-6 pl-2">
            <div className=" text-sm font-medium">Hur länge har produkten {productTitle} sålts på systembolaget?</div>
          </div>
          <div className="text-gray-600 text-sm  pl-2">
            {wineSaleStartDate ? new Date(wineSaleStartDate).toLocaleDateString('sv-SE') : 'Datum ej tillgängligt'}
          </div>
        </div>
      </div>
    </div>
  </div>
);

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
    sugerLevel,
    sugarLevelIn1Litter,
    containerType,
    produktPackaging,
    wineSaleStartDate,
    sugarBites,
    alcoholPerSek,
  } = fieldsProduct;

  const productsLander = data?.produktslander?.nodes;

  const [selected, setSelected] = useState(null);

  const handleClick = (index) => {
    setSelected((prevSelected) => (prevSelected === index ? null : index));
  };

  return (
    <div className="mt-8 border-y-2">
      <div className="container mx-auto">
        <div className="flex gap-2 md:gap-4 px-4 py-2 items-center overflow-x-auto scroll-smooth lg:justify-center ">
          {['Hälsoinformation', 'Övrig information', 'Kundomdömen', 'Frågor och svar'].map((item, index) => (
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
                />
              </RenderBox>
              <RenderBox title="Kalorier (baserat på ungefärlig sockermängd)">
                <AlcoholInfo
                  per15cl={caloriesInSugarPer15cl}
                  perLitre={caloriesInSugarPerLitter}
                  perVolume={caloriesInSugarPerContainerVolume}
                />
              </RenderBox>
              <RenderBox title="Total mängd kalorier">
                <AlcoholInfo
                  per15cl={totalCaloriesPer15Cl}
                  perLitre={totalCaloriesPerLitter}
                  perVolume={totalCaloriesPerContainerVolume}
                />
              </RenderBox>
              <RenderBox title="Sockerdetaljer">
                <div className="text-xs  text-center mt-2">
                  Socker g/l <br /> {sugarLevelIn1Litter ? <p> {sugarLevelIn1Litter}</p> : <p>N/A</p>}
                </div>
                <div className="text-xs  text-center mb-9 mt-2">
                  Socker Per Liter <br />
                  {sugarBites ? <p> {sugarBites}</p> : <p>N/A</p>}
                  {/* {sugarBites} */}
                </div>
              </RenderBox>
            </div>
          )}

          {selected === 2 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 p-4 sm:p-8">
              <RenderBox title="Förpackning">
                <div className="text-xs  text-center mt-2">
                  Förslutning <br /> {containerType}
                </div>
                <div className="text-xs  text-center mt-2">
                  Förpackning <br /> {produktPackaging}
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
                  <div className="text-red-500 font-bold">Fuji Takasago Shuzo</div>
                </div>
                <div className="text-xs  text-center mt-2">
                  Land <br />
                  <div className="text-red-500 font-bold">{productsLander[0]?.name}</div>
                </div>
              </RenderBox>

              <RenderBox title="Om Importören">
                <div className="text-xs  text-center mt-2">
                  Importör <br />
                  <div className="text-red-500 font-bold mb-9">Akebono Unlimited AB</div>
                </div>
              </RenderBox>
            </div>
          )}

          {selected === 3 && (
            <>
              <div className="flex flex-col items-center mt-6 justify-center">
                {ratingbox()}
                {formfield()}
              </div>
            </>
          )}

          {selected === 4 && (
            <div className="flex flex-col items-center mt-6 justify-center">
              <QNA
                productTitle={productTitle}
                typer={typer}
                produktslander={produktslander}
                wineSaleStartDate={wineSaleStartDate}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InformationCards;
