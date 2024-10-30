import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

function ProducenterCard({ producenter }) {
  const { uri, title, featuredImage } = producenter;
  return (
    <div className="max-w-[90vw] md:max-w-[300px] bg-gray-50 rounded-md overflow-hidden h-72 flex flex-col justify-between">
      <div className="h-[165px] w-full overflow-hidden">
        <Image
          src={featuredImage.node.sourceUrl}
          alt={title}
          width={250}
          height={165}
          className="w-full object-cover h-full"
        />
      </div>
      <h2 className="text-xl lg:text-2xl">{title}</h2>
      <Link
        href={uri}
        className="inline-flex justify-center items-center px-3 py-1 text-sm font-medium text-center text-white bg-[#FF0303]  rounded-lg hover:bg-[#ff8181] gap-2 w-1/2 md:w-2/3 mb-5 cursor-pointer"
      >
        Mer Info
        <FontAwesomeIcon icon={faArrowRight} />
      </Link>
    </div>
  );
}

export default ProducenterCard;
