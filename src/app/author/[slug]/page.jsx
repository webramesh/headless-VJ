import SenasteNytt from '../../../app/Components/SenasteNytt';
import WineTourism from '../../../app/Components/WineTourism';
import Card from '../../Components/Card';
import Navbar from '../../Components/Navbar';
import Subscription from '../../Components/Subscription';
import AuthorHero from '../../Components/AuthorHero';
import CircleImage from '../Components/CircleImage';

export default function Author() {
  return (
    <div>
      <Navbar />
      <AuthorHero title="Author" />
      <CircleImage />
      <Card title="FROM AUTHOR" subtitle="Read more articles from Jeanetter Gardner" />
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
