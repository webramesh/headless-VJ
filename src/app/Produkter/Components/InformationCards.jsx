import React, { useState } from "react";

const InformationCards = () => {
  const [selected, setSelected] = useState(null);

  const renderInfoBox1 = () => (
    <div className="flex flex-col items-center p-8 justify-center bg-[#f4f1ed]">
      <div className="font-outfit">Kalorier (baserat på alkoholmängd)</div>
      <hr className="w-[90%] border-t-2 m-4 border-gray-300" />
      <div className="text-xs font-outfit text-center mt-2">
        Per Standardglas (15 cl) <br /> 92
      </div>
      <div className="text-xs font-outfit text-center mt-2">
        Per Liter <br /> 609
      </div>
      <div className="text-xs font-outfit text-center mt-2">
        Per Förpackning <br />
        183
      </div>
    </div>
  );
  const renderInfoBox2 = () => (
    <div className="flex flex-col items-center p-8 justify-center bg-[#f4f1ed]">
      <div className="font-outfit">
        Kalorier (baserat på ungefärlig sockermängd)
      </div>
      <hr className="w-[90%] border-t-2 m-4 border-gray-300" />
      <div className="text-xs font-outfit text-center mt-2">
        Per Standardglas (15 cl) <br /> 131.3
      </div>
      <div className="text-xs font-outfit text-center mt-2">
        Per Liter <br /> 875
      </div>
      <div className="text-xs font-outfit text-center mt-2">
        Per Förpackning <br />
        263
      </div>
    </div>
  );

  const renderInfoBox3 = () => (
    <div className="flex flex-col items-center p-8 justify-center bg-[#f4f1ed]">
      <div className="font-outfit">Total mängd kalorier</div>
      <hr className="w-[90%] border-t-2 m-4 border-gray-300" />
      <div className="text-xs font-outfit text-center mt-2">
        Per Standardglas (15 cl) <br /> 222.5
      </div>
      <div className="text-xs font-outfit text-center mt-2">
        Per Liter <br /> 1484
      </div>
      <div className="text-xs font-outfit text-center mt-2">
        Per Förpackning <br />
        445
      </div>
    </div>
  );
  const renderInfoBox4 = () => (
    <div className="flex flex-col items-center p-8 justify-center bg-[#f4f1ed]">
      <div className="font-outfit">Sockerdetaljer</div>
      <hr className="w-[90%] border-t-2 m-4 border-gray-300" />
      <div className="text-xs font-outfit text-center mt-2">
        Socker g/l <br /> 21.6
      </div>
      <div className="text-xs font-outfit text-center mb-9 mt-2">
        Socker Per Liter <br /> 216
      </div>
    </div>
  );

  const renderInfoBox5 = () => (
    <div className="flex flex-col items-center p-8 justify-center bg-[#f4f1ed]">
      <div className="font-outfit">Förpackning</div>
      <hr className="w-[90%] border-t-2 m-4 border-gray-300" />
      <div className="text-xs font-outfit text-center mt-2">
        Förslutning <br /> Skruvkapsyl
      </div>
      <div className="text-xs font-outfit text-center mt-2">
        Förpackning <br /> Flaska
      </div>
    </div>
  );

  const renderInfoBox6 = () => (
    <div className="flex flex-col items-center p-8 justify-center bg-[#f4f1ed]">
      <div className="font-outfit">Alkhol</div>
      <hr className="w-[90%] border-t-2 m-4 border-gray-300" />
      <div className="text-xs font-outfit text-center mt-2">
        APK (Alkhol per krona) <br /> 0.4 :-
      </div>
      <div className="text-xs font-outfit text-center text-gray-500 mt-2">
        Alkohol per krona är ett mått som anger mängden alkohol som erhålls per{" "}
        <br /> nedlagd krona, vid köp av en alkoholhaltig dryck. APK stiger då
        dryckens pris <br />
        sjunker eller alkoholhalten stiger.
      </div>
    </div>
  );
  const renderInfoBox7 = () => (
    <div className="flex flex-col items-center p-8 justify-center bg-[#f4f1ed]">
      <div className="font-outfit">Om Producenten</div>
      <hr className="w-[90%] border-t-2 m-4 border-gray-300" />
      <div className="text-xs font-outfit text-center mt-2">
        Producent <br />{" "}
        <div className="text-red-500 font-bold">Fuji Takasago Shuzo</div>
      </div>
      <div className="text-xs font-outfit text-center mt-2">
        Land
        <br /> <div className="text-red-500 font-bold">Japan</div>
      </div>
    </div>
  );

  const renderInfoBox8 = () => (
    <div className="flex flex-col items-center p-8 justify-center bg-[#f4f1ed]">
      <div className="font-outfit">Om Importören</div>
      <hr className="w-[90%] border-t-2 m-4 border-gray-300" />
      <div className="text-xs font-outfit text-center mt-2">
        Importör
        <br />
        <div className="text-red-500 font-bold mb-9">Akebono Unlimited AB</div>
      </div>
    </div>
  );

  const ratingbox = () => (
    <div className="">
      <div className="flex flex-col items-center mt-6 justify-center">
        <div className=" font-outfit text-xl ">
          Vad tycker du om Takasago Umeshu?
        </div>
        <div class="flex items-center mt-4">
          <svg
            class="w-8 h-8 ms-3 text-red-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            class="w-8 h-8 ms-3 text-red-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            class="w-8 h-8 ms-3 text-red-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            class="w-8 h-8 ms-3 text-red-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            class="w-8 h-8 ms-3 text-gray-300 dark:text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        </div>
      </div>
    </div>
  );
  const formfield = () => (
    <div className="max-w-4xl mx-auto mb-16">
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
            <legend className="font-outfit text-sm mb-1">
              Are you human? Please solve:
            </legend>
            <input
              type="text"
              id="captcha"
              className="p-2 pl-3 w-full bg-[#d9d9d9] rounded-2xl"
              placeholder=""
              required
            />
          </div>
        </div>
        <div className="flex flex-col w-1/2 gap-12">
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
          <div className="flex">
            <button className="px-2 py-1 w-[40%] bg-[#e13768] text-white rounded-full">
              Sticka
            </button>
            <div className="text-xs font-outfit pl-4">
              Denna webbplats använder Akismet för att minska skräppost.
              <span className="text-red-600 font-bold ">
                Lär dig hur din kommentardata bearbetas.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  const QNA = () => (
    <div className="w-full">
      <div className=" flex flex-col mt-4 text-center font-outfit text-lg font-medium">
        Frågor och svar om Moulins de Citran 2012
      </div>
      <div className="flex flex-col px-20">
        <div className="bg-[#f5f5f5] pt-6 pl-2  ">
          <div className="font-outfit text-sm font-medium ">
            I vilket land proudceras Moulins de Citran 2012?
          </div>
        </div>
        <div className="text-gray-600 text-sm font-outfit pl-2">
          Vinet produceras i Frankrike, Bordeaux, Haut-Médoc .
        </div>
        <div className="mt-4">
          <div className="bg-[#f5f5f5] pt-6 pl-2  ">
            <div className="font-outfit text-sm font-medium ">
              I vilket land proudceras Moulins de Citran 2012?
            </div>
          </div>
          <div className="text-gray-600 text-sm font-outfit pl-2">
            Vinet produceras i Frankrike, Bordeaux, Haut-Médoc .
          </div>
          <div className="mt-4">
            <div className="bg-[#f5f5f5] pt-6 pl-2  ">
              <div className="font-outfit text-sm font-medium ">
                I vilket land proudceras Moulins de Citran 2012?
              </div>
            </div>
            <div className="text-gray-600 text-sm font-outfit pl-2">
              Vinet produceras i Frankrike, Bordeaux, Haut-Médoc .
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const handleClick = (index) => {
    setSelected((prevSelected) => (prevSelected === index ? null : index));
  };

  return (
    <div className="mt-8 border-y-2">
      <div className="container mx-auto">
        <div className="flex gap-8 px-8 py-2 font-outfit items-center justify-center">
          <div
            className={`px-2 py-2 hover:bg-[#f4f1ed] hover:shadow-md cursor-pointer ${
              selected === 1 ? "border-b-2 border-pink-500" : ""
            }`}
            onClick={() => handleClick(1)}
          >
            Hälsoinformation
          </div>
          <div
            className={`px-2 py-2 hover:bg-[#f4f1ed] hover:shadow-md cursor-pointer ${
              selected === 2 ? "border-b-2 border-pink-500" : ""
            }`}
            onClick={() => handleClick(2)}
          >
            Övrig information
          </div>
          <div
            className={`px-2 py-2 hover:bg-[#f4f1ed] hover:shadow-md cursor-pointer ${
              selected === 3 ? "border-b-2 border-pink-500" : ""
            }`}
            onClick={() => handleClick(3)}
          >
            Kundomdömen
          </div>
          <div
            className={`px-2 py-2 hover:bg-[#f4f1ed] text-center hover:shadow-md cursor-pointer ${
              selected === 4 ? "border-b-2 border-pink-500" : ""
            }`}
            onClick={() => handleClick(4)}
          >
            Utmärkelser och <br /> betyg
          </div>
          <div
            className={`px-2 py-2 hover:bg-[#f4f1ed] text-center hover:shadow-md cursor-pointer ${
              selected === 5 ? "border-b-2 border-pink-500" : ""
            }`}
            onClick={() => handleClick(5)}
          >
            Försäljning
            <br />
            systembolaget
          </div>
          <div
            className={`px-2 py-2 hover:bg-[#f4f1ed] hover:shadow-md cursor-pointer ${
              selected === 6 ? "border-b-2 border-pink-500" : ""
            }`}
            onClick={() => handleClick(6)}
          >
            Frågor och svar
          </div>
        </div>

        <div className="container mx-auto">
          {selected === 1 && (
            <div className="grid grid-cols-2 gap-12 p-8">
              {renderInfoBox1()}
              {renderInfoBox2()}
              {renderInfoBox3()}
              {renderInfoBox4()}
            </div>
          )}

          {selected === 2 && (
            <div className="grid grid-cols-2 gap-12 p-8">
              {renderInfoBox5()}
              {renderInfoBox6()}
              {renderInfoBox7()}
              {renderInfoBox8()}
            </div>
          )}

          {selected === 3 && (
            <div className="flex flex-col items-center mt-6 justify-center">
              {ratingbox()}
              {formfield()}
            </div>
          )}

          {selected === 4 && (
            <div className="flex flex-col items-center mt-6 justify-center">
              {QNA()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default InformationCards;
