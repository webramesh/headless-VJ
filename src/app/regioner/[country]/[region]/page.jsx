import Map from '@/src/app/Components/Map';
import Image from 'next/image';
import Link from 'next/link';
import lugana from '@/public/Lugana.png';

function page({ params }) {
    const { country, region } = params;
    return (
        <div>
            <h1 className="text-2xl lg:text-3xl font-outfit font-semibold uppercase">{region}</h1>
            <div className="font-outfit text-xs lg:text-sm my-2 lg:my-5 ">
                Hem » &nbsp;
                <Link href={`/vin-regioner`} className="capitalize">
                    Regioner
                </Link>
                &nbsp; »&nbsp;
                <Link href={`/regioner/${country}`} className="capitalize">
                    {country}
                </Link>
                &nbsp;»&nbsp;
                <Link href={`/regioner/${country}/${region}`} className="capitalize">
                    {region}
                </Link>
            </div>
            <div className="h-80">
                <Map />
            </div>
            <Image
                src={lugana}
                alt="region picture"
                className="w-full my-4 lg:my-10 object-contain"
                fill={false}
            />
            <p className="text-sm lg:text-base mb-1 lg:mb-2">
                Här odlas främst de röda druvorna Sangiovese och Montepulciano och de vita Trebbiano
                och Malvasia. Röda viner från Abruzzo är fylliga och smakrika och har fin färg. Vita
                viner från Abruzzo är torra och syrliga. DOC Montepulciano de Abruzzo och DOC
                Trebbiano d’Abruzzo är de mest kända områdena. Abruzzo har Italiens högsta tillåtna
                skördeuttag, vilket inte är positivt ur kvalitetssynpunkt.
            </p>
            <p className="text-sm lg:text-base mb-1 lg:mb-2">
                Är du intresserade av att besöka regionen Abruzzo?&nbsp;
                <Link
                    href="https://www.winetourism.com/wine-tasting-tours-in-abruzzo/"
                    className="text-red-500"
                    target="_blank"
                >
                    Boka enkelt vinprovning och vingårdsbesök i Abruzzo
                </Link>
                &nbsp; via WineTourism.com, en sida för vinturism på nätet.
            </p>
        </div>
    );
}

export default page;
