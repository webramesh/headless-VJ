import React from 'react';
import AtlasContent from './Components/AtlasContent';
import { getAllProducenter, getAllCountries } from '../../lib/api/countryApi';

export const revalidate = 60;

// This is an async Server Component
export default async function Page() {
  // Fetched all producenter and countries data
  const [producenter, countries] = await Promise.all([getAllProducenter(), getAllCountries()]);

  return (
    <>
      <AtlasContent producenter={producenter} countries={countries} />
    </>
  );
}

export async function generateStaticParams() {
  const producenter = await getAllProducenter();

  return producenter.map((producent) => ({
    id: producent.id,
  }));
}
