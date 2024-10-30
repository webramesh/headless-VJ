import { getAllProducenter } from '@/src/lib/api/producenterAPI';
import Map from '../Components/Map';
import Pagination from '../Components/Pagination';
import ProducenterCard from '../Components/producenterCard/ProducenterCard';
import BreadCrumb from '../Components/breadcrumb/BreadCrumb';

export default async function page() {
  const allproducenters = await getAllProducenter();
  return (
    <>
      <div className=" text-xs lg:text-sm flex gap-1 my-2">
        <BreadCrumb title1="Producenter" />
      </div>
      <h1 className="text-2xl lg:text-3xl  mb-4 font-bold uppercase ">Producenter</h1>
      {/* <div className="h-96">
        <Map />
      </div> */}
      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {allproducenters.map((producenter) => (
          <div key={producenter.id}>
            <ProducenterCard producenter={producenter} />
          </div>
        ))}
        {/* pagination */}
      </div>
      <Pagination />
    </>
  );
}
