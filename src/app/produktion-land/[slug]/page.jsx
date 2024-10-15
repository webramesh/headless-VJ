import Map from '@/src/app/Components/Map';
import ProducenterCard from '@/src/app/Components/producenterCard/ProducenterCard';
import ProductCard from '../../Components/ProductCard';

function page({ params }) {
    return (
        <>
            <h1 className="text-2xl lg:text-3xl font-outfit mb-4 font-semibold uppercase ">
                vinproducenter från {params.slug}
            </h1>
            <p className="text-sm lg:text-base mb-1 lg:mb-2">
                Argentina räknades år 2011 som den femte största vinproducenten i världen. Speciellt
                för Argentina är deras högt belägna vingårdar i Anderna där druvor som Malbec,
                landets nationaldruva, trivs utmärkt. Mendoza är landets vinmekka, men druvor odlas
                överallt från Salta i norr och Patagonia i söder.
            </p>

            <div className="h-96 my-10">
                <Map />
            </div>
            <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {Array.from({ length: 15 }, (_, i) => (
                    <div key={i}>
                        <ProducenterCard />
                    </div>
                ))}
            </div>
            {/* pagination */}
            {/* <Pagination pageNumber={params.slug} /> */}
            <div className="md:grid-cols-2 lg:grid-cols-3 grid my-10">
                <ProductCard />
            </div>
        </>
    );
}

export default page;
