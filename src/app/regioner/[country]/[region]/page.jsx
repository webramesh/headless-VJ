import Map from '@/src/app/Components/Map';
import Image from 'next/image';
import BreadCrumb from '@/src/app/Components/breadcrumb/BreadCrumb';
import { getRegionByURL } from '@/src/lib/api/regionerAPI';

export async function generateMetadata({ params }) {
  const { region } = params;
  const selectedRegion = await getRegionByURL(`/regioner/${region}`);

  const { seo } = selectedRegion;

  // Convert robots array to string format
  const robotsMeta = seo?.robots?.join(', ') || 'index, follow';

  // Convert focus keywords array to comma-separated string
  const keywords = seo?.focusKeywords?.join(', ') || '';

  if (seo) {
    return {
      title: seo?.title,
      description: seo?.description,
      canonicalUrl: seo?.canonicalUrl,
      robots: robotsMeta,
      keywords,
      openGraph: {
        locale: seo?.openGraph?.locale,
        type: seo?.openGraph?.type,
        title: seo?.openGraph?.title,
        description: seo?.openGraph?.description,
        url: seo?.openGraph?.url,
        siteName: seo?.openGraph?.siteName,
        image: {
          height: seo?.openGraph?.image?.height,
          secureUrl: seo?.openGraph?.image?.secureUrl,
          type: seo?.openGraph?.image?.type,
          url: seo?.openGraph?.image?.url,
          width: seo?.openGraph?.image?.width,
        },
        twitterMeta: {
          card: seo?.openGraph?.twitterMeta?.card,
          description: seo?.openGraph?.twitterMeta?.description,
          image: seo?.openGraph?.twitterMeta?.image,
          creator: seo?.openGraph?.twitterMeta?.creator,
          title: seo?.openGraph?.twitterMeta?.title,
          site: seo?.openGraph?.twitterMeta?.site,
        },
      },
    };
  }
}

async function page({ params }) {
  const { country, region } = params;
  const selectedRegion = await getRegionByURL(`/regioner/${region}`);

  const { featuredImage, content } = selectedRegion;
  return (
    <>
      <h1 className="text-2xl lg:text-3xl  font-semibold uppercase">{region}</h1>
      <BreadCrumb title1="Regioner" link1="/regioner" title2={country} link2={`/lander/${country}`} title3={region} />

      <div className="h-80">
        <Map />
      </div>
      {featuredImage?.node?.sourceUrl && (
        <Image
          src={featuredImage?.node?.sourceUrl}
          alt={region}
          className="w-full my-4 lg:my-10 object-contain "
          width={250}
          height={250}
        />
      )}
      <div className="text-sm lg:text-base mb-1 lg:mb-2">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </>
  );
}

export default page;
