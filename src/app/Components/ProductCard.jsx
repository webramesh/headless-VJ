import Image from 'next/image';
import Link from 'next/link';
import wine1 from '@/public/wine1.png';

function ProductCard({ product }) {
  const { featuredImage, fieldsProduct, produktTyper, slug, title, produktslander } = product;
  const { productLabels, pice } = fieldsProduct;
  return (
    <div className="border-2 shadow-md hover:shadow-lg transition-shadow duration-300 p-6 h-[450px]">
      <div className="flex flex-col justify-between h-full items-start">
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
          {produktTyper?.nodes?.map((recommendation, i, arr) => (
            <Link href={`/produkt-typer/${recommendation.slug}`} key={i} className="hover:text-red-500 mt-2 inline">
              {i < arr.length - 1 ? `${recommendation.name} | ` : recommendation.name}
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
            {produktslander?.nodes?.map((region, i, arr) => (
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
