import wine1 from '@/public/wine1.png';
import ellipse from '@/public/ellipse.png';
import Image from 'next/image';

function ProductCard() {
  return (
    <div className="border-2 shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
      <div className="flex flex-col gap-2 items-start">
        <div className="flex justify-center w-full mb-4">
          <Image src={wine1} alt={`Wine `} className="object-cover" />
        </div>
        <div className=" text-red-500 mt-2 text-sm">Rött Vin | Vin</div>
        <div className=" leading-6 text-lg font-thin">Château Ducluzeau Les Grands Chais de France 2017</div>
        <div className="flex gap-2 mt-4 items-center">
          <Image src={ellipse} alt="Citran Wine" className="object-cover" width={15} height={15} />
          <div className="text-xs ">Frankrike | Bordeaux | Castillon Côtes ...</div>
        </div>
        <div className="text-lg  mt-2">434:-</div>
      </div>
    </div>
  );
}

export default ProductCard;
