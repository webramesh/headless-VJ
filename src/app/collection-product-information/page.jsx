import SenasteNytt from '../../app/Components/SenasteNytt';
import WineTourism from '../../app/Components/WineTourism';
import Navbar from '../Components/Navbar';
import Subscription from '../Components/Subscription';
import AuthorHero from '../Components/AuthorHero';

export const metadata = {
  title: 'Collection of Product Information',
  description: 'This is collection of product information page',
};

export default function collection() {
  return (
    <div>
      <Navbar />
      <AuthorHero title="Collection of Product Information" />
      <div className="container mx-auto flex flex-col w-full py-10 px-4 md:px-8 lg:px-12">
        <p className="mb-6">
          We are Vinjournalen.se, a leading Swedish wine magazine online with more than 120,000 unique readers monthly!
          Currently, we are building a complete online wine guide to the Swedish market. The guides are already very
          appreciated by Swedish wine consumers. Products that we present in the guide are also used in editorial
          content and can also be placed below article content as featured products.
        </p>
        <p className="mb-6">
          We have some basic details about the product collected today from online sources. More information, however,
          will help our visitors to better understand your wine and also be interested to read more about other wines
          from you as a producer or importer.
        </p>
        <p className="mb-6">
          Thanks in advance for your help to let us present your product in the very best way online.
        </p>
      </div>

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
