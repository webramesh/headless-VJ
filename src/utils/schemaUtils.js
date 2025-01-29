import { formatEmbeddedContent } from './utils';

export const navSchema = {
  '@context': 'http://schema.org',
  '@type': 'SiteNavigationElement',
  name: 'Navigation Menu',
  hasPart: [
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://www.vinjournalen.se/vin-och-mat/',
      name: 'Vin & Mat',
      url: 'https://www.vinjournalen.se/vin-och-mat/',
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://www.vinjournalen.se/vin-fakta/',
      name: 'Vinfakta',
      url: 'https://www.vinjournalen.se/vin-fakta/',
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://www.vinjournalen.se/vin-tips/',
      name: 'Vintips',
      url: 'https://www.vinjournalen.se/vin-tips/',
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://www.vinjournalen.se/vin-skola/',
      name: 'Vinskola',
      url: 'https://www.vinjournalen.se/vin-skola/',
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://www.vinjournalen.se/vin-tester/',
      name: 'Tester',
      url: 'https://www.vinjournalen.se/vin-tester/',
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://www.vinjournalen.se/ekologiskt/',
      name: 'Ekologiskt',
      url: 'https://www.vinjournalen.se/ekologiskt/',
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://www.vinjournalen.se/online/',
      name: 'Vin på nätet',
      url: 'https://www.vinjournalen.se/online/',
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://www.vinjournalen.se/drycker/rott-vin/',
      name: 'Rött Vin',
      url: 'https://www.vinjournalen.se/drycker/rott-vin/',
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://www.vinjournalen.se/drycker/vitt-vin/',
      name: 'Vitt Vin',
      url: 'https://www.vinjournalen.se/drycker/vitt-vin/',
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://www.vinjournalen.se/drycker/rose-vin/',
      name: 'Rosé Vin',
      url: 'https://www.vinjournalen.se/drycker/rose-vin/',
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://www.vinjournalen.se/drycker/dessert-vin/',
      name: 'Dessert Vin',
      url: 'https://www.vinjournalen.se/drycker/dessert-vin/',
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://www.vinjournalen.se/drycker/mousserande-vin/',
      name: 'Mousserande Vin',
      url: 'https://www.vinjournalen.se/drycker/mousserande-vin/',
    },
    {
      '@type': 'SiteNavigationElement',
      '@id': 'https://www.vinjournalen.se/drycker/ovrigt-vin/',
      name: 'Övrigt Vin',
      url: 'https://www.vinjournalen.se/drycker/ovrigt-vin/',
    },
  ],
};

export function breadcrumbSchemaGenerator(array) {
  const breadcrumbs = {
    '@context': 'http://schema.org/',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Allt om Vin',
        item: 'https://www.vinjournalen.se/',
      },
      ...array.map((item, index) => {
        return {
          '@type': 'ListItem',
          position: index + 2, // Start positions from 2
          name: item.name,
          item: item.url,
        };
      }),
    ],
  };
  return JSON.stringify(breadcrumbs);
}

export function faqSchemaGenerator(array) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: array.map((item) => {
      return {
        '@type': 'Question',
        name: item.faqQuestion,
        acceptedAnswer: {
          '@type': 'Answer',
          text: formatEmbeddedContent(item.faqAnswer, 'all'),
        },
      };
    }),
  };
  return JSON.stringify(schema);
}

export function postSchemaGenerator(post) {
  const postSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.vinjournalen.se/${post.uri}/`,
    },
    headline: `${post.title}`,
    image: post?.featuredImage?.node?.sourceUrl,
    datePublished: post?.date,
    dateModified: post?.modified,
    author: {
      '@type': 'Person',
      name: post?.author?.node?.name || 'Jeanette Gardner',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vinjournalen.se',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.admin.vinjournalen.se/wp-content/uploads/2025/01/vj-og-jpg.jpg',
      },
    },
    description: formatEmbeddedContent(post?.excerpt, 'all'),
    url: `https://www.vinjournalen.se/${post.uri}/`,
  };
  return JSON.stringify(postSchema);
}

export function newsSchemaGenerator(nyhet) {
  const postSchema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.vinjournalen.se/nyheter/${nyhet.slug}/`,
    },
    headline: `${nyhet.title}`,
    image: nyhet?.featuredImage?.node?.sourceUrl,
    datePublished: nyhet?.date,
    dateModified: nyhet?.modified,
    author: {
      '@type': 'Person',
      name: nyhet?.author?.node?.name || 'Jeanette Gardner',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Vinjournalen.se',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.admin.vinjournalen.se/wp-content/uploads/2025/01/vj-og-jpg.jpg',
      },
    },
    description: formatEmbeddedContent(nyhet?.excerpt, 'all'),
    url: `https://www.vinjournalen.se/nyheter/${nyhet.slug}/`,
  };
  return JSON.stringify(postSchema);
}

export function productSchemaGenerator(product) {
  const productSchema = {
    '@context': 'http://schema.org/',
    '@type': 'Product',
    name: product?.title,
    image: product?.featuredImage?.node?.sourceUrl,
    description: product?.fieldsProduct?.productShortText,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'SEK',
      price: product?.fieldsProduct?.pice,
      availability: product?.fieldsProduct?.buyLink ? 'InStock' : 'Not in Stock',
      itemCondition: product?.fieldsProduct?.buyLink ? 'NewCondition' : 'Not Available',
    },
  };
  return JSON.stringify(productSchema);
}
