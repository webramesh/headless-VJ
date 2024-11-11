'use client';
import Image from 'next/image';
import Link from 'next/link';
import wine1 from '@/public/wine1.png';

const OrdilistaCard = ({ ordlista }) => {
  const ordlistaCategory = ordlista?.ordlistaCategories?.nodes[0];
  const imageUrl = ordlista?.featuredImage?.node?.sourceUrl;
  return (
    <div className="flex flex-col items-center shadow-sm py-8 mt-6 px-4 bg-white">
      <Link href={`ordlista/${ordlistaCategory?.slug}/${ordlista?.slug}`}>
        <Image
          src={imageUrl || wine1}
          className="object-cover h-52 w-50"
          alt={ordlista.title}
          // fill
          width={200}
          height={200}
          // quality={10}
          quality={100}
          // sizes="(max-width: 1280px) 100vw, 1280px"
          // sizes="(max-width: 600px) 400px, (max-width: 900px) 800px, 1200px"
          priority
        />

        <h3 className="text-xl mt-4 font-semibold"> {ordlista.title} </h3>
      </Link>
      <Link href={`ordlista/${ordlistaCategory?.slug}`} className="text-md text-red-700 font-light mt-4">
        {ordlistaCategory?.name}
      </Link>
    </div>
  );
};

export default OrdilistaCard;
