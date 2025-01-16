import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const LanderCardItem = ({ lander }) => {
  const { name, description, slug, count } = lander;

  return (
    <div className="flex flex-col max-w-[90vw] md:max-w-[250px] bg-white rounded-lg shadow-2xl h-full">
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-black mb-2 h-[1.75rem] overflow-hidden">
          {name.length > 15 ? name.slice(0, 15) + '...' : name}
        </h2>

        <div className="flex-grow mb-2">
          <div
            className="font-light text-gray-500 text-md h-[4.5rem] overflow-hidden"
            dangerouslySetInnerHTML={{
              __html: `${description ? description.slice(0, 80) + '...' : 'No description available'}`,
            }}
          />
        </div>

        <div className="text-sm text-gray-600 mb-2">Regions: {count}</div>

        <div className="mt-auto">
          <Link
            href={`/lander/${slug}/`}
            className="inline-flex justify-center items-center px-3 py-1 text-sm font-medium text-center text-white bg-[#FF0303] rounded-lg hover:bg-[#ff8181] gap-2 w-full cursor-pointer"
          >
            Mer Info
            <ArrowRight strokeWidth={3} size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LanderCardItem;
