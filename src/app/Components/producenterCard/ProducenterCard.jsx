import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function ProducenterCard({ producenter }) {
  const { uri, title, featuredImage } = producenter;

  return (
    <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[380px] mx-auto transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
      <div className="relative w-full aspect-video h-[180px] sm:h-[200px] ">
        <Image
          src={featuredImage?.node?.sourceUrl || '/producenter.jpg'}
          alt={title || 'Producent Image'}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={false}
        />
      </div>

      <div className="p-4 space-y-3">
        <h2 className="text-base sm:text-lg font-semibold text-gray-800 truncate">
          {title.length > 30 ? title.slice(0, 30) + '...' : title}
        </h2>

        <div className="flex items-center justify-between">
          <Link
            href={uri}
            className="inline-flex justify-center items-center px-3 py-1 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-[#ff8181] gap-2 w-full cursor-pointer"
          >
            Mer Info
            <ArrowRight strokeWidth={3} className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProducenterCard;
