'use client';
import Link from 'next/link';
import React from 'react';

const MoreOnProduct = ({ producentDetails, vinimportorDetails }) => {
  return (
    <div className="container mx-auto p-8">
      <div className="md:grid md:grid-cols-4 gap-8 items-center">
        <div className="col-span-1">
          <h2 className="text-xl mb-8 font-semibold">Fler detaljer</h2>
          <div>
            {producentDetails?.title && (
              <>
                <p className="font-thin">Producent</p>
                <p className="text-red-600 my-2">
                  <Link href={`/producenter/${producentDetails?.slug}/`}>{producentDetails?.title}</Link>
                </p>
              </>
            )}
          </div>

          <div className="my-6">
            {vinimportorDetails?.title && (
              <>
                <p className="font-thin">Vinimportör</p>
                <p className="text-red-600 my-2">
                  <Link href={`/vinimportor/${vinimportorDetails?.slug}/`}>{vinimportorDetails?.title}</Link>
                </p>
              </>
            )}
          </div>
        </div>
        {/* Vertical Line */}
        <div className="col-span-3 md:border-l md:border-gray-200 md:pl-8">
          {producentDetails?.content && (
            <div className="my-6 ">
              <p>Mer information om {producentDetails?.title}</p>
              <div
                className="font-thin my-4 text-justify"
                dangerouslySetInnerHTML={{ __html: producentDetails?.content }}
              />
              {/* {formatEmbeddedContent(producentDetails?.content, 'all')} */}

              {/* </div> */}
            </div>
          )}
          {vinimportorDetails?.content && (
            <div className="my-6">
              <p>Mer information om {vinimportorDetails?.title}</p>
              <div
                className="font-thin my-4 text-justify"
                dangerouslySetInnerHTML={{ __html: vinimportorDetails?.content }}
              />
              {/* {formatEmbeddedContent(vinimportorDetails?.content, 'all')} */}
              {/* </div> */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoreOnProduct;
