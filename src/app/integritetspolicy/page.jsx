import SenasteNytt from '../../app/Components/SenasteNytt';
import WineTourism from '../../app/Components/WineTourism';
import Subscription from '../Components/Subscription';
import AuthorHero from '../Components/AuthorHero';

export const metadata = {
  title: 'CIntegritetspolicy',
  description: 'This is Integritetspolicy page',
};

export default function integritetspolicy() {
  return (
    <div>
      <AuthorHero title="Integritetspolicy" />
      <div className="container mx-auto flex flex-col w-full py-10 px-4 md:px-8 lg:px-12">
        <p className="mb-6">
          Att skydda våra kunders personliga integritet är något vi värnar om på Vinjournalen.se. I vår
          integritetspolicy beskriver vi hur vi använder och sparar din personliga information – och varför vi gör det.
          GDPR (General Data Protection) är en ny EU-förordning som ersätter den svenska personuppgiftslagen (PUL) från
          och med den 25 maj 2018. Förordningen innebär ett förtydligande av hur företag får behandla dina
          personuppgifter. Med anledning av detta har vi upprättat en integritetspolicy.
        </p>
        <h2 className="mb-6 text-2xl">Vi behandlar dina personuppgifter för att:</h2>
        <p className="mb-6">
          Kunna administrera ditt nyhetsbrev/sms-utskick som du valt att anmäla dig till med din
          e-postadress/telefonnummer. Exempelvis så att du ska ha möjlighet att få uppdateringar om det senaste inom
          vin- och dryckesbranschen. Just nu skickar vi endast ut ett nyhetsbrevet skickas ut 1-2 gånger per månad. Det
          vill säga att det vi skickar i form av e-post, SMS och post ska vara baserat på det som du faktiskt visat
          intresse för.
        </p>
        <h2 className="mb-6 text-2xl">Vilka rättigheter har du att påverka hur vi behandlar dina personuppgifter?</h2>
        <p className="mb-6">
          Du har flertalet rättigheter enligt GDPR bland annat rätten att alltid invända mot marknadsföring.
        </p>
        <h2 className="mb-6 text-2xl">Vem är ansvarig för behandlingen av dina personuppgifter?</h2>
        <p className="mb-6">
          Wine Media AB, med organisationsnummer 556941-2421 är ansvariga för behandlingen av dina personuppgifter.
        </p>
        <p className="mb-6">
          Din integritet är viktig för oss. I denna policy vill vi informera dig om hur dina personuppgifter behandlas
          av oss när du besöker oss online och identifierar dig vi ett e-postformulär för att få vårt nyhetsbrev eller
          annan marknadsföring från oss.
        </p>
        <p className="mb-6">
          Om du har några frågor angående behandlingen av dina personuppgifter eller om du vill vända dig till oss för
          att utöva dina rättigheter är du välkommen att kontakta oss jeanette@vinjournalen.se.
        </p>
        <h2 className="mb-6 text-2xl">Hur behandlar vi dina uppgifter?</h2>
        <p className="mb-6">
          E-post/telefonnummer behandlas från det att du anmäler intresse för att få våra utskick, tills dess att du
          själv avregistrerar dig via den automatiska länken nedan i nyhetsbrevet.
        </p>

        <h2 className="mb-6 text-2xl">Hur skyddar vi dina personuppgifter?</h2>
        <p className="mb-6">
          Vi och våra samarbetspartners har vidtagit flertalet organisatoriska såväl som tekniska säkerhetsåtgärder för
          att skydda dina personuppgifter. Vi arbetar aktivt med att följa EU:s dataskyddsförordning (GDPR). Vårt
          IT-system hjälper oss att skydda dina personuppgifter från olovlig eller obehörig behandling. Vidare har vi
          interna rutiner som säkerställer att inte fler personer än nödvändigt har tillgång till dina uppgifter.
        </p>

        <h2 className="mb-6 text-2xl">
          Måste du tillhandahålla dina personuppgifter till oss och vad händer om du inte gör det?
        </h2>
        <p className="mb-6">
          Ditt samtycke krävs t.ex. om du vill fortsätta att få vårt nyhetsbrev och /eller SMS-utskick innehållandes
          information och erbjudanden till dig under en längre tid, annars skickar dig information,
        </p>

        <h2 className="mb-6 text-2xl">Vilka kan få tillgång till dina personuppgifter?</h2>
        <p className="mb-6">
          Dina personuppgifter behandlas som utgångspunkt endast av Vinjournalen.se. Mer i detalj: Vi delar din
          e-postadress/telefonnummer med vår interna kundtjänst för att kunna upprätthålla utskick av nyhetsbrev. Vi
          delar inte din e-postadress/telefonnummer med tredje part.
        </p>

        <h2 className="mb-6 text-2xl">Vilka rättigheter har du att påverka hur vi behandlar dina personuppgifter?</h2>
        <p className="mb-6">
          Enligt EU:s dataskyddsförordning (GDPR) har du vissa rättigheter avseende behandlingen av dina
          personuppgifter. Vi har beskrivit vilka rättigheter du har och vad de innebär nedan. För att utöva dina
          rättigheter är du välkommen att kontakta oss, se kontaktuppgifter ovan.
        </p>

        <h2 className="mb-6 text-2xl">Återkalla ditt samtycke till utskick av nyhetsbrev</h2>
        <p className="mb-6">
          Om vi behandlar uppgifter om din e-postadress/telefonnummer med stöd av att du har lämnat ditt samtycke har du
          rätt att när som helst återkalla hela eller del av ett lämnat samtycke om behandling av dina personuppgifter.
          Återkallandet av samtycket gäller från och med dagen för återkallandet.
        </p>

        <h2 className="mb-6 text-2xl">Rätt till tillgång</h2>
        <p className="mb-6">
          Du har rätt att få en bekräftelse på om uppgifter som rör dig behandlas samt tillgång till information om hur
          uppgifterna behandlas, t.ex. ändamålen med behandlingen och vilka kategorier av uppgifter som behandlingen
          gäller.
        </p>

        <h2 className="mb-6 text-2xl">Rätt till rättelse</h2>
        <p className="mb-6">
          Du har även rätt att utan onödigt dröjsmål få felaktige-postadress rättad, samt genom att tillhandahålla
          information komplettera ofullständiga e-post/telefonnummer. E-post
        </p>

        <h2 className="mb-6 text-2xl">Rätt till radering (rätten att bli bortglömd)</h2>
        <p className="mb-6">
          Du har rätt att begära radering av din e-postadress. Vinjournalen.se raderar dina personuppgifter på din
          begäran, under förutsättning att vi inte har en skyldighet att spara personuppgifterna i enlighet med EU:s
          dataskyddsförordning (GDPR) eller annan lagstiftning.
        </p>

        <h2 className="mb-6 text-2xl">Rätt till begränsning av behandling</h2>
        <p className="mb-6">Gäller inte hos oss då vi endast har din e-postadress/telefonnummer.</p>

        <h2 className="mb-6 text-2xl">Rätt att invända mot behandling</h2>
        <p className="mb-6">
          Du har rätt att invända mot att dina personuppgifter behandlas för marknadsföringsändamål, vilket inkluderar
          profilering i den utsträckning som denna har ett samband med sådan direkt marknadsföring. Om du invänder mot
          marknadsföring och/eller profilering kommer din e-postadress/telefonnummer inte längre att behandlas för
          sådana ändamål.
        </p>

        <h2 className="mb-6 text-2xl">Rätt att inge klagomål</h2>
        <p className="mb-6">
          Du har rätt att lämna klagomål till en behörig tillsynsmyndighet (utan att det påverkar något annat
          administrativt prövningsförfarande eller rättsmedel). Ett sådant klagomål lämnas med fördel till behörig
          tillsynsmyndighet som är Datainspektionen som du når via www.datainspektionen.se.
        </p>

        <h2 className="mb-6 text-2xl">Rätt till dataportabilitet</h2>
        <p className="mb-6">
          Du har rätt att få ut de personuppgifter som rör dig som du har lämnat till oss i ett strukturerat, allmänt
          använt och maskinläsbart format och har rätt att överföra dessa till en annan personuppgiftsansvarig
          (dataportabilitet) när:
        </p>
        <div className="container mx-auto p-4">
          <ul className="list-disc list-inside space-y-2">
            <li>behandlingen grundar sig på ditt samtycke eller på ett avtal; och</li>
            <li>behandlingen sker automatiserat.</li>
          </ul>
        </div>
        <p className="mb-6">
          Du har rätt till överföring av personuppgifterna direkt från oss till en annan personuppgiftsansvarig när
          detta är tekniskt möjligt.
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
