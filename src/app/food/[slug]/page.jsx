import SenasteNytt from '../../../app/Components/SenasteNytt';
import WineTourism from '../../../app/Components/WineTourism';
import Subscription from '../../Components/Subscription';
import AuthorHero from '../../Components/AuthorHero';
import ProductCard from '../../Components/ProductCard';

export const metadata = {
  title: 'food page',
  description: 'This is apertif food pairing',
};

export default function food() {
  return (
    <div>
      <AuthorHero title="Apertif" />
      <div className="container mx-auto flex flex-col w-full py-10">
        <h2 className=" items-start text-black text-2xl w-full">Viner som passar till aperitif</h2>
      </div>
      <ProductCard />

      <Subscription />
      <div className="flex flex-col md:flex-row container mx-auto">
        <div className="flex items-center md:w-2/3 p-10">
          <WineTourism />
        </div>

        <div className="flex items-center md:w-1/3 p-10">
          <SenasteNytt />
        </div>
      </div>
    </div>
  );
}
