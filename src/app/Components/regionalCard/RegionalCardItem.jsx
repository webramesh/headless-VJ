import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const RegionalCardItem = ({ region }) => {
  const { title, excerpt, slug, lander, featuredImage } = region;
  return (
    <div className="bg-white rounded-lg shadow-2xl h-auto">
      <div className="h-[165px] w-full overflow-hidden">
        <Image
          src={featuredImage?.node?.sourceUrl || '/producenter.jpg'}
          alt={title}
          width={250}
          height={165}
          className="w-full object-cover h-full"
        />
      </div>

      <div className="p-4 flex flex-col justify-between h-56">
        <h2 className="text-xl font-black">{title.length > 15 ? title.slice(0, 15) + '...' : title}</h2>

        <div className="my-3 font-light text-gray-500 text-md">
          <div dangerouslySetInnerHTML={{ __html: `${excerpt.slice(0, 80)}...` }} />
        </div>

        <Link
          href={`/regioner/${lander.nodes[0].slug}/${slug}/`}
          className="inline-flex justify-center items-center px-3 py-1 text-sm font-medium text-center text-white bg-[#FF0303]  rounded-lg hover:bg-[#ff8181] gap-2 w-1/2 md:w-2/3 mb-5 cursor-pointer"
        >
          Mer Info
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
    </div>
  );
};

export default RegionalCardItem;
