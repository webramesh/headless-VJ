import SenasteNytt from '../../app/Components/SenasteNytt';
import WineTourism from '../../app/Components/WineTourism';
import Card from '../Components/Card';
import AuthorHero from '../Components/AuthorHero';

export const metadata = {
  title: 'Bekräftelse registrering',
  description: 'This is Bekräftelse registrering page',
};

export default function newsletterSignup() {
  return (
    <div>
      <AuthorHero title="Bekräftelse registrering" />
      <div className="container mx-auto flex flex-col w-full py-10 px-4 md:px-8 lg:px-12">
        <h2 className="mb-6 text-2xl">Registreringen lyckades!</h2>
        <p mb-6>
          Tack för att du anmält dig till vårt nyhetsbrev på Vinjournalen.se! Som prenumerant kommer du att få
          regelbundna uppdateringar om allt som händer i vinvärlden, från de senaste trenderna inom vinproduktion till
          expertråd om vin och matparningar samt detaljerade recensioner. Vår blogg, med fokus på Sverige, Norge och
          Finland, ger dig en närmare inblick i de finaste vinerna och vinodlingen från hela världen, med ett särskilt
          fokus på den nordiska vinkulturen. Håll utkik i din inkorg efter spännande insikter, rekommendationer och tips
          från vinvärlden. Vi är glada att ha dig som en del av vår gemenskap!
        </p>
      </div>
      <h2 className="container mx-auto mb-6 text-2xl text-center py-6">Senaste artiklarna från redaktören</h2>
      <Card />

      <div className="flex flex-col md:flex-row container mx-auto py-10">
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
