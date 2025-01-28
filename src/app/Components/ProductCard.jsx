import Image from 'next/image';
import Link from 'next/link';
import wine1 from '@/public/wine1.png';
import { findDepth } from '@/src/utils/utils';
import ProductLabelsWithTooltips from '../produkter/Components/ProductLabelsWithTooltip';

function ProductCard({ product }) {
  const { featuredImage, fieldsProduct, produktTyper, slug, title, produktslander } = product;
  const { pice } = fieldsProduct;

  const sortedTypers = [...produktTyper.nodes]
    .filter((typer) => typer.name !== 'Vin') //remove Vin
    .sort((a, b) => {
      const aHasParent = a.parent ? 1 : 0;
      const bHasParent = b.parent ? 1 : 0;
      return bHasParent - aHasParent; //sort items which have parent first then with no parent
    });
  const displayedTypers = [{ name: 'Vin', slug: 'vin' }, ...sortedTypers];

  const sortedLanders = [...produktslander.nodes].sort((a, b) => {
    const depthB = findDepth(b, produktslander.nodes);
    const depthA = findDepth(a, produktslander.nodes);
    return depthA - depthB;
  });

  return (
    <div className="border-2 shadow-md hover:shadow-lg transition-shadow duration-300 p-6 h-[450px] relative">
      {fieldsProduct?.salePrice && (
        <span className="bg-red-600 inline text-white  absolute right-0 top-0 z-10   px-[14px] py-2 rounded-md  text-xs">
          Prissänkt
        </span>
      )}
      <div className="flex flex-col justify-between h-full items-start relative">
        <div className="absolute z-20">
          <ProductLabelsWithTooltips fieldsProduct={fieldsProduct} />
        </div>
        <Link href={`/produkter/${slug}/`} className="flex justify-center w-full h-56 relative  ">
          <Image
            src={featuredImage?.node?.sourceUrl || wine1}
            alt={title}
            className="object-contain h-full w-full"
            width={200}
            height={200}
            loading="lazy"
          />
        </Link>

        <div className=" text-red-600 mt-2">
          {displayedTypers?.map((type, i, arr) => (
            <Link href={`/produkt-typer/${type.slug}/`} key={i} className="hover:text-red-500 mt-2 inline">
              {i < arr.length - 1 ? `${type.name} | ` : type.name}
            </Link>
          ))}
        </div>
        <div>
          <Link href={`/produkter/${slug}/`} className="leading-6 text-lg">
            {title}
          </Link>
          <div className="flex gap-2 mt-4 items-start">
            {sortedLanders[0]?.flag?.flagImage?.node?.sourceUrl && (
              <Image
                src={sortedLanders[0]?.flag?.flagImage?.node?.sourceUrl}
                alt={sortedLanders[0]?.flag?.flagImage?.node?.altText}
                className="object-cover rounded-full"
                width={20}
                height={20}
              />
            )}
            <div className="text-sm">
              {sortedLanders?.map((region, i, arr) => (
                <span key={i}>{i < arr.length - 1 ? region.name + ' | ' : region.name}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="text-lg mt-2">
          {fieldsProduct.salePrice ? (
            <>
              <span className="text-gray-700 font-medium">{pice}:-</span>
              <span className="ml-2 text-red-600 line-through">{fieldsProduct.salePrice}:-</span>
            </>
          ) : (
            <span className="text-gray-700">{pice}:-</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
