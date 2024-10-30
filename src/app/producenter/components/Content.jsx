import { getProducentBySlug } from '@/src/lib/api/producenterAPI';
import Link from 'next/link';
import BreadCrumb from '../../Components/breadcrumb/BreadCrumb';

export default async function Content({ params }) {
  const producent = await getProducentBySlug(params.slug);
  const { title, content } = producent;
  return (
    <div className="p-2 md:w-1/2 ">
      <div className=" text-xs lg:text-sm text-red-500 uppercase">Address</div>

      <h1 className="font-bold text-lg lg:text-4xl">{title}</h1>

      <BreadCrumb title1="Producenter" link1="/vin-producenter" title2={title} />
      <p className="text-sm lg:text-base mb-1 lg:mb-2 text-justify">{content}</p>
      <ul className="text-sm lg:text-base">
        <li>
          <b>Adress:&nbsp;</b>
          Italien, Piemonte, Barolo (Remaining)
        </li>
        <li>
          <b>Producent:&nbsp;</b>
          {title}
        </li>
        <li>
          <b>Hemsida:&nbsp;</b>
          <Link className="text-[#eb7272]" href="http://www.fitapreta.com/" target="_blank">
            http://www.fitapreta.com/ (remaining)
          </Link>
        </li>
      </ul>
    </div>
  );
}
