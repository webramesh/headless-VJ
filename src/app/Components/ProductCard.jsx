import Image from 'next/image';
import Link from 'next/link';
import wine1 from '@/public/wine1.png';
import { findDepth } from '@/src/utils/utils';

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
  const imageMap = {
    bestSeller: '/best-seller.svg',
    organicWine: '/ekologisk.svg',
    familyWinery: '/family.svg',
    newWine: '/new.svg',
    sustainable: '/sustainable.svg',
    veganWine: '/vegan.svg',
    verifiedByVjse: '/verified.svg',
  };

  return (
    <div className="border-2 shadow-md hover:shadow-lg transition-shadow duration-300 p-6 h-[450px]">
      <div className="flex flex-col justify-between h-full items-start">
        <div className="absolute">
          {fieldsProduct?.productLabels &&
            Object.entries(fieldsProduct.productLabels)
              .filter(([key, value]) => value && key !== '__typename') // Exclude __typename and filter labels with true values
              .map(([key]) => {
                return (
                  <div key={key} className="relative block">
                    <div className="my-1  ">
                      <Image src={imageMap[key]} width={30} height={30} alt={key} className={`cursor-pointer `} />
                    </div>
                  </div>
                );
              })}
        </div>

        <Link href={`/produkter/${slug}`} className="flex justify-center w-full h-56">
          <Image
            src={featuredImage?.node?.sourceUrl || wine1}
            alt={title}
            className="object-contain h-full w-full"
            width={200}
            height={200}
            priority
          />

          {/* //for product labels */}
        </Link>
        <div className=" text-red-600 mt-2">
          {displayedTypers?.map((type, i, arr) => (
            <Link href={`/produkt-typer/${type.slug}`} key={i} className="hover:text-red-500 mt-2 inline">
              {i < arr.length - 1 ? `${type.name} | ` : type.name}
            </Link>
          ))}
        </div>
        <div>
          <Link href={`/produkter/${slug}`} className="leading-6 text-lg">
            {title}
          </Link>

          <div className="text-sm mt-2">
            {sortedLanders?.map((region, i, arr) => (
              <span key={i}>{i < arr.length - 1 ? region.name + ' | ' : region.name}</span>
            ))}
          </div>
        </div>
        {/* </div> */}
        {/* <div className="text-lg  mt-2">{pice}:-</div> */}
        <div className="text-lg mt-2">
          {pice}:-
          {fieldsProduct.salePrice && (
            <span className="text-red-600" style={{ textDecoration: 'line-through', marginLeft: '12px' }}>
              {fieldsProduct.salePrice}:-
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
