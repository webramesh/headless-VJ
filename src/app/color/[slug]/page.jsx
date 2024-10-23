import SenasteNytt from '../../../app/Components/SenasteNytt';
import WineTourism from '../../../app/Components/WineTourism';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import Subscription from '../../Components/Subscription';
import AuthorHero from '../../Components/AuthorHero';
import ProductCard from '../../Components/ProductCard';

export const metadata = {
  title: 'color page',
  description: 'This is beige color',
};

export default function Color() {
  return (
    <div>
      <Navbar />
      <AuthorHero title="Beige" />
      <div className="container mx-auto flex flex-col w-full py-10">
        <h2 className=" items-start text-black text-2xl w-full">Alla viner relaterade till beige färg</h2>
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
      <Footer />
    </div>
  );
}
