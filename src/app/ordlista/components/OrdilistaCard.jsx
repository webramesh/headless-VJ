'use client';
import Link from 'next/link';

const OrdilistaCard = ({ ordlista, showCategory = true }) => {
  const ordlistaCategory = ordlista?.ordlistaCategories?.nodes[0];
  return (
    <div className="flex flex-col items-center shadow-sm py-8 mt-6 px-4 bg-white">
      <Link href={`/ordlista/${ordlistaCategory?.slug}/${ordlista?.slug}/`}>
        <h3 className="text-xl mt-4 font-semibold"> {ordlista.title} </h3>
      </Link>
      {showCategory && (
        <Link href={`/ordlista/${ordlistaCategory?.slug}/`} className="text-md text-red-700 font-light mt-">
          {ordlistaCategory?.name}
        </Link>
      )}
    </div>
  );
};

export default OrdilistaCard;
