import {
  getAllOrdlistaPages,
  getAllNyheterPages,
  getAllPosts,
  getAllProducenter,
  getAllRegioner,
  getAllVinimporterer,
  getAllProdukter,
  getAllVinguide,
  getAllPages,
  getAllLanders,
} from '@/src/lib/api/sitemapApi';

export default async function sitemap() {
  const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://vinjournalen.se';

  try {
    // Fetch all dynamic data
    const [
      pages,
      ordlistaPages,
      nyheterPages,
      posts,
      producenter,
      regioner,
      vinguide,
      vinimporterer,
      produkter,
      landers,
    ] = await Promise.all([
      getAllPages(),
      getAllOrdlistaPages(),
      getAllNyheterPages(),
      getAllPosts(),
      getAllProducenter(),
      getAllRegioner(),
      // getAllVinguide(),
      getAllVinguide(),
      getAllVinimporterer(),
      getAllProdukter(),
      getAllLanders(),
    ]);

    // Static routes
    const staticRoutes = [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 1,
      },
      {
        url: `${baseUrl}/ordlista`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/lander`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/produkter`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/producenter`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/vinimportor`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/nyheter`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      {
        url: `${baseUrl}/not-found`,
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 0.1,
      },
    ];

    const excludedPages = [
      'redaktionen',
      'wine-awards-2',
      'wine-awards',
      'vill-du-bli-en-del-av-vinjournalen-se',
      'newsletter-signup-ok',
      'wine-producer-survey-about-systembolaget',
      'nyhetsbrev',
      'vill-du-ha-hjalp-att-kombinera-vin-och-mat-till-din-finmiddag',
      'vin-atlas',
      'home-page',
    ];

    // Dynamic routes
    const dynamicRoutes = [
      ...pages
        .filter((page) => !excludedPages.includes(page.slug))
        .map((page) => {
          return {
            url: `${baseUrl}/${page.slug}`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.7,
          };
        }),
      ...ordlistaPages.map((page) => {
        const ordlistaCategory = page.ordlistaCategories?.nodes?.[0]?.slug || 'uncategorized';
        return {
          url: `${baseUrl}/ordlista/${ordlistaCategory}/${page.slug}`,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.7,
        };
      }),
      ...nyheterPages.map((page) => ({
        url: `${baseUrl}/nyheter/${page.slug}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
      })),
      ...posts.map((post) => {
        // Get the post's category and use it in the URL
        const postCategory = post.categories?.nodes?.[0]?.slug || 'uncategorized';
        return {
          url: `${baseUrl}/${postCategory}/${post.slug}`,
          lastModified: new Date(),
          changeFrequency: 'daily',
          priority: 0.6,
        };
      }),
      ...producenter.map((producer) => ({
        url: `${baseUrl}/producenter/${producer.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      })),
      ...regioner.map((region) => {
        const country = region.lander?.nodes?.[0]?.slug || 'uncategorized';
        return {
          url: `${baseUrl}/regioner/${country}/${region.slug}`,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.7,
        };
      }),
      ...vinguide.map((guide) => {
        // Remove leading slash if present and prepend baseUrl
        const cleanUri = guide.uri.startsWith('/') ? guide.uri.slice(1) : guide.uri;
        return {
          url: `${baseUrl}/${cleanUri}`,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.7,
        };
      }),

      ...produkter.map((product) => ({
        url: `${baseUrl}/produkter/${product.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.6,
      })),
      ...vinimporterer.map((importer) => {
        const cleanUri = importer.uri.startsWith('/') ? importer.uri.slice(1) : importer.uri;
        return {
          url: `${baseUrl}/${cleanUri}`,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.7,
        };
      }),

      ...landers.map((lander) => {
        return {
          url: `${baseUrl}/lander/${lander.slug}`,
          lastModified: new Date(),
          changeFrequency: 'weekly',
          priority: 0.7,
        };
      }),
    ];

    return [...staticRoutes, ...dynamicRoutes];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return [];
  }
}
