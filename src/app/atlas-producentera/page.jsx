import React from 'react';
import AtlasContent from './Components/AtlasContent';
import { getAllProducenter, getAllCountries } from '../../lib/api/countryApi';
import { generateSeoMetadata } from '@/src/utils/utils';
import { getPageBySlug } from '@/src/lib/api/pageApi';
import { breadcrumbSchemaGenerator } from '@/src/utils/schemaUtils';

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

  const breadcrumbs = breadcrumbSchemaGenerator([
    { name: 'Atlas Producentera | Vinjournalen.se', url: 'https://www.vinjournalen.se/atlas-producentera/' },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        className="rank-math-schema"
        dangerouslySetInnerHTML={{ __html: breadcrumbs }}
      />
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
