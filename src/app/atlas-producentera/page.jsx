import React from 'react';
import AtlasContent from './Components/AtlasContent';
import { getAllProducenter, getAllCountries } from '../../lib/api/countryApi';
import { generateSeoMetadata } from '@/src/utils/utils';
import { getPageBySlug } from '@/src/lib/api/pageApi';

export const revalidate = 60;

export async function generateMetadata() {
  const data = await getPageBySlug('atlas-producentera');

  const seo = data?.seo;

  if (seo) {
    return generateSeoMetadata(seo);
  }
}

// This is an async Server Component
export default async function Page() {
  // Fetched all producenter and countries data
  const countries = await getAllCountries();

  return (
    <>
      <AtlasContent countries={countries} />
    </>
  );
}

export async function generateStaticParams() {
  const producenter = await getAllProducenter();

  return producenter.map((producent) => ({
    id: producent.id,
  }));
}
