'use client';
import { getOrdlistaBySlug } from '@/src/lib/api/ordilistaAPI';

const page = async () => {
  const [ordlista] = await Promise.all([getOrdlistaBySlug('verdejo')]);
  console.log(ordlista, '---------------------');
  return <div>Ordiliasta Details Page</div>;
};

export default page;
