import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

function ProducenterCard({ producenter }) {
  const { uri, title, featuredImage } = producenter;

  return (
    <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[350px] lg:max-w-[380px] mx-auto transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
      <div className="relative w-full aspect-video h-[180px] sm:h-[200px] md:h-[220px]">
        <Image
          src={featuredImage?.node?.sourceUrl || '/api/placeholder/400/300'}
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
            className="flex items-center justify-center w-auto px-4 py-2 text-xs sm:text-sm font-medium
              text-white bg-[#FF0303] rounded-lg hover:bg-[#ff8181]
              transition-colors duration-300 group"
          >
            Mer Info
            <FontAwesomeIcon
              icon={faArrowRight}
              className="ml-2 text-xs sm:text-sm transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProducenterCard;
