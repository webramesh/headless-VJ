// import Map from '@/src/app/Components/Map';
import { countLanderProducenters } from '@/src/lib/api/producenterAPI';
import Container from './Components/Container';
import { breadcrumbSchemaGenerator } from '@/src/utils/schemaUtils';

export async function generateMetadata({ params }) {
  const { lander } = await countLanderProducenters(params.slug);
  const title = `${lander.name} vinregion - Vinjournalen.se`;
  const description = `Utforska ${lander.name}, hem till fantastiska vingårdar och viner. Upptäck dess unika vinkultur, natursköna landskap och världsklassiga viner som gör det till ett måste för vinälskare.`;
  const url = `https://www.vinjournalen.se/produktion-land/${params.slug}/`;

  return {
    metadataBase: new URL('https://www.vinjournalen.se/'),
    title: title,
    description: description,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    icons: {
      icon: '/favicon.png',
    },
    keywords: lander.name,
    openGraph: {
      title: title,
      description: description,
      url: url,
      siteName: 'Vinjournalen.se',
      images: [
        {
          height: 630,
          type: 'image/jpeg',
          url: '/vj-og.jpg',
          width: 1200,
        },
      ],
      locale: 'sv_SE',
      type: 'article',
    },
    twitter: {
      twitterMeta: {
        card: 'summary_large_image',
        description: null,
        image: '/vj-og.jpg',
        creator: '@vinjournalense',
        title: title,
        site: '@vinjournalense',
      },
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function page({ params }) {
  const { lander, totalProducenters } = await countLanderProducenters(params.slug);

  const breadcrumbs = breadcrumbSchemaGenerator([
    {
      name: `Produktion Land Arkiv`,
      url: `https://www.vinjournalen.se/`,
    },
    {
      name: `${lander.name} vinregion - Vinjournalen.se`,
      url: `https://www.vinjournalen.se/produktion-land/${params.slug}`,
    },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        className="rank-math-schema"
        dangerouslySetInnerHTML={{ __html: breadcrumbs }}
      />
      <h1 className="text-2xl lg:text-3xl mb-4 font-semibold uppercase">vinproducenter från {lander?.name}</h1>
      <p className="text-sm lg:text-base mb-1 lg:mb-2">{lander?.description}</p>

      {/* <div className="h-96 my-10">
        <Map />
      </div> */}
      <Container totalProducenters={totalProducenters} slug={params.slug} />
    </>
  );
}
