import Map from '@/src/app/Components/Map';
import Image from 'next/image';
import BreadCrumb from '@/src/app/Components/breadcrumb/BreadCrumb';
import { getRegionByURL } from '@/src/lib/api/regionerAPI';

export async function generateMetadata({ params }) {
  const { country, region } = params;

  // Fetch the region data
  const selectedRegion = await getRegionByURL(`/regioner/${region}`);

  if (!selectedRegion) {
    return {
      title: 'Region not found - Vinjournalen.se',
      description: 'The requested region was not found on Vinjournalen.se.',
    };
  }

  const { featuredImage, content } = selectedRegion;

  // Generate a short description (strip HTML tags from content)
  const plainTextContent = content?.replace(/<\/?[^>]+(>|$)/g, '').slice(0, 150);

  return {
    title: `${region} - Vinregion in ${country} - Vinjournalen.se`,
    description: plainTextContent,
    openGraph: {
      title: `${region} - Vinregion in ${country} - Vinjournalen.se`,
      description: plainTextContent,
      url: `https://www.vinjournalen.se/regioner/${country}/${region}`,
      site_name: 'Vinjournalen.se', // Add the site name here
      images: [
        {
          url: featuredImage?.node?.sourceUrl || 'https://www.vinjournalen.se/default-image.jpg',
          width: 1200,
          height: 630,
          alt: `${region}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${region} - Vinregion in ${country} - Vinjournalen.se`,
      description: plainTextContent,
      images: [
        {
          url: featuredImage?.node?.sourceUrl || 'https://www.vinjournalen.se/default-image.jpg',
          alt: `${region}`,
        },
      ],
      site: '@vinjournalense', // Twitter handle for your site
    },
  };
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
