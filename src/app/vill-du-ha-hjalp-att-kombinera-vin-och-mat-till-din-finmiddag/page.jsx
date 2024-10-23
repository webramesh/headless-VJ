import Footer from '@/src/app/Components/Footer';
import Navbar from '@/src/app/Components/Navbar';
import Sidebar from '@/src/app/Components/Sidebar';
import SubscriptionForm from '@/src/app/Components/subscription/SubscriptionForm';
import CatAccordion from '@/src/app/[category]/Components/CatAccordion';
import JoinTeamForm from '../Components/JoinTeamForm';
import lugana from '@/public/Lugana.png';
import Image from 'next/image';
import CombineWineFoodForm from '../Components/CombineWineFoodForm';

function page() {
  return (
    <>
      <Navbar />

      <div className="container mx-auto flex  lg:flex-row gap-6 lg:gap-12 mt-4 lg:mt-10 bg-slate-50  p-4">
        <div className="md:w-2/3 ">
          <h1 className="text-2xl lg:text-3xl  font-semibold uppercase my-5">
            Vill du ha hjälp att kombinera vin och mat till din finmiddag?
          </h1>
          <Image src={lugana} alt="region picture" className="w-full my-4 lg:my-10 object-contain" fill={false} />
          <p>
            Vinjournalen.se har tillsammans med sitt nätverk av dryckesentusiaster en god kunskap om drycker och hur de
            ska kombineras med mat. Vi jobbar med erfarna sommelierer som vi för denna tjänst kommer få hjälp av för att
            hjälpa dig med förslag om vin tilll din specifika maträtt. Vanligen så tar det oss 1-2 dagar innan vi
            återkommer till dig med vårt förslag så vänligen se till att inte höra av dig i sista stund.
          </p>
          <CombineWineFoodForm />
          <div className="space-y-10 my-10">
            <SubscriptionForm />
            <CatAccordion />
          </div>
        </div>

        <div className="w-1/3 hidden md:block sticky top-0 h-full">
          <Sidebar />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default page;
