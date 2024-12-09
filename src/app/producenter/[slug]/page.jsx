import { getPageBySlug } from '@/src/lib/api/pageApi';
import Map from '../../Components/Map';
import Content from '../components/Content';
import { generateSeoMetadata } from '@/src/utils/utils';

export async function generateMetadata({ params }) {
  const data = await getPageBySlug(`producenter/${params.slug}`);

  const seo = data?.seo;

  if (seo) {
    return generateSeoMetadata(seo);
  }
}

export default function page({ params }) {
  return (
    <div className="container mx-auto lg:mt-10 p-2">
      <div className="md:flex gap-2">
        <Content params={params} />
        <div className="w-1/2">
          <Map />
        </div>
      </div>
    </div>
  );
}
