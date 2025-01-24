// import Map from '@/src/app/Components/Map';
import { countLanderProducenters } from '@/src/lib/api/producenterAPI';
import Container from './Components/Container';

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

  const jsonLd = `<script type="application/ld+json" class="rank-math-schema">{"@context":"https://schema.org","@graph":[{"@type":"NewsMediaOrganization","@id":"https://www.vinjournalen.se/#organization","name":"Vinjournalen","url":"https://www.vinjournalen.se","sameAs":["https://www.facebook.com/vinjournalen/","https://x.com/vinjournalense"],"logo":{"@type":"ImageObject","@id":"https://www.vinjournalen.se/#logo","url":"https://www.vinjournalen.se/wp-content/uploads/2024/05/vinjournalen-logo-1.webp","contentUrl":"https://www.vinjournalen.se/wp-content/uploads/2024/05/vinjournalen-logo-1.webp","caption":"Vinjournalen","inLanguage":"sv-SE"}},{"@type":"WebSite","@id":"https://www.vinjournalen.se/#website","url":"https://www.vinjournalen.se","name":"Vinjournalen.se","publisher":{"@id":"https://www.vinjournalen.se/#organization"},"inLanguage":"sv-SE"},{"@type":"BreadcrumbList","@id":"https://www.vinjournalen.se/produktion-land/${params.slug}/#breadcrumb","itemListElement":[{"@type":"ListItem","position":"1","item":{"@id":"https://www.vinjournalen.se","name":"Hem"}},{"@type":"ListItem","position":"2","item":{"@id":"https://www.vinjournalen.se/produktion-land/${params.slug}/","name":${lander.name}}}]},{"@type":"CollectionPage","@id":"https://www.vinjournalen.se/produktion-land/${params.slug}/#webpage","url":"https://www.vinjournalen.se/produktion-land/${params.slug}/","name":"${lander.name} vinregion - Vinjournalen.se","isPartOf":{"@id":"https://www.vinjournalen.se/#website"},"inLanguage":"sv-SE","breadcrumb":{"@id":"https://www.vinjournalen.se/produktion-land/${params.slug}/#breadcrumb"}}]}</script>`;
  return (
    <>
      <section dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <h1 className="text-2xl lg:text-3xl mb-4 font-semibold uppercase ">vinproducenter från {lander?.name}</h1>
      <p className="text-sm lg:text-base mb-1 lg:mb-2">{lander?.description}</p>

      {/* <div className="h-96 my-10">
        <Map />
      </div> */}
      <Container totalProducenters={totalProducenters} slug={params.slug} />
    </>
  );
}
