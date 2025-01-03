'use client';
import { formatEmbeddedContent } from '@/src/utils/utils';
import Link from 'next/link';
import React from 'react';

const MoreOnProduct = ({ producentDetails, vinimportorDetails }) => {
  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-4 gap-6 items-center">
        <div className="col-span-1">
          <h2 className="text-xl mb-8 font-semibold">More On Product</h2>
          <div>
            {producentDetails?.title && (
              <>
                {' '}
                <p className="font-thin">Producent</p>
                <p className="text-red-600 my-2">
                  <Link href={`/producenter/${producentDetails?.slug}`}>{producentDetails?.title}</Link>
                </p>
              </>
            )}
          </div>

          <div className="my-6">
            {vinimportorDetails?.title && (
              <>
                <p className="font-thin">Vinimportor</p>
                <p className="text-red-600 my-2">
                  <Link href={`/vinimportor/${vinimportorDetails?.slug}`}>{vinimportorDetails?.title}</Link>
                </p>
              </>
            )}
          </div>
        </div>

        {/* Vertical Line */}

        <div className="col-span-3">
          {producentDetails?.content && (
            <div className="my-6 ">
              <p>Mer information om {producentDetails?.title}</p>
              <p className="font-thin my-4">
                {formatEmbeddedContent(producentDetails?.content, 'all')}
                <br />
              </p>
            </div>
          )}
          {vinimportorDetails?.content && (
            <div className="my-6">
              <p>Mer information om {vinimportorDetails?.title}</p>
              <p className="font-thin my-4">{formatEmbeddedContent(vinimportorDetails?.content, 'all')}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoreOnProduct;
