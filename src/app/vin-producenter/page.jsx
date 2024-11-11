import { countProducenters } from '@/src/lib/api/producenterAPI';
import BreadCrumb from '../Components/breadcrumb/BreadCrumb';
import ProducenterContainer from './components/ProducenterContainer';

export default async function page() {
  const totalProducenters = await countProducenters();
  console.log(totalProducenters);
  return (
    <>
      <div className=" text-xs lg:text-sm flex gap-1 my-2">
        <BreadCrumb title1="Producenter" />
      </div>
      <h1 className="text-2xl lg:text-3xl  mb-4 font-bold uppercase">Producenter</h1>
      <ProducenterContainer totalProducenters={totalProducenters} />
    </>
  );
}
