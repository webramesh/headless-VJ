import { getProducentBySlug } from '@/src/lib/api/producenterAPI';
import Link from 'next/link';
import BreadCrumb from '../../Components/breadcrumb/BreadCrumb';

export default async function Content({ params }) {
  const producent = await getProducentBySlug(params.slug);
  const { title, content, producenterFields } = producent;
  const { producenterWebsite, producerAddress } = producenterFields;
  return (
    <div className="p-2">
      <h1 className="font-bold text-lg lg:text-3xl">{title}</h1>

      <BreadCrumb title1="Producenter" link1="/producenter" title2={title} />
      <div className="content" dangerouslySetInnerHTML={{ __html: content }} />

      <ul className="text-sm lg:text-base">
        {producerAddress && (
          <li>
            <b>Adress:&nbsp;</b>
            {producerAddress}
          </li>
        )}
        <li>
          <b>Producent:&nbsp;</b>
          {title}
        </li>
        {producenterWebsite && (
          <li>
            <b>Hemsida:&nbsp;</b>
            <Link className="text-[#eb7272]" href="http://www.fitapreta.com/" target="_blank">
              {producenterWebsite}
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
