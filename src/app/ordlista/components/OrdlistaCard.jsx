'use client';
import Image from 'next/image';
import Link from 'next/link';
const OrdlistaCard = ({ ordlista }) => {
  // return (
  //   <div className="grid grid-cols-3 gap-6 items-center justify-between flex-wrap  rounded-md ">
  //     {allOrdlista?.map((ordlista) => {
  const ordlstaCategory = ordlista?.ordlistaCategories?.nodes[0];

  return (
    <div key={ordlstaCategory} className=" shadow-sm py-8 mt-6 px-4 bg-white">
      <Link href={`ordlista/${ordlstaCategory?.slug}/${ordlista?.slug}`}>
        <Image
          src={ordlista?.featuredImage?.node?.sourceUrl}
          className="object-cover -full h-52 w-50"
          alt={ordlista.title}
          // fill
          width={200}
          height={200}
          // quality={10}
          quality={100}
          // sizes="(max-width: 1280px) 100vw, 1280px"
          // sizes="(max-width: 600px) 400px, (max-width: 900px) 800px, 1200px"
          // priority
        />

        <h3 className="text-xl  mt-4 font-semibold"> {ordlista.title} </h3>
        <h3 className="text-md text-red-700 font-light">{ordlstaCategory?.name}</h3>
      </Link>
    </div>
  );
};

export default OrdlistaCard;
