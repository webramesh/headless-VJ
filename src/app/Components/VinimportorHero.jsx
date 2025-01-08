import Link from 'next/link';
import React from 'react';

const VinimportorHero = ({ vinimporterData }) => {
  return (
    <div className="relative w-full text-white h-[80vh] bg-[url('/../bgimage.webp')] bg-cover bg-center ">
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 flex items-center  h-full ">
        <div className=" container mx-4 md:mx-auto max-w-6xl  ">
          <h1 className="text-2xl md:text-4xl text-white font-black ">
            <span>Vinimportörer - {vinimporterData?.title}</span>
            <br />
          </h1>

          {vinimporterData?.content && (
            <div
              className="my-8 font-light text-sm md:text-lg md:max-w-[70%]"
              dangerouslySetInnerHTML={{ __html: vinimporterData?.content }}
            />
          )}

          {vinimporterData?.importerFields?.vineImporterEmail && (
            <p>
              <span>Email: </span>
              <span className="italic underline text-[#FF0303]">
                {vinimporterData?.importerFields?.vineImporterEmail}
              </span>
            </p>
          )}

          {vinimporterData?.importerFields?.importerWebsite && (
            <div className="mt-5">
              <Link
                className="bg-[#FF0303] hover:bg-red-600 duration-300 px-5 py-2 rounded"
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
