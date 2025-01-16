import { formatEmbeddedContent } from '@/src/utils/utils';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const VinimportorerCard = ({ data }) => {
  return (
    <div className="shadow-gray-200 shadow-md p-6 rounded-sm bg-white h-full flex flex-col justify-evenly">
      <h3 className="text-xl font-medium my-4">{data.title}</h3>
      <p className="text-gray-600">
        {formatEmbeddedContent(data.content)}
        {/* {data.content} */}
      </p>
      <Link href={`/vinimportor/${data.slug}/`} className="text-red-600 font-bold flex items-center gap-2 my-3">
        Läs mer
        <ArrowUpRight strokeWidth={3} size={18} />
      </Link>
    </div>
  );
};

export default VinimportorerCard;
