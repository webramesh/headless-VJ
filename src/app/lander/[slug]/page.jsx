import { getLandBySlug } from '@/src/lib/api/landerAPI';
import BreadCrumb from '../../Components/breadcrumb/BreadCrumb';
// import Map from '../../Components/Map';
import RegionalCardItem from '../../Components/regionalCard/RegionalCardItem';
import { generateSeoMetadata } from '@/src/utils/utils';

export async function generateMetadata({ params }) {
  const data = await getLandBySlug(params.slug);

  const seo = data?.seo;

  if (seo) {
    return generateSeoMetadata(seo);
  }
}

async function page({ params }) {
  const landerDetails = await getLandBySlug(params.slug);
  const { name, description, regioner } = landerDetails;
  return (
    <>
      {/* <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 mt-4 lg:mt-8 bg-slate-50  p-4">
        <div className="w-full  flex flex-col gap-2">
          <BreadCrumb title1="Lander" link1="/vin-atlas" title2={name} />
          <div className="h-96 w-full">
            <Map />
          </div>
        </div>
      </div> */}
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row mx-4 lg:mx-52 z-10">
          <div className="flex flex-col gap-2 bg-white w-full lg:w-auto">
            <div className="shadow-2xl p-4 lg:p-12">
              <BreadCrumb title1="Lander" link1="/vin-atlas" title2={name} />
              <h1 className="text-2xl lg:text-3xl  mb-4 font-bold uppercase ">{name}</h1>
              <div dangerouslySetInnerHTML={{ __html: description }} className="content" />

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5 lg:mt-10">
                {regioner.nodes.map((region) => (
                  <div key={region.id}>
                    <RegionalCardItem region={region} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
