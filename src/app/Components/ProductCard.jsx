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

  return (
    <div className="border-2 shadow-md hover:shadow-lg transition-shadow duration-300 p-6 h-[450px]">
      <div className="flex flex-col justify-between h-full items-start">
        <div className="absolute">
          {fieldsProduct?.productLabels?.map((label) => {
            const productLabel = label.toLowerCase();

            return (
              <div key={productLabel} className='my-0.5'>
                {/* {productLabel === 'new' && <Image src="/new.svg" width={30} height={30} className="my-1" alt="new" />}
                {productLabel === 'available only online' && (
                  <Image src="/ekologisk.svg" width={30} height={30} className="my-1" alt="ekologisk" />
                )}
                {productLabel === 'organic' && (
                  <Image src="/vegan.svg" width={30} height={30} className="my-1" alt="vegan" />
                )}
                {productLabel === 'vegan' && (
                  <Image src="/vegan.svg" width={30} height={30} className="my-1" alt="vegan" />
                )}
                {productLabel === 'best seller' && (
                  <Image src="/best-seller.svg" width={30} height={30} className="my-1" alt="best-seller" />
                )}
                {productLabel === 'family winery' && (
                  <Image src="/family.svg" width={30} height={30} className="my-1" alt="Family Winery" />
                )}
                {productLabel === 'verified by vjse' && (
                  <Image src="/vegan.svg" width={30} height={30} className="my-1" alt="Verified By VJSE" />
                )}

                {productLabel === 'featured' && (
                  <Image src="/vegan.svg" width={30} height={30} className="my-1" alt="Featured" />
                )}
                {productLabel === 'on sale' && (
                  <Image src="/vegan.svg" width={30} height={30} className="my-1" alt="On Sale" />
                )}

                {productLabel === 'show wt information' && (
                  <Image src="/vegan.svg" width={30} height={30} className="my-1" alt="Show WT Information" />
                )} */}

                {productLabel === 'new' && <Image src="/new.svg" width={30} height={30} alt="Nyhet" />}

                {productLabel === 'organic' && <Image src="/ekologisk.svg" width={30} height={30} alt="Ekologisk" />}
                {productLabel === 'vegan' && <Image src="/vegan.svg" width={30} height={30} alt="Veganskt" />}
                {productLabel === 'best seller' && (
                  <Image src="/best-seller.svg" width={30} height={30} alt="best-seller" />
                )}
                {productLabel === 'family winery' && (
                  <Image src="/family.svg" width={30} height={30} alt="Family Winery" />
                )}
                {productLabel === 'verified by vjse' && (
                  <Image src="/verified.svg" width={30} height={30} alt="Verified By VJSE" />
                )}
                {productLabel === 'sustainable' && (
                  <Image src="/verified.svg" width={30} height={30} alt="Verified By VJSE" />
                )}
                {/* do same for sustainable */}

                {productLabel === 'on sale' && <p className="bg-red-600 text-white px-1 text-center text-[10px] py-2 rounded-full">Sale</p>}
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
          {/* <div className="flex gap-2 mt-4 items-center"> */}
          {/* <Image
                          src={ellipse}
                          alt="Citran Wine"
                          className="object-cover"
                          width={15}
                          height={15}
                          /> */}
          <div className="text-sm mt-2">
            {sortedLanders?.map((region, i, arr) => (
              <span key={i}>{i < arr.length - 1 ? region.name + ' | ' : region.name}</span>
            ))}
          </div>
        </div>
        {/* </div> */}
        <div className="text-lg  mt-2">{pice}:-</div>
      </div>
    </div>
  );
}

export default ProductCard;
