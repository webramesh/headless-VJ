import Link from 'next/link';
import React from 'react';

const VinimportorHero = ({ vinimporterData }) => {
  return (
    <div className="relative w-full text-white h-[50vh] sm:h-[65vh] lg:h-[80vh] bg-[url('/../bgimage.webp')] bg-cover bg-center px-8">
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 flex items-center h-full">
        <div className="container mx-3 sm:mx-4 lg:mx-auto max-w-6xl">
          <h1 className="text-lg sm:text-xl lg:text-4xl text-white font-black">
            <span>Vinimportörer - {vinimporterData?.title}</span>
            <br />
          </h1>

          {vinimporterData?.content && (
            <div
              className="my-4 sm:my-6 lg:my-8 font-light text-xs sm:text-sm lg:text-lg lg:max-w-[70%]"
              dangerouslySetInnerHTML={{ __html: vinimporterData?.content }}
            />
          )}

          {vinimporterData?.importerFields?.vineImporterEmail && (
            <p className="text-sm sm:text-base lg:text-lg">
              <span>Email: </span>
              <span className="italic underline text-[#FF0303] break-all sm:break-normal">
                {vinimporterData?.importerFields?.vineImporterEmail}
              </span>
            </p>
          )}

          {vinimporterData?.importerFields?.importerWebsite && (
            <div className="mt-3 sm:mt-4 lg:mt-5">
              <Link
                className="bg-[#FF0303] hover:bg-red-600 duration-300 px-3 sm:px-4 lg:px-5 py-1.5 sm:py-1.5 lg:py-2 rounded text-sm sm:text-base"
                href={vinimporterData?.importerFields?.importerWebsite}
              >
                Besök webbplatsen
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VinimportorHero;