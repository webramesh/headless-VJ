import Footer from '@/src/app/Components/Footer';
import Navbar from '@/src/app/Components/Navbar';
import Sidebar from '@/src/app/Components/Sidebar';
import SubscriptionForm from '@/src/app/Components/subscription/SubscriptionForm';
import CatAccordion from '@/src/app/[category]/Components/CatAccordion';
import JoinTeamForm from '../Components/JoinTeamForm';
import Link from 'next/link';

function page() {
  return (
    <>
      <Navbar />

      <div className="container mx-auto flex  lg:flex-row gap-6 lg:gap-12 mt-4 lg:mt-10 bg-slate-50  p-4">
        <div className="md:w-2/3 ">
          <h1 className="text-2xl lg:text-3xl  font-semibold uppercase my-5">
            Vill du bli en del av Vinjournalen.se under 2024?
          </h1>

          <p className="text-sm lg:text-base mb-1 lg:mb-2">
            Vi på Vinjournalen.se vill låta vårt team växa. Vi söker just nu personer som vill hjälpa oss att skapa
            bättre innehåll samt vara med och prova massa viner. Primärt söker vi personer med start mat och vin
            intresse som vill blogga på vår sida. Vi söker även person som är intresserade att prova vin och därefter
            dela sina bedömningar. Vänligen fyll i formulär nedan som ett första steg för att initiera kontakt.
          </p>
          <JoinTeamForm />
          {/* Rules */}
          <p className="text-sm lg:text-base mb-1 lg:mb-2">
            Vår redaktion kommer att läsa din intresseanmälan och därefter återkomma. Vårt mål är utöka vår redaktion
            från januari 2024.
          </p>
          <h3 className="text-xl lg:text-2xl my-2 lg:my-4 font-semibold">Rules to be Known</h3>
          <ul className="list-disc m-auto w-11/12 text-sm lg:text-base">
            <li>
              Use ”grapes” for ”grape must” and ”concentrated grape must” for ”rectified concentrated grape must.”
            </li>
            <li>”Tirage liqueur” and ”shipping liqueur” may be indicated without specifying individual ingredients.</li>
            <li>
              Up to three ’acidity regulators’ and ’stabilising agents’ are allowed, with at least one used in the
              process.
            </li>
            <li>When blending wines with identical ingredients, list each ingredient only once.</li>
            <li>
              List ingredients in descending order of weight as used during manufacturing. Ingredients below 2% may be
              listed in any order, following EU 169/2011 ANNEX VII.
            </li>
            <li>
              <Link
                href="https://eur-lex.europa.eu/LexUriServ/LexUriServ.do?uri=OJ:L:2011:304:0018:0063:en:PDF"
                target="_blank"
                className="text-red-500"
              >
                ANNEX VII of EU 169/2011
              </Link>
            </li>
          </ul>
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
