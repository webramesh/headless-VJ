import Map from '../../Components/Map';
import RegionalCardItem from '../../Components/regionalCard/RegionalCardItem';

const h2Style = 'text-xl lg:text-2xl my-2 lg:my-4 font-semibold';
const pStyle = 'text-sm lg:text-base mb-1 lg:mb-2';
const h3Style = 'text-base lg:text-lg my-1 lg:my-2 ';

export default function LanderContent({ params }) {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 mt-4 lg:mt-8 bg-slate-50  p-4">
        <div className="w-full  flex flex-col gap-2">
          <div className=" text-xs lg:text-sm flex gap-1">
            Hem » Lander » <p className="capitalize">{params.slug}</p>
          </div>

          <div className="h-96 w-full">
            <Map />
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-16 mx-4 lg:mx-52 lg:-mt-16 z-10">
          <div className="flex flex-col gap-2 bg-white w-full lg:w-auto">
            <div className="shadow-2xl p-4 lg:p-16">
              <h1 className="text-2xl lg:text-3xl  mb-4 font-bold uppercase ">{params.slug}</h1>
              <p className={pStyle}>
                Argentina är Sydamerikas största och världens femte vinproducent. Viner från Argentina har fördel av ett
                gynnsamt klimat med Anderna som ger höjd över havet. Exporterade viner från Argentina görs huvudsakligen
                på klassiska röda druvor som Merlot, Cabernet Sauvignon och Malbec samt nykomlingen Bonarda. Bland gröna
                druvor finns Pedro Ximénez, även Torontés Riojano, Moscatel de Alejandría.
              </p>
              <div className="text-center text-[#3e4c59] italic text-sm lg:text-base">
                <p>
                  Det är ingen överdrift att säga att vin är en central del av den argentinska kulturen. Vinet har
                  hjälpt till att definiera landets gastronomi och har en stark närvaro i vardagen, i festligheter och i
                  traditioner. Argentinska viner är kända för sin fyllighet och djup, med tydliga, fruktiga toner som
                  kompletteras av jordiga undertoner, tack vare den mineralrika jorden. Den mest kända druvan, Malbec,
                  ger djupt röda viner med smaker av plommon, björnbär och svarta körsbär, med undertoner av kryddor och
                  choklad.
                </p>
              </div>
              <div>
                <h2 className={h2Style}>Introduktion till viner från Argentina</h2>
                <p className={pStyle}>
                  Argentinas vinlandskap är lika fascinerande som dess kulturella rikedom och naturliga skönhet. Landet,
                  som sträcker sig från Tropic of Capricorn till spetsen av Antarktis, erbjuder enastående variationer i
                  klimat och terräng, vilket gör det idealiskt för att odla en mängd olika druvsorter. Argentina är
                  världens femte största vinproducent och erbjuder kvalitetsviner med en unik terroir, med Malbec som
                  den mest framstående druvan, följt av Cabernet Sauvignon, Syrah och Torrontes.
                </p>
              </div>
              <div>
                <h2 className={h2Style}>Vinregioner</h2>
                <p className={pStyle}>
                  Argentina har flera vinregioner, var och en med sin unika terroir. De mest framstående är:
                </p>
              </div>
              <h3 className={h3Style}>Mendoza:</h3>
              <p className={pStyle}>
                Den mest kända och produktiva vinregionen i Argentina. Den ligger vid foten av Anderna och är särskilt
                känd för sin Malbec. Druvan trivs i den höga höjden och det soliga klimatet, vilket ger rika och
                komplexa viner.
              </p>
              <h3 className={h3Style}>Salta:</h3>
              <p className={pStyle}>
                En av de högst belägna vinregionerna i världen. Salta är mest känd för sina viner av druvan Torrontes,
                som producerar aromatiska och kryddiga vita viner med tydliga noter av citrus och blommor.
              </p>
              <h3 className={h3Style}>Patagonien:</h3>
              <p className={pStyle}>
                Den sydligaste vinregionen i Argentina, känd för sin Pinot Noir och Merlot. Regionen har ett kallare
                klimat än resten av Argentina, vilket resulterar i eleganta och balanserade viner.
              </p>
              <h2 className={h2Style}>Odlingsförhållanden över hela landet</h2>
              <p className={pStyle}>
                Argentinas geografiska läge och naturliga egenskaper har spelat en avgörande roll i dess vinproduktion.
                Andes bergskedja, med sina snötäckta toppar, tillhandahåller rent vatten för vinrankorna, medan de stora
                dagliga temperaturskillnaderna hjälper till att skapa viner med djup och komplexitet. Höjd är en
                nyckelfaktor i vinodlingen i Argentina, med vingårdar belägna på höjder mellan 600 och 3000 meter över
                havet. Dessa odlingsförhållanden bidrar till att skapa idealiska förutsättningar för produktion av viner
                med stark karaktär och utmärkta aromer.
              </p>
              <p className={pStyle}>
                Jordmånen spelar också en viktig roll i vinets karaktär. Mendozas alluviala jordar, rika på kisel och
                lerjord, bidrar till att producera viner med starka, robusta smaker. Salta, å andra sidan, har sandig
                jord som ger vinerna en distinkt mineralitet.
              </p>
              <p className={pStyle}>
                Det är också värt att notera att många argentinska vinproducenter följer hållbara och ekologiska
                jordbrukspraktiker, med respekt för miljön och bevarande av terroiren.
              </p>
              <h2 className={h2Style}>Vinets historia och vinproduktion</h2>
              <p className={pStyle}>
                Vinets historia i Argentina sträcker sig tillbaka till 1500-talet, då de första vinrankorna planterades
                av spanska missionärer. Under 1800-talet fick vinindustrin ett uppsving när europeiska invandrare,
                främst från Italien och Spanien, introducerade nya druvsorter och förbättrade vinframställningstekniker.
              </p>
              <p className={pStyle}>
                Vinproduktionen i Argentina har genomgått en revolution under de senaste decennierna. Från att ha
                fokuserat på kvantitet har landet nu vänt sitt fokus mot kvalitet, med producenter som experimenterar
                med olika druvsorter och vinframställningstekniker för att producera viner av hög kvalitet.
              </p>
              <p className={pStyle}>
                Teknologiska framsteg har också spelat en viktig roll i Argentinas vinindustri. Moderna
                vinproduktionsmetoder har tillåtit producenter att maximera druvornas potential och skapa viner med en
                balans av mognad och friskhet.
              </p>
              <p className={pStyle}>
                Att förstå Argentina genom dess viner är att utforska ett land rikt på historia, kultur och en passion
                för vinframställning som sträcker sig över århundraden. Från de höga topparna i Salta till det svala
                klimatet i Patagonien fortsätter Argentina att erbjuda världen fantastiska viner och en inblick i sin
                unika vinodlingskultur.
              </p>
              <h2 className={h2Style}>Perfekt vinkombination: Fem rätter att para ihop med Argentinsk viner</h2>
              <h3 className={h3Style}>Asado med Malbec</h3>
              <p className={pStyle}>
                Asado, eller argentinsk grillning, är en institution i Argentina. Detta är en ganska robust och smakrik
                rätt, vanligtvis bestående av nöt- eller fläskkotletter, korv och ibland även inälvsmat, alla tillagade
                på en vedeldad grill. Det bästa vinet att para ihop med en saftig asado är en fyllig, kraftig argentinsk
                Malbec. Med sina rika tanniner och smaker av mörka frukter och kryddor, kompletterar Malbec väl de smoky
                och smakrika tonerna i Asado.
              </p>
              <h3 className={h3Style}>Empanadas med Torrontés </h3>
              <p className={pStyle}>
                Empanadas är en populär förrätt eller snacks i Argentina, med en fyllning av kött, kyckling, ost eller
                grönsaker inbäddade i en krispig deg. Det mångsidiga vinet att servera med empanadas är den inhemska
                vitvinet Torrontés. Detta vin är lätt till medium kropp, med hög syrlighet och aromer av citrus, persika
                och vita blommor, vilket kompletterar den smöriga, fylliga smaken av empanadas.
              </p>
              <h3 className={h3Style}>Locro med Bonarda</h3>
              <p className={pStyle}>
                Locro är en traditionell argentinsk gryta, oftast gjord med majs, bönor och olika sorters kött. Den har
                en rik, komplex smakprofil som bäst kompletteras av ett kraftfullt rött vin. Bonarda, Argentinas näst
                mest planterade druva, är ett utmärkt val. Bonarda-viner har en djup fruktighet med toner av plommon och
                körsbär, samt en kryddig avslutning som matchar väl med Locros robusta smaker.
              </p>
              <h3 className={h3Style}>Provoleta med Cabernet Sauvignon</h3>
              <p className={pStyle}>
                Provoleta är en traditionell argentinsk rätt bestående av provoloneost som är grillad tills den smälter
                och blir gyllenbrun. För att balansera den rika, krämiga smaken av Provoleta, välj en Cabernet
                Sauvignon. Denna druva ger rika, strukturerade viner med toner av svarta vinbär, plommon och gröna
                paprika, samt en trevlig tanninstruktur som balanserar ostens feta rikedom.
              </p>
              <h3 className={h3Style}>Dulce de Leche med Late Harvest Malbec</h3>

              <p className={pStyle}>
                Dulce de Leche, en söt mjölkkräm, är basen för många argentinska desserter. Det är extremt sött och
                rikt, vilket kräver ett vin som kan matcha dess intensitet utan att bli överväldigat. Ett Late Harvest
                Malbec, gjort med övermogen Malbec-druvor för att producera ett naturligt sött vin, är ett utmärkt val.
                Dess rika smaker av mörk frukt och mjuk sötma kompletterar den karamelliserade sötman i Dulce de Leche.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5 lg:mt-10">
                <RegionalCardItem />
                <RegionalCardItem />
                <RegionalCardItem />
                <RegionalCardItem />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
