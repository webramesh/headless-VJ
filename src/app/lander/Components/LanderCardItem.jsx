import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const LanderCardItem = ({ lander }) => {
  const { name, description, slug, count, categoriesImagesAndOtherFields } = lander;

  return (
    <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[380px] mx-auto transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md rounded-xl overflow-hidden shadow-sm border border-gray-100 bg-gray-100">
      <div className="p-4 space-y-2">
        <h2 className="text-base sm:text-lg font-semibold text-gray-800 truncate flex items-center gap-2">
          <div className="relative aspect-video h-5">
            <Image
              src={categoriesImagesAndOtherFields?.categoriesImage?.node?.sourceUrl || '/producenter.jpg'}
              alt={categoriesImagesAndOtherFields?.categoriesImage?.node?.altText || 'Producent Image'}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={false}
            />
          </div>
          {name}
        </h2>
        <div className="font-light text-gray-500 text-md h-24 text-ellipsis overflow-hidden mb-4">
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <div className="text-sm text-gray-600 mb-2">Regions: {count}</div>

        <div className="flex items-center justify-between">
          <Link
            href={`/lander/${slug}/`}
            className="inline-flex justify-center items-center px-3 py-1 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-[#ff8181] gap-2 w-full cursor-pointer"
          >
            Mer Info
            <ArrowRight strokeWidth={3} className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LanderCardItem;
