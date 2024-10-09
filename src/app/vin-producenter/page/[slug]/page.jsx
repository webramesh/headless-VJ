import Map from "../../../Components/Map";
import Pagination from "../../../Components/Pagination";
import ProducenterCard from "../../../Components/producenterCard/ProducenterCard";

function page({ params }) {
  return (
    <>
      <div className="font-outfit text-xs lg:text-sm my-2">
        Hem » Producenter » Sida {params.slug}
      </div>
      <h1 className="text-2xl lg:text-3xl font-outfit mb-4 font-semibold uppercase ">
        Producenter
      </h1>
      <div className="h-96">
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
      <Pagination pageNumber={params.slug} />
    </>
  );
}

export default page;
