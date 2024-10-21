import Image from "next/image";
import vinlogo from "@/public/vinlogo.png";

const CircleImage = () => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center">
                <div className="flex justify-center md:w-1/3">
                    <Image
                        src={vinlogo}
                        alt="Vinlogo Author"
                        className="w-48 h-48 md:w-96 md:h-96 max-w-full rounded-full object-cover p-10"
                        width={384}
                        height={384}
                    />
                </div>
                <div className="md:w-2/3 md:pl-8 p-4">
                    <h2 className="text-xl font-bold mt-4 md:mt-0">Jeanetter Gardner</h2>
                    <p className="text-base mt-2 mr-4 md:mr-36">
                        Jag är sedan 2014 redaktör och receptmakare för Vinjournalen.se. Författare och skribent, har arbetat internationellt i flera länder och i Sverige. Bor i skärgården utanför Stockholm och brinner för mat och vin.
                    </p>
                </div>
                
            </div>
            <div className="container mx-auto p-5">
           
<h2 className="text-xl font-bold mt-4 md:mt-0">Om mig själv</h2>
<p className="text-base mt-2 mr-4 md:mr-36">
Jag är sedan 2014 redaktör Vinjournalen.se och har skrivit de flesta artiklarna under 9 år. Som person är jag lyhörd, lösningsfokuserad och handlingskraftig. Jag kan förvalta och vidareutveckla idéer och visioner i nära samarbete med ägarteamet, samtidigt som jag trivs med att arbeta självständigt och ta eget ansvar för mina projekt.
</p>
<p className="text-base mt-2 mr-4 md:mr-36">
Jag har främst arbetat med consulting, affärsutveckling och feasibility projekt på det internationella business eventföretaget Institute for International Research i 32 länder, där jag började som copy writer men avancerade till att bli både CEO och länder-ansvarig samt utvecklare av länderkontor.
</p>
<p className="text-base mt-2 mr-4 md:mr-36">
Arbetade även för Bonnier Media och Bonnier Business Publishing inför uppstart av Bonnier Management, Bonnier Business Handbooks samt med flera uppstarts-projekt för Tidningen Chef bland annat Stora Chefsdagen, skrivit för Veckans Affärer, Amelia, Tara, Villaliv och otaliga kändisreportage för veckotidningar.
</p>
<p className="text-base mt-2 mr-4 md:mr-36">
Var initiativtagere och drev mellan 1989 – 2011 det svenska nätverket Bizwoman online för 11 000 affärskvinnor runt om i Skandinavien, främst i Sverige. Bizwoman var ett stöd för affärskvinnor med information, nyhetsbrev, events, frukostklubb m.m.  Sålde nätverket 2011 och arbetar sedan dess som frilansskribent och översättare. Jag pratar och skriver 6 språk, arbetar således för uppdragare i olika länder. Har gett ut 7 affärsböcker på svenska och amerikanska förlag.
</p>
<p className="text-base mt-2 mr-4 md:mr-36">
Den praktiska biten för Vinjournalen är att jag har en passion för mat och vin. Uppvuxen på 3 familjerestauranger på Östermalm och i Vasastan i Stockholm och senare lagat mat bland annat på Victoria och Rîche under ledning av Tore Wretman.
</p>
<h2 className="text-xl font-bold mt-4 md:mt-0">Utbildning</h2> 
<p className="text-base mt-2 mr-4 md:mr-36">
Studenten franska skolan, Master Business Economy inom ekonomisk teori och kvantitativa metoder för att analysera företag vid Haslam, Tennessee samt kortare kurser i ekonomi vid KTH, Stockholm.
</p>
<h2 className="text-xl font-bold mt-4 md:mt-0">Certifikat</h2> 
<ul>
<li>Extended Disc (beteendeanalysverktyg för rekrytering, grupputveckling m.m.);</li>
<li>Human Relationship & Public Speaking, Dale Carnegi Stockholm.</li>
</ul>
                </div>
        </div>
    );
};

export default CircleImage;