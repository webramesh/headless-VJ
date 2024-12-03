'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import grape from '@/public/grape.png';
import corkscrew from '@/public/corkscrew.png';
import { useOrdlista } from '@/src/context/OrdlistaContext';

const SubscriptionBox = () => {
  const ordlista = useOrdlista();

  const [titles, setTitles] = useState({ druver: {}, ordlista: {} });

  const getRandomTitle = (items) => items[Math.floor(Math.random() * items.length)];

  const categorizeItems = (items) => {
    const druverCategory = items?.find((item) => item?.name?.includes('druvor'))?.ordlista?.nodes || [];
    const ordlistaCategory = items?.find((item) => !item?.name?.includes('druvor'))?.ordlista?.nodes || [];
    return { druverCategory, ordlistaCategory };
  };

  useEffect(() => {
    const { druverCategory, ordlistaCategory } = categorizeItems(ordlista);
    setTitles({
      druver: druverCategory.length > 0 ? getRandomTitle(druverCategory) : {},
      ordlista: ordlistaCategory.length > 0 ? getRandomTitle(ordlistaCategory) : {},
    });
  }, [ordlista]);

  const TitleSection = ({ icon, label, title }) => (
    <div className="flex md:flex-col items-center gap-6 md:gap-0">
      <div className="w-12 h-12 flex-shrink-0">
        <Image src={icon} alt={label} width={64} height={64} className="w-10 h-10 md:w-8 md:h-8" />
        {/* <Image src={icon} alt={label} width={54} height={54} className="object-cover w-full h-full" /> */}
      </div>
      <div className="text-start md:text-center">
        <div className="text-sm font-semibold">{label}</div>
        <p className="text-sm text-red-600">
          {/* {title?.title && <Link href={`${title?.uri}`}>{title?.title || ''}</Link>} */}
          {title?.title && <Link href={`/ordlista`}>{title?.title || ''}</Link>}
          {/* {title?.title && <Link href={`http://localhost:3000/${title?.uri}`}>{title?.title || ''}</Link>} */}
        </p>
      </div>
    </div>
  );

  return (
    <div className="w-full bg-[#f5f5f5] p-6 sm:p-8">
      <div className="space-y-8">
        <TitleSection icon={grape} label="ETT VINORD" title={titles.druver} />
        <hr className="border-t border-gray-300" />
        <TitleSection icon={corkscrew} label="VECKANS OMRÅDE" title={titles.ordlista} />
      </div>
    </div>
  );
};

export default SubscriptionBox;
