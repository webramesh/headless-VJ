import BreadCrumb from '../Components/breadcrumb/BreadCrumb';
import ProducenterContainer from './components/ProducenterContainer';

export default function page() {
  return (
    <>
      <div className=" text-xs lg:text-sm flex gap-1 my-2">
        <BreadCrumb title1="Producenter" />
      </div>
      <h1 className="text-2xl lg:text-3xl  mb-4 font-bold uppercase">Producenter</h1>
      <ProducenterContainer />
    </>
  );
}
