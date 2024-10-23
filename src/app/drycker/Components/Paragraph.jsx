import React from 'react';

const Paragraph = () => {
  return (
    <div className="mx-auto container">
      <div className="flex flex-col gap-4 items-center justify-center mt-8 sm:mt-10 md:mt-12 px-4">
        <div className=" text-red-500 text-xl sm:text-2xl text-start md:text-center">
          Kul att du hittat hit! Vår vinguide är under uppbyggnad och kommer att vara klar inom kort.
        </div>
        <div className=" text-base sm:text-lg text-start md:text-center max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
          Upptäck den charmiga världen av rosévin med vår globala vinguide. Vi är din pålitliga källa för att hitta allt
          du behöver veta om rosévinerna som finns tillgängliga på Systembolaget i Sverige. Utforska spännande artiklar
          om rosévinets magi och hitta enkelt länkar till vinproducenter och vinimportörer från alla hörn av världen,
          allt här på Vinjournalen.se.
        </div>
      </div>
    </div>
  );
};

export default Paragraph;
