import SenasteNytt from '../../../app/Components/SenasteNytt';
import WineTourism from '../../../app/Components/WineTourism';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import Subscription from '../../Components/Subscription';
import AuthorHero from '../../Components/AuthorHero';
import ProductCard from '../../Components/ProductCard';
import Price from '../../Produkter/Components/Price';

export const metadata = {
  title: 'grape page',
  description: 'This is agiorgitiko grape pairing',
};

export default function grape() {
  return (
    <div>
      <Navbar />
      <AuthorHero title="Agiorgitiko" />
      <div className="container mx-auto flex flex-col w-full py-10">
        <h2 className=" items-start text-black text-2xl w-full">Viner gjorda på Agiorgitiko druvor</h2>
      </div>
      <ProductCard />

      <Subscription />
      <Price />
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
