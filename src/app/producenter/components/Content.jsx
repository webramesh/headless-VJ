import Link from "next/link";

export default function Content({ params }) {
  return (
    <div className="p-2 md:w-1/2 font-outfit">
      <div className=" text-xs lg:text-sm text-red-500 uppercase">
        italien land
      </div>

      <h1 className="font-bold text-lg lg:text-4xl capitalize">
        {params.slug}
      </h1>

      <div className="text-xs md:text-sm my-1 lg:my-4 flex gap-1">
        Hem » Producenter » <p className="capitalize">{params.slug}</p>
      </div>
      <p className="text-sm lg:text-base mb-1 lg:mb-2 text-justify">
        {/* import content */}
        Nigab är en framstående vinproducent som är känd för sina högkvalitativa
        viner och passion för vinframställning. Med en gedigen kunskap och
        erfarenhet inom vinodling och vinmakning har de skapat ett imponerande
        sortiment av viner med en unik karaktär och stil. Nigab strävar efter
        att producera viner av högsta kvalitet genom att noggrant välja druvor
        och använda moderna vinmakningstekniker. Deras viner är välbalanserade,
        smakrika och uttrycksfulla och erbjuder en njutbar och minnesvärd
        vinupplevelse. Utforska deras sortiment av viner och upptäck den unika
        smakprofilen och personligheten som Nigab har att erbjuda. Oavsett om du
        är en erfaren vinprovare eller nybörjare kommer Nigabs viner att locka
        dina sinnen och ge en förstklassig vinupplevelse.
      </p>
      <ul className="text-sm lg:text-base">
        <li>
          <b>Adress:&nbsp;</b>
          Italien, Piemonte, Barolo
        </li>
        <li>
          <b>Producent:&nbsp;</b>
          Nigab
        </li>
        <li>
          <b>Hemsida:&nbsp;</b>
          <Link
            className="text-[#eb7272]"
            href="http://www.fitapreta.com/"
            target="_blank"
          >
            http://www.fitapreta.com/
          </Link>
        </li>
      </ul>
    </div>
  );
}
