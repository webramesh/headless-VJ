import Map from '../Components/Map';
import Pagination from '../Components/Pagination';
import ProducenterCard from '../Components/producenterCard/ProducenterCard';

function page() {
  return (
    <>
      <div className=" text-xs lg:text-sm flex gap-1 my-2">Hem » Producenter</div>
      <h1 className="text-2xl lg:text-3xl  mb-4 font-bold uppercase ">Producenter</h1>
      <div className="h-96">
        <Map />
      </div>
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Array.from({ length: 15 }, (_, i) => (
          <div key={i}>
            <ProducenterCard />
          </div>
        ))}
        {/* pagination */}
      </div>
      <Pagination />
    </>
  );
}

export default page;
